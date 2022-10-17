// This was a tricky character to choose. I want to use it in line ids, but that meant it couldn't conflict with jQuery selector syntax or be a legal file name character. It is legal in OS X, actually, but not likely used for source files.
var LINE_PATH_SEPARATOR = '-';

$(document).ready(function() {

	var selectedDecision = null;

	if(feedlack.parsingerrors.length > 0) {

		$('#parsingerrors').append(
			$('<p>').html("Oops. Feedlack had some <span class='result'>problems parsing your code</span>. You'll want to fix these before Feedlack will look for feedback problems.")
		);

		for(var i = 0; i < feedlack.parsingerrors.length; i++) {

			$('#parsingerrors').append(
				$('<p>').addClass('result').text(feedlack.parsingerrors[i])
			);
		
		}

	}
	else 
		constructViews();

		
});

function constructViews() {

	$('#project').html("project <b>" + feedlack.project + "</b>");

	var firstHandlerMissingFeedback = null;

	///////////////////////////////////////
	//
	// Give some overview information.
	//
	///////////////////////////////////////
/*	
	var handlersMissingFeedback = 0;
	for(var handlerNumber = 0; handlerNumber < feedlack.handlers.length; handlerNumber++) {
		if(feedlack.handlers[handlerNumber].numberLacking > 0)
			handlersMissingFeedback++;
	}
	var handlersProvidingFeedback = feedlack.handlers.length - handlersMissingFeedback;
		
	$('#overview').append(
		$("<p></p>").
		html("Feedlack found <span class='result'>" + feedlack.handlers.length + "</span> places that handle user input. <p>Of these, <span class='result'>" + handlersMissingFeedback + "</span> appear to lack feedback in some situations.</p>")
	)
*/

	///////////////////////////////////////
	//
	// Show all of the clusters
	//
	///////////////////////////////////////
	$('#clusters').append(
		$("<p></p>").
		html("Feedlack found <span class='result'>" + feedlack.clusters.length + "</span> places in your code that appear to be missing feedback:"
		)
	);

	var firstClusterView = null;

	for(var clusterNumber = 0; clusterNumber < feedlack.clusters.length; clusterNumber++) {
	
		var shortClusterView = createShortClusterView(feedlack.clusters[clusterNumber]);
		if(firstClusterView == null) firstClusterView = shortClusterView;
		$('#clusters').append(shortClusterView);
		
	}

	// Construct file views for each file.
	for(var i = 0; i < feedlack.files.length; i++) {

		var fileView = constructSource(feedlack.files[i]);
	
		$('#files').append(fileView);

		fileView.hide();

	}

	// Listen to all of the clicks on file locations.
	registerLocationHandlers();

	// Show the line of the first handler displayed.
/*
	if(firstHandlerMissingFeedback != null)
		showLine(firstHandlerMissingFeedback);
*/

	$(document).keydown(function(event) {
		// Up
		if(event.keyCode == '38') { 		
			if(clickLocationIndex(getSelectedLocationIndex() - 1))
	 			event.preventDefault();
 		}
 		// Down
		if(event.keyCode == '40') { 
			if(clickLocationIndex(getSelectedLocationIndex() + 1))
	 			event.preventDefault();
		}
	
	});

	if(firstClusterView != null)
		showCluster($(firstClusterView));

}

function getSelectedLocationIndex() {

	var currentNumber = -1;
	$('#detail .location').each(function(index) {
		if($(this).hasClass('selected')) {
			currentNumber = index;
		}			
	});
	
	return currentNumber;

}

function clickLocationIndex(desiredIndex) {

	var success = false;
	$('#detail .location').each(function(index) {
		if(index == desiredIndex) {
			$(this).click();
			$('#detail').animate({scrollTop: $(this).position().top + $('#detail').scrollTop() - $('#detail').height() / 2 }, 0);
			success = true;
		}			
	});
	
	return success;

}

function getClusterDescription(cluster) {

	if(cluster.criticalDecisions.length > 0) {

		var result = cluster.isLackingOutput ? "may not produce feedback" : "only produces feedback in certain situations";
		var location = cluster.criticalDecisions[0].location;
		var functionDescription = cluster.criticalDecisions[0].functionName;

	}
	else {

		var result = cluster.isLackingOutput ? "may not produce feedback" : "only produces feedback in certain situations";
		var location = cluster.inputHandlers[0].location;
		var functionDescription = "";

	}
	
	return functionDescription + " at " + getReadableLocation(location);

}

function createShortClusterView(cluster) {

	var newShortClusterView = $("<div></div>").
		addClass('cluster').
		addClass('selectable').
		data(cluster);
	
	if(cluster.criticalDecisions.length > 0) {

		var result = cluster.isLackingOutput ? "may not produce feedback" : "only produces feedback in certain situations";

	}
	else {

		var result = cluster.isLackingOutput ? "may not produce feedback" : "only produces feedback in certain situations";

	}
	
	var lineView = 
		$('<span>').
		addClass('location').
		html(getClusterDescription(cluster)).
		data(cluster);
	
	newShortClusterView.append(lineView);
	
	newShortClusterView.append(
	 	$('<span>').
		addClass('result').
		text(' ' + result)
	);

	newShortClusterView.click(function() {
		var subject = $(this);	
		showCluster(subject);
	});
		
	return newShortClusterView;

}

function getWarningMessage(handler) {


	var result = "";

	if(handler.numberLacking == 0)
		result = 'always produces feedback.';
	else if(handler.numberProducing == 0)
		result = 'may not produce feedback.';
	else if(handler.pathsAreLacking)
		result = 'may not produce feedback in ' + handler.paths.length + ' situations.';
	else
		result = 'only produces feedback in ' + handler.paths.length + ' situations.';
	
	return result;

}

function constructHandler(handler) {

	var newHandler = $("<div></div>").
		addClass('handler').
		data(handler);

	var result = getWarningMessage(handler);
	
	var handlerLine = 
		$('<span>').
		addClass('location').
		html(handler.name + " at " + getReadableLocation(handler.location)).
		data(handler);
	
	newHandler.append(handlerLine);
	
	newHandler.append(
	 	$('<span>').
		addClass('result').
		text(' ' + result)
	);

	return [ newHandler, handlerLine ];

}

function constructSource(file) {

	var newFile = $("<div></div>").
		addClass('file').
		attr('id', file.path);
	
	var lines = file.lines;
	
	for(var lineNumber = 0; lineNumber < lines.length; lineNumber++) {
		
		var newLine = $("<pre></pre>").
			addClass('line').
			addClass('selectable').
			attr('id', file.path + LINE_PATH_SEPARATOR + (lineNumber + 1)).
			text((lineNumber + 1) + "  " + lines[lineNumber]);

		newFile.append(newLine);
		
	}
	
	return newFile;

}

function showLine(handler) {

	if(!handler.data().hasOwnProperty('location')) {
		console.log("Object has no location property: " + handler);
		return;
	}

	if(handler.hasOwnProperty("decisionView")) {
	
		SELECTED_DECISION = handler.decisionView;
		console.log("Blah");
	
	}

	var location = handler.data().location;
	path = location.substring(0, location.lastIndexOf(LINE_PATH_SEPARATOR));
		
	var fileView = $('#' + path);
		
	$(".file").not(fileView).hide();
	$(".location").removeClass('selected');

	handler.addClass('selected');

	if(fileView.is(':visible'))	{
		fileView.show();
	}
	else
		fileView.show(250);

	var lineView = $('#' + location);

	fileView.animate({scrollTop: (lineView.position().top + fileView.scrollTop()) - fileView.height() / 2 }, 250);

	// Remove the background color on all 
	$('.line').removeClass('selected');
	lineView.addClass('selected');
	
	if(handler.data().hasOwnProperty('paths'))
		showWarning(handler.data());
		
}

function getReadableLocation(location) {
	
	var lastHyphen = location.lastIndexOf(LINE_PATH_SEPARATOR);
	var line = location.substring(lastHyphen + 1);
	var rest = location.substring(0, lastHyphen);
	lastHyphen = rest.lastIndexOf(LINE_PATH_SEPARATOR);
	var extension = rest.substring(lastHyphen + 1);
	rest = rest.substring(0, lastHyphen);
	lastHyphen = rest.lastIndexOf(LINE_PATH_SEPARATOR);
	var file = rest.substring(lastHyphen + 1);
	
	return file + "." + extension + " <span class='linenumber'> " + line + "</span>";
	
}

function showCluster(clusterView) {

	var cluster = clusterView.data();

	var previousDecision = null;

	$('.cluster').removeClass('selected');
	clusterView.addClass('selected');

	// Get the warning detail view and empty it.
	var detail = $('#detail');	
	detail.empty();
	
	detail.append($('<h1>').html(getClusterDescription(cluster)));

	var when = $("<p></p>");
	when.append("When the user performs a ");
	var handlerList = $("<ul></ul>");
	var firstHandler = null;
	for(var handlerNumber = 0; handlerNumber < cluster.inputHandlers.length; handlerNumber++) {
	
		var handler = cluster.inputHandlers[handlerNumber];
		
		handlerView =
			$("<span></span>").
			addClass('selectable').
			addClass('location').
			html("<span class='code'>" + handler.event + "</span>" + " (" + getReadableLocation(handler.location) + ")").
			data(handler);
		
		handlerView.data(handler);
		
		if(handlerNumber < cluster.inputHandlers.length - 1)
			handlerView.append(", ");
		if(handlerNumber == cluster.inputHandlers.length - 2)
			handlerView.append(" or ");
			
		handlerList.append($("<li></li>").append(handlerView));	
		
		if(firstHandler == null)
			firstHandler = handlerView;
		
	}

	when.append(handlerList);

	if(cluster.isLackingOutput)
		when.append($("<p>this path <span class='result'>may fail to produce output:</span></span>"));
	else
		when.append($("<p>this is <span class='result'>the only path that produces output</span></span>:"));
	

	detail.append(when);
	
	var list = $('<ol></ol>');

	for(var decisionNumber = 0; decisionNumber < cluster.criticalDecisions.length; decisionNumber++) {
	
		var decision = cluster.criticalDecisions[decisionNumber];
		var decisionView = createDecisionView(decision, previousDecision);
		previousDecision = decisionView;
		list.append(decisionView);
	
	}

	var nextDecisionNumberOfIntersection = decisionNumber + 1;

	detail.append(list);
	
	if(cluster.outgoing.length == 0) {
		
	}
	else if(cluster.outgoing.length == 1) {
	
		for(var decisionNumber = 0; decisionNumber < cluster.outgoing[0].decisions.length; decisionNumber++) {
		
			var decision = cluster.outgoing[0].decisions[decisionNumber];
			var decisionView = createDecisionView(decision, previousDecision);
			previousDecision = decisionView;
			list.append(decisionView);			
		
		}
	
	}
	else {

		detail.append($("<p>From here, the program may go <span class='result'>one of " + cluster.outgoing.length + " ways</span>:</p>"));
	
		for(var pathNumber = 0; pathNumber < cluster.outgoing.length; pathNumber++) {
		
			detail.append($("<h2>path " + (pathNumber + 1) + "</h2>"));		

			var pathView = $("<ol></ol>");
			pathView.attr("start", nextDecisionNumberOfIntersection);
			var path = cluster.outgoing[pathNumber].decisions;
			for(var decisionNumber = 0; decisionNumber < path.length; decisionNumber++) {
			
				var decision = path[decisionNumber];
				var decisionView = createDecisionView(decision, previousDecision);
				previousDecision = decisionView;
				pathView.append(decisionView);
			
			}
			
			detail.append(pathView);
		
		}
	
	}

	// Listen to all of the clicks on file locations.
	registerLocationHandlers();
	
	showLine(firstHandler);

}

function showWarning(handler) {

	var detail = $('#detail');
	
	detail.empty();
	
	detail.append($('<h1>').html(handler.name + " at " + getReadableLocation(handler.location)));

	var calls = $('<div>');

	calls.append($('<p>').text('this handler appears to be called in ' + handler.callers.length + (handler.callers.length == 1 ? " place" : " places") + ' ...'));

	for(var callerNumber = 0; callerNumber < handler.callers.length; callerNumber++) {

		calls.append(
			$("<p></p>").
			addClass('location').
			text("when users " + handler.callers[callerNumber].event + "...").
			data(handler.callers[callerNumber])
		);
	
	}

	var result = "";

	if(handler.numberLacking == 0)
		result = 'appears to <span class="result"> always produce feedback</span>.';
	else if(handler.numberProducing == 0)
		result = 'may not produce feedback because the none of the calls and assignments it makes <span class="result">appear to affect output</span>.';
	else if(handler.pathsAreLacking)
		result = 'may not produce feedback <span class="result"> in ' + (handler.paths.length == 1 ? ' this situation ' : ' the following ' + handler.paths.length + ' situations') + '</span>.';
	else
		result = '<span class="result">only produces feedback in ' + (handler.paths.length == 1 ? ' this situation' : ' the following ' + handler.paths.length + ' situations') + '</span>; all other paths may lack feedback.';
	

	detail.append($('<p>').html("This function " + result));

	if(handler.paths.length >= 1 && handler.paths[0].decisions.length > 0) {

		for(var i = 0; i < handler.paths.length; i++) {
		
			var pathObject = handler.paths[i];
			var path = pathObject.decisions;
			var likelihood = pathObject.likelihood;
		
			var pathView = $('<div>');
			pathView.append($('<h2>').text('path ' + (i + 1)));

			pathView.append($('<span>').html('this function produces <span class="result"> ' + (handler.pathsAreLacking ? 'no' : '') + ' feedback when...</span>'));
			
			var list = $('<ol>');
			
			for(var j = 0; j < path.length; j++) {
		
				var decision = path[j];
				var decisionView = createDecisionView(decision);	
				list.append(decisionView);			
			
			}

			pathView.append(list);	
			
			detail.append(pathView);
			
		}
		
	}
	else if(handler.numberProducing == 0) {
	
		var assignments = handler.assignments;
		var calls = handler.calls;
	
		if(assignments.length > 0) {
		
			var list = $('<ol>');
		
			for(var ass = 0; ass < assignments.length; ass++) {
			
				var locationView =
					$('<span>').
					addClass('location').
					html(getReadableLocation(assignments[ass].location)).
					data(assignments[ass])
				;
				
				var assignmentView =
					$('<li>').html("property <b>" + assignments[ass].name + "</b> <span class='result'>doesn't affect output</span> ").append(locationView);
				
				list.append(assignmentView);
			
			}
		
			detail.append($('<p>').text("Here are the properties modified in the function."));	
			detail.append(list);
		
		}
		
		if(calls.length > 0) {
		
			var list = $('<ol>');
		
			for(var call = 0; call < calls.length; call++) {
			
				var locationView =
					$('<span>').
					addClass('location').
					html(getReadableLocation(calls[call].location)).
					data(calls[call])
				;

				var note = "doesn't affect output";
				if(calls[call].extra != null)
					note = calls[call].extra;
				

				var callView =
					$('<li>').html("the call to function <b>" + calls[call].name + "()</b> <span class='result'>" + note + "</span> ").append(locationView);
				
				list.append(callView);
			
			}

			
			detail.append($('<p>').text("Here are the functions called in this function:"));	
			detail.append(list);
		
		}
		
	
	}
	
//	detail.append(calls);

	// Re-register the event with all locations.
	registerLocationHandlers();

}

function createDecisionView(decision, previous) {

	var decisionView = $('<li></li>');

	var decisionDescription = 
		(decision.kind == 'conditional' ? 
			"the expression at " :
			decision.kind == 'invocation' ?
			('<span class="code">' + decision.decision + "</span> is called ") : 
			decision.kind == 'enter' ?
			('<span class="code">' + decision.decision + "()</span> is entered ") : 
			decision.kind == 'exit' ?
			('<span class="code">' + decision.decision + "()</span> is exited ") : 
			decision.kind == 'case' ?
			('<span class="code">' + decision.decision + "</span> is chosen ") : 
			decision.kind == 'output' ?
			('<span class="code">' + decision.decision + "</span> <span class=''>" + decision.reason + "</span> ") :
			decision.kind == 'exception' ?
			('<span class="code">' + decision.reason + "</span> ") :
			decision.kind == 'calls' ?
			('<span>' + decision.decision + "</span> ") :
			"unknown ");

	decisionView.append($('<span>').html(decisionDescription));
	var locationView = 
		$('<span>').
			addClass('location').
			addClass('selectable').
			html(getReadableLocation(decision.location)).
			data(decision);
	
	if(decision.kind != 'calls')
		decisionView.append(locationView);
	
	if(decision.kind == 'exit')
		decisionView.append($('<span class="result"> without producing output</span>'));
	
	if(decision.kind == 'conditional')
		decisionView.append($('<span>').html(" is <span class='result'>" + decision.decision + "</span>"));
		
	if(decision.kind == 'calls')
		decisionView.append($('<span class="result">' + decision.reason + "</span>"));
	
		
	if(decision.likelihood == "MAYBE")
		decisionView.append($("<span>, which may not affect output</span>").addClass('result'));	
	else if(decision.likelihood == "YES" && decision.isNative)
		decisionView.append($("<span> affects output</span>").addClass('result'));	

	// If there's an assumption, translate it's message string into a sequence of spans, where $# is 
	// replaced by the corresponding location in the assumption's location list.
	if(decision.assumption != null) {
	
		var assumptionString = decision.assumption.message;
		
		// Create a span to contain all of these spans.
		var assumptionView = $('<div class="assumption">assumes </div>');
		
		var digits = "0123456789";
		
		// Keep looking for an occurence of a $ until there are no more.
		while(assumptionString.indexOf('$') >= 0) {
		
			var dollarIndex = assumptionString.indexOf('$');
			var dollarPrefix = assumptionString.substring(0, dollarIndex);
			assumptionString = assumptionString.substring(dollarIndex + 1);
			
			var prefixView = $('<span>' + dollarPrefix + '</span>');
			assumptionView.append(prefixView);
			
			// Find all of the digits. Skip the $.
			for(var indexAfterLastDigit = 0; 
				digits.indexOf(assumptionString.charAt(indexAfterLastDigit)) >= 0 && indexAfterLastDigit < assumptionString.length; 
				indexAfterLastDigit++) {}

			if(indexAfterLastDigit == 0)
				alert("oops, bug somewhere: there wasn't at least one digit after the $ in the assumption message");

			var numberString = assumptionString.substring(0, indexAfterLastDigit);
			assumptionString = assumptionString.substring(indexAfterLastDigit);
			
			var locationNumber = parseInt(numberString);

			if(locationNumber > decision.assumption.locations.length)
				alert("oops, there was a reference to a location number greater than the number supplied.");

			var location = decision.assumption.locations[locationNumber - 1];
		
			var locationView = 
				$('<span>').
				addClass('location').
				html(location.description).
				data(location);
				
			assumptionView.append(locationView);		
		
		}
		
		// Take whatever text is left and add a view.
		assumptionView.append($('<span>' + assumptionString + '</span>'));
		
		decisionView.append(assumptionView);
	
	}

	if(previous && previous != null) {
	
		previous.nextDecision = decisionView;
		decisionView.previous = previous;
	
	}
	
	return decisionView;

}

function registerLocationHandlers() {

	// Unbind, then rebind all line handlers.
	$(".location").unbind('click');
	$(".location").click(function () { 
		var subject = $(this);
		showLine(subject); 
	});

}
