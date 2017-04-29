function AJAXRequest(method, url, args, whatToDo, asynchronous) {

	var xmlHttp = getXMLHttp();

	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4 && (method == 'GET' || (method == 'POST' && xmlHttp.status == 200))) {

			// save response text
			var theResponse = xmlHttp.responseText;
			if(whatToDo != null)
				// use callback function if specified
				whatToDo.call(null, theResponse);

		}
	};

	if(method == "GET") {

		xmlHttp.open("GET", url + "?" + args, asynchronous);
		xmlHttp.send(null);
		
	} else if(method == "POST") {
	
		xmlHttp.open("POST", url, asynchronous);
		xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
/*
		xmlHttp.setRequestHeader("Content-length", args.length);
		xmlHttp.setRequestHeader("Connection", "close");
*/
		xmlHttp.send(args);
	
	}

}


// Gets an XMLHttp object in a platform-independent manner
function getXMLHttp() {

	var xmlHttp;

	//Firefox, Opera 8.0+, Safari
	try { xmlHttp = new XMLHttpRequest(); }
	//Internet Explorer
	catch(e) {
		try {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e) {
			try { xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); }
			catch(e) { 
				alert("Your browser does not support AJAX!"); 
				return false; 
			}
		}
	}
	return xmlHttp;

}

function sqlQuery(method, url, query, callback, asynchronous) {
	
	AJAXRequest(
		method,
		url,
		"sql=" + escape(query), 
		function(response) {
			if(callback) {
				if(response == undefined) {
					console.log("[Server] the response from the server came back undefined");
				}
				else if(response.match(/^error/)) {
					console.log('[Server] ' + response); 
				}
				else {
					// call the callback function with the response as an JSON parsed argument
					callback.call(this, JSON.parse(response)); 
				}
			}
		},
		asynchronous
	);

}