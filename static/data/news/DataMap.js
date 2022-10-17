// Written by: Neeraja Duriseti, August 2012.

// loads the necessary Google API's
google.load('visualization', '1.0');
google.load('visualization', '1.0', {'packages': ['geochart']});
	
var GEOMAP = undefined;

var SELECTED_STORYID = "";

var clicked = false;

// These are global variables
var STORY_COUNTS_BY_COUNTRY = {};
var STORY_COUNTS_BY_YEAR = {};
var STORY_IDS_BY_YEAR = {}; 		// This is a dictionary of arrays: { 1981: [ 3234,2535,2333], 1982: [ 2343, 2342, 535] ... }
var ARTICLE_COUNTS_BY_STORY_ID = {};
var RENDERED_STORY_IDS_BY_YEAR = {};

var GEOMAP_OPTIONS = {
	dataMode: 'regions',
	colorAxis: {colors: ['#FFE545','#FF041F']},
	datalessRegionColor: '#FFFFFF'
};

//	printing colors
//	GEOMAP_OPTIONS['colorAxis'] = {colors:['rgb(255,150,150)','rgb(100,0,0)']};
//	GEOMAP_OPTIONS['datalessRegionColor'] = 'rgb(255,255,255)';
 
//	loads the csv
$(document).ready(function() {

	GEOMAP = new google.visualization.GeoChart(document.getElementById('map_canvas'));
	
	google.visualization.events.addListener(GEOMAP, 'error', function (id, message) {
		console.log("GeoChart error" + message);
	});
	
	$.ajax({
		url: 'data.csv',
		dataType: 'text'
	}).done(function(data) { 
		data = jQuery.trim(data);
		var table = CSVToArray(data, ",");
		
		// Count the frequencies of things
		createFrequencyTables(table);
		
		// Create a data table for Google's map visualization
		var countryTable = createCountryDataTable();
		
		// Draw the map with the data
		GEOMAP.draw(countryTable, GEOMAP_OPTIONS);

		// Draw the timeline					
		timeline();
		
		var updateTimelineAndStorySelection = function(e) {
		
			// calculates the x position of the mouse's drag on the timeline
			var x = e.pageX - this.offsetLeft;
			if (clicked == true) {
				timeline();
				displayInfo(x, table);
			}
		
		}
		
		// checks whether the mouse is down on the timeline
		$("#timeline").mousedown(function() { clicked = true; });
		$("#timeline").mousedown(updateTimelineAndStorySelection);

		// Displays each story's information when dragged on the timeline
		$("#timeline").mousemove(updateTimelineAndStorySelection);

		$("#timeline").mouseup(function() {
			clicked = false;
			getHeads(SELECTED_STORYID);
		});

		// Displays each story's infromation when clicked on the timeline
		$("#timeline").click(function(e) {

			e.stopPropagation();
		
		});

		// Displays original map when you click out of the timeline
		$('body').click(function(event) {
			if(!$(event.target).is('#timeline')) {
				GEOMAP.draw(countryTable, GEOMAP_OPTIONS);
				$("#storyDisplay").html("");
				timeline();
			}
		});
		
		$(window).resize(function() {
			GEOMAP.draw(countryTable, GEOMAP_OPTIONS);
			timeline();
		});
		
		$('#loading').hide();
		
	}).fail(function(jqXHR, textStatus, errorThrown) {
		console.log(textStatus + errorThrown);
	});
		
});
	
	
	
// creates datatables to acceptable format for drawing
function createCountryDataTable() {

	var countryTable = new google.visualization.DataTable();
	countryTable.addColumn('string', 'Country');
	countryTable.addColumn('number', 'Total Stories per Country');
	for (var key in STORY_COUNTS_BY_COUNTRY) {
		countryTable.addRow([key, STORY_COUNTS_BY_COUNTRY[key]]);
	}
	
	return countryTable;

}

// maps how many stories total each country and each year has
function createFrequencyTables(table) {

	STORY_COUNTS_BY_COUNTRY = {};
	STORY_COUNTS_BY_YEAR = {};
	STORY_IDS_BY_YEAR = {}; 
	ARTICLE_COUNTS_BY_STORY_ID = {};
	
	if(table.length <= 1)
		console.log("Something is wrong, the data table as 0 or 1 elements.");

	for(var story = 1; story < table.length; story++) {
	  
		var row = table[story];
		var storyID = row[0];
		var countryString = row[1];
		var countries = countryString.split('|');
		var date = row[2];
		var year = parseInt(date.split('/')[2]);
		var articleCount = row[3];
		
		// Add one to article count for year
		ARTICLE_COUNTS_BY_STORY_ID[storyID] = parseInt(articleCount);
		
		// Add one to the count of stories for this year
		if(year in STORY_COUNTS_BY_YEAR)
			STORY_COUNTS_BY_YEAR[year] = STORY_COUNTS_BY_YEAR[year] + 1;						
		else
			STORY_COUNTS_BY_YEAR[year]	= 1;

		// Add the story ID to the list of stories for the year of this story
		if(year in STORY_IDS_BY_YEAR) {
			STORY_IDS_BY_YEAR[year].push(storyID);
		} else {
			STORY_IDS_BY_YEAR[year] = [storyID];		
		}

		
		// Add one to the tallies for all of the countries in this story
		for(var i = 0; i < countries.length; i++) {
  
			var country = countries[i];
			if(country in STORY_COUNTS_BY_COUNTRY)
				STORY_COUNTS_BY_COUNTRY[country] = STORY_COUNTS_BY_COUNTRY[country] + 1;
			else
				STORY_COUNTS_BY_COUNTRY[country] = 1;
			  
		}
	}
	 
}
			
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.
function CSVToArray( strData, strDelimiter ){
	// Check to see if the delimiter is defined. If not,
	// then default to comma.
	strDelimiter = (strDelimiter || ",");

	// Create a regular expression to parse the CSV values.
	var objPattern = new RegExp(
		(
			// Delimiters.
			"(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

			// Quoted fields.
			"(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

			// Standard fields.
			"([^\"\\" + strDelimiter + "\\r\\n]*))"
		),
		 "gi"
	);
			
			
	// Create an array to hold our data. Give the array
	// a default empty first row.
	var arrData = [[]];

	// Create an array to hold our individual pattern
	// matching groups.
	var arrMatches = null;

	// Keep looping over the regular expression matches
	// until we can no longer find a match.
	while (arrMatches = objPattern.exec( strData )){

		// Get the delimiter that was found.
		var strMatchedDelimiter = arrMatches[ 1 ];

		// Check to see if the given delimiter has a length
		// (is not the start of string) and if it matches
		// field delimiter. If id does not, then we know
		// that this delimiter is a row delimiter.
		if (
			strMatchedDelimiter.length &&
			(strMatchedDelimiter != strDelimiter)
			){

			// Since we have reached a new row of data,
			// add an empty row to our data array.
			arrData.push( [] );

		}

		// Now that we have our delimiter out of the way,
		// let's check to see which kind of value we
		// captured (quoted or unquoted).
		if (arrMatches[ 2 ]){
			// We found a quoted value. When we capture
			// this value, unescape any double quotes.
			var strMatchedValue = arrMatches[ 2 ].replace(
			new RegExp( "\"\"", "g" ),
			"\""
			);

		} else {

			// We found a non-quoted value.
			var strMatchedValue = arrMatches[ 3 ];

		}


		// Now that we have our value string, let's add
		// it to the data array.
		arrData[ arrData.length - 1 ].push( strMatchedValue );
	}

	// Return the parsed data.
	return( arrData );
}

function timeline() {

	var tl = document.getElementById("timeline");
	var ctx = tl.getContext("2d");

	ctx.canvas.width = $(tl).parent().innerWidth();	
	ctx.canvas.height = 100;

	ctx.fillStyle = "white";
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	ctx.strokeStyle = "black";
	
	// draws the base line for chornological order
	ctx.beginPath();
	ctx.moveTo(0, 50);
	ctx.lineTo(tl.width-5, 50);
	ctx.stroke();
	
	// calculates the years and maps them onto the time line with a line for each year
	
	var spacing = 0;
	var yearWidth = tl.width/33;
	
	RENDERED_STORY_IDS_BY_YEAR = {};
	
	for (year in STORY_COUNTS_BY_YEAR) {

		RENDERED_STORY_IDS_BY_YEAR[year] = [];	

		ctx.strokeStyle = "rgb(255," + Math.round(229 - (STORY_COUNTS_BY_YEAR[year] / 5123)*229) +",69)";

		spacing = yearWidth * (year - 1980) + 1;
		var pixels = yearWidth/STORY_COUNTS_BY_YEAR[year]
		
		var verticalCenter = 50;
		var height = 5;
		
		var storyIDsInYear = STORY_IDS_BY_YEAR[year];
		
		var numberOfStoriesToRender = Math.min(STORY_COUNTS_BY_YEAR[year], Math.round(yearWidth));
		var storyIDIndexIncrement = STORY_COUNTS_BY_YEAR[year] < Math.round(yearWidth) ? 1 : Math.round(STORY_COUNTS_BY_YEAR[year] / yearWidth);
		
		var storyIDIndex = 0;
		for(var storyNumber = 0; storyNumber < numberOfStoriesToRender; storyNumber++) {

			// Sum the number of articles that this line will summarize
			var storyID = storyIDsInYear[storyIDIndex];
			RENDERED_STORY_IDS_BY_YEAR[year].push(storyID);
			height = ARTICLE_COUNTS_BY_STORY_ID[storyID];
			
			ctx.beginPath();
			ctx.moveTo(Math.round(spacing) + .5, verticalCenter - height);
			ctx.lineTo(Math.round(spacing) + .5, verticalCenter + height);
			ctx.stroke();
			
			if (pixels < 1) {
				spacing = spacing + 1;
			} else {
				spacing = spacing + pixels;
			}
			
			storyIDIndex += storyIDIndexIncrement;
			
		}

	}	
	
	var year = 1980;
	for (i = 1; i <= tl.width; i+= tl.width/33) {
	
		ctx.strokeStyle = "black";
		ctx.beginPath();
		ctx.moveTo(i, 35);
		ctx.lineTo(i, 65);
		ctx.stroke();
		
		ctx.font = "11px Verdana";
		ctx.fillStyle = "black";
		ctx.fillText("'" + ("" + year).substr(2), i + 3, 65);
		
		year++;
	}


}

// Displays the story information when timeline is dragged on
function displayInfo(xPos, dataArray) {
	var tline = document.getElementById("timeline");
	var ctx = tline.getContext("2d");
	
	var unit = tline.width/33;
	var year = trunc(xPos/unit) + 1980;
	var yearX = xPos - (year - 1980) * unit;
/* 	var index = trunc((yearX/unit)*STORY_COUNTS_BY_YEAR[year]); */
	
	var index = trunc((yearX/unit) * RENDERED_STORY_IDS_BY_YEAR[year].length);
	
	// Check if the year is in the table and don't show anything if so
	
	if (!(year in STORY_IDS_BY_YEAR)) {
		$("#storyDisplay").html("No stories reported in this year, please select a different year!");
		SELECTED_STORYID = -1;
	} else {
	
		SELECTED_STORYID = RENDERED_STORY_IDS_BY_YEAR[year][index];
/* 		SELECTED_STORYID = STORY_IDS_BY_YEAR[year][index]; */
		
		var cstring = "";
		
		for(var rowIndex = 0; rowIndex < dataArray.length; rowIndex++) {
			if(dataArray[rowIndex][0] == SELECTED_STORYID) {
				cstring = dataArray[rowIndex][1];
				break;
			}
		}
		
		// gets the countries of the story and draws them
		var clist = cstring.split("|");	// makes an array of the countries
		
		// makes a new DataTable
		var storyCountries = new google.visualization.DataTable();
		storyCountries.addColumn('string', 'Country');
		storyCountries.addColumn('number', 'Story reported in Country');
		for (var c = 0; c < clist.length; c++) {
			storyCountries.addRow([clist[c], 1]);
		}
		
		var numToString = "" + (index + 1);
		var last = numToString.charAt(numToString.length-1);
		var ordinal = "";
		
		if (last == "1") {
			ordinal = "st";
		} else if (last == "2") {
			ordinal = "nd";
		} else if (last == "3") {
			ordinal = "rd";
		} else {
			ordinal = "th";
		}
		
		var articleCount = ARTICLE_COUNTS_BY_STORY_ID[SELECTED_STORYID];
		var numberOfHeadlines = Math.min(10, articleCount);
		
		// redraws map
		$("#storyDisplay").html("<span id='title'>" + numberOfHeadlines + " of " + articleCount + " headlines for the " + (STORY_IDS_BY_YEAR[year].indexOf(SELECTED_STORYID)) + "" + ordinal + " story in " + year + "</span> <br/>");
		GEOMAP.draw(storyCountries, GEOMAP_OPTIONS);
	}
	
	// redraws slider along timeline
	ctx.strokeStyle = "#130912";
	ctx.beginPath();
	ctx.moveTo(xPos, 20);
	ctx.lineTo(xPos, 80);
	ctx.stroke();

}

function getHeads (id) {	
	
	// gets the first 10 headlines of a story
	$.ajax({
		type:'GET',
		url: 'getfirst10headlines.php',
		data: { storyID: id },
		//ajax response
		success: function(data) {
			
			if (id != -1) {		
				var headlinesArray = JSON.parse(data);
				for (var headline = 0; headline < headlinesArray.length; headline++) {
					$("#storyDisplay").append("<br/>" + headlinesArray[headline] + "<br/>");
					$("#storyDisplay").append("<hr>");
				}
			}
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {
		console.log(textStatus + errorThrown);
	});

}

// truncates the decimals in the given number to make an integer
function trunc(num) {
	return Math[(num*100) < 0 ? 'ceil' : 'floor'](num);
}