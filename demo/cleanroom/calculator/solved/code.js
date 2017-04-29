// The global calculator object
calculator = {

	memory: "",			// The number previously displayed
	display: "0",		// The text to display in the display div
	operation: null,	// The most recent operation function pressed
	isReset: true,		// Whether the calculator has been reset with a clear or an operation

	// - Get the display div by its id
	// - Get the first 10 characters of the display value
	// - Assign its innerHTML the first 10 characters of the display value
	updateDisplay: function() {
		document.getElementById('display').innerHTML = ("" + this.display).substr(0,10);
	},

	//	Should do the following:
	//	- reset the display to "0"
	//	- erase the memory to ""
	//	- set the reset flag so clicking on a number starts a new number
	//	- set the innerHTML of the display div to the current value
	clear: function () {
		this.display = "0";
		this.memory = "";
		this.isReset = true;
		this.updateDisplay();
	},

	//	Should do the following:
	//	- use parseFloat() to parse the memory and display value
	//	- set the display value to the sum of the two
	add: function () {
		this.display = parseFloat(this.memory) + parseFloat(this.display);
	},

	//	Should do the following:
	//	- use parseFloat() to parse the memory and display value
	//	- set the display value to the difference of the two
	subtract: function () {
		this.display = parseFloat(this.memory) - parseFloat(this.display);
	},

	//	Should do the following:
	//	- use parseFloat() to parse the memory and display value
	//	- set the display value to the product of the two
	multiply: function () {
		this.display = parseFloat(this.memory) * parseFloat(this.display);
	},

	//	Should do the following:
	//	- use parseFloat() to parse the memory and display value
	//	- set the display value to the quotient of the two
	divide: function () {
		this.display = parseFloat(this.memory) / parseFloat(this.display);
	},

	//	- If the calculator's reset flag is true, reset the display value to ""
	//	  and the reset reset flag to false.
	//	- Then, append the character typed to the display value.
	//	- Finally, update the display
	pressDigit: function(character) {
		if(this.isReset) {
			this.display = "";
			this.isReset = false;
		}
		this.display = this.display + character;
		this.updateDisplay();
	},

	//	- If the user pressed the equals button
	//      - If the operation isn't null, call the function on the calculator (e.g., calc[operation].call(this))
	//	- Otherwise
	//	    - Remember the operation
	//      - Set the memory value the current display value (but don't erase the display value)
	//	- Finally, update the display
	pressOperation: function(operation) {

		if(operation == 'equals') {
			if(this.operation != null) {			
				calculator[this.operation].call(this);
			}
		}
		else {
			this.operation = operation;
			this.memory = this.display;
		}
		this.isReset = true;
		this.updateDisplay();
		
	}
};