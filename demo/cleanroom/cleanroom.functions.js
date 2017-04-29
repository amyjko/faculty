/**
 * @TODO: ADD COMMENTS ABOUT THIS OBJ for
 */
var CleanroomHandler = {
	
	/**
	 * ++++++++++++++++ VARS +++++++++++++++++++
	 */
	startPopup: undefined,
	btnAddNewFile: undefined,
	btnLoad: undefined,
	returningLoad: undefined, // If a user returns this is true and waits until loading is done.
	
	/**
	 * ++++++++++++++++ DATA STRUCTURES ++++++++++++++++
	 */
	files: {},
	
	/**
	 * ++++++++++++++++ FUNCTIONS ++++++++++++++++++++++
	 */
	
	/**
	 * Adds a file to the this.files object. Overrides if the name already exists. This
	 * is only called when a completely new file needs to be added.
	 * 
	 * filename
	 * 		File name
	 * content
	 * 		File content
	 * activate
	 * 		Boolean - true, focus this file in the Bespin Editor after it's created.
	 */
	addNewFile: function(filename, content, activate){

		// Replace tabs '\t' with 4 white spaces (for Bespin probably)
		content = content.replace(/\t/g, "    ");

		// Check if file already exists in CleanroomHandler.files object
		if(CLEANROOM.files.hasOwnProperty(filename)) { 
			console.error("addNewFile(): File already exists. What to do? Override?...."); 
			var overwrite = confirm("Do you want to overwrite \"" + filename + "\" and all its properties?");
			// Don't proceed if the file should not be overwritten
			if(!overwrite) return;
			delete CLEANROOM.files[filename];
			CLEANROOM.files[filename] = {};
		} else {
			CLEANROOM.files[filename] = {};
		}

		type = filename.substr(filename.lastIndexOf('.') + 1).toUpperCase();

		CLEANROOM.files[filename] = {
			name: filename,
			content: content,
			type: type, 
			identifiers: [], 
			dirty: true,
			base: "", // baseURL, this could potentially break something somewhere
			log: {
				highlightsOn: true,		// Whether this is the control or experimental condition
				initialText: content,		// The initial state of the file, so we can rebuild future states
				keystrokes: [],			// An array of all of the keystrokes made (see updateCleanroomHighlights for structure
				warnings: [],			// Warnings that are active in this file
				killedWarnings: [],		// Warnings that were active in this file, but aren't any longer.
			}
		};

		// Populate localStorage with the file
		CleanroomHandler.saveToStorage();
		// Load from localStorage - this adds functions that are needed,
		// Good if they remain defined only in the loadFromStorage() method
		CleanroomHandler.loadFromStorage();

		// Create the tab
		CleanroomHandler.tabs.addTab(filename); 

		// Starting point for adding highlights to the files.
		CLEANROOM.updateCleanroomHighlights(null, null);

		// Changes focus in tabs and the besin editor
		if(activate) {
			CleanroomHandler.changeActiveFile(filename);
		}

	},
	
	/**
	 * This function takes care of handling events. So all JS can be seperated from the HTML.
	 */
	bindEvents: function(){
		CleanroomHandler.btnLoad.addEventListener("click", CleanroomHandler.loadNewUser, false);
		CleanroomHandler.btnAddNewFile.addEventListener('click', function(e) { 
			var fileName = prompt("Name of new file (include file extension):");
			CleanroomHandler.addNewFile(fileName, "", true);
		}, false);
		
	},
	
	/**
	 * Change focus in the bespin editor
	 * 
	 * filename
	 * 			The name of the CLEANROOM.files object that should be loaded
	 */
	changeActiveFile: function(filename){
		
		// Save data to this.files object
		if(CLEANROOM.activeFile != null) {
			if(!CleanroomHandler.returningLoad) {
				CLEANROOM.files[CLEANROOM.activeFile].content = bespin.value;
				CLEANROOM.files[CLEANROOM.activeFile].cursorState = bespin.selection.start;
			}
			document.getElementById(CLEANROOM.activeFile + "Tab").className = "tab";
		}
		CLEANROOM.activeFile = filename;

		var tab = document.getElementById(CLEANROOM.activeFile + "Tab");
		var text = CLEANROOM.files[filename].content;

		if(tab == null) { alert("Why isn't there a tab for " + filename + "?"); return; }

		// Update the tab highlighting for the new file
		tab.className = "tab selectedTab";

		// SET CONTENT of the bespin editor using the hidden text area's value
		bespin.value = text;
				
		// Set the syntax of the editor.
		bespinEnvironment.syntax = filename.substring(filename.lastIndexOf('.') + 1);

		// Recall the memorized cusor position
		var memorizedCursorPos = CLEANROOM.files[filename].cursorState;
		if(memorizedCursorPos == null) {
			memorizedCursorPos = {col:0,row:0};
		}
		// Movie the bespin editor's cursor to the memorized position
		bespin.setCursor(memorizedCursorPos);
		
		// Adds some text concerning highlights
		CleanroomHandler.tabs.update();

		CLEANROOM.canvas.focus();
	},

	/**
	 * General function that store different DOM elements for easy access.
	 */
	getElements: function(){
		CleanroomHandler.startPopup = document.getElementById('newuser');
		CleanroomHandler.btnLoad	= document.getElementById('startBtn');
		CleanroomHandler.btnAddNewFile = document.getElementById('btnAddNewFile');
	},
	
	/**
	 * The function that runs on the event: window.onload (after Bespin)
	 */
	init: function(){
		
		// used during development
		// localStorage.removeItem("CRData");
		// console.log("init(): CRData cleared!");
		
		/* #################### GENERAL SETUP #################### */
		
		// Enable the use of console.log, console.info, console.error, console.warn
		// but not for those without Firebug or Google Chrome installed.
		if(typeof console === "undefined") 
		{
		    console = 
			{ 
				log: function() { },
				error: function() { },
				warn: function() { },
				info: function() { }
			};
		}

		// Add funcionality to the localStorage object in order to keep rest of 
		// saving code easier to read.
		Storage.prototype.setObject = function(key, value) {
			this.setItem(key, JSON.stringify(value));
		};
		Storage.prototype.getObject = function(key) {
			var result;
			// If the name of the variable to be accessed is not actually existant.
			// then it will give an error and kill the script. This ways we handle it.
			try 
			{
				var result = JSON.parse(this.getItem(key));
			} catch (exception)
			{
				// Handle error
				console.info("Storage.getObject(): Item does not exist in memory.");
				return undefined;
			}		
			return result;
		};
		
		/* #################### CLEANROOM SETUP #################### */
		
		// Populate the element vars for easier access of them later
		CleanroomHandler.getElements();	
		// Bind events
		CleanroomHandler.bindEvents();
		
		if(CleanroomHandler.isUserNew()) 
		{
			// __ NEW USER __
			CleanroomHandler.returningLoad = false;
			CleanroomHandler.startPopup.setAttribute('class', 'popup');
		}
		else
		{	
			// __ RETURNING USER __
			CleanroomHandler.returningLoad = true;
			// Load files from localStorage
			if(CleanroomHandler.loadFromStorage() == false) {
				console.error("Error loading files from localStorage");
			} else {
				for(var file in CLEANROOM.files) {
					CleanroomHandler.tabs.addTab(file);
				}
				CLEANROOM.activeFile 	= localStorage.getObject('CRLatestFile');
				if(CleanroomHandler.returningLoad && (CLEANROOM.activeFile) !=null) {
					CleanroomHandler.changeActiveFile(CLEANROOM.activeFile);
				} else {
				}
				CLEANROOM.updateCleanroomHighlights(null, null);
			}
		}
	},
	
	/**
	 * Checks to see if the user has been here before. The conditions for this:
	 * - Has files stored
	 * - Has a state stored with file focus and cursor focus.
	 * 
	 * @return
	 * 			true if the user is new and false if the user is returning.
	 */
	isUserNew: function()
	{
		var CRData = localStorage.getObject('CRData');
		if(CRData == undefined) return true;
		return false;
		// @TODO: Add functionality for checking state.
	},
	
	/**
	 * Load localStorage object into the this.files object.
	 * Then create the tabs based on this.files
	 */
	loadFromStorage: function(){

		// Load data
		CLEANROOM.files 		= localStorage.getObject('CRData');
		// Add functions, they cannot be stringified because they create a cyclic data structure
		for(var file in CLEANROOM.files) {
			file = CLEANROOM.files[file];
			file.content = file.content.replace(/\t/g, "    ");
			file.timeBetweenKeystrokes = function(start, stop) {
				var keystrokes = file.log.keystrokes;
				if(start >= 0 && start < keystrokes.length && stop >= 0 && stop < keystrokes.length)
					return file.log.keystrokes[stop].time - file.log.keystrokes[start].time;
				else {							
					return -1;
				}
			
			}
			file.buryKilledWarnings = function(killed) {	
			
				// Add the killed warnings to the killed warnings list, if the warning
				// had a "reasonable" lifespan.							
				for(var index = 0; index < killed.length; index++) {
					var warning = killed[index];
					var time = file.timeBetweenKeystrokes(warning.start, warning.stop);
					if(time > 2500 || time < 0) {
						file.log.killedWarnings.push(warning);
					}			
				} // done going through killed warnings		
			
			}
		}
	},

	/**
	 * NEW USER: Function is invoked as the user presses the "Load Environment button in
	 * new usera popup. This is thus only for new users. Might handle both cases.
	 */
	loadNewUser: function(){

		// Hide start prompt window
		var newuserPopup = document.getElementById('newuser')
		newuserPopup.setAttribute('class', 'hidden');
		
		// Show loading thing...
		// var loadingPopup = document.getElementById('loadingFiles');
		// loadingPopup.style.visibility = 'visible';
		
		// Reset Cleanroom files
		localStorage.removeItem("CRData");
		
		// Reset the active tab
		CLEANROOM.activeFile = null;
		
		// Reset the file view.
		var files = document.getElementById('fileTabs');
		
		if (files.hasChildNodes()) {
		    while (files.childNodes.length >= 1 ){
		        files.removeChild(files.firstChild);
   			} 
		}
		
		// LOAD FILES
		// Initialize the three files for this user
		AJAXRequest(
			"GET", "calculator/unsolved/index.html", "", 
			function(result) { 
				CleanroomHandler.addNewFile('index.html', result, true);
			},
			true
		);

		AJAXRequest(
			"GET", "calculator/unsolved/style.css", "", 
			function(result) { 
				CleanroomHandler.addNewFile('style.css', result, false); 
			}, 
			true
		);

		AJAXRequest(
			"GET", "calculator/unsolved/code.js", "", 
			function(result) { 
				CleanroomHandler.addNewFile('code.js', result, false); 
			}, 
			true
		);
	},
	
	/**
	 * Saves the file currently being edited to the CLEANROOM.files object.
	 * Called from addHistoryItem() in BespinEmbedded.js
	 */
	saveToObject: function(){
	
		if(CLEANROOM.files.hasOwnProperty(CLEANROOM.activeFile)) {
			CLEANROOM.files[CLEANROOM.activeFile].content = bespin.value;
		} else {
			console.error("Cleanroom: Couldn't save from Bespin editor to run-time object.");
		}
	},

	/**
	 * Saves the content in CLEANROOM.files to CRData. Each file has state and an extra variable
	 * exists for storing the most currently focused file.
	 */
	saveToStorage: function(){

		// First remove function as to avoid a cyclic data structur which cannot be stringified
		for(var file in CLEANROOM.files) {
			file.timeBetweenKeystrokes = undefined;
			delete file.timeBetweenKeystrokes;
			file.buryKilledWarnings = undefined;
			delete file.buryKilledWarnings;
		}  
		localStorage.setObject('CRData', CLEANROOM.files);
		localStorage.setObject('CRLatestFile', CLEANROOM.activeFile);
		CleanroomHandler.testStorage();
	},
	
	/**
	 * Functions for setting the status of the editor state
	 */
	status: {
		/**
		 * The status element
		 */
		element: document.getElementById('status'),
		
		/**
		 * The function for setting the status
		 * 
		 * statusStr
		 * 			A string with the status
		 */
		set: function(statusStr){
			element.innerHTML = statusStr;
		}
	},
	
	tabs: {
		/**
		 * Update the tabs, meaning, take this.files and output it.
		 * @TODO: Finish tabs.update() method
		 */
		update: function(){
			for(var filename in CLEANROOM.files) {
				if(CLEANROOM.files.hasOwnProperty(filename)) {
					
					// Choose the tab type
					if(CLEANROOM.activeFile == filename) classChosen = "selectedTab";
					else classChosen = "tab";

					var tab = document.getElementById(filename + "Tab");
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
					
				} else {
					console.log("tabs.update(): 'file' has no name");
					// not sure if I should delete it or not
				}
			}
		},
		
		/**
		 * Add a new file to the tabs-bar
		 * 
		 * filename
		 * 			The text value the tab should contain
		 * activate
		 * 			If this tabs should get loaded to the editor and get focus after being added
		 */
		addTab: function(filename, activate){
			var tabs = document.getElementById('fileTabs');					
			var tab = document.createElement('li');
			tab.setAttribute('class', 'tab');
			tab.setAttribute('id', filename + "Tab");
			tab.addEventListener('click', function(e) { CleanroomHandler.changeActiveFile(filename); }, false);
			tab.innerHTML = filename;
			tabs.appendChild(tab);
			
			if(activate)
				CleanroomHandler.changeActiveFile(filename);
		}
	},
	
	testStorage: function(){
		localStorage.setItem("DATA", "mm");
		for(i=0 ; i<10 ; i++) {
		    var data = localStorage.getItem("DATA");
		    try { 
		        localStorage.setItem("DATA", data + data);
		    } catch(e) {
				i=100;
				localStorage.removeItem("DATA");
		        alert('You only have space for less than 1024 characters left.Increase the storage in your browsers settings or remove files/text.')
		    }
		}
	}
	
};

window.onBespinLoad = function() {
	
	bespinEnvironment = document.getElementById("editor").bespin;
	bespin = bespinEnvironment.editor;
	// loadURL();

	document.getElementById("editor").bespin.settings.set("fontsize", 11);

	// A little hack to get access to the bespin editor canvas.
	CLEANROOM.canvas = document.activeElement;
	
	// Set CleanroomHandler.init() as the starting point.
	// I think Bespin actually still loads first.
	CleanroomHandler.init();

	bespin.selectionChanged.add(function(newSelection) {
		CLEANROOM.showWarningsUnderCursor();
	});

	bespin.textChanged.add(function(oldRange, newRange, newText) {	
		CleanroomHandler.saveToObject();
		CLEANROOM.updateCleanroomHighlights(null, null);
		bespin.textView.invalidate();
	});
	
	window.onunload = CleanroomHandler.saveToStorage;
	
	window.onfocus = function() {
		CLEANROOM.focusLog.push({ window: ((new Date()).getTime()) });		
		// removed because the function is gone since it has to do with the DB 
		// and serves no purpose now
		// updateSuccess();	
	};
	
	window.onblur = function() {
		CleanroomHandler.saveToStorage();
		if(CLEANROOM.previewFlag) {
			CLEANROOM.previewFlag = false;
			CLEANROOM.focusLog.push({ preview: ((new Date()).getTime()) });
		}
		else {
			CLEANROOM.focusLog.push({ other: ((new Date()).getTime()) });
		}
	
	};
	
	document.onkeydown=function(e){
		if((e.metaKey == true || e.ctrlKey == true) && e.which == 83) {
			CleanroomHandler.saveToStorage();
			e.preventDefault();
			return false;
		}
	}
	
};

/*
    resetCleanroomFiles()
    Cleans out the files tabs at the top first thing inside:
        loadUser()
        loadURL()
    Also clears some CLEANROOM vars (username, activeFile, files)
*/
/* REMOVED: Not used anymore
function resetCleanroomFiles() {

	CLEANROOM.username = "";
	
	CLEANROOM.activeFile = null;

	CLEANROOM.files = {};

	var fileHolders = document.getElementById('fileHolders');					
	if (fileHolders.hasChildNodes()) {
		while (fileHolders.childNodes.length >= 1 ) { 
			fileHolders.removeChild(fileHolders.firstChild); 
		}
	}
	var tabs = document.getElementById('fileTabs');					
	if (tabs.hasChildNodes()) {
		while (tabs.childNodes.length >= 1 ) { 
			tabs.removeChild(tabs.firstChild ); 
		}
	}

}
*/


// REMOVED: Not used anymore
/*
function loadUser(username) {

	resetCleanroomFiles();

	CLEANROOM.username = username;
	
	// REMOVED:
	// Before this only happened after the user logs in, now it
	// has been moved to fire off when the user presses start()
	// loadFileAtURL(serversidescript + '?source=index.html&username=' + username, true);

	sqlQuery( // Update browser information for the currently logged in user
		'GET',
		serversidescript, 
		'UPDATE users SET browser="' + BrowserDetect.browser + '",version="' + BrowserDetect.version + '",os="' + BrowserDetect.OS + '" WHERE name="' + username + '"',
		null,
		true
	);
	sqlQuery( 
		'GET',
		serversidescript,
		'SELECT cleanroom FROM users WHERE name="' + CLEANROOM.username + '"',
		function(table) {
			var showHighlights = table[0][0];
			showHighlights = showHighlights == 0 ? false : true;
			CLEANROOM.showHighlights = showHighlights;
			var cleanroomfeatures = document.getElementsByClassName('cleanroomfeature');
			if(showHighlights) {
				for(var i = 0; i < cleanroomfeatures.length; i++)
					cleanroomfeatures[i].style.display = 'block';
			}
		},
		true
	);
		
	sqlQuery( // Get the focus log
		'POST',
		serversidescript,
		'SELECT focus FROM users WHERE name="' + CLEANROOM.username + '"',
		function(table) {
			var focus = JSON.parse(decodeURIComponent(decodeURIComponent(table[0][0])));
			CLEANROOM.focusLog = focus;
		},
		true
	);

	sqlQuery( // Get 'feedback' and populate #feedback with the response
		'POST',
		serversidescript,
		'SELECT feedback FROM users WHERE name="' + username + '"',
		function(result) {
			document.getElementById('feedback').value = decodeURIComponent(unescape(result[0][0]));
		},
		true
	);

	document.getElementById('savebutton').disabled = false;
	
	document.getElementById('legend').style.visibility = "visible";
	document.getElementById('instructions').style.visibility = "visible";

	CLEANROOM.canvas.focus();

}
*/

/*
function loadURL() {

	resetCleanroomFiles();
	
	var url = document.getElementById("editorURL").value;
	if(/(file|http).REMOVED_STAR_SIGN_HERE_FOR_COMMENTS_TO_WORK/.test(url)) {
	
	}
	else {
		var thisFolder = window.location.href.substr(0, window.location.href.lastIndexOf('/'));
		url = thisFolder + "/" + url;
	}

	loadFileAtURL(url, true);

}
*/

// REMOVED: Not used anymore. Most of it moved to CleanroomHandler.addNewFile(filename, content, activate)
/*
function addNewFile(url, activate, text, parent) {
	
	console.log("addNewFile(): ");
	
	if(parent == undefined) parent = null;
	
	// ?
	text = text.replace(/\t/g, "    ");
	
	// Gets the query & file & file-extension & URL strings respectively
	fromDatabase = false; // Changed this to, be sure to double check so it doesn't break anything.	
	filename = url.substr(url.lastIndexOf('/') + 1);
	// console.log(url);
	// console.log("addNewFile() filename: " . filename);
	
	if(fromDatabase) {
		var indexOfEquals = filename.indexOf('=');		
		filename = filename.substr(indexOfEquals + 1, filename.indexOf('&') - indexOfEquals - 1);
	}
	type = filename.substr(filename.lastIndexOf('.') + 1).toUpperCase();
	var baseURL = url.substr(0, url.lastIndexOf('/') + 1);

	// File holders is...hold the text temporarily for use later in the Bespin editor
	var fileHolders = document.getElementById('fileHolders');					
	var area = document.createElement('textarea');
	area.setAttribute('class', 'hiddenSource');
	area.setAttribute('id', filename + "Source");
	area.value = text;
	fileHolders.appendChild(area);
	
	// File tabs are where the files are displayed above the Besping editor
	var tabs = document.getElementById('fileTabs');					
	var tab = document.createElement('span');
	tab.setAttribute('class', 'tab');
	tab.setAttribute('id', filename + "Tab");
	tab.setAttribute('onclick', 'choose("' + filename + '");');
	tab.innerHTML = filename;
	tabs.appendChild(tab);
	console.log("addNewFile(): appending '" + filename + "' file in tabs");
				
	CLEANROOM.files[filename] = {
		name: filename,
		type: type, 
		identifiers: [], 
		dirty: true,
		base: baseURL,
		parent: parent,
		log: {
			highlightsOn: true,		// Whether this is the control or experimental condition
			initialText: text,		// The initial state of the file, so we can rebuild future states
			keystrokes: [],			// An array of all of the keystrokes made (see updateCleanroomHighlights for structure
			warnings: [],			// Warnings that are active in this file
			killedWarnings: [],		// Warnings that were active in this file, but aren't any longer.
		},
		timeBetweenKeystrokes: function(start, stop) {
		
			var keystrokes = this.log.keystrokes;
			if(start >= 0 && start < keystrokes.length && stop >= 0 && stop < keystrokes.length)
				return this.log.keystrokes[stop].time - this.log.keystrokes[start].time;
			else {							
				return -1;
			}
			
		},
		buryKilledWarnings: function(killed) {

			// Add the killed warnings to the killed warnings list, if the warning
			// had a "reasonable" lifespan.							
			for(var index = 0; index < killed.length; index++) {
				var warning = killed[index];
				var time = this.timeBetweenKeystrokes(warning.start, warning.stop);
				if(time > 2500 || time < 0) {
					this.log.killedWarnings.push(warning);
					console.log(warning.text + " was successfully buried (" + warning.kind + ")");
				}			
			} // done going through killed warnings		
		
		}
	};
	
	// Populate localStorage with the file
	localStorage.setObject("CRData", CLEANROOM.files);
	console.log("addNewFile(): Files saved in localStorage!");
	
	// ?
	if(activate) {
		console.error("This should not run...bummer");
		CleanroomHandler.changeActiveFile(filename);
	}
		
	// *
	// * REMOVED:
	// * This part of the function gets keystrokes & warnings from the database
	// * im not sure if this is needed but think instead that the warning is the only
	// * think that will remain and be found each time the file is loaded anew.
	// *
	// if(fromDatabase) {
	// 	sqlQuery( // Get keystrokes & warnings from USER + FILENAME
	// 		'POST',
	// 		serversidescript,
	// 		'SELECT keystrokes,activewarnings,inactivewarnings FROM files WHERE username="' + CLEANROOM.username + '" AND filename="' + filename + '"',
	// 		function(table) {
	// 			if(table == null) 
	// 				alert("Oops. Why couldn't we find a file with name " + filename + " for user " + CLEANROOM.username);
	// 			else {
	// 		
	// 				var keystrokes = JSON.parse(decodeURIComponent(decodeURIComponent(table[0][0])));
	// 				var warnings = JSON.parse(decodeURIComponent(decodeURIComponent(table[0][1])));
	// 				var killedWarnings = JSON.parse(decodeURIComponent(decodeURIComponent(table[0][2])));
	// 				CLEANROOM.files[filename].log.keystrokes = keystrokes;
	// 				CLEANROOM.files[filename].log.warnings = warnings;
	// 				CLEANROOM.files[filename].log.killedWarnings = killedWarnings;
	// 
	// 				document.getElementById('initializingUser').style.visibility = 'hidden';
	// 				
	// 				CLEANROOM.updateCleanroomHighlights(null, null);
	// 				
	// 			}
	// 
	// 		},
	// 		true
	// 	);
	// }		

}
*/

// REMOVED: not used anymore...
/*
function loadFileAtURL(url, filename, activate, parent) {

	var req;			
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		req = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (req != undefined) {
		req.onreadystatechange = function() {
			if(req.readyState == 4) {
				// Does DOM legwork and also adds it to localStorage.
				addNewFile(url, activate, req.responseText, parent);
			}
		};
		req.open("GET", url, true);
		req.send("");
	}
}  
*/

/**
 * login()	
 * Is called after the user enters their name and wants to login.
 * Checks if the user exists and if it doesnt it prompts the user to enter 
 * information so new user tuple can be added to the database.
 */

/*
function login() {

	var username = document.getElementById('usernamefield').value;
    
    // If a username has been entered
	if(username == null || username == "") {
		document.getElementById('loginerror').innerHTML = "<span style='color:red'>Oops. I need a user name, otherwise I don't know where to store your files.</span>";
	}
	else if(username.match(/^[a-zA-Z0-9]+$/) == null) {
		document.getElementById('loginerror').innerHTML = "<span style='color:red'>Oops. Usernames can only contain letters and numbers.</span>";
	}
	else {
	
		CLEANROOM.username = username;

		document.getElementById('login').style.visibility = "hidden";
	
		// Does this user name exist? If not, make a new user
		sqlQuery( // Get user name, if not exists > show 'newuser' div
			'GET',
			serversidescript, 
			'SELECT name FROM users WHERE name="' + username + '"',
			function(result) {
				if(result == null) {
					document.getElementById('newuser').style.visibility = "visible";
				}
				else {
					document.getElementById('initializingUser').style.visibility = 'visible';
					loadUser(username);
				}					
			},
			true
		);
				
	}

}
*/

// REMOVED: No need for 'saving'....so pre-localStorage :)
/*
function save() {
	console.log("save(): I'm being used!");

	var username = CLEANROOM.username;
	
	if(username == "") return;

	document.getElementById('savingFiles').style.visibility = "visible";

	var filesToSave = 0;

	for(var file in CLEANROOM.files) {
		if(CLEANROOM.files.hasOwnProperty(file)) {

			filesToSave++;

			// First, make sure the text area is up to date.		
			if(CLEANROOM.activeFile == file) {
				document.getElementById(CLEANROOM.activeFile + "Source").value = bespin.getContent();
			}
			var text = encodeURIComponent(document.getElementById(file + "Source").value);				
			
			var log = CLEANROOM.files[file].log;
			var keystrokes = encodeURIComponent(JSON.stringify(log.keystrokes));
			var warnings = encodeURIComponent(JSON.stringify(log.warnings));
			var killedWarnings = encodeURIComponent(JSON.stringify(log.killedWarnings));

			// Save the text to the db.
			sqlQuery( // Update file text with the associated keystrokes + warnings
				'POST',
				serversidescript,
				'UPDATE files SET text="' + text + 
					'", keystrokes="' + keystrokes + 
					'", activewarnings="' + warnings +
					'", inactivewarnings="' + killedWarnings +
					'" WHERE filename="' + file + '" AND username="' + username + '"',
				function(result) {
				
					filesToSave--;
					
					if(filesToSave == 0) {
						document.getElementById('savingFiles').style.visibility = "hidden";
						if(CLEANROOM.waitingToPreview == true) {
							reallyShowPreview();
							CLEANROOM.waitingToPreview = false;
						}
					}
				
				},
				true
			);
											
		}
	
	}
	
	var focus = encodeURIComponent(JSON.stringify(CLEANROOM.focusLog));
	sqlQuery( // Update the users focus from CLEANROOM.focusLog (@TODO: grows each time?)
		'POST',
		serversidescript,
		'UPDATE users SET focus="' + focus + '" WHERE name="' + username + '"',
		null,
		true
	);

	var feedback = document.getElementById('feedback').value;
	sqlQuery( // Update the feedback that has been filled out by the user. The same each time and grows. (@TODO: Keep this?)
		'POST',
		serversidescript,
		'UPDATE users SET feedback="' + encodeURIComponent(feedback) + '" WHERE name="' + username + '"',
		null,
		true
	);

	document.getElementById('savebutton').disabled = true;

}
*/

// var htmlDone = false, cssDone = false, jsDone = false, usernameDone = false;

/*
   loadNuewUserIfDone(string username)
   This function checks each time it is called if certain boolean vars are true
   to indicate files finished loading. It is called on a successfull initilizeNewUser(...).
   It is also called after each successfull file has been loaded using addNewFileForUser(...).
*/
/*
function loadNewUserIfDone(username) {	
	// If all of the files are initialized, then load the user!
	if(htmlDone && cssDone && jsDone && usernameDone) {
		loadUser(username);
	}	
}
*/

/*
   REMOVED:	 

   initializeNewUser(string username)
   Create new user tuple in DB and populate it with initial values.
   Also loads unsolved code file templates for the user to start out with.
 */
/*
function initializeNewUser(username) {
    
	console.log('intializeNewUser():');
    // Hide new user input div
	document.getElementById('newuser').style.visibility="hidden";
	// Shows a little "loading" type div
	document.getElementById('initializingUser').style.visibility = 'visible';
    
	var showWarnings = (new Date()).getSeconds() % 2;
    
    // Var for the new user input pertaining experience with javasript (@TODO: Keep the experience stuff?)
	var jsexperience = "";
	for(var i = 0; i < document.userdata.jsexperience.length; i++) {
		if(document.userdata.jsexperience[i].checked)
			jsexperience = document.userdata.jsexperience[i].value;
	}

	// REMOVED:
	// This part creates a new user and then loads the 3 initial files from the server.
	//
	// // Make a new user
	// sqlQuery( // Create new user and load it to the current 'session' if creation is done
	// 	'GET', 
	// 	serversidescript, 
	// 	'INSERT INTO users (name,cleanroom,focus,jsexperience,starttime) VALUES (' + 
	// 		'"' + username + '", ' + 
	// 		showWarnings + ', ' + 
	// 		'"' + encodeURIComponent(JSON.stringify([])) + '"' + ',' +
	// 		'"' + jsexperience + '"' + ',' +
	// 		'"' + (new Date()).getTime() + '"' +
	// 		')',
	// 	function(result) {
	// 		usernameDone = true;
	// 		loadNewUserIfDone(username);
	// 	},
	// 	true
	// );


	// REMOVED: 
	// Moved this to another function that takes care of loading the files for new users.
	//
	// // Initialize the three files for this user
	// AJAXRequest(
	// 	"GET", "calculator/unsolved/index.html", "", 
	// 	function(result) { 
	// 		result = result.replace(/INSERTUSERNAMEHERE/g, username);
	// 		addNewFileForUser(username, 'index.html', result);
	// 	},
	// 	true
	// );
	// 
	// AJAXRequest(
	// 	"GET", "calculator/unsolved/style.css", "", 
	// 	function(result) { 
	// 		addNewFileForUser(username, 'style.css', result); 
	// 	}, 
	// 	true
	// );
	// 
	// AJAXRequest(
	// 	"GET", "calculator/unsolved/code.js", "", 
	// 	function(result) { 
	// 		addNewFileForUser(username, 'code.js', result); 
	// 	}, 
	// 	true
	// );
	
	// Note that addNewFileForUser() is responsible for loading the user 
	// once the files are finished being initialized.
	
}
*/


/*
// REMOVED: Not in use anymore.
function addNewFileForUser(username, filename, text) {

	console.log('addNewFileForUser():');
	
	var emptyArray = encodeURIComponent(JSON.stringify([]));

	text = encodeURIComponent(text);

	
	sqlQuery( // Create new entry to add the new file, with initial text, and get its new file ID
		'POST',
		serversidescript,
		'INSERT INTO files (username, filename, text, initialtext,keystrokes,activewarnings,inactivewarnings) VALUES ("' + 
			username + '", "' + 
			filename + '", "' + 
			text + '", "' + 
			text + '", "' + 
			emptyArray + '", "' + 
			emptyArray + '", "' + 
			emptyArray + 				
			'")',
		function(result) {
		
			if(filename == 'index.html') htmlDone = true;
			else if(filename == 'style.css') cssDone = true;
			else if(filename == 'code.js') jsDone = true;

			loadNewUserIfDone(username);
		
		},
		true
	);

}
*/

/*
function showPreview(username) {
function reallyShowPreview() {
	console.log('reallyShowPreview():');
	
	var username = CLEANROOM.username;
	CLEANROOM.previewFlag = true;
	window.open(serversidescript + '?preview=true&source=index.html&username=' + username, 'preview for ' + username, 'width=640,height=480');
}
*/

/* ## CLEANUP: Gets called when Bespin loads. It gets the current test results and updates the
function updateSuccess() {

	var username = CLEANROOM.username;

	sqlQuery( // Get test success information and populate test divs.
		'GET',
		serversidescript,
		'SELECT cleartest,addtest,subtracttest,multiplytest,dividetest FROM users WHERE name="' + username + '"',
		function(result) {
		    // Why is this here? Can this function get called without the user being logged in?
		    // And 8 rows up 'var username' is used not 'CLEANROOM.username'
			if(CLEANROOM.username == "") return;
			var clear = result[0][0] == "true";
			var add = result[0][1] == "true";
			var subtract = result[0][2] == "true";
			var multiply = result[0][3] == "true";
			var divide = result[0][4] == "true";
			
			var red = "rgb(255,100,100)";
			var green = "rgb(100,255,100)";
			
			document.getElementById('clearResult').style.backgroundColor = (clear ? green : red);
			document.getElementById('clearResult').innerHTML = clear ? "<i>clear</i> test passed" : "<i>clear</i> test failed";
			
			document.getElementById('addResult').style.backgroundColor = (add ? green : red);
			document.getElementById('addResult').innerHTML = add ? "<i>+</i> test passed" : "<i>+</i> test failed";

			document.getElementById('subtractResult').style.backgroundColor = (subtract ? green : red);
			document.getElementById('subtractResult').innerHTML = subtract ? "<i>&ndash;</i> test passed" : "<i>&ndash;</i> test failed";

			document.getElementById('multiplyResult').style.backgroundColor = (multiply ? green : red);
			document.getElementById('multiplyResult').innerHTML = multiply ? "<i>&times;</i> test passed" : "<i>&times;</i> test failed";

			document.getElementById('divideResult').style.backgroundColor = (divide ? green : red);
			document.getElementById('divideResult').innerHTML = divide ? "<i>&divide;</i> test passed" : "<i>&divide;</i> test failed";

			if(CLEANROOM.showedSuccessDialog == false && clear && add && subtract && multiply && divide) {
				CLEANROOM.showedSuccessDialog = true;
				document.getElementById('successDialog').style.visibility = "visible";
			}
		},
		true
	);

}
*/

/* ## CLEANUP When the user has cleared the tests a div pops up and prompts
      for an email address, when the hits submit this function gets called.
function submitSuccess() {

	var email = document.getElementById('email').value;

	sqlQuery( // Update user tuple with email if successful in doing all the tests.
		'POST',
		serversidescript,
		'UPDATE users SET ' + 
			'email="' + encodeURIComponent(email) + '"' + 
			' WHERE name="' + CLEANROOM.username + '"',
		function(result) {
			document.getElementById('successDialog').style.visibility = "hidden";
		},
		true
	);

}
*/
