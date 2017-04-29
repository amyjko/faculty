//<!--
// Start of JavaScript debugging tracer() function. Not part of calculator.
/*
tracerwindow = window.open('','tracerwindow','toolbar=0,status=0,scrollbars=1,resizable=0,width=300,height=500,top=1,left=1,topmargin=0,leftmargin=0');
tracerwindow.document.write("<BODY STYLE=margin:0px>");
tracerwindow.document.write("<OL style='color: red'>");
tracerwindow.document.write("<b>JavaScript Debugging Tool</b><br><br><small>Sequential listing of each function() fired.</small><br><br>");

function tracer(text)
{
	text = "<li><font color='black'><small>"+text+"</small></font><br>"; // Add clean HTML code to the text.
	tracerwindow.document.write(text); // print text variable in tracerwindow
}
*/
// End of tracer() function.
// GLOBAL VARIABLES
var digitsMaximum = 16; // The number of maximum digits that can be entered in the display is this value minus one (i.e., 15).
var maxPushLevels = 12; // This defines the maximum number of levels ("tiers" on the stack) that are allowed to be pushed into.
var nhdigits = 8;
var valueMaximum = 4294967296; // 2^32
var hexdigits = "" + "0123456789ABCDEF";
var stack = new array(maxPushLevels); //Creates a stack containing a maximum number of tiers equal to maxPushLevels.
var angleMeasure = "deg"; // "Memory" for which angle measurement is checked. Values can be "deg", "rad", or "grad".
var value = 0; // current value in display
var stackTier = 0; // no. of items on stack
var isItThere = true; // If isItThere is true, then the value on the display has been entered.
var decimal = 0; // multiplier when entering after decimal point
var fixed = 0; // force trailing zero display when entering decimals
var expMode = false; // currently entering EE mode?
var base = 10; // current base (16, 10, 8, or 2)
// END GLOBAL VARIABLES
function angleConvert(e) {
  if (e == "deg") {
    if (angleMeasure == "rad") {
      value = (180 / Math.PI) * value;
    }
    else if (angleMeasure == "grad") {
      value = (180 / 200) * value;
    }
    angleMeasure = "deg";
  }
  else if (e == "rad") {
    if (angleMeasure == "deg") {
      value = (Math.PI / 180) * value;
    }
    else if (angleMeasure == "grad") {
      value = (Math.PI / 200) * value;
    }
    angleMeasure = "rad";
  }
  else if (e == "grad") {
    if (angleMeasure == "deg") {
      value = (200 / 180) * value;
    }
    else if (angleMeasure == "rad") {
      value = (200 / Math.PI) * value;
    }
    angleMeasure = "grad";
  }
  equals();
}
function toggleOverlib() {
  if (formhover.hoverbox.checked == true) {
    overDiv.style.display = "block";
  }
  else {
    overDiv.style.display = "none";
  }
}
function toggledisplay(IDhere) {
  if (IDhere.style.display == "none") {
    IDhere.style.display = "block";
  }
  else {
    IDhere.style.display = "none";
  }
}
function togglevisi(IDhere) {
  if (IDhere.style.visibility == "hidden") {
    IDhere.style.visibility = "visible";
  }
  else {
    IDhere.style.visibility = "hidden";
  }
}
function funcKeypress(e) {
  if (document.all) {
    e = window.event;
  }
  var keyNumbvalue;
  if (document.layers) {
    keyNumbvalue = e.which;
  }
  if (document.all) {
    keyNumbvalue = e.keyCode;
  }
  var key = String.fromCharCode(keyNumbvalue);
  // alert("The key you pressed was "+key); // Uncomment for testing purposes only.
  // alert("The ASCII equivalent for the key you pressed is "+keyNumbvalue); // Uncomment for testing purposes only.
  if (key >= "0" && key <= "9" && key < base) {
    intkey = parseInt(key);
    digit(intkey);
  }
  else if (key == "a" || key == "A" && 10 < base) {
    digit(10);
  }
  else if (key == "b" || key == "B" && 11 < base) {
    digit(11);
  }
  else if (key == "c" || key == "C" && 12 < base) {
    digit(12);
  }
  else if (key == "d" || key == "D" && 13 < base) {
    digit(13);
  }
  else if (key == "e" || key == "E" && 14 < base) {
    digit(14);
  }
  else if (key == "f" || key == "F" && 15 < base) {
    digit(15);
  }
  else if (key == ".") {
    period();
  }
  else if (keyNumbvalue == "13" || key == "=") {
    equals();
  }
  else if (key == "+" || key == "-" || key == "/" || key == "*") {
    mathOp(key);
  }
  else if (key == "(") {
    openp();
  }
  else if (key == ")") {
    closep();
  }
  else if (key == "s") {
    func("sin");
  }
  else if (key == "o") {
    func("cos");
  }
  else if (key == "t") {
    func("tan");
  }
  else if (key == "S") {
    func("asin");
  }
  else if (key == "O") {
    func("acos");
  }
  else if (key == "T") {
    func("atan");
  }
  else if (key == "@") {
    func("xsq");
  }
  else if (key == "y") {
    mathOp("pow");
  }
  else if (key == "r") {
    func("1/x");
  }
  else if (key == "x") {
    exp();
  }
  else if (key == "q") {
    func("sqrt");
  }
  else if (key == "p") {
    func("pi");
  }
  else if (key == "!") {
    func("n!");
  }
  else if (key == "n") {
    func("ln");
  }
  else if (key == "N") {
    func("etox");
  }
  else if (key == "m") {
    sign();
  }
  else if (key == "l") {
    func("log");
  }
  else if (key == "L") {
    func("10tox");
  }
  else if (key == "j") {
    func("log2");
  }
  else if (key == "J") {
    func("2tox");
  }
  else if (key == "%") {
    mathOp('%');
  }
  else if (key == "&") {
    mathOp('and');
  }
  else if (key == "|") {
    mathOp('or');
  }
  else if (key == "^") {
    mathOp('xor');
  }
  else if (key == "~") {
    func('not');
  }
  else if (key == "<") {
    mathOp('lsh');
  }
  else if (key == ">") {
    mathOp('rsh');
  }
  else if (key == "h") {
    togglevisi(helpmenu);
  }
  else {
    return false;
  }
}
function funcKeydown() {
  if (document.all) {
    f = window.event;
  }
  var keyNumbvalue;
  if (document.layers) {
    keyNumbvalue = f.which;
  }
  if (document.all) {
    keyNumbvalue = f.keyCode;
  }
  if (keyNumbvalue == "8" || keyNumbvalue == "46") {
    clearAll();
  }
  else if (keyNumbvalue == "27") {
    clear();
  }
  // alert("The ASCII equivalent for the key you pressed is "+keyNumbvalue); // Uncomment for testing purposes only.
}
function togglescnd() {
  // This function toggles the buttons and colors when the "2nd" key is pressed.
  if (scndtest.scndinput.value == 0) {
    show1.style.display = "none";
    show2.style.display = "none";
    show3.style.display = "none";
    show4.style.display = "none";
    show5.style.display = "none";
    show6.style.display = "none";
    show7.style.display = "none";
    show8.style.display = "none";
    show9.style.display = "none";
    hid1.style.display = "block";
    hid2.style.display = "block";
    hid3.style.display = "block";
    hid4.style.display = "block";
    hid5.style.display = "block";
    hid6.style.display = "block";
    hid7.style.display = "block";
    hid8.style.display = "block";
    hid9.style.display = "block";
    scndbut.style.background = "#ff6600";
    scndtest.scndinput.value = 1;
  }
  else {
    show1.style.display = "block";
    show2.style.display = "block";
    show3.style.display = "block";
    show4.style.display = "block";
    show5.style.display = "block";
    show6.style.display = "block";
    show7.style.display = "block";
    show8.style.display = "block";
    show9.style.display = "block";
    hid1.style.display = "none";
    hid2.style.display = "none";
    hid3.style.display = "none";
    hid4.style.display = "none";
    hid5.style.display = "none";
    hid6.style.display = "none";
    hid7.style.display = "none";
    hid8.style.display = "none";
    hid9.style.display = "none";
    scndbut.style.background = "#ffffcc";
    scndtest.scndinput.value = 0;
  }
}
function checkbase(e) {
  if (e >= base) {
    return false;
  }
  else {
    return true;
  }
}
function setNumberBase(e) {
  if (e == 10) {
    base = 10;
    equals();
    topbar.radiobase[1].checked = true;
    topbar.trigmeth[0].disabled = false;
    topbar.trigmeth[1].disabled = false;
    topbar.trigmeth[2].disabled = false;
    buttonname.digit2.disabled = false;
    buttonname.digit3.disabled = false;
    buttonname.digit4.disabled = false;
    buttonname.digit5.disabled = false;
    buttonname.digit6.disabled = false;
    buttonname.digit7.disabled = false;
    buttonname.digit8.disabled = false;
    buttonname.digit9.disabled = false;
    buttonname.digit1.className = "classdigit";
    buttonname.digit2.className = "classdigit";
    buttonname.digit3.className = "classdigit";
    buttonname.digit4.className = "classdigit";
    buttonname.digit5.className = "classdigit";
    buttonname.digit6.className = "classdigit";
    buttonname.digit7.className = "classdigit";
    buttonname.digit8.className = "classdigit";
    buttonname.digit9.className = "classdigit";
    formhex.hexA.disabled = true;
    formhex.hexB.disabled = true;
    formhex.hexC.disabled = true;
    formhex.hexD.disabled = true;
    formhex.hexE.disabled = true;
    formhex.hexF.disabled = true;
    formhex.hexA.className = "classdisabled";
    formhex.hexB.className = "classdisabled";
    formhex.hexC.className = "classdisabled";
    formhex.hexD.className = "classdisabled";
    formhex.hexE.className = "classdisabled";
    formhex.hexF.className = "classdisabled";
    buttonname.funcPi.disabled = false;
    buttonname.funcSin.disabled = false;
    buttonname.funcCos.disabled = false;
    buttonname.funcTan.disabled = false;
    buttonname.funcArcsin.disabled = false;
    buttonname.funcArccos.disabled = false;
    buttonname.funcArctan.disabled = false;
    buttonname.funcEE.disabled = false;
    buttonname.digitPeriod.disabled = false;
    buttonname.digitPlusMinus.disabled = false;
    buttonname.funcPi.className = "classfunction";
    buttonname.funcSin.className = "classfunction";
    buttonname.funcCos.className = "classfunction";
    buttonname.funcTan.className = "classfunction";
    buttonname.funcArcsin.className = "classfunction";
    buttonname.funcArccos.className = "classfunction";
    buttonname.funcArctan.className = "classfunction";
    buttonname.funcEE.className = "classfunction";
    buttonname.digitPeriod.className = "classdigit";
    buttonname.digitPlusMinus.className = "classdigit";
  }
  else {
    if (e == 16) {
      base = 16;
      equals();
      topbar.radiobase[0].checked = true;
      formhex.hexA.disabled = false;
      formhex.hexB.disabled = false;
      formhex.hexC.disabled = false;
      formhex.hexD.disabled = false;
      formhex.hexE.disabled = false;
      formhex.hexF.disabled = false;
      formhex.hexA.className = "classhex";
      formhex.hexB.className = "classhex";
      formhex.hexC.className = "classhex";
      formhex.hexD.className = "classhex";
      formhex.hexE.className = "classhex";
      formhex.hexF.className = "classhex";
      buttonname.digit2.disabled = false;
      buttonname.digit3.disabled = false;
      buttonname.digit4.disabled = false;
      buttonname.digit5.disabled = false;
      buttonname.digit6.disabled = false;
      buttonname.digit7.disabled = false;
      buttonname.digit8.disabled = false;
      buttonname.digit9.disabled = false;
      buttonname.digit2.className = "classdigit";
      buttonname.digit3.className = "classdigit";
      buttonname.digit4.className = "classdigit";
      buttonname.digit5.className = "classdigit";
      buttonname.digit6.className = "classdigit";
      buttonname.digit7.className = "classdigit";
      buttonname.digit8.className = "classdigit";
      buttonname.digit9.className = "classdigit";
    }
    else if (e == 8) {
      base = 8;
      equals();
      topbar.radiobase[2].checked = true;
      buttonname.digit2.disabled = false;
      buttonname.digit3.disabled = false;
      buttonname.digit4.disabled = false;
      buttonname.digit5.disabled = false;
      buttonname.digit6.disabled = false;
      buttonname.digit7.disabled = false;
      buttonname.digit2.className = "classdigit";
      buttonname.digit3.className = "classdigit";
      buttonname.digit4.className = "classdigit";
      buttonname.digit5.className = "classdigit";
      buttonname.digit6.className = "classdigit";
      buttonname.digit7.className = "classdigit";
      formhex.hexA.disabled = true;
      formhex.hexB.disabled = true;
      formhex.hexC.disabled = true;
      formhex.hexD.disabled = true;
      formhex.hexE.disabled = true;
      formhex.hexF.disabled = true;
      formhex.hexA.className = "classdisabled";
      formhex.hexB.className = "classdisabled";
      formhex.hexC.className = "classdisabled";
      formhex.hexD.className = "classdisabled";
      formhex.hexE.className = "classdisabled";
      formhex.hexF.className = "classdisabled";
      buttonname.digit8.disabled = true;
      buttonname.digit9.disabled = true;
      buttonname.digit8.className = "classdisabled";
      buttonname.digit9.className = "classdisabled";
    }
    else if (e == 2) {
      base = 2;
      equals();
      topbar.radiobase[3].checked = true;
      formhex.hexA.disabled = true;
      formhex.hexB.disabled = true;
      formhex.hexC.disabled = true;
      formhex.hexD.disabled = true;
      formhex.hexE.disabled = true;
      formhex.hexF.disabled = true;
      formhex.hexA.className = "classdisabled";
      formhex.hexB.className = "classdisabled";
      formhex.hexC.className = "classdisabled";
      formhex.hexD.className = "classdisabled";
      formhex.hexE.className = "classdisabled";
      formhex.hexF.className = "classdisabled";
      buttonname.digit2.disabled = true;
      buttonname.digit3.disabled = true;
      buttonname.digit4.disabled = true;
      buttonname.digit5.disabled = true;
      buttonname.digit6.disabled = true;
      buttonname.digit7.disabled = true;
      buttonname.digit8.disabled = true;
      buttonname.digit9.disabled = true;
      buttonname.digit2.className = "classdisabled";
      buttonname.digit3.className = "classdisabled";
      buttonname.digit4.className = "classdisabled";
      buttonname.digit5.className = "classdisabled";
      buttonname.digit6.className = "classdisabled";
      buttonname.digit7.className = "classdisabled";
      buttonname.digit8.className = "classdisabled";
      buttonname.digit9.className = "classdisabled";
    }
    topbar.trigmeth[0].disabled = true;
    topbar.trigmeth[1].disabled = true;
    topbar.trigmeth[2].disabled = true;
    buttonname.funcPi.disabled = true;
    buttonname.funcSin.disabled = true;
    buttonname.funcCos.disabled = true;
    buttonname.funcTan.disabled = true;
    buttonname.funcArcsin.disabled = true;
    buttonname.funcArccos.disabled = true;
    buttonname.funcArctan.disabled = true;
    buttonname.funcEE.disabled = true;
    buttonname.digitPeriod.disabled = true;
    buttonname.digitPlusMinus.disabled = true;
    buttonname.funcPi.className = "classdisabled";
    buttonname.funcSin.className = "classdisabled";
    buttonname.funcCos.className = "classdisabled";
    buttonname.funcTan.className = "classdisabled";
    buttonname.funcArcsin.className = "classdisabled";
    buttonname.funcArccos.className = "classdisabled";
    buttonname.funcArctan.className = "classdisabled";
    buttonname.funcEE.className = "classdisabled";
    buttonname.digitPeriod.className = "classdisabled";
    buttonname.digitPlusMinus.className = "classdisabled";
  }
}
function historyprint() {
  // tracer("historyprint()"); // tracer() is not part of this function.
  history2window = window.open('', 'history2window', 'toolbar=0,status=0,scrollbars=1,resizable=0,width=230,height=176,top=10,left=10,topmargin=0,leftmargin=0');
  history2window.document.write("<BODY ONLOAD=\"window.print();\"><H2>Calculator History Log</H2><BR><P ALIGN=\"RIGHT\">" + historymenu.innerHTML + "<BR><BR><P ALIGN=\"LEFT\"><SMALL><BR><EM>Free Online Calculator</EM><BR>&#169; MotionNET.com</BODY>");
  history2window.location.reload();
  setTimeout("history2window.close()", 3000);
}
function freshstart() {
  var display = format(value);
  display = "               " + display;
  display = display.substring(display.length - digitsMaximum - 1, display.length);
  topbar.result.value = display;
  topbar.radiobase[1].checked = true;
  topbar.trigmeth[0].checked = true;
  func("memclearall");
  setNumberBase(10);
  formhover.hoverbox.checked = false;
}
function stackPushTier() {
  // tracer("stackPushTier()"); // tracer() is not part of this function.
  this.value = 0;
  this.op = "";
}
function array(length) {
  // tracer("array(<FONT COLOR=RED>"+length+" <SMALL>length</SMALL></FONT>)"); // tracer() is not part of this function.
  this[0] = 0;
  for (i = 0; i < length; ++i) {
    this[i] = 0;
    this[i] = new stackPushTier();
  }
  this.length = length;
}
function push(value, op, prec) {
  // tracer("push(<FONT COLOR=RED>"+value+"</FONT>, <FONT COLOR=RED>"+op+"</FONT>, <FONT COLOR=RED>"+prec+"</FONT>)"); // tracer() is not part of this function.
  if (stackTier == maxPushLevels) {
    return false;
  }
  for (i = stackTier; i > 0; --i) {
    stack[i].value = stack[i - 1].value;
    stack[i].op = stack[i - 1].op;
    stack[i].prec = stack[i - 1].prec;
  }
  stack[0].value = value;
  stack[0].op = op;
  stack[0].prec = prec;
  ++stackTier;
  return true;
}
function pop() {
  // tracer("pop()"); // tracer() is not part of this function.
  if (stackTier == 0) {
    return false;
  }
  for (i = 0; i < stackTier; ++i) {
    stack[i].value = stack[i + 1].value;
    stack[i].op = stack[i + 1].op;
    stack[i].prec = stack[i + 1].prec;
  }--stackTier;
  return true;
}
function format(val) {
  // tracer("format(<FONT COLOR=RED>"+value+"</FONT>)"); // tracer() is not part of this function.
  if (base == 10) {
    var valStr = "" + value;
    if (valStr.indexOf("N") >= 0 || (value == 2 * value && value == 1 + value)) return "Error ";
    var i = valStr.indexOf("e")
    if (i >= 0) {
      var expStr = valStr.substring(i + 1, valStr.length);
      if (i > 11) i = 11; // max 11 digits
      valStr = valStr.substring(0, i);
      if (valStr.indexOf(".") < 0) valStr += ".";
      valStr += " " + expStr;
    }
    else {
      var valNeg = false;
      if (value < 0) {
        value = -value;
        valNeg = true;
      }
      var valInt = Math.floor(value);
      var valFrac = value - valInt;
      var prec = digitsMaximum - ("" + valInt).length - 1; // how many digits available after period
      if (!isItThere && fixed > 0) prec = fixed;
      var mult = " 1000000000000000000".substring(1, prec + 2);
      var frac = Math.floor(valFrac * mult + 0.5);
      valInt = Math.floor(Math.floor(value * mult + .5) / mult);
      if (valNeg) valStr = "-" + valInt;
      else valStr = "" + valInt;
      var fracStr = "00000000000000" + frac;
      fracStr = fracStr.substring(fracStr.length - prec, fracStr.length);
      i = fracStr.length - 1;
      if (isItThere || fixed == 0) {
        // remove trailing zeros unless fixed during entry.
        while (i >= 0 && fracStr.charAt(i) == "0")--i;
        fracStr = fracStr.substring(0, i + 1);
      }
      if (i >= 0) valStr += "." + fracStr;
      //	document.topbar.debugField.value = "prec "+prec+", mult "+mult+", frac "+frac;
    }
    return valStr;
  }
  else {
    var s = "";
    if (val < 0 || val > valueMaximum) return "Error";
    if (val == 0) return "0";
    if (base < 2) {
      while (val && s.length < 20) {
        var x = val % 16;
        var d = hexdigits.charAt(x);
        val = (val - x) / 16 | 0;
        var y = val % 16;
        var e = hexdigits.charAt(y);
        val = (val - y) / 16 | 0;
        s = "%" + e + d + s;
      }
      s = '"' + s + '"';
      return unescape(s);
    }
    while (val && s.length < 20) {
      var x = val % base;
      var d = hexdigits.charAt(x);
      val = (val - x) / base | 0;
      s = "" + d + s;
    }
    return s;
  }
}
function update() {
  // tracer("update()"); // tracer() is not part of this function.
  if (base == 10) {
    var display = format(value);
    if (expMode) {
      if (expval < 0) {
        display += " " + expval;
      }
      else {
        display += " +" + expval;
      }
    }
    if (display.indexOf(".") < 0 && display != "Error ") {
      if (isItThere || decimal > 0) {
        display += '.';
      }
      else {
        display += ' ';
      }
    }
    display = "               " + display;
    display = display.substring(display.length - digitsMaximum - 1, display.length);
    topbar.result.value = display;
    myString = topbar.result.value;
  }
  else {
    value = value % valueMaximum;
    if (value < 0) {
      value = value + valueMaximum;
    }
    var display = format(value);
    if (isItThere) {
      display += ".";
    }
    else {
      display += " ";
    }
    display = "                 " + display;
    display = display.substring(display.length - digitsMaximum - 1, display.length);
    topbar.result.value = display;
  }
}
function clearAll() {
  // tracer("clearAll()"); // tracer() is not part of this function.
  stackTier = 0;
  clear();
}
function clear() {
  // tracer("clear()"); // tracer() is not part of this function.
  expMode = false;
  value = 0;
  enter();
  update();
}
function evalx() {
  // tracer("evalx()"); // tracer() is not part of this function.
  if (stackTier == 0) {
    //alert("stackTier==0");
    return false;
  }
  op = stack[0].op;
  sval = stack[0].value;
  // alert("eval "+sval+op+value);
  if (op == "+") {
    value = sval + value;
  }
  else if (op == '-') {
    value = sval - value;
  }
  else if (op == '*') {
    value = sval * value;
  }
  else if (op == '/') {
    value = sval / value;
  }
  else if (op == '%') {
    value = sval % value;
  }
  else if (op == 'pow') {
    value = Math.pow(sval, value);
  }
  else if (op == "and") {
    value = sval & value;
  }
  else if (op == "or") {
    value = sval | value;
  }
  else if (op == "xor") {
    value = sval ^ value;
  }
  else if (op == "lsh") {
    value = sval << value;
  }
  else if (op == "rsh") {
    value = sval >> value;
  }
  pop();
  if (op == '(') return false;
  return true;
}
function openp() {
  // tracer("openp()"); // tracer() is not part of this function.
  enter();
  if (!push(0, '(', 0)) {
    value = "NAN";
  }
  // historymenu.innerHTML += "(";
  update();
}
function closep() {
  // tracer("closep()"); // tracer() is not part of this function.
  enter();
  while (evalx());
  // historymenu.innerHTML += ")";
  update();
}
function mathOp(op) {
  // tracer("mathOp(<FONT COLOR=RED>"+op+"</FONT>)"); // tracer() is not part of this function.
  enter();
  if (base == 10) {
    if (op == '+' || op == '-') {
      prec = 1;
    }
    else if (op == '*' || op == '/' || op == '%') { // op=='%' was added (blippie)
      prec = 2;
    }
    else if (op == "pow") {
      prec = 3;
    }
    else if (op == "or" || op == 'xor') { // this statement wasn't originally here
      prec = 4;
    }
    else if (op == "and") { // this statement wasn't originally here
      prec = 5;
    }
    else if (op == "lsh" || op == "rsh") { // this statement wasn't originally here
      prec = 6;
    }
    if (stackTier > 0 && prec <= stack[0].prec) {
      evalx();
    }
    if (!push(value, op, prec)) {
      value = "NAN";
    }
    update();
/*
		if(op == "pow"){
			historymenu.innerHTML += " ^ ";
		}

		else{
			historymenu.innerHTML += op;
		}
		*/
  }
  else {
    if (op == '+' || op == '-') {
      prec = 1;
    }
    else if (op == '*' || op == '/' || op == '%') { // op=='%' was added (blippie)
      prec = 2;
    }
    else if (op == 'pow') {
      prec = 3;
    }
    else if (op == "or" || op == 'xor') {
      prec = 4; // original value: prec = 3;
    }
    else if (op == "and") {
      prec = 5; // original value: prec = 4;
    }
    else if (op == "lsh" || op == "rsh") { // this statement wasn't originally here
      prec = 6;
    }
    else {
      value = "NAN";
    }
    if (stackTier > 0 && prec <= stack[0].prec) {
      evalx();
    }
    if (!push(value, op, prec)) {
      value = "NAN";
    }
    update();
  }
}
function enter() {
  // tracer("enter()"); // tracer() is not part of this function.
  if (base == 10) {
    if (expMode) {
      //alert(expval);
      value = value * Math.exp(expval * Math.LN10);
    }
    isItThere = true;
    expMode = false;
    decimal = 0;
    fixed = 0;
  }
  else {
    isItThere = true;
  }
}
function equals() {
  // tracer("equals()"); // tracer() is not part of this function.
  enter();
  while (stackTier > 0) {
    evalx();
  }
  update();
  // historymenu.innerHTML += " = "+myString+"<BR>";
}
function digit(n) {
  // tracer("digit(<FONT COLOR=RED>"+n+"</FONT>)"); // tracer() is not part of this function.
  if (base == 10) {
    if (isItThere) {
      value = 0;
      digits = 0;
      isItThere = false;
    }
    if (n == 0 && digits == 0) {
      update();
      return;
    }
    if (expMode) {
      if (expval < 0) {
        n = -n;
      }
      if (digits < 3) {
        expval = expval * 10 + n;
        ++digits;
        update();
      }
      return;
    }
    if (value < 0) {
      n = -n;
    }
    if (digits < digitsMaximum - 1) {
      ++digits;
      if (decimal > 0) {
        decimal = decimal * 10;
        value = value + (n / decimal);
        ++fixed;
      }
      else {
        value = value * 10 + n;
      }
    }
    update();
    // historymenu.innerHTML += n;
  }
  else {
    if (isItThere) {
      value = 0;
      digits = 0;
    }
    if (n >= base) {
      return;
    }
    isItThere = false;
    if (value < 0) {
      n = -n;
    }
    if (digits < nhdigits) {
      value = value * base + n;
      ++digits;
    }
    update();
  }
}
function sign() {
  // tracer("sign()"); // tracer() is not part of this function.
  if (base == 10) {
    if (expMode) {
      expval = -expval;
    }
    else {
      value = -value;
    }
    update();
  }
}
function period() {
  // tracer("period()"); // tracer() is not part of this function.
  if (base == 10) {
    if (isItThere) {
      value = 0;
      digits = 1;
    }
    isItThere = false;
    if (decimal == 0) {
      decimal = 1;
    }
    // historymenu.innerHTML += ".";
    update();
  }
}
function exp() {
  // tracer("exp()"); // tracer() is not part of this function.
  if (base == 10) {
    if (isItThere || expMode) {
      return;
    }
    expMode = true;
    expval = 0;
    digits = 0;
    decimal = 0;
    update();
  }
}
function func(f) {
  // tracer("func(<FONT COLOR=RED>"+f+"</FONT>)"); // tracer() is not part of this function.
  oldValue = value; // Used for history menu.
  enter();
  if (f == "1/x") {
    value = 1 / value;
    // historymenu.innerHTML += "<BR>(" + oldValue + ")<SUP>-1</SUP> = " + format(value);
  }
  else if (f == "n!") {
    value = Math.floor(value);
    oldFactValue = value;
    if (value < 0 || value > 200) {
      value = "NAN";
    }
    else {
      var n = 1;
      var i;
      for (i = 1; i <= value; ++i) {
        n *= i;
      }
    }
    value = n;
    // historymenu.innerHTML += "<BR>(" + oldFactValue + ")! = " + value;
  }
  else if (f == "memclearall") {
    memform.meminput1.value = "";
    memform.meminput2.value = "";
    memform.meminput3.value = "";
    memform.meminput4.value = "";
    memform.meminput5.value = "";
  }
  else if (f == "memplus1") {
    memform.meminput1.value = value;
  }
  else if (f == "memrecall1") {
    value = parseFloat(memform.meminput1.value);
  }
  else if (f == "memclear1") {
    memform.meminput1.value = "";
  }
  else if (f == "memplus2") {
    memform.meminput2.value = value;
  }
  else if (f == "memrecall2") {
    value = parseFloat(memform.meminput2.value);
  }
  else if (f == "memclear2") {
    memform.meminput2.value = "";
  }
  else if (f == "memplus3") {
    memform.meminput3.value = value;
  }
  else if (f == "memrecall3") {
    value = parseFloat(memform.meminput3.value);
  }
  else if (f == "memclear3") {
    memform.meminput3.value = "";
  }
  else if (f == "memplus4") {
    memform.meminput4.value = value;
  }
  else if (f == "memrecall4") {
    value = parseFloat(memform.meminput4.value);
  }
  else if (f == "memclear4") {
    memform.meminput4.value = "";
  }
  else if (f == "memplus5") {
    memform.meminput5.value = value;
  }
  else if (f == "memrecall5") {
    value = parseFloat(memform.meminput5.value);
  }
  else if (f == "memclear5") {
    memform.meminput5.value = "";
  }
  else if (f == "sin") {
    // if "Deg" is checked...
    if (topbar.trigmeth[0].checked) {
      value = Math.sin(value * Math.PI / 180);
    }
    // if "Rad" is checked...
    else if (topbar.trigmeth[1].checked) {
      value = Math.sin(value);
    }
    // if "Grad" is checked...
    else if (topbar.trigmeth[2].checked) {
      value = Math.sin(value * Math.PI / 200);
    }
    // historymenu.innerHTML += "<BR>sin(" + oldValue + ") = " + format(value);
  }
  else if (f == "cos") {
    // if "Deg" is checked...
    if (topbar.trigmeth[0].checked) {
      value = Math.cos(value * Math.PI / 180);
    }
    // if "Rad" is checked...
    else if (topbar.trigmeth[1].checked) {
      value = Math.cos(value);
    }
    // if "Grad" is checked...
    else if (topbar.trigmeth[2].checked) {
      value = Math.cos(value * Math.PI / 200);
    }
    // historymenu.innerHTML += "<BR>cos(" + oldValue + ") = " + format(value);
  }
  else if (f == "tan") {
    // if "Deg" is checked...
    if (topbar.trigmeth[0].checked) {
      value = Math.tan(value * Math.PI / 180);
    }
    // if "Rad" is checked...
    else if (topbar.trigmeth[1].checked) {
      value = Math.tan(value);
    }
    // if "Grad" is checked...
    else if (topbar.trigmeth[2].checked) {
      value = Math.tan(value * Math.PI / 200);
    }
    // historymenu.innerHTML += "<BR>tan(" + oldValue + ") = " + format(value);
  }
  else if (f == "log") {
    value = Math.log(value) / Math.LN10;
    // historymenu.innerHTML += "<BR>log<SUB>10</SUB>(" + oldValue + ") = " + format(value);
  }
  else if (f == "log2") {
    value = Math.log(value) / Math.LN2;
    // historymenu.innerHTML += "<BR>log<sub>2</SUB>(" + oldValue + ") = " + format(value);
  }
  else if (f == "ln") {
    value = Math.log(value);
    // historymenu.innerHTML += "<BR>ln(" + oldValue + ") = " + format(value);
  }
  else if (f == "sqrt") {
    value = Math.sqrt(value);
    // historymenu.innerHTML += "<BR>sqrt(" + oldValue + ") = " + format(value);
  }
  else if (f == "leftshift") {
    value = value << 1;
  }
  else if (f == "rightshift") {
    value = value >> 1;
  }
  else if (f == "pi") {
    value = Math.PI;
    // historymenu.innerHTML += Math.PI;
  }
  else if (f == "acos") {
    // if "Deg" is checked...
    if (topbar.trigmeth[0].checked) {
      value = Math.acos(value) * (180 / Math.PI);
    }
    // if "Rad" is checked...
    else if (topbar.trigmeth[1].checked) {
      value = Math.acos(value);
    }
    // if "Grad" is checked...
    else if (topbar.trigmeth[2].checked) {
      value = Math.acos(value) * (200 / Math.PI);
    }
    // historymenu.innerHTML += "<BR>cos<SUP>-1</SUP>(" + oldValue + ") = " + format(value);
  }
  else if (f == "asin") {
    // if "Deg" is checked...
    if (topbar.trigmeth[0].checked) {
      value = Math.asin(value) * (180 / Math.PI);
    }
    // if "Rad" is checked...
    else if (topbar.trigmeth[1].checked) {
      value = Math.asin(value);
    }
    // if "Grad" is checked...
    else if (topbar.trigmeth[2].checked) {
      value = Math.asin(value) * (200 / Math.PI);
    }
    // historymenu.innerHTML += "<BR>sin<SUP>-1</SUP>(" + oldValue + ") = " + format(value);
  }
  else if (f == "atan") {
    // if "Deg" is checked...
    if (topbar.trigmeth[0].checked) {
      value = Math.atan(value) * (180 / Math.PI);
    }
    // if "Rad" is checked...
    else if (topbar.trigmeth[1].checked) {
      value = Math.atan(value);
    }
    // if "Grad" is checked...
    else if (topbar.trigmeth[2].checked) {
      value = Math.atan(value) * (200 / Math.PI);
    }
    // historymenu.innerHTML += "<BR>tan<SUP>-1</SUP>(" + oldValue + ") = " + format(value);
  }
  else if (f == "10tox") {
    value = Math.exp(value * Math.LN10);
    // historymenu.innerHTML += "<BR>10<SUP>(" + oldValue + ")</SUP> = " + format(value);
  }
  else if (f == "etox") {
    value = Math.exp(value);
    // historymenu.innerHTML += "<BR>e<SUP>(" + oldValue + ")</SUP> = " + format(value);
  }
  else if (f == "2tox") {
    value = Math.exp(value * Math.LN2);
    // historymenu.innerHTML += "<BR>2<SUP>(" + oldValue + ")</SUP> = " + format(value);
  }
  else if (f == "xsq") {
    value = value * value;
    // historymenu.innerHTML += "<BR>(" + oldValue + ")<SUP>2</SUP> = " + format(value);
  }
  else if (f == "not") {
    value = ~value;
  }
  update();
}
// -->
