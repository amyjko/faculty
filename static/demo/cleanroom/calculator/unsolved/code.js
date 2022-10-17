// The global clculator object
var calculator = {

	// The number previously displayed
	memory: "",	
	// The text to display in the display div		
	display: "0",
	// The most recent operation function pressed
	operation: null,
	// Whether the calculator has been reset with a clear or an operation
	isReset: true,		

	// - Get the display div by its id
	// - Get the first 10 characters of the display value
	// - Assign its innerHTML the first 10 characters of the display value
	updateDisplay: function() {
		var display = "" + this.display;
		document.getElementById('display').innerHTML = display.substr(0,10);
	},

	//	Should do the following:
	//	- reset the display to "0"
	//	- erase the memory to ""
	//	- set the reset flag so clicking on a number starts a new number
	//	- set the innerHTML of the display div to the current value
	clear: function () {

	},

	//	Should do the following:
	//	- use parseFloat() to parse the memory and display value
	//	- set the display value to the sum of the two
	add: function () {

	},

	//	Should do the following:
	//	- use parseFloat() to parse the memory and display value
	//	- set the display value to the difference of the two
	subtract: function () {

	},

	//	Should do the following:
	//	- use parseFloat() to parse the memory and display value
	//	- set the display value to the product of the two
	multiply: function () {

	},

	//	Should do the following:
	//	- use parseFloat() to parse the memory and display value
	//	- set the display value to the quotient of the two
	divide: function () {

	},

	//	- If the calculator's reset flag is true, reset the display value to ""
	//	  and the reset flag to false.
	//	- Then, append the character typed to the display value.
	//	- Finally, update the display
	pressDigit: function(character) {

	},

	//	- If the user pressed the equals button
	//      - If the operation isn't null, call the function on the calculator (e.g., calc[operation].call(this))
	//	- Otherwise
	//	    - Remember the operation
	//      - Set the memory value the current display value (but don't erase the display value)
	//	- Finally, update the display
	pressOperation: function(operation) {

		
	}
};