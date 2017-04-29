var COLORS = {
	cleanroom: {value: "rgb(0,255,0)", offset: 0 },
	jslint: {value: "yellow", offset: 1 },
	syntax: {value: "red", offset: 0 }
};

// Stores warnings, rendered by the Bespin editor.
var CLEANROOM = {
	
	cursorMoved: false,
	waitingToPreview: false,
	lastSave: -1,
	showedSuccessDialog: false,
	canvas: null,	
	username: "",
	showHighlights: true,
	
	focusLog: [],
	previewFlag: false,
	
	activeFile: null,

	loadingFiles: {},

	// This gets filled by JSLINT
    JSLINTimpliedGlobals: [],
    
    identifierPairs: null,

	// Expects an identifier (see createToken()) and a dictionary (see dictionaries.js for structure expected).
	compareIdentifierToDictionary: function(identifier, dictionary, threshold) {

		var keyword;
		var recommendations = new Array();
	
		for(keyword in dictionary) {
			if(keyword != identifier.text && dictionary.hasOwnProperty(keyword)) {
				var distance = levenshtein(identifier.text, keyword);
				if(distance <= threshold)
					recommendations.push(keyword);
			}
				
		}
		
		return recommendations;
	
	},
		
	computeWarningsBasedPurelyOnJSIdentifiers: function(kind, names, dictionaries) {
	
		var name;
		var identifiers;
		var identifier = null;
		var index;
		var inDictionary;
		var dictionaryIndex;
		var recs = {};
		var singleton;
		var valid = [];
		
		// For each name...
		for(name in names) {
			if(names.hasOwnProperty(name)) {
						
				// Find matching identifiers and see how many there are.
				identifiers = names[name];				
				singleton = identifiers.length == 1;

				// Is this name in one of the dictionaries?					
				inDictionary = false;
				for(dictionaryIndex = 0; dictionaryIndex < dictionaries.length; dictionaryIndex++) {
					if(name in dictionaries[dictionaryIndex])
						inDictionary = true;
				}

				// If we didn't find it in a dictionary, add a warning for it.
				if(!inDictionary) {

					// Go through each identifier with this name and add recommendations.
					for(index = 0; index < identifiers.length; index++) {
			
						var identifier = identifiers[index];	
		
						// If there's only one of these, add a warning
						if(singleton) {
	
							// Find recommendations
							recommendations = CLEANROOM.compareIdentifierToDictionary(identifier, names, 1);
							if(recommendations.length == 0) {
								for(dictionaryIndex = 0; dictionaryIndex < dictionaries.length; dictionaryIndex++) {
									recommendations = recommendations.concat(CLEANROOM.compareIdentifierToDictionary(identifier, dictionaries[dictionaryIndex], 1));
								}
							}
							if(!identifier.kind.hasOwnProperty('getWarning')) {
								identifier.kind.getWarning = CLEANROOM.types[identifier.kind.id].getWarning;
							}
							CLEANROOM.addHighlight(
								kind,
								identifier,
								identifier.source,
								identifier.kind.getWarning(identifier, recommendations),
								identifier.row, 
								identifier.column, 
								identifier.text.length
							);
						}
						else {
							valid.push(identifier);
						}
					
					}
					
				}
				
			}
		
		}
		
		return valid;

	},

	types: {
		JSLintWarning: {
			id:"JSLintWarning",
			color:COLORS.jslint
		},
		JSLintImpliedGlobal: {
			id:"JSLintImpliedGlobal",
			color:COLORS.jslint
		},
		HTMLTag: {
			id: "HTMLTag",
			color: COLORS.syntax,
			description: "tag",
			getWarning: function(id, recommendations) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " only appears once in your program" + (recommendations.length == 0 ? ". This " + CLEANROOM.types.getFormattedName(id) + " probably doesn't exist." : "; perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(recommendations, true) + "?");

			},
			// Checks identifiers against the valid HTML tags.
			validateIdentifiers: function(names, allIdentifiers) {
			
				var index;
				var identifier;
				var recommendations;
				var dictionary = DICTIONARIES.htmlTags;
				var message;				
				var name;
				var identifiers;
				
				for(name in names) {
					if(names.hasOwnProperty(name)) {					
						identifiers = names[name];
						for(index = 0; index < identifiers.length; index++) {
						
							identifier = identifiers[index];
							
							if(!(identifier.text in dictionary)) {
								
								recommendations = CLEANROOM.compareIdentifierToDictionary(identifier, dictionary, 1);
								if(!identifier.kind.hasOwnProperty('getWarning')) {
									identifier.kind.getWarning = CLEANROOM.types[identifier.kind.id].getWarning;
								}
								CLEANROOM.addHighlight(
									CLEANROOM.types.HTMLTag,
									identifier,
									identifier.source,
									identifier.kind.getWarning(identifier, recommendations),
									identifier.row, 
									identifier.column, 
									identifier.text.length
								);
								
							}
						}
				
					}
				}
				
			}
		},
		HTMLAttributeName: {
			id: "HTMLAttributeName",
			color: COLORS.syntax,
			description: "attribute name",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " only appears once in your program" + (identifiers.length == 0 ? ". Are you sure this is a valid " + CLEANROOM.types.getFormattedName(id) + "?" : "; perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");
				
			},
			// Checks identifiers against the valid attribute names.
			validateIdentifiers: function(names, allIdentifiers) {
			
				var index;
				var identifier;
				var recommendations;
				var dictionary = DICTIONARIES.htmlAttributeNames;
				var message;		
				var tag;		
				var name;

				for(name in names) {

					if(names.hasOwnProperty(name)) {					

						identifiers = names[name];
				
						for(index = 0; index < identifiers.length; index++) {
						
							identifier = identifiers[index];
							
							// Special case class because it's a JS keyword
							if(identifier.text == 'class') {
							
							}
							else if(!(identifier.text in dictionary)) {
								
								recommendations = CLEANROOM.compareIdentifierToDictionary(identifier, dictionary, 1);
								CLEANROOM.addHighlight(
									CLEANROOM.types.HTMLAttributeName,
									identifier,
									identifier.source,
									"<span class='name'>" + identifier.text +"</span> isn't a valid HTML attribute; perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(recommendations, true) + "?",
									identifier.row, 
									identifier.column, 
									identifier.text.length
								);
								
							}
							else if(identifier.context) {
							
								tag = identifier.context.text;
								if(!dictionary[identifier.text].all && !(tag in dictionary[identifier.text])) {
									CLEANROOM.addHighlight(
										CLEANROOM.types.HTMLAttributeName,
										identifier,
										identifier.source,
										"<span class='name'>" + identifier.text +"</span> doesn't mean anything for <span class='name'>" + tag + "</span> tags.",
										identifier.row, 
										identifier.column, 
										identifier.text.length
									);						
								}
							
							}
						}
						
					}
				
				}

			}
		},
		HTMLClassAttributeValue: {
			id: "HTMLClassAttributeValue",
			color: COLORS.cleanroom,
			description: "class name",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " looks like an identifier name, but it only appears once in your program. " + (identifiers.length == 0 ? "If it is an identifier, did you mean to reference it elsewhere?" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");
				
			},
			// Checks identifiers valid attribute values
			validateIdentifiers: function(names, allIdentifiers) {
			
				var index;
				var id;
				var name;
				var identifiers;
				var identifier;
				var CSSClassRuleIdentifiers;

				// For each tag class...
				for(name in names) {
					if(names.hasOwnProperty(name)) {

						CSSClassRuleIdentifiers = null;
						
						// Get all the identifiers with this name.
						identifiers = names[name];

						// Is there only one?
						if(identifiers.length == 1) {
							identifier = identifiers[0];
							
							// If so, does it appear in any CSS Class rules?
							if(CLEANROOM.types.CSSClassRule.id in allIdentifiers)				
								CSSClassRuleIdentifiers = allIdentifiers[CLEANROOM.types.CSSClassRule.id].names;
								
							if(CSSClassRuleIdentifiers != null && CSSClassRuleIdentifiers.hasOwnProperty(name)) {}
							else {
								CLEANROOM.addHighlight(
									CLEANROOM.types.HTMLClassAttributeValue,
									identifier,
									identifier.source,
									"The class <span class='name'>" + identifier.text + "</span> only appears once; are you sure it's right?",
									identifier.row, 
									identifier.column, 
									identifier.text.length
								);						
							}

						}	
					}
				}

			}
			
		},		
		HTMLIDAttributeValue: {
			id: "HTMLIDAttributeValue",
			color: COLORS.cleanroom,
			description: "tag id",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " looks like an identifier name, but it only appears once in your program. " + (identifiers.length == 0 ? "If it is an identifier, did you mean to reference it elsewhere?" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");
				
			},
			// Checks identifiers valid attribute values
			validateIdentifiers: function(names, allIdentifiers) {
			
				var id;
				var index;
				var array;

				// Which ones appear more than twice?
				for(name in names) {
					if (names.hasOwnProperty(name)) {
						// If this id appears more than once, highlight it.
						if(names[name].length > 1) {
							for(index = 0; index < names[name].length; index++) {
								identifier = names[name][index];
								CLEANROOM.addHighlight(
									CLEANROOM.types.HTMLIDAttributeValue,
									identifier,
									identifier.source,
									"The id <span class='name'>" + identifier.text + "</span> should only appear once, but it appears " + names[name].length + " times.",
									identifier.row, 
									identifier.column, 
									identifier.text.length
								);						
							}

						}	
					}
				}
				
			}
			
		},		
		HTMLAttributeValue: {
			id: "HTMLAttributeValue",
			color: COLORS.cleanroom,
			description: "attribute value",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " looks like an identifier name, but it only appears once in your program. " + (identifiers.length == 0 ? "If it is an identifier, did you mean to reference it elsewhere?" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");
				
			},
			// Checks identifiers valid attribute values
			validateIdentifiers: function(identifiers, allIdentifiers) {

			}
		},
		CSSGenericIdentifier: {
			id: "CSSGenericIdentifier",
			color: COLORS.cleanroom,
			description: "generic CSS identifier",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " only appears once.";

			},
			// Checks identifiers valid CSS identifiers
			validateIdentifiers: function(identifiers, allIdentifiers) {
			
			}
		},
		CSSIdentifierRule: {
			id: "CSSIdentifierRule",
			color: COLORS.cleanroom,
			description: "CSS identifier rule",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " only appears once.";

			},
			// Checks identifiers valid CSS identifiers
			validateIdentifiers: function(names, allIdentifiers) {
			
				var HTMLIdentifiers = {};
				var HTMLIdentifiersArray;
				var index;
				var identifier;
				var identifiers;
				var recommendations;

				// If there aren't any HTML attribute values, then we're done.
				if(!(CLEANROOM.types.HTMLIDAttributeValue.id in allIdentifiers)) return true;

				HTMLIdentifiers = allIdentifiers[CLEANROOM.types.HTMLIDAttributeValue.id].names;

				// Go through each CSS id reference
				for(name in names) {

					if(names.hasOwnProperty(name)) {					

						identifiers = names[name];

						for(index = 0; index < identifiers.length; index++) {
						
							identifier = identifiers[index];
							if(!(identifier.text in HTMLIdentifiers)) {
								recommendations = CLEANROOM.compareIdentifierToDictionary(identifier, HTMLIdentifiers, 1);
								CLEANROOM.addHighlight(
									CLEANROOM.types.CSSIdentifierRule,
									identifier,
									identifier.source,
									"<span class='name'>" + identifier.text +"</span> doesn't appear in any HTML id attributes" + (recommendations.length == 0 ? "." : "; perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(recommendations, true) + "?"),
									identifier.row, 
									identifier.column, 
									identifier.text.length
								);
							}
						
						}

					}
				}			
			
			}
		},
		CSSClassRule: {
			id: "CSSClassRule",
			color: COLORS.cleanroom,
			description: "CSS class name",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " doesn't appear anywhere else in your code. " + (identifiers.length == 0 ? "Maybe you haven't referenced it yet?" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");
				
			},
			// Checks identifiers against all class names defined in HTML
			validateIdentifiers: function(names, allIdentifiers) {

				var potentialClassNames = {};
				var attributeValue, attributeName;
				var index;
				var identifier;
				var identifiers;
				var name;

				if(CLEANROOM.types.HTMLClassAttributeValue.id in allIdentifiers)				
					potentialClassNames = allIdentifiers[CLEANROOM.types.HTMLClassAttributeValue.id].names;
					
				for(name in names) {

					if(names.hasOwnProperty(name)) {					

						identifiers = names[name];
			
						for(index = 0; index < identifiers.length; index++) {
					
							identifier = identifiers[index];
							if(!(identifier.text in potentialClassNames)) {
		
								recommendations = CLEANROOM.compareIdentifierToDictionary(identifier, potentialClassNames, 1);
								if(!identifier.kind.hasOwnProperty('getWarning')) {
									identifier.kind.getWarning = CLEANROOM.types[identifier.kind.id].getWarning;
								}
								
								CLEANROOM.addHighlight(
									CLEANROOM.types.CSSClassRule,
									identifier,
									identifier.source,
									identifier.kind.getWarning(identifier, recommendations),
									identifier.row, 
									identifier.column, 
									identifier.text.length
								);						
								
							}
						
						}
						
					}
				}

			}
		},
		CSSPropertyName: {
			id: "CSSPropertyName",
			color: COLORS.syntax,
			description: "property",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " isn't a valid CSS property name. " + (identifiers.length == 0 ? "" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");

			},
			// Checks identifiers against valid css property names
			validateIdentifiers: function(names, allIdentifiers) {
			
				var index;
				var identifier;
				var identifiers;
				
				for(name in names) {
					if(names.hasOwnProperty(name)) {
						identifiers = names[name];
						for(index = 0; index < identifiers.length; index++) {
							
							identifier = identifiers[index];

							if(!DICTIONARIES.cssPropertyNames[identifier.text]) {
							
								recommendations = CLEANROOM.compareIdentifierToDictionary(identifier, DICTIONARIES.cssPropertyNames, 1);
								if(!identifier.kind.hasOwnProperty('getWarning')) {
									identifier.kind.getWarning = CLEANROOM.types[identifier.kind.id].getWarning;
								}
								CLEANROOM.addHighlight(
									CLEANROOM.types.CSSPropertyName,
									identifier,
									identifier.source,
									identifier.kind.getWarning(identifier, recommendations),
									identifier.row, 
									identifier.column, 
									identifier.text.length
								);						
							
							}
						}
						
					}
				}
			
			}
		},
		CSSPropertyValue: {
			id: "CSSPropertyValue",
			color: COLORS.syntax,
			description: "property value",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " doesn't appear to be a valid property value. " + (identifiers.length == 0 ? "" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");

			},
			// Checks identifiers against valid css property values
			validateIdentifiers: function(names, allIdentifiers) {
			
				var index, formatIndex, valueIndex;
				var identifiers;
				var identifier;
				var propertyName;
				var propertyNameMetaData;
				var propertyNameIdentifier;
				var values;
				var formats;
				var valid;
				var valuesHash;
				var recommendations = [];
				var format;
				
				for(name in names) {
					if(names.hasOwnProperty(name)) {
					
						identifiers = names[name];
									
						for(index = 0; index < identifiers.length; index++) {
						
							identifier = identifiers[index];
					
							propertyNameIdentifier = identifier.context;		
							if(propertyNameIdentifier) {
							
								propertyName = propertyNameIdentifier.text;
								propertyNameMetaData = DICTIONARIES.cssPropertyNames[propertyName];
								if(propertyNameMetaData) {
								
									values = propertyNameMetaData.values;
									formats = propertyNameMetaData.formats;
									
									if(propertyNameMetaData.valuesHash)
										valuesHash = propertyNameMetaData.valuesHash;
									else {
									
										valuesHash = {};
										for(valueIndex = 0; valueIndex < values.length; valueIndex++) {
											valuesHash[values[valueIndex]] = true;								
										}
										propertyNameMetaData.valuesHash = valuesHash;
										
									}
									
									valid = false;
									
									if(identifier.text in valuesHash)
										valid = true;
									
									if(!valid) {
									
										for(formatIndex = 0; formatIndex < propertyNameMetaData.formats.length; formatIndex++) {
										
											format = propertyNameMetaData.formats[formatIndex];
											if(format == '<color>') {
												if(identifier.text in DICTIONARIES.cssColors)
													valid = true;
												else if(identifier.text.indexOf("rgb") >= 0)
													valid = true;
												else
													recommendations = CLEANROOM.compareIdentifierToDictionary(identifier, DICTIONARIES.cssColors, 1);
		
											}
											else if(format == '<uri>') { valid = true; }
											else if(format == '<percentage>') { valid = true; }
											else if(format == '<length>') { valid = true; }
											else if(format == '<border-style>') { valid = true; }
											else if(format == '<border-width-value>') { valid = true; }
											else if(format == '<shape>') { valid = true; }
											else if(format == '<string>') { valid = true; }
											else if(format == '<family-name>') { valid = true; }
											else if(format == '<generic-family>') { valid = true; }
											else if(format == '<absolute-size>') { valid = true; }
											else if(format == '<relative-size>') { valid = true; }
											else if(format == '<margin-width>') { valid = true; }
											else if(format == '<padding-width>') { valid = true; }
											else if(format == '<number>') { valid = true; }
											else if(format == '<integer>') { valid = true; }									
										
											if(valid)
												break;
										
										}
									
									}
									
									
									// Look for these in the value lists and special case their parsing
									// <angle>
									// <color>
									// <uri>
									// <percentage>
									// <length>
									// <composite>
									// <border-style>
									// <border-width-value>
									// <shape>
									// <string>
									// <attr>(<identifier>);
									// <family-name>
									// <generic-family>*
									// <family-name>
									// <absolute-size>
									// <relative-size>
									// <margin-width>
									// <padding-width>
									// <number>
									// <integer>
		
									if(!valid) {
										CLEANROOM.addHighlight(
											CLEANROOM.types.CSSPropertyValue,
											identifier,
											identifier.source,
											"The " + CLEANROOM.types.getFormattedName(identifier) + " doesn't appear to be a valid property value for " + CLEANROOM.types.getFormattedName(propertyNameIdentifier) + ". " + (identifiers.length == 0 ? "" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(values, true) + "?"),
											identifier.row, 
											identifier.column, 
											identifier.text.length
										);
									}
		
								}
								else {
				
								}
								
							}
							else {
							}
							
						}

					}

				}

			}
		},
		CSSTagRule: {
			id: "CSSTagRule",
			color: COLORS.syntax,
			description: "tag",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " doesn't appear to be a valid HTML tag name. " + (identifiers.length == 0 ? "" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");

			},
			// Checks identifiers against HTML tags
			validateIdentifiers: function(names, allIdentifiers) {
			
				var index;
				var identifier;
				var recommendations;
				var dictionary = DICTIONARIES.htmlTags;
				var message;				
				var name;
				var identifiers;
				
				for(name in names) {
					if(names.hasOwnProperty(name)) {					
						identifiers = names[name];
						for(index = 0; index < identifiers.length; index++) {
						
							identifier = identifiers[index];
							
							if(!(identifier.text in dictionary)) {
								
								recommendations = CLEANROOM.compareIdentifierToDictionary(identifier, dictionary, 1);
								if(!identifier.kind.hasOwnProperty('getWarning')) {
									identifier.kind.getWarning = CLEANROOM.types[identifier.kind.id].getWarning;
								}
								CLEANROOM.addHighlight(
									CLEANROOM.types.CSSTagRule,
									identifier,
									identifier.source,
									identifier.kind.getWarning(identifier, recommendations),
									identifier.row, 
									identifier.column, 
									identifier.text.length
								);
								
							}
						}
				
					}
				}

			}
		},
		JSFunctionName: {
			id: "JSFunctionName",
			color: COLORS.cleanroom,
			description: "function name",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " only appears once and doesn't appear to be a web standard function. " + (identifiers.length == 0 ? "Are you sure it's right?" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");

			},
			// Checks identifiers against other function names
			validateIdentifiers: function(names, allIdentifiers) {
			
				var validIdentifiers = CLEANROOM.computeWarningsBasedPurelyOnJSIdentifiers(CLEANROOM.types.JSFunctionName, names, [DICTIONARIES.javascriptFunctions]);
				
				// Now check pairings. Does this identifier and it's context appear more than once?
				var index;
				var identifier;
				for(index = 0; index < validIdentifiers.length; index++) {
					identifier = validIdentifiers[index]; 
					
					if(identifier.isDeclaration == false) {
						var contextText = identifier.context == null ? "null" : identifier.context.text;
						var pairString = contextText + "_" + identifier.text;
						if(CLEANROOM.identifierPairs.hasOwnProperty(pairString)) {
							if(CLEANROOM.identifierPairs[pairString].identifiers.length == 1) {
							
								var valid = false;
								if(identifier.text in DICTIONARIES.javascriptFunctions) {
								
									var prefixes = DICTIONARIES.javascriptFunctions[identifier.text];
									for(var prefixIndex = 0; prefixIndex < prefixes.length; prefixIndex++) {
										if(prefixes[prefixIndex] == contextText)
											valid = true;
									}
								
								}
							
								if(!valid) {
									CLEANROOM.addHighlight(
										CLEANROOM.types.JSFunctionName,
										identifier,
										identifier.source,
										"<span class='name'>" + identifier.text + "</span> only appears " + (contextText == "null" ? "globally" : " after <span class='name'>" + contextText + "</span>") + " once. Are you sure it has this function?",
										identifier.row, 
										identifier.column, 
										identifier.text.length
									);
								}
							}
						}
					}			
				}

						
			}
		},
		JSPropertyName: {
			id: "JSPropertyName",
			color: COLORS.cleanroom,
			description: "property name",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " only appears once and doesn't appear to be a web standard property. " + (identifiers.length == 0 ? "Perhaps its not used, or is misspelled?" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");

			},
			// Checks identifiers against other property names
			validateIdentifiers: function(names, allIdentifiers) {
			
				var functionNames = null;
				var dictionaries = [DICTIONARIES.javascriptFunctions, DICTIONARIES.javascriptProperties];

				// If there are function names to be considered, add them to the dictionary list
				if(CLEANROOM.types.JSFunctionName.id in allIdentifiers)
					dictionaries.push(allIdentifiers[CLEANROOM.types.JSFunctionName.id].names);
						
				var validIdentifiers = CLEANROOM.computeWarningsBasedPurelyOnJSIdentifiers(CLEANROOM.types.JSPropertyName, names, dictionaries);
			
				// Now check pairings. Does this identifier and it's context appear more than once?
				var index;
				var identifier;
				for(index = 0; index < validIdentifiers.length; index++) {
					identifier = validIdentifiers[index];
					if(identifier.isDeclaration == false) {
						var contextText = identifier.context == null ? "null" : identifier.context.text;
						var pairString = contextText + "_" + identifier.text;
						if(pairString in CLEANROOM.identifierPairs) {
							if(CLEANROOM.identifierPairs[pairString].identifiers.length == 1) {
								CLEANROOM.addHighlight(
									CLEANROOM.types.JSPropertyName,
									identifier,
									identifier.source,
									"<span class='name'>" + identifier.text + "</span> only appears " + (contextText == null ? "globally" : "after <span class='name'>" + contextText + "</span>") + " once; are you sure it has this property?",
									identifier.row, 
									identifier.column, 
									identifier.text.length
								);
							}
						}
					}			
				}
			
			}
		},
		JSVariableName: {
			id: "JSVariableName",
			color: COLORS.cleanroom,
			description: "variable name",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " doesn't appear anywhere else in your code. " + (identifiers.length == 0 ? "Perhaps it is not used or is misspelled?" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");

			},
			// Checks identifiers against other variable names, perhaps local scope at some point
			validateIdentifiers: function(names, allIdentifiers) {
			
				CLEANROOM.computeWarningsBasedPurelyOnJSIdentifiers(CLEANROOM.types.JSVariableName, names, [DICTIONARIES.javascriptGlobals]);
			
			}
		},
		JSLiteral: {
			id: "JSLiteral",
			color: COLORS.cleanroom,
			description: "string",
			getWarning: function(id, identifiers) {

				return "The " + CLEANROOM.types.getFormattedName(id) + " appears to be an identifier, but it doesn't appear anywhere else in your code. " + (identifiers.length == 0 ? "Are you sure it's right?" : " Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(identifiers, true) + "?");
				
			},
			// Checks identifiers against other identifiers in the rest of the file
			validateIdentifiers: function(names, allNames) {
			
				var name;
				var identifiers;
				var index;
				var id;
				var valid;
				var isIdentifier;
				var dictionary;
			
				var identifierRE = /[a-zA-Z][a-zA-Z0-9\-_:\.]*/g;
			
				for(name in names) {
					if(names.hasOwnProperty(name)) {
					
						identifiers = names[name];
						for(index = 0; index < identifiers.length; index++) {
						
							id = identifiers[index];
							
							// Does this look like an identifier?
							isIdentifier = identifierRE.test(id.text);
							if(isIdentifier) {
							
								// If so, assume its invalid until proven otherwise.
								valid = false;
								
								// Is it in any of the standard dictionaries?
								for(dictionary in DICTIONARIES) {
									if(DICTIONARIES.hasOwnProperty(dictionary)) {
										if(DICTIONARIES[dictionary][id.text])
											valid = true;
									}
								}
								
								// Is it anywhere else in this program?
								var anyCount = 0;
								for(var anyName in allNames) {
									if(allNames.hasOwnProperty(anyName)) {
										if(allNames[anyName].names[id.text])
											anyCount += allNames[anyName].names[id.text].length;
									}
								}
								if(anyCount > 1)
									valid = true;
							}
						}
						
						// If after all these checks, its still invalid, add a warning.
						if(isIdentifier && !valid) {
						
							var recommendations = [];
							for(dictionary in DICTIONARIES) {
								if(DICTIONARIES.hasOwnProperty(dictionary)) {
									recommendations = recommendations.concat(CLEANROOM.compareIdentifierToDictionary(id, DICTIONARIES[dictionary], 1));
								}
							}
							for(var anyName in allNames) {
								if(allNames.hasOwnProperty(anyName)) {
									recommendations = recommendations.concat(CLEANROOM.compareIdentifierToDictionary(id, allNames[anyName].names, 1));
								}
							}
						
							CLEANROOM.addHighlight(
								CLEANROOM.types.JSLiteral,
								id,
								id.source,
								"<span class='name'>" + id.text + "</span> looks like an identifier, but it isn't a known HTML, CSS, or JavsScript identifier and doesn't appear anywhere else in your program. Perhaps you meant " + CLEANROOM.types.getFormattedRecommendations(recommendations, true) + "?",
								id.row, 
								id.column, 
								id.text.length
							);
						}				
					}
				}
			}
		},
		
		getFormattedName: function(id) {
			
			return "" + id.kind.description + " <span class='name'>" + id.text + "</span>";

		},
		
		getFormattedRecommendations: function(recommendations, isChoice) {
		
			var i;
			var recommendationsText = ""; 
			
			if(recommendations.length == 0) { return ""; }
			else if(recommendations.length == 1) {
				return "<span class='name'>" + recommendations[0] + "</span>";
			}
			else {
				recommendationsText = isChoice ? "one of " : "";
				for(i = 0; i < recommendations.length; i++) {
					if(i == recommendations.length - 1) recommendationsText = recommendationsText + " or ";
					else if(i > 0) recommendationsText = recommendationsText + ", ";
					recommendationsText = recommendationsText + "<span class='name'>" + recommendations[i] + "</span>";
				}
				return recommendationsText;
				
			}
		
		}
		
	},

	// The files object
	files: {},	// a hash of { name: , dirty }
	
	/**
	 * files.dirty is true if the identifiers for these files haven't been computed since the last load or edit
	 */
	updateDirtyIdentifiers: function() {

		for(var filename in CLEANROOM.files) {
			if(CLEANROOM.files.hasOwnProperty(filename)) {
				var file = CLEANROOM.files[filename];
				if(file.dirty) {
					// Make sure that if a file is being edited then use that content not what is stored in CLEANROOM.files
					var code = CLEANROOM.activeFile == filename ? bespin.value : CLEANROOM.files[filename].content;
					// Update identifiers
					if(file.type == "CSS") file.identifiers = this.extractCSSIdentifiers(filename, code);
					else if(file.type == "JS") file.identifiers = this.extractJSIdentifiers(filename, code, "JS");
					else if(file.type == "HTML" || file.type == "SHTML" || file.type == "PHP") file.identifiers = this.extractHTMLIdentifiers(filename, code);
					else file.identifiers = [];
					// @TODO: Find out what file.dirty means
					file.dirty = false;
				}
			}
		}
	
	},
	
	// This gets called by the Bespin editor. It sends the undo history info
	// so that we can log it and have an edit history.
	updateCleanroomHighlights: function(textOperation, operationData) {
		
		// REMOVED:
		// This button was removed in the HTML because it is no longer needed.
		//
		// document.getElementById('savebutton').disabled = false;
	
		if(CLEANROOM.activeFile == null) return;

		var fileEdited = CLEANROOM.activeFile;

		CLEANROOM.files[fileEdited].dirty = true;

		var identifiersByKind;

		// Remember the old highlights
		var oldHighlights = CLEANROOM.highlights;
	
		// Reset the global array of tokens to warn about
		this.resetHighlights();
	
		// Determine the type of file we're editing and analyze it accordingly.
		this.updateDirtyIdentifiers();
	
		// Reset the pairs, and then for each javascript identifier across all files, 
		// see if it has context. If it does, add it to a table of pairs.
		this.identifierPairs = {};
		for(var filename in CLEANROOM.files) {
			if(CLEANROOM.files.hasOwnProperty(filename)) {
				var file = CLEANROOM.files[filename];
				for(var index = 0; index < file.identifiers.length; index++) {
				
					var id = file.identifiers[index];
					var contextText = id.context == null ? "null" : id.context.text;
					var pairString = contextText + "_" + id.text;
					var pairMeta = null;
					if(this.identifierPairs.hasOwnProperty(pairString)) {
						pairMeta = this.identifierPairs[pairString];
					}
					else {
						pairMeta = { left: contextText, right: id.text, identifiers: [] };
						this.identifierPairs[pairString] = pairMeta;
					}
					pairMeta.identifiers.push(id);
				
				}
			}
		}
			
		// Create a combined list of identifiers
		var allIdentifiers = [];
		for(var file in CLEANROOM.files) {
			if(CLEANROOM.files.hasOwnProperty(file)) {
				if(CLEANROOM.files[file].hasOwnProperty('identifiers'))
					allIdentifiers = allIdentifiers.concat(CLEANROOM.files[file].identifiers);
			}
		}
		identifiersByKind = computeWarnings(allIdentifiers);
	

		if(CLEANROOM.files.hasOwnProperty(CLEANROOM.activeFile) && CLEANROOM.files[CLEANROOM.activeFile].type == "JS") {
			var code = bespin.value;
			obtainJSLintWarnings(CLEANROOM.activeFile, code);					
		}

	
		this.showWarningsUnderCursor();
		
/*
		var names = "";
		names = names + CLEANROOM.createIdentifierList("variables", [CLEANROOM.types.JSVariableName], identifiersByKind);
		names = names + CLEANROOM.createIdentifierList("properties", [CLEANROOM.types.JSPropertyName], identifiersByKind);
		names = names + CLEANROOM.createIdentifierList("functions", [CLEANROOM.types.JSFunctionName], identifiersByKind);
		names = names + CLEANROOM.createIdentifierList("HTML ids", [CLEANROOM.types.HTMLIDAttributeValue, CLEANROOM.types.CSSIdentifierRule], identifiersByKind);
		names = names + CLEANROOM.createIdentifierList("HTML classes", [CLEANROOM.types.HTMLClassAttributeValue, CLEANROOM.types.CSSClassRule], identifiersByKind);		
		document.getElementById('output').innerHTML = names;
*/

		// Make a keystroke, if there was one.
		var keystroke = null;
		var keystrokeNumber = -1;

		// Log the text operation and data
		if(textOperation != null && operationData != null && fileEdited != null) {

			// These are the operations available in Bespin, and the data that comes with them...
			/*
			"insertCharacters",	{pos:,characters:}
			"replaceRow",		{row:,oldline:,newline:}
			"deleteCharacters",	{pos:,characters:});
			"joinRow",			{selection:{startModelPos:,endModelPos:},chunk:})
			"deleteChunk",		{selection:{startModelPos:,endModelPos:},chunk:})
			"insertChunk",		{selection:{startModelPos:,endModelPos:},chunk:});
			*/
			var startRow = -1, startCol = -1, endRow = -1, endCol = -1, text = null;
			if(textOperation == 'insertCharacters' || textOperation == 'deleteCharacters') { 
				startRow = operationData.pos.row;
				startCol = operationData.pos.col;
				text = operationData.characters; 
			}
			else if(textOperation == 'joinRow' || textOperation == 'deleteChunk' || textOperation == 'insertChunk') { 
				startRow = operationData.selection.startModelPos.row;
				startCol = operationData.selection.startModelPos.col;
				endRow = operationData.selection.endModelPos.row;
				endCol = operationData.selection.endModelPos.col;
				text = operationData.chunk; 
			}
			else if(textOperation == 'replaceRow') { 
				startRow = operationData.pos.row; 
				startCol = operationData.pos.col; 
				text = operationData.newline; 
			}

			var file = CLEANROOM.files[fileEdited];
			keystroke = {
				file: fileEdited,
				operation: textOperation,
				startRow: startRow + 1,
				startCol: startCol,
				endRow: (endRow >= 0 ? endRow + 1 : -1),
				endCol: endCol,
				text: text,
				time: (new Date()).getTime()
			};
			
			// Add this keystroke to this file's log.
			file.log.keystrokes.push(keystroke);
			keystrokeNumber = file.log.keystrokes.length - 1;
		
		}
		
		// Now that we've got the old and new warnings, let's do a diff, and update old
		// data with new, finish eliminated warnings, and add new warnings.
		CLEANROOM.updateWarningLogs(fileEdited, keystroke, keystrokeNumber, oldHighlights, CLEANROOM.highlights);

		// Update text and class name in tabs
		CleanroomHandler.tabs.update();

	},
	
	/**
	 * Does not create a tab only updates the text and class name
	 */
	updateTabs: function() {
	
		for(var filename in CLEANROOM.files) {
			if(CLEANROOM.files.hasOwnProperty(filename)) {

				// Choose the tab type
				if(CLEANROOM.activeFile == filename) classChosen = "selectedTab";
				else classChosen = "tab";

				var tab = document.getElementById(filename + "Tab");
				console.log("updateTabs(): tab: ");
				console.log(tab);
				if(!(tab.className == classChosen)) tab.className = classChosen;

				// Set the tab text				
				var cleanroomCount = 0;
				var jslintCount = 0;
				var syntaxCount = 0;
				var warnings = CLEANROOM.files[filename].log.warnings;
				for(var index = 0; index < warnings.length; index++) {
					var warning = warnings[index];
					var color = CLEANROOM.types[warning.kind].color;
					if(color == COLORS.cleanroom) cleanroomCount++;
					else if(color == COLORS.syntax) syntaxCount++;
					else if(color == COLORS.jslint) jslintCount++;
				}				
			
				var cleanroomCountText = "<span class=cleanroomCount>(" + cleanroomCount + ")</span>";
				var jslintCountText = "<span class=jslintCount>(" + jslintCount + ")</span>";
				var syntaxCountText = "<span class=syntaxCount>(" + syntaxCount + ")</span>";
			
				var postfix = "";
				if(syntaxCount > 0)                                postfix = postfix + syntaxCountText;
				if(cleanroomCount > 0 && CLEANROOM.showHighlights) postfix = postfix + cleanroomCountText;
				if(jslintCount > 0)                                postfix = postfix + jslintCountText;

				tab.innerHTML = filename + " " + postfix;				
				
			}
		}

	},

	// Goes through the old warnings, matches them to new warnings
	// updating the log of each file as we go.
	updateWarningLogs: function(fileEdited, keystroke, keystrokeNumber, oldWarnings, newWarnings) {
		// If there was a keystroke, update all of the rows and columns of the old warnings in the current file
		if(keystroke != null) {
		
/* 			console.log(keystroke.operation + " " + keystroke.startRow + " " + keystroke.startCol + " " + keystroke.endRow + " " + keystroke.endCol); */

			var warningLog = CLEANROOM.files[fileEdited].log.warnings;
			var killed = [];
			
			for(var index = 0; index < warningLog.length; index++) {
			
				var warning = warningLog[index];

				// For each warning, check how the keystroke affected its row and column, then update the row and column if necessary
				if(warning.live) {

/* 					console.log("Checking " + fileEdited + ":" + warning.currentRow + " " + warning.text); */

					var kill = false;
					var rowDelta = null;
					var colDelta = null;
				
					// Was the edit entirely below the warning? If so, no change in the warning's position.
					if(warning.currentRow < keystroke.startRow && (keystroke.endRow < 0 || warning.currentRow < keystroke.endRow)) {}
					// Was the edit on the same row, but after the warning? If so, no change
					else if(warning.currentRow == keystroke.startRow && warning.currentCol + warning.length < keystroke.startCol) {}
					// This line was potentially affected by the edit. It could have been moved down and/or to the right.
					else {
						// This doesn't have new lines (that would be a chunk)
						if(keystroke.operation == 'insertCharacters' || keystroke.operation == 'deleteCharacters' || keystroke.operation == 'insertChunk') {
							// If they're on the same row
							if(warning.currentRow == keystroke.startRow) {
								// And this warning starts after the insertion point
								if(warning.currentCol >= keystroke.startCol) {
									// Then increment/decrement the position of the warning
									colDelta = (keystroke.operation == 'deleteCharacters' ? -1 : 1) * keystroke.text.length;
									if(keystroke.operation == 'insertChunk') {
										// If it was a return...
										if(keystroke.text == "\n") {
											colDelta = -keystroke.startCol;
										}
										rowDelta = (keystroke.endRow - keystroke.startRow);
									}
								}
								// If the insertion is in the warning, then kill this warning
								else if(keystroke.startCol <= warning.currentCol + warning.length) {
									kill = true;
								}
								else {}
							}
							// Otherwise, it's above the warning
							else {
								if(keystroke.operation == 'insertChunk') {
									rowDelta = (keystroke.endRow - keystroke.startRow);
								}
							}
						}
						else if(keystroke.operation == 'deleteChunk') {

							// Is the warning within the selection's row boundaries?
							// Note that selections spanning two whole rows actually count as three rows (because first character of third row is counted as part of selection)
							if(keystroke.startRow <= warning.currentRow && keystroke.endRow >= warning.currentRow) {

								// Is the selection all on one line?
								if(keystroke.startRow == keystroke.endRow) {
									// Is the selection all before the warning? Then move its column.
									if(keystroke.endCol < warning.currentCol) {
										colDelta = -keystroke.text.length;
									}
									// Otherwise, kill it
									else {
										kill = true;
									}								
								}
								// Is the end of the selection on or after the warning on the same line? Kill it!
								else if(keystroke.endRow == warning.currentRow && keystroke.endCol >= warning.currentCol) {
									kill = true;
								}
								// Is the end of the selection in a row below? Kill it?
								else if(keystroke.endRow > warning.currentRow) {
									kill = true;
								}
								// Otherwise, the selection ends before the warning, and we need to adjust its row and column
								else {
									rowDelta = -(keystroke.endRow - keystroke.startRow);
									colDelta = keystroke.startCol - keystroke.endCol;
								}
							
							}
							// If not, then the selection is above and we just modify the row number.
							else {
								rowDelta = -(keystroke.endRow - keystroke.startRow);
							}						
						
						}
						else if(keystroke.operation == 'replaceRow') {}
						// This happens when a row's newline is deleted (but nothing else, that would be a deleteChunk
						else if(keystroke.operation == 'joinRow') {
						
							rowDelta = -1;
							// If they're on the same row, increment the column
							if(warning.currentRow == keystroke.startRow + 1)
								colDelta = keystroke.startCol;
						
						}

					}

					var message = "";
					if(kill) {
						warning.live = false;
						warning.stop = keystrokeNumber;
						warning.stopFile = fileEdited;
/* 						console.log(fileEdited + ":" + warning.currentRow + ": " + warning.text + " killed (overwritten)"); */
						
						// Remove this warning from the array, move the index back so we don't skip an element.
						// Add it to the killed warning list.
						warningLog.splice(index, 1);
						index--;
						killed.push(warning);
						
					}
					else {
						if(rowDelta != null) { 
							warning.currentRow += rowDelta; 
/* 							console.log(warning.text + " row " + rowDelta + "=" + warning.currentRow);  */
						}
						if(colDelta != null) { 
							warning.currentCol += colDelta; 
/* 							console.log(warning.text + " col " + colDelta + "=" + warning.currentCol);  */
						}
					}
										
				} // end check whether warning is alive
				else {
					console.log("WRONG! Killed warning in live warning list: " + warning.text);
				}
				
			} // end loop through live warnings
			
			CLEANROOM.files[fileEdited].buryKilledWarnings(killed);
			
		}
	
		// Now that all of the warnings have new locations or are killed, let's find out
		// which warnings across all files are still alive.
		
		for(var file in CLEANROOM.files) {
			if(CLEANROOM.files.hasOwnProperty(file)) {
				
				// Go through each warning in the warning log for this file and see if we can 
				// find a corresponding warning in the new warnings.
				var warningLog = CLEANROOM.files[file].log.warnings;
				var killed = [];
				
				for(var index = 0; index < warningLog.length; index++) {

					var warning = warningLog[index];
					var found = false;
					var debugMessage = "";
					
					if(warning.live) {
					
						// Is this warning in the new warnings?
						if(newWarnings[file].hasOwnProperty(warning.currentRow)) {
							var warningArray = newWarnings[file][warning.currentRow];
							for(var warningIndex = 0; warningIndex < warningArray.length; warningIndex++) {
							
								var testWarning = warningArray[warningIndex];
								// If it starts as the same place and has the same text, it's still there
								if(testWarning.column == warning.currentCol && testWarning.text == warning.text) {
									found = true; 
									// We'll use this to remember that it's an old warning.
									testWarning.alreadyCompared = true;
									break;
								}
							
							}
							if(!found) debugMessage = "found row, but no matching warnings";							
						}
						else debugMessage = "no warnings on row " + warning.currentRow;
						
						if(found) {
						}
						else {
							warning.live = false;
							warning.stop = keystrokeNumber;
							warning.stopFile = fileEdited;
/* 							console.log(file + ":" + warning.currentRow + ":" + warning.text + " killed (not in new warnings)" + debugMessage); */
							
							// Remove this warning from the array, move the index back so we don't skip an element.
							// Add it to the killed warning list.
							warningLog.splice(index, 1);
							index--;
							killed.push(warning);
							
						}
						
					}
				}

				// Save killed warnings, if they lived long enough.
				CLEANROOM.files[file].buryKilledWarnings(killed);
				
				// Go through the new warnings and add all warnings that weren't already compared in the previous loop.
				var fileWarnings = newWarnings[file];
				for(var row in fileWarnings) {
					if(fileWarnings.hasOwnProperty(row)) {
					
						var warningsArray = fileWarnings[row];
						for(var index = 0; index < warningsArray.length; index++) {
							var warning = warningsArray[index];
							if(!warning.hasOwnProperty('alreadyCompared')) {
							
								var newWarning = {
									initialRow: warning.line,
									initialCol: warning.column,
									currentRow: warning.line,
									currentCol: warning.column,
									message: warning.message,
									length: warning.count,
									start: keystrokeNumber,
									startFile: fileEdited,
									stop: -1,
									stopFile: null,
									kind: warning.kind.id,
									live: true,
									text: warning.text,
									declaration: warning.declaration
								};
								
								CLEANROOM.files[file].log.warnings.push(newWarning);
/* 								console.log(file + ":" + newWarning.currentRow + ":" + newWarning.text + " NEW!"); */
							
							}
						} // end loop through row's warnings
						
					}
				} // end loop that adds unmatched highlights in new highlights data structure
				
				
			}
		} // end loop that goes through each file
	
	},
	
	createIdentifierList: function(label, identifierTypes, identifiersByKind) {
	
		var names;
		var name;
		var list = "<h1>" + label + "</h1>";
		var identifierType;
		var index;
		var listTable = {};
		var nameData;
		var id;

		for(index = 0; index < identifierTypes.length; index++) {
			identifierType = identifierTypes[index];
			if(identifierType.id in identifiersByKind) {
				names = identifiersByKind[identifierType.id].names;
				for(name in names) {
					if(names.hasOwnProperty(name)) {
						if(listTable[name])
							nameData = listTable[name];
						else {
							nameData = { warning: false, identifiers: []};
							listTable[name] = nameData;
						}
						for(id = 0; id < names[name].length; id++) {
							if(names[name][id].highlight != null)
								nameData.warning = true;
							nameData.identifiers.push(names[name][id]);
						}
					}
				}
			}
		}
		
		var sortedNames = [];
		for(name in listTable) {
			if(listTable.hasOwnProperty(name))
				sortedNames.push(name);
		}
		
		sortedNames.sort();
		
		for(index = 0; index < sortedNames.length; index++)
			list = list + "<span style='font-size: 10pt; color:" + (listTable[sortedNames[index]].warning ? "green" : "black") + "'>" + sortedNames[index] + "</span><br>";
			
		return list;
	
	},

	showWarningsUnderCursor: function() {
	
		// Now that we've generated warnings, place warning messages
		// in the error window.
		var errorHTML = CLEANROOM.createWarningHTML();	
		document.getElementById('errorWindow').innerHTML = errorHTML;
	
	},

	highlights: null,

	addHighlight: function (kind, identifier, source, message, row, column, width) {

		var highlight = {
			kind: kind == null ? null : kind,
			text: identifier ? identifier.text : null,
			source: source,
			message: message,
			line: row,
			column: column,
			count: width === undefined ? 1 : width,
			declaration: (identifier ? (identifier.hasOwnProperty('isDeclaration') ? identifier.isDeclaration : false) : false)
		};

		if(identifier)
			identifier.highlight = highlight;
		
		var rowArray = this.highlights[source][row];
		if(rowArray === undefined) { rowArray = []; this.highlights[source][row] = rowArray; }
		rowArray.push(highlight);
		
	},
	
	// This function creates a record to remember the location of some identifier in a source file.
	// These are used to analyze lexical and linguistic properties of the identifiers in the program.
	// One thing I want to capture here is the parsing context of the token. For example, is it 
	// an HTML class attribute name? Or is it the attribute name itself? Is it an identifer or a string
	// literal? What's a general way of capturing all of these context, in order to help tailor
	// warnings and filter Levenshtein recommendations? For example, if there were just a token type,
	// would it be enough to generate unique, useful messages? Let's do a thought experiment. If 
	// I passed in the fact that a particular token was an HTML attribute name, and that attribute name
	// only appeared once in the program, what data would I need to generate a useful message? A useful
	// message might be, "this attribute name only appears once in all of our source files and it doesn't
	// seem to be a standard attribute name. Did you mean X,Y,Z? Maybe you're defining a new type of attribute?
	// 
	// Here's another thought experiment: let's say the token is a string literal being passed to 
	// getElementById(). What data would we need to know that and what would we say about it? We would need to
	// know the previous token. We would need to know that it was a string literal and not an identifier.
	// And we might say, "this identifer doesn't appear as an id in anywhere else in your program. Are you
	// sure it's right?
	//
	createToken: function(source, text, kind, context, row, column) {
	
		return {
			source: source,
			text: text,
			kind: kind,
			context: context,
			row: row,
			column: column
		};
	
	},

	resetHighlights: function () {
		
		this.highlights = {};
		
		// Create a hash of rows of warnings for each file
		for(var file in this.files) {
			if(this.files.hasOwnProperty(file)) {
				this.highlights[file] = {};
			}
		}		
		
	},

	// Determine the current position of the text caret.
	// Is it over a token with a warning? If so, get messages from the highlights
	// and show them in the error window.	
	createWarningHTML: function() {

		var cursorPos = bespin.selection.start;
		var row = cursorPos.row;
		var col = cursorPos.col;	
		var idIndex;
		var token;
		var errors = "";
	
		var warningsByFilename = {};
		
		var rowHighlights = this.highlights[CLEANROOM.activeFile][row + 1];
		CLEANROOM.files[CLEANROOM.activeFile].cursorState = cursorPos;
		
		if(rowHighlights) {
			for(idIndex = 0; idIndex < rowHighlights.length; idIndex++) {		

				highlight = rowHighlights[idIndex];
								
				if(col >= highlight.column && col <= highlight.column + highlight.count) {
				
					var show = true;		
					if(!CLEANROOM.showHighlights && highlight.kind.color == COLORS.cleanroom)
						show = false;

					if(show)
						errors = errors + "<div class='consoleWarning' style='color: " + highlight.kind.color.value + ";'>" + highlight.message + "</div>";
				}
			}
		}

		return errors;
	
	},
	
	extractHTMLIdentifiers: function(source, content) {
	
		var identifiers = new Array();
			
		/*
			The attributes in this parser end up with a structure like this:
			{
				name
				value
				escaped <-- this is just the value with characters escaped
			}
		*/
		
		var onScript = false;
		var onScriptRow;
		
		message = HTMLParser(content, {
			start: function( tag, attrs, unary, row, column) {
				var i;
				var attr;
				var attributeNameIdentifier;
				var tagIdentifier;
				var attributeValueType;
				
				onScript = tag == 'script';
				if(onScript) onScriptRow = row;
				
				tagIdentifier = CLEANROOM.createToken(source, tag, CLEANROOM.types.HTMLTag, null, row, column);
				identifiers.push(tagIdentifier);
				for(i = 0; i < attrs.length; i++) {
					attr = attrs[i];			
					attributeNameIdentifier = CLEANROOM.createToken(source, attr.name, CLEANROOM.types.HTMLAttributeName, tagIdentifier, attr.row, attr.nameColumn);
					identifiers.push(attributeNameIdentifier);

					attributeValueType = null;
					if(attr.name == 'id') {
						identifiers.push(CLEANROOM.createToken(source, attr.value, CLEANROOM.types.HTMLIDAttributeValue, attributeNameIdentifier, attr.row, attr.valueColumn));
					}
					else if(attr.name == 'class') {
						identifiers.push(CLEANROOM.createToken(source, attr.value, CLEANROOM.types.HTMLClassAttributeValue, attributeNameIdentifier, attr.row, attr.valueColumn));
					}
					else if(attr.name in DICTIONARIES.htmlEventAttributes) {
						
						var javascriptIdentifiers = CLEANROOM.extractJSIdentifiers(source, attr.value, "HTML");
						for(var jsid = 0; jsid < javascriptIdentifiers.length; jsid++) {
						
							var jsID = javascriptIdentifiers[jsid];
							jsID.row += attr.row - 1;
							jsID.column += attr.valueColumn;
						
							identifiers.push(javascriptIdentifiers[jsid]);
						}

					}
					
					if((tag == 'script' && attr.name == 'src') || (tag == 'link' && attr.name == 'href')) {
						
						// if(!(attr.value in CLEANROOM.loadingFiles)) {
						// 	CLEANROOM.loadingFiles[attr.value] = true;
						// 	var url = attr.value.indexOf("http") == 0 ? attr.value : CLEANROOM.files[source].base + attr.value;
						// 	loadFileAtURL(url, false, source);
						// }
					
					}
					
				}
			},
			end: function( tag ) {},
			chars: function( text ) {
			
				if(onScript) {

					var javascriptIdentifiers = CLEANROOM.extractJSIdentifiers(source, text, "HTML");
					for(var jsid = 0; jsid < javascriptIdentifiers.length; jsid++) {
					
						var jsID = javascriptIdentifiers[jsid];
						jsID.row += onScriptRow - 1;
					
						identifiers.push(javascriptIdentifiers[jsid]);
					}

				}
			
			},
			comment: function( text ) {}
		});
		
		return identifiers;
		
	},
	
	getPreviousToken: function(token, whitespaceID) {
	
		previousToken = token.CLEANROOM_PREVIOUS_TOKEN;
		while(previousToken && previousToken.getType() == whitespaceID) previousToken = previousToken.CLEANROOM_PREVIOUS_TOKEN;
		return previousToken;

	},

	getNextToken: function(token, whitespaceID) {
	
		nextToken = token.CLEANROOM_NEXT_TOKEN;
		while(nextToken && nextToken.getType() == whitespaceID) nextToken = nextToken.CLEANROOM_NEXT_TOKEN;
		return nextToken;

	},
	
	extractCSSIdentifiers: function(source, content) {

		var i;
	    var cstream = new org.antlr.runtime.ANTLRStringStream(content);
	    var lexer = new cssLexer(cstream);
	    var tstream = new org.antlr.runtime.CommonTokenStream(lexer);
		var tokens = tstream.getTokens();
		var identifiers = new Array();
		var token = null;
		var tokenType = null;
		var previousToken = null, nextToken = null;
		var lastPropertyName = null;
		var newIdentifier;
		var context;
	
		for (i = 0; i < tokens.length; i++) {
		
			token = tokens[i];

			// 21 is the id for identifiers in cssLexer.js
			if(token.getType() == 21) {

				previousToken = CLEANROOM.getPreviousToken(token, 26);
				var previousTokenText = previousToken ? previousToken.getText() : "";
				nextToken = CLEANROOM.getNextToken(token, 26);
				var nextTokenText = nextToken ? nextToken.getText() : "";
				
				tokenType = CLEANROOM.types.CSSGenericIdentifier;

				context = null;

				// Does this come after a . ?
				if(previousTokenText == '.') { tokenType = CLEANROOM.types.CSSClassRule; }
				else if(previousTokenText == ':') { tokenType = CLEANROOM.types.CSSPropertyValue; context = lastPropertyName; }
				else if(nextTokenText == ':') { tokenType = CLEANROOM.types.CSSPropertyName; }
				else if(nextTokenText == '{') { 
					// Make this a CSS Identifier Rule
					if(previousTokenText == "#") {
						tokenType = CLEANROOM.types.CSSIdentifierRule;
					}
					else tokenType = CLEANROOM.types.CSSTagRule; 
				}

				newIdentifier = CLEANROOM.createToken(source, token.getText(), tokenType, context, token.getLine(), token.getCharPositionInLine())
				identifiers.push(newIdentifier);
				
				if(tokenType == CLEANROOM.types.CSSPropertyName)
					lastPropertyName = newIdentifier;
			
			}
	
		}	
		
		return identifiers;
	
	},
	
	extractJSIdentifiers: function(source, content, type) {
	
		// Create a token stream of the JavaScript code
	    var cstream = new org.antlr.runtime.ANTLRStringStream(content);
	    var lexer = new javascriptLexer(cstream);
	    var tokenStream = new org.antlr.runtime.CommonTokenStream(lexer);
		var tokens = tokenStream.getTokens();
	    var identifiers = new Array();
	    var tokenType;
	    var objectLiteralStack = [];
	    var context = null;
	
		for (var i = 0; i < tokens.length; i++) {
	
			var token = tokens[i];
			tokenType = token.getType();
			context = null;
	
			// Here's the token API
			// http://www.antlr.org/api/Java/interfaceorg_1_1antlr_1_1runtime_1_1_token.html
			// getText()
			// getType()
			// getLine()
			// getCharPositionInLine()
			var column = token.getCharPositionInLine();
	
			// push { and the object literal name, if found
			if(tokenType == 35) {

				var objectLiteralIdentifier = null;

				previousToken = CLEANROOM.getPreviousToken(token, 30);
				var previousTokenText = previousToken ? previousToken.getText() : "";
				if(previousTokenText == '=' || previousTokenText == ':') {
					previousToken = CLEANROOM.getPreviousToken(previousToken, 30);
					var previousTokenText = previousToken ? previousToken.getText() : "";
					if(previousTokenText) {
						objectLiteralIdentifier = identifiers[identifiers.length - 1];
					}
				}
				
				objectLiteralStack.push(objectLiteralIdentifier);
				
			}
			// pop }
			else if(tokenType == 36) {
			
				var top = objectLiteralStack.pop();
			
			}
			// Handle "this" keyword
			else if(tokenType == 103) {

				var text = token.getText();
				var newIdentifier = CLEANROOM.createToken(source, text, CLEANROOM.types.JSVariableName, null, token.getLine(), column);
				newIdentifier.isDeclaration = false;
				identifiers.push(newIdentifier);

			}
			// This is the identifier type
			else if(tokenType == 5) {
						
				var text = token.getText();
			
				previousToken = CLEANROOM.getPreviousToken(token, 30);
				var previousTokenText = previousToken ? previousToken.getText() : "";
				nextToken = CLEANROOM.getNextToken(token, 30);
				var nextTokenText = nextToken ? nextToken.getText() : "";

				var tokenType = CLEANROOM.types.JSVariableName;
				var isDeclaration = false;
				context = null;
				
				if(previousTokenText == "function") {
				
					tokenType = CLEANROOM.types.JSFunctionName; 
					isDeclaration = true;
				
				}
				else if(nextTokenText == "(") {
				
					tokenType = CLEANROOM.types.JSFunctionName; 
					
					if(previousTokenText == ".") {
						if(identifiers.length > 0) {
							var precedingIdentifier = identifiers[identifiers.length - 1];
							if(	precedingIdentifier.kind == CLEANROOM.types.JSVariableName || 
								precedingIdentifier.kind == CLEANROOM.types.JSPropertyName) {
								context = precedingIdentifier;
							}
						}					
					}
				
				}
				// Is this a property name of an object?
				else if(previousTokenText == ".") { 
					
					var isFunctionDeclaration = false;
					if(nextTokenText == "=") {
				
						var nextNextToken = CLEANROOM.getNextToken(nextToken, 30);
						if(nextNextToken && nextNextToken.getText() == "function") { 
							isFunctionDeclaration = true;
							tokenType = CLEANROOM.types.JSFunctionName;
							isDeclaration = true;
						}				
					
					}

					if(!isFunctionDeclaration) {
						tokenType = CLEANROOM.types.JSPropertyName; 
						if(identifiers.length > 0) {
							var precedingIdentifier = identifiers[identifiers.length - 1];
							if(	precedingIdentifier.kind == CLEANROOM.types.JSVariableName || 
								precedingIdentifier.kind == CLEANROOM.types.JSPropertyName) {
								context = precedingIdentifier;
							}
						}
					}
				}
				else if(nextTokenText == ":") {
				
					var nextNextToken = CLEANROOM.getNextToken(nextToken, 30);
					if(nextNextToken && nextNextToken.getText() == "function") { tokenType = CLEANROOM.types.JSFunctionName; }
					else tokenType = CLEANROOM.types.JSPropertyName;
					
					context = objectLiteralStack[objectLiteralStack.length - 1];
					
					isDeclaration = true;
					
				}
				
				var newIdentifier = CLEANROOM.createToken(source, text, tokenType, context, token.getLine(), column);
				newIdentifier.isDeclaration = isDeclaration;
				identifiers.push(newIdentifier);
			
			}
			else if(tokenType == 6) {
	
				var text = token.getText();
				var includeThisToken = true;
				var isLiteral = false;
	
				// If its a string literal, remove the quotes
				isLiteral = true;
				text = text.substring(1, text.length-1); 
				column++;
					
				// If there's a space in the string literal, let's assume it's not an id
				if(text.indexOf(" ") >= 0) includeThisToken = false;
								
				if(includeThisToken)
					identifiers.push(CLEANROOM.createToken(source, text, CLEANROOM.types.JSLiteral, null, token.getLine(), column));
				
			}
			
		}
		
		return identifiers;
	
	}
	
};

var editorCursorStates = {};

// This function checks the activeFile global (which is just a string with values HTML, CSS, or JS)
// and switches the file shown. Source is one of the above strings.
function choose(activeFile) {

	// Memorize the position of the cursor for the next time the file is viewed
	if(CLEANROOM.activeFile != null) {
		document.getElementById(CLEANROOM.activeFile + "Source").value = bespin.value;
		document.getElementById(CLEANROOM.activeFile + "Tab").className = "tab";
		editorCursorStates[CLEANROOM.activeFile] = bespin.getCursorPos();
	}
	CLEANROOM.activeFile = activeFile;
	
	var tab = document.getElementById(CLEANROOM.activeFile + "Tab");
	var text = document.getElementById(source + 'Source');
	
	if(tab == null) { alert("Why isn't there a tab for " + source + "?"); return; }
	if(tab == null) { alert("Why isn't there a hidden text area for " + source + "?"); return; }
		
	// Update the tab highlighting for the new file
	tab.className = "tab selectedTab";
	
	// Set the content of the bespin editor using the hidden text area's value
	bespin.setContent(text.value);

	// Recall the memorized cusor position
	var memorizedCursorPos = editorCursorStates[CLEANROOM.activeFile];
	if(memorizedCursorPos == null)
		memorizedCursorPos = {col:0,row:0};

	// Movie the bespin editor's cursor to the memorized position
	bespin.moveCursor(memorizedCursorPos);
	
	CLEANROOM.updateTabs();

	CLEANROOM.canvas.focus();

}

function obtainJSLintWarnings(filename, content) {

	var results;
	var i;
	var error;
	
	CLEANROOM.impliedGlobals = [];

	JSLINT(content, {browser:true});
	var results = JSLINT.data();
	
	if(results.errors) {
		for(i = 0; i < results.errors.length; i++) {
			error = results.errors[i];
			if(error != null) {
				CLEANROOM.addHighlight(CLEANROOM.types.JSLintWarning, null, filename, error.reason, error.line, error.character - 1, error.length);
			}	
		}
	}
	
	if(CLEANROOM.impliedGlobals) {
		for(i = 0; i < CLEANROOM.impliedGlobals.length; i++) {
			error = CLEANROOM.impliedGlobals[i];
			CLEANROOM.addHighlight(CLEANROOM.types.JSLintImpliedGlobal, null, filename, "Didn't find a declaration for <span class='name'>" + error.text + "</span>, so it's being treated as a global variable.", error.row, error.col - 1, error.text.length);
		}
	}

}

/*

Computes the central data structure for analysis.

{
	idtype1: {
		kind: kind,
		names: {
			idname1: [id1, id2, id3],
			idname2: [id1, id2, id3]
			...
		}
	}
	idtype2: {
		kind: kind,
		names: {
			idname1: [id1, id2, id3],
			idname2: [id1, id2, id3]
			...
		}
	}
	...
}
*/
function createIdentifierTable(identifiers) {

	var identifier, identifiersOfAKind, identifiersByKind = {};
	var identifiersWithName;
	var i;

	// Go through the array of identifiers
	for (i = 0; i < identifiers.length; i++) {

		identifier = identifiers[i];
		
		// Have we made an dictionary for this type yet? If so, get it.
		if(identifier.kind.id in identifiersByKind) { 
			identifiersOfAKind = identifiersByKind[identifier.kind.id]; 
		}
		// If not, make a dictionary for it.
		else {
			identifiersOfAKind = { kind: identifier.kind, names: {}}; 
			identifiersByKind[identifier.kind.id] = identifiersOfAKind;	
		}

		// Is there an entry for this identifier name yet?
		if(identifier.text in identifiersOfAKind.names)
			identifiersWithName = identifiersOfAKind.names[identifier.text];
		else {
			identifiersWithName = [];
			identifiersOfAKind.names[identifier.text] = identifiersWithName;
		}

		// Add this identifier to the list.
		if(identifiersWithName.push)
			identifiersWithName.push(identifier);
	
	}
	
	return identifiersByKind;

}

/*
	Expects an array of { text, row, column ... } to represent identifiers
*/
function computeWarnings(identifiers) {
	
	var i, j;
	var identifier;
	var uniqueIdentifiers = {};
	var stringHash = new Object();
	var digraphHash = new Object();
	var identifiersByKind;
	var identifiersOfAKind;
	var kinds = [];
	var done;
	var kind;
	var tried = {};
	var dictionaryForKind;

	// First, split the identifiers by their kind, so we can analyze kinds
	// independently.
	identifiersByKind = createIdentifierTable(identifiers);

	for(kind in identifiersByKind) {
		if(identifiersByKind.hasOwnProperty(kind)) {

			dictionaryForKind = identifiersByKind[kind];		
			kind = dictionaryForKind.kind;
			if(!kind.hasOwnProperty('validateIdentifiers')) {
				kind.validateIdentifiers = CLEANROOM.types[kind.id].validateIdentifiers;
			}
			kind.validateIdentifiers(dictionaryForKind.names, identifiersByKind);
	
		}	
	}
		
	return identifiersByKind;
	
}

// function addToArrayForKey(hash, key, value) {}

function toFixed(value, precision) {
    var power = Math.pow(10, precision || 0);
    return String(Math.round(value * power) / power);
}


/*
Computes the Damerau-Levenshtein distance between two strings.
For example, two strings have a distance of 1 if a single character 
could be deleted, inserted, or substituted to equal the other string.
This algorithm also treats transposition as an atomic operation, which
means that by swapping two adjacent characters one achieves equivalent strings.

This algorithm is based on the pseudocode on Wikipedia:

int DamerauLevenshteinDistance(char str1[1..lenStr1], char str2[1..lenStr2])
   // d is a table with lenStr1+1 rows and lenStr2+1 columns
   declare int d[0..lenStr1, 0..lenStr2]
   // i and j are used to iterate over str1 and str2
   declare int i, j, cost
 
   for i from 0 to lenStr1
       d[i, 0] := i
   for j from 1 to lenStr2
       d[0, j] := j
 
   for i from 1 to lenStr1
       for j from 1 to lenStr2
           if str1[i] = str2[j] then cost := 0
                                else cost := 1
           d[i, j] := minimum(
                                d[i-1, j  ] + 1,     // deletion
                                d[i  , j-1] + 1,     // insertion
                                d[i-1, j-1] + cost   // substitution
                            )
           if(i > 1 and j > 1 and str1[i] = str2[j-1] and str1[i-1] = str2[j]) then
               d[i, j] := minimum(
                                d[i, j],
                                d[i-2, j-2] + cost   // transposition
                             )
                                
 
   return d[lenStr1, lenStr2]
*/

var levenshteinComparisons = {};
var cached = 0;
var noncached = 0;

function levenshtein(s1, s2) {

	// This is a cache that looks up previously computed pairs
	var pair = s1 + s2;
	if(levenshteinComparisons.hasOwnProperty(pair)) {
		return levenshteinComparisons[pair];
	}

	var i, j;
	var cost;
	
	// Make a 2D array, |s1| x |s2|
	var d = new Array(s1.length + 1);
	
	for (i = 0; i < d.length; ++i)
		d[i] = new Array(s2.length + 1);

	for(i = 0; i <= s1.length; i++)
		d[i][0] = i;

	for(j = 1; j <= s2.length; j++)
		d[0][j] = j;

	for(i = 1; i <= s1.length; i++) {
	
		for(j = 1; j <= s2.length; j++) {
	           
			// Warning: the pseduocode above assumes 1-indexed strings
			if(s1.charAt(i - 1) == s2.charAt(j - 1)) cost = 0;
			else cost = 1;
	
			d[i][j] = Math.min(
				d[i-1][j  ] + 1,		// Deletion
				d[i  ][j-1] + 1,		// Insertion
				d[i-1][j-1] + cost		// Substituion
			);
	
			// Warning: the pseduocode above assumes 1-indexed strings
			if(i > 1 && j > 1 && s1.charAt(i - 1) == s2.charAt(j-1-1) && s1.charAt(i-1-1) == s2.charAt(j-1)) {
			
				d[i][j] = Math.min(
					d[i][j],
					d[i-2][j-2] + cost	// Transposition
				);
			
			}
			
		}

	}
	
	var distance = d[s1.length][s2.length];
	
	levenshteinComparisons[pair] = distance;
	
	return distance;

}
