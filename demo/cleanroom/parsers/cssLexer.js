// $ANTLR 3.2 Sep 23, 2009 12:02:23 /Users/ajko/Projects/current/Javascript Literal Errors/css.g 2010-01-12 14:01:06

var cssLexer = function(input, state) {
// alternate constructor @todo
// public cssLexer(CharStream input)
// public cssLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa8 = new cssLexer.DFA8(this);
    this.dfa11 = new cssLexer.DFA11(this);
    this.dfa20 = new cssLexer.DFA20(this);
    cssLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(cssLexer, {
    FUNCTION: 16,
    CLASS: 19,
    ATTRIB: 8,
    T__29: 29,
    T__28: 28,
    T__62: 62,
    T__27: 27,
    HASVALUE: 12,
    PSEUDO: 14,
    NEST: 6,
    T__61: 61,
    ID: 18,
    T__60: 60,
    ATTRIBEQUAL: 11,
    EOF: -1,
    COLOR: 23,
    T__55: 55,
    T__56: 56,
    T__57: 57,
    T__58: 58,
    IMPORT: 4,
    T__51: 51,
    T__52: 52,
    T__53: 53,
    T__54: 54,
    T__59: 59,
    IDENT: 21,
    COMMENT: 25,
    T__50: 50,
    T__42: 42,
    T__43: 43,
    T__40: 40,
    T__41: 41,
    T__46: 46,
    T__47: 47,
    T__44: 44,
    RULE: 7,
    BEGINSWITH: 13,
    PARENTOF: 9,
    T__45: 45,
    T__48: 48,
    T__49: 49,
    PRECEDEDS: 10,
    NUM: 22,
    TAG: 17,
    NESTED: 5,
    T__30: 30,
    T__31: 31,
    T__32: 32,
    T__33: 33,
    WS: 26,
    T__34: 34,
    T__35: 35,
    T__36: 36,
    T__37: 37,
    PROPERTY: 15,
    T__38: 38,
    T__39: 39,
    SL_COMMENT: 24,
    STRING: 20
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(cssLexer, org.antlr.runtime.Lexer, {
    FUNCTION : 16,
    CLASS : 19,
    ATTRIB : 8,
    T__29 : 29,
    T__28 : 28,
    T__62 : 62,
    T__27 : 27,
    HASVALUE : 12,
    PSEUDO : 14,
    NEST : 6,
    T__61 : 61,
    ID : 18,
    T__60 : 60,
    ATTRIBEQUAL : 11,
    EOF : -1,
    COLOR : 23,
    T__55 : 55,
    T__56 : 56,
    T__57 : 57,
    T__58 : 58,
    IMPORT : 4,
    T__51 : 51,
    T__52 : 52,
    T__53 : 53,
    T__54 : 54,
    T__59 : 59,
    IDENT : 21,
    COMMENT : 25,
    T__50 : 50,
    T__42 : 42,
    T__43 : 43,
    T__40 : 40,
    T__41 : 41,
    T__46 : 46,
    T__47 : 47,
    T__44 : 44,
    RULE : 7,
    BEGINSWITH : 13,
    PARENTOF : 9,
    T__45 : 45,
    T__48 : 48,
    T__49 : 49,
    PRECEDEDS : 10,
    NUM : 22,
    TAG : 17,
    NESTED : 5,
    T__30 : 30,
    T__31 : 31,
    T__32 : 32,
    T__33 : 33,
    WS : 26,
    T__34 : 34,
    T__35 : 35,
    T__36 : 36,
    T__37 : 37,
    PROPERTY : 15,
    T__38 : 38,
    T__39 : 39,
    SL_COMMENT : 24,
    STRING : 20,
    getGrammarFileName: function() { return "/Users/ajko/Projects/current/Javascript Literal Errors/css.g"; }
});
org.antlr.lang.augmentObject(cssLexer.prototype, {
    // $ANTLR start T__27
    mT__27: function()  {
        try {
            var _type = this.T__27;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:7:7: ( '@import' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:7:9: '@import'
            this.match("@import"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__27",

    // $ANTLR start T__28
    mT__28: function()  {
        try {
            var _type = this.T__28;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:8:7: ( '@include' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:8:9: '@include'
            this.match("@include"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__28",

    // $ANTLR start T__29
    mT__29: function()  {
        try {
            var _type = this.T__29;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:9:7: ( '@' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:9:9: '@'
            this.match('@'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__29",

    // $ANTLR start T__30
    mT__30: function()  {
        try {
            var _type = this.T__30;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:10:7: ( '{' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:10:9: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__30",

    // $ANTLR start T__31
    mT__31: function()  {
        try {
            var _type = this.T__31;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:11:7: ( '}' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:11:9: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__31",

    // $ANTLR start T__32
    mT__32: function()  {
        try {
            var _type = this.T__32;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:12:7: ( ',' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:12:9: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__32",

    // $ANTLR start T__33
    mT__33: function()  {
        try {
            var _type = this.T__33;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:13:7: ( '>' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:13:9: '>'
            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__33",

    // $ANTLR start T__34
    mT__34: function()  {
        try {
            var _type = this.T__34;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:14:7: ( '+' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:14:9: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__34",

    // $ANTLR start T__35
    mT__35: function()  {
        try {
            var _type = this.T__35;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:15:7: ( ';' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:15:9: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__35",

    // $ANTLR start T__36
    mT__36: function()  {
        try {
            var _type = this.T__36;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:16:7: ( '#' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:16:9: '#'
            this.match('#'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__36",

    // $ANTLR start T__37
    mT__37: function()  {
        try {
            var _type = this.T__37;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:17:7: ( '.' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:17:9: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__37",

    // $ANTLR start T__38
    mT__38: function()  {
        try {
            var _type = this.T__38;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:18:7: ( ':' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:18:9: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__38",

    // $ANTLR start T__39
    mT__39: function()  {
        try {
            var _type = this.T__39;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:19:7: ( '::' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:19:9: '::'
            this.match("::"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__39",

    // $ANTLR start T__40
    mT__40: function()  {
        try {
            var _type = this.T__40;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:20:7: ( '[' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:20:9: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__40",

    // $ANTLR start T__41
    mT__41: function()  {
        try {
            var _type = this.T__41;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:21:7: ( ']' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:21:9: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__41",

    // $ANTLR start T__42
    mT__42: function()  {
        try {
            var _type = this.T__42;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:22:7: ( '=' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:22:9: '='
            this.match('='); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__42",

    // $ANTLR start T__43
    mT__43: function()  {
        try {
            var _type = this.T__43;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:23:7: ( '~=' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:23:9: '~='
            this.match("~="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__43",

    // $ANTLR start T__44
    mT__44: function()  {
        try {
            var _type = this.T__44;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:24:7: ( '|=' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:24:9: '|='
            this.match("|="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__44",

    // $ANTLR start T__45
    mT__45: function()  {
        try {
            var _type = this.T__45;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:25:7: ( '%' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:25:9: '%'
            this.match('%'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__45",

    // $ANTLR start T__46
    mT__46: function()  {
        try {
            var _type = this.T__46;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:26:7: ( 'px' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:26:9: 'px'
            this.match("px"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__46",

    // $ANTLR start T__47
    mT__47: function()  {
        try {
            var _type = this.T__47;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:27:7: ( 'cm' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:27:9: 'cm'
            this.match("cm"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__47",

    // $ANTLR start T__48
    mT__48: function()  {
        try {
            var _type = this.T__48;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:28:7: ( 'mm' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:28:9: 'mm'
            this.match("mm"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__48",

    // $ANTLR start T__49
    mT__49: function()  {
        try {
            var _type = this.T__49;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:29:7: ( 'in' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:29:9: 'in'
            this.match("in"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__49",

    // $ANTLR start T__50
    mT__50: function()  {
        try {
            var _type = this.T__50;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:30:7: ( 'pt' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:30:9: 'pt'
            this.match("pt"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__50",

    // $ANTLR start T__51
    mT__51: function()  {
        try {
            var _type = this.T__51;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:31:7: ( 'pc' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:31:9: 'pc'
            this.match("pc"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__51",

    // $ANTLR start T__52
    mT__52: function()  {
        try {
            var _type = this.T__52;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:32:7: ( 'em' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:32:9: 'em'
            this.match("em"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__52",

    // $ANTLR start T__53
    mT__53: function()  {
        try {
            var _type = this.T__53;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:33:7: ( 'ex' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:33:9: 'ex'
            this.match("ex"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__53",

    // $ANTLR start T__54
    mT__54: function()  {
        try {
            var _type = this.T__54;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:34:7: ( 'deg' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:34:9: 'deg'
            this.match("deg"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__54",

    // $ANTLR start T__55
    mT__55: function()  {
        try {
            var _type = this.T__55;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:35:7: ( 'rad' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:35:9: 'rad'
            this.match("rad"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__55",

    // $ANTLR start T__56
    mT__56: function()  {
        try {
            var _type = this.T__56;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:36:7: ( 'grad' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:36:9: 'grad'
            this.match("grad"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__56",

    // $ANTLR start T__57
    mT__57: function()  {
        try {
            var _type = this.T__57;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:37:7: ( 'ms' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:37:9: 'ms'
            this.match("ms"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__57",

    // $ANTLR start T__58
    mT__58: function()  {
        try {
            var _type = this.T__58;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:38:7: ( 's' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:38:9: 's'
            this.match('s'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__58",

    // $ANTLR start T__59
    mT__59: function()  {
        try {
            var _type = this.T__59;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:39:7: ( 'hz' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:39:9: 'hz'
            this.match("hz"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__59",

    // $ANTLR start T__60
    mT__60: function()  {
        try {
            var _type = this.T__60;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:40:7: ( 'khz' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:40:9: 'khz'
            this.match("khz"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__60",

    // $ANTLR start T__61
    mT__61: function()  {
        try {
            var _type = this.T__61;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:41:7: ( '(' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:41:9: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__61",

    // $ANTLR start T__62
    mT__62: function()  {
        try {
            var _type = this.T__62;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:42:7: ( ')' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:42:9: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__62",

    // $ANTLR start IDENT
    mIDENT: function()  {
        try {
            var _type = this.IDENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:114:2: ( ( '_' | 'a' .. 'z' | 'A' .. 'Z' | '\\u0100' .. '\\ufffe' ) ( '_' | '-' | 'a' .. 'z' | 'A' .. 'Z' | '\\u0100' .. '\\ufffe' | '0' .. '9' )* | '-' ( '_' | 'a' .. 'z' | 'A' .. 'Z' | '\\u0100' .. '\\ufffe' ) ( '_' | '-' | 'a' .. 'z' | 'A' .. 'Z' | '\\u0100' .. '\\ufffe' | '0' .. '9' )* )
            var alt3=2;
            var LA3_0 = this.input.LA(1);

            if ( ((LA3_0>='A' && LA3_0<='Z')||LA3_0=='_'||(LA3_0>='a' && LA3_0<='z')||(LA3_0>='\u0100' && LA3_0<='\uFFFE')) ) {
                alt3=1;
            }
            else if ( (LA3_0=='-') ) {
                alt3=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                throw nvae;
            }
            switch (alt3) {
                case 1 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:114:4: ( '_' | 'a' .. 'z' | 'A' .. 'Z' | '\\u0100' .. '\\ufffe' ) ( '_' | '-' | 'a' .. 'z' | 'A' .. 'Z' | '\\u0100' .. '\\ufffe' | '0' .. '9' )*
                    if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z')||(this.input.LA(1)>='\u0100' && this.input.LA(1)<='\uFFFE') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}

                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:115:3: ( '_' | '-' | 'a' .. 'z' | 'A' .. 'Z' | '\\u0100' .. '\\ufffe' | '0' .. '9' )*
                    loop1:
                    do {
                        var alt1=2;
                        var LA1_0 = this.input.LA(1);

                        if ( (LA1_0=='-'||(LA1_0>='0' && LA1_0<='9')||(LA1_0>='A' && LA1_0<='Z')||LA1_0=='_'||(LA1_0>='a' && LA1_0<='z')||(LA1_0>='\u0100' && LA1_0<='\uFFFE')) ) {
                            alt1=1;
                        }


                        switch (alt1) {
                        case 1 :
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:
                            if ( this.input.LA(1)=='-'||(this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z')||(this.input.LA(1)>='\u0100' && this.input.LA(1)<='\uFFFE') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop1;
                        }
                    } while (true);



                    break;
                case 2 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:116:4: '-' ( '_' | 'a' .. 'z' | 'A' .. 'Z' | '\\u0100' .. '\\ufffe' ) ( '_' | '-' | 'a' .. 'z' | 'A' .. 'Z' | '\\u0100' .. '\\ufffe' | '0' .. '9' )*
                    this.match('-'); 
                    if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z')||(this.input.LA(1)>='\u0100' && this.input.LA(1)<='\uFFFE') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}

                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:117:3: ( '_' | '-' | 'a' .. 'z' | 'A' .. 'Z' | '\\u0100' .. '\\ufffe' | '0' .. '9' )*
                    loop2:
                    do {
                        var alt2=2;
                        var LA2_0 = this.input.LA(1);

                        if ( (LA2_0=='-'||(LA2_0>='0' && LA2_0<='9')||(LA2_0>='A' && LA2_0<='Z')||LA2_0=='_'||(LA2_0>='a' && LA2_0<='z')||(LA2_0>='\u0100' && LA2_0<='\uFFFE')) ) {
                            alt2=1;
                        }


                        switch (alt2) {
                        case 1 :
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:
                            if ( this.input.LA(1)=='-'||(this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z')||(this.input.LA(1)>='\u0100' && this.input.LA(1)<='\uFFFE') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop2;
                        }
                    } while (true);



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IDENT",

    // $ANTLR start STRING
    mSTRING: function()  {
        try {
            var _type = this.STRING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:122:2: ( '\"' (~ ( '\"' | '\\n' | '\\r' ) )* '\"' | '\\'' (~ ( '\\'' | '\\n' | '\\r' ) )* '\\'' )
            var alt6=2;
            var LA6_0 = this.input.LA(1);

            if ( (LA6_0=='\"') ) {
                alt6=1;
            }
            else if ( (LA6_0=='\'') ) {
                alt6=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 6, 0, this.input);

                throw nvae;
            }
            switch (alt6) {
                case 1 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:122:4: '\"' (~ ( '\"' | '\\n' | '\\r' ) )* '\"'
                    this.match('\"'); 
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:122:9: (~ ( '\"' | '\\n' | '\\r' ) )*
                    loop4:
                    do {
                        var alt4=2;
                        var LA4_0 = this.input.LA(1);

                        if ( ((LA4_0>='\u0000' && LA4_0<='\t')||(LA4_0>='\u000B' && LA4_0<='\f')||(LA4_0>='\u000E' && LA4_0<='!')||(LA4_0>='#' && LA4_0<='\uFFFF')) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                        case 1 :
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:122:10: ~ ( '\"' | '\\n' | '\\r' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop4;
                        }
                    } while (true);

                    this.match('\"'); 


                    break;
                case 2 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:123:4: '\\'' (~ ( '\\'' | '\\n' | '\\r' ) )* '\\''
                    this.match('\''); 
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:123:10: (~ ( '\\'' | '\\n' | '\\r' ) )*
                    loop5:
                    do {
                        var alt5=2;
                        var LA5_0 = this.input.LA(1);

                        if ( ((LA5_0>='\u0000' && LA5_0<='\t')||(LA5_0>='\u000B' && LA5_0<='\f')||(LA5_0>='\u000E' && LA5_0<='&')||(LA5_0>='(' && LA5_0<='\uFFFF')) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                        case 1 :
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:123:11: ~ ( '\\'' | '\\n' | '\\r' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop5;
                        }
                    } while (true);

                    this.match('\''); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING",

    // $ANTLR start NUM
    mNUM: function()  {
        try {
            var _type = this.NUM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:127:2: ( '-' ( ( '0' .. '9' )* '.' )? ( '0' .. '9' )+ | ( ( '0' .. '9' )* '.' )? ( '0' .. '9' )+ )
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( (LA13_0=='-') ) {
                alt13=1;
            }
            else if ( (LA13_0=='.'||(LA13_0>='0' && LA13_0<='9')) ) {
                alt13=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 13, 0, this.input);

                throw nvae;
            }
            switch (alt13) {
                case 1 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:127:4: '-' ( ( '0' .. '9' )* '.' )? ( '0' .. '9' )+
                    this.match('-'); 
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:127:8: ( ( '0' .. '9' )* '.' )?
                    var alt8=2;
                    alt8 = this.dfa8.predict(this.input);
                    switch (alt8) {
                        case 1 :
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:127:9: ( '0' .. '9' )* '.'
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:127:9: ( '0' .. '9' )*
                            loop7:
                            do {
                                var alt7=2;
                                var LA7_0 = this.input.LA(1);

                                if ( ((LA7_0>='0' && LA7_0<='9')) ) {
                                    alt7=1;
                                }


                                switch (alt7) {
                                case 1 :
                                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:127:10: '0' .. '9'
                                    this.matchRange('0','9'); 


                                    break;

                                default :
                                    break loop7;
                                }
                            } while (true);

                            this.match('.'); 


                            break;

                    }

                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:127:27: ( '0' .. '9' )+
                    var cnt9=0;
                    loop9:
                    do {
                        var alt9=2;
                        var LA9_0 = this.input.LA(1);

                        if ( ((LA9_0>='0' && LA9_0<='9')) ) {
                            alt9=1;
                        }


                        switch (alt9) {
                        case 1 :
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:127:28: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt9 >= 1 ) {
                                break loop9;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(9, this.input);
                                throw eee;
                        }
                        cnt9++;
                    } while (true);



                    break;
                case 2 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:128:4: ( ( '0' .. '9' )* '.' )? ( '0' .. '9' )+
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:128:4: ( ( '0' .. '9' )* '.' )?
                    var alt11=2;
                    alt11 = this.dfa11.predict(this.input);
                    switch (alt11) {
                        case 1 :
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:128:5: ( '0' .. '9' )* '.'
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:128:5: ( '0' .. '9' )*
                            loop10:
                            do {
                                var alt10=2;
                                var LA10_0 = this.input.LA(1);

                                if ( ((LA10_0>='0' && LA10_0<='9')) ) {
                                    alt10=1;
                                }


                                switch (alt10) {
                                case 1 :
                                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:128:6: '0' .. '9'
                                    this.matchRange('0','9'); 


                                    break;

                                default :
                                    break loop10;
                                }
                            } while (true);

                            this.match('.'); 


                            break;

                    }

                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:128:23: ( '0' .. '9' )+
                    var cnt12=0;
                    loop12:
                    do {
                        var alt12=2;
                        var LA12_0 = this.input.LA(1);

                        if ( ((LA12_0>='0' && LA12_0<='9')) ) {
                            alt12=1;
                        }


                        switch (alt12) {
                        case 1 :
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:128:24: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt12 >= 1 ) {
                                break loop12;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(12, this.input);
                                throw eee;
                        }
                        cnt12++;
                    } while (true);



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NUM",

    // $ANTLR start COLOR
    mCOLOR: function()  {
        try {
            var _type = this.COLOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:132:2: ( '#' ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )+ )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:132:4: '#' ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )+
            this.match('#'); 
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:132:8: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )+
            var cnt14=0;
            loop14:
            do {
                var alt14=2;
                var LA14_0 = this.input.LA(1);

                if ( ((LA14_0>='0' && LA14_0<='9')||(LA14_0>='A' && LA14_0<='F')||(LA14_0>='a' && LA14_0<='f')) ) {
                    alt14=1;
                }


                switch (alt14) {
                case 1 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='F')||(this.input.LA(1)>='a' && this.input.LA(1)<='f') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt14 >= 1 ) {
                        break loop14;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(14, this.input);
                        throw eee;
                }
                cnt14++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COLOR",

    // $ANTLR start SL_COMMENT
    mSL_COMMENT: function()  {
        try {
            var _type = this.SL_COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:137:2: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\n' | '\\r' ( '\\n' )? ) )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:137:4: '//' (~ ( '\\n' | '\\r' ) )* ( '\\n' | '\\r' ( '\\n' )? )
            this.match("//"); 

            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:138:3: (~ ( '\\n' | '\\r' ) )*
            loop15:
            do {
                var alt15=2;
                var LA15_0 = this.input.LA(1);

                if ( ((LA15_0>='\u0000' && LA15_0<='\t')||(LA15_0>='\u000B' && LA15_0<='\f')||(LA15_0>='\u000E' && LA15_0<='\uFFFF')) ) {
                    alt15=1;
                }


                switch (alt15) {
                case 1 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:138:4: ~ ( '\\n' | '\\r' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop15;
                }
            } while (true);

            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:138:19: ( '\\n' | '\\r' ( '\\n' )? )
            var alt17=2;
            var LA17_0 = this.input.LA(1);

            if ( (LA17_0=='\n') ) {
                alt17=1;
            }
            else if ( (LA17_0=='\r') ) {
                alt17=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 17, 0, this.input);

                throw nvae;
            }
            switch (alt17) {
                case 1 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:138:20: '\\n'
                    this.match('\n'); 


                    break;
                case 2 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:138:25: '\\r' ( '\\n' )?
                    this.match('\r'); 
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:138:29: ( '\\n' )?
                    var alt16=2;
                    var LA16_0 = this.input.LA(1);

                    if ( (LA16_0=='\n') ) {
                        alt16=1;
                    }
                    switch (alt16) {
                        case 1 :
                            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:138:30: '\\n'
                            this.match('\n'); 


                            break;

                    }



                    break;

            }

            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SL_COMMENT",

    // $ANTLR start COMMENT
    mCOMMENT: function()  {
        try {
            var _type = this.COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:144:2: ( '/*' ( . )* '*/' )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:144:4: '/*' ( . )* '*/'
            this.match("/*"); 

            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:144:9: ( . )*
            loop18:
            do {
                var alt18=2;
                var LA18_0 = this.input.LA(1);

                if ( (LA18_0=='*') ) {
                    var LA18_1 = this.input.LA(2);

                    if ( (LA18_1=='/') ) {
                        alt18=2;
                    }
                    else if ( ((LA18_1>='\u0000' && LA18_1<='.')||(LA18_1>='0' && LA18_1<='\uFFFF')) ) {
                        alt18=1;
                    }


                }
                else if ( ((LA18_0>='\u0000' && LA18_0<=')')||(LA18_0>='+' && LA18_0<='\uFFFF')) ) {
                    alt18=1;
                }


                switch (alt18) {
                case 1 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:144:9: .
                    this.matchAny(); 


                    break;

                default :
                    break loop18;
                }
            } while (true);

            this.match("*/"); 

             _channel = HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMENT",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:148:4: ( ( ' ' | '\\t' | '\\r' | '\\n' | '\\f' )+ )
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:148:6: ( ' ' | '\\t' | '\\r' | '\\n' | '\\f' )+
            // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:148:6: ( ' ' | '\\t' | '\\r' | '\\n' | '\\f' )+
            var cnt19=0;
            loop19:
            do {
                var alt19=2;
                var LA19_0 = this.input.LA(1);

                if ( ((LA19_0>='\t' && LA19_0<='\n')||(LA19_0>='\f' && LA19_0<='\r')||LA19_0==' ') ) {
                    alt19=1;
                }


                switch (alt19) {
                case 1 :
                    // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:
                    if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||(this.input.LA(1)>='\f' && this.input.LA(1)<='\r')||this.input.LA(1)==' ' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt19 >= 1 ) {
                        break loop19;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(19, this.input);
                        throw eee;
                }
                cnt19++;
            } while (true);

             _channel = HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    mTokens: function() {
        // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:8: ( T__27 | T__28 | T__29 | T__30 | T__31 | T__32 | T__33 | T__34 | T__35 | T__36 | T__37 | T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | T__56 | T__57 | T__58 | T__59 | T__60 | T__61 | T__62 | IDENT | STRING | NUM | COLOR | SL_COMMENT | COMMENT | WS )
        var alt20=43;
        alt20 = this.dfa20.predict(this.input);
        switch (alt20) {
            case 1 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:10: T__27
                this.mT__27(); 


                break;
            case 2 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:16: T__28
                this.mT__28(); 


                break;
            case 3 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:22: T__29
                this.mT__29(); 


                break;
            case 4 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:28: T__30
                this.mT__30(); 


                break;
            case 5 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:34: T__31
                this.mT__31(); 


                break;
            case 6 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:40: T__32
                this.mT__32(); 


                break;
            case 7 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:46: T__33
                this.mT__33(); 


                break;
            case 8 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:52: T__34
                this.mT__34(); 


                break;
            case 9 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:58: T__35
                this.mT__35(); 


                break;
            case 10 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:64: T__36
                this.mT__36(); 


                break;
            case 11 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:70: T__37
                this.mT__37(); 


                break;
            case 12 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:76: T__38
                this.mT__38(); 


                break;
            case 13 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:82: T__39
                this.mT__39(); 


                break;
            case 14 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:88: T__40
                this.mT__40(); 


                break;
            case 15 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:94: T__41
                this.mT__41(); 


                break;
            case 16 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:100: T__42
                this.mT__42(); 


                break;
            case 17 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:106: T__43
                this.mT__43(); 


                break;
            case 18 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:112: T__44
                this.mT__44(); 


                break;
            case 19 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:118: T__45
                this.mT__45(); 


                break;
            case 20 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:124: T__46
                this.mT__46(); 


                break;
            case 21 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:130: T__47
                this.mT__47(); 


                break;
            case 22 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:136: T__48
                this.mT__48(); 


                break;
            case 23 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:142: T__49
                this.mT__49(); 


                break;
            case 24 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:148: T__50
                this.mT__50(); 


                break;
            case 25 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:154: T__51
                this.mT__51(); 


                break;
            case 26 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:160: T__52
                this.mT__52(); 


                break;
            case 27 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:166: T__53
                this.mT__53(); 


                break;
            case 28 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:172: T__54
                this.mT__54(); 


                break;
            case 29 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:178: T__55
                this.mT__55(); 


                break;
            case 30 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:184: T__56
                this.mT__56(); 


                break;
            case 31 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:190: T__57
                this.mT__57(); 


                break;
            case 32 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:196: T__58
                this.mT__58(); 


                break;
            case 33 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:202: T__59
                this.mT__59(); 


                break;
            case 34 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:208: T__60
                this.mT__60(); 


                break;
            case 35 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:214: T__61
                this.mT__61(); 


                break;
            case 36 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:220: T__62
                this.mT__62(); 


                break;
            case 37 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:226: IDENT
                this.mIDENT(); 


                break;
            case 38 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:232: STRING
                this.mSTRING(); 


                break;
            case 39 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:239: NUM
                this.mNUM(); 


                break;
            case 40 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:243: COLOR
                this.mCOLOR(); 


                break;
            case 41 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:249: SL_COMMENT
                this.mSL_COMMENT(); 


                break;
            case 42 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:260: COMMENT
                this.mCOMMENT(); 


                break;
            case 43 :
                // /Users/ajko/Projects/current/Javascript Literal Errors/css.g:1:268: WS
                this.mWS(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(cssLexer, {
    DFA8_eotS:
        "\u0001\uffff\u0001\u0003\u0002\uffff",
    DFA8_eofS:
        "\u0004\uffff",
    DFA8_minS:
        "\u0002\u002e\u0002\uffff",
    DFA8_maxS:
        "\u0002\u0039\u0002\uffff",
    DFA8_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA8_specialS:
        "\u0004\uffff}>",
    DFA8_transitionS: [
            "\u0001\u0002\u0001\uffff\u000a\u0001",
            "\u0001\u0002\u0001\uffff\u000a\u0001",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(cssLexer, {
    DFA8_eot:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA8_eotS),
    DFA8_eof:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA8_eofS),
    DFA8_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(cssLexer.DFA8_minS),
    DFA8_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(cssLexer.DFA8_maxS),
    DFA8_accept:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA8_acceptS),
    DFA8_special:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA8_specialS),
    DFA8_transition: (function() {
        var a = [],
            i,
            numStates = cssLexer.DFA8_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA8_transitionS[i]));
        }
        return a;
    })()
});

cssLexer.DFA8 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 8;
    this.eot = cssLexer.DFA8_eot;
    this.eof = cssLexer.DFA8_eof;
    this.min = cssLexer.DFA8_min;
    this.max = cssLexer.DFA8_max;
    this.accept = cssLexer.DFA8_accept;
    this.special = cssLexer.DFA8_special;
    this.transition = cssLexer.DFA8_transition;
};

org.antlr.lang.extend(cssLexer.DFA8, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "127:8: ( ( '0' .. '9' )* '.' )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(cssLexer, {
    DFA11_eotS:
        "\u0001\uffff\u0001\u0003\u0002\uffff",
    DFA11_eofS:
        "\u0004\uffff",
    DFA11_minS:
        "\u0002\u002e\u0002\uffff",
    DFA11_maxS:
        "\u0002\u0039\u0002\uffff",
    DFA11_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002",
    DFA11_specialS:
        "\u0004\uffff}>",
    DFA11_transitionS: [
            "\u0001\u0002\u0001\uffff\u000a\u0001",
            "\u0001\u0002\u0001\uffff\u000a\u0001",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(cssLexer, {
    DFA11_eot:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA11_eotS),
    DFA11_eof:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA11_eofS),
    DFA11_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(cssLexer.DFA11_minS),
    DFA11_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(cssLexer.DFA11_maxS),
    DFA11_accept:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA11_acceptS),
    DFA11_special:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA11_specialS),
    DFA11_transition: (function() {
        var a = [],
            i,
            numStates = cssLexer.DFA11_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA11_transitionS[i]));
        }
        return a;
    })()
});

cssLexer.DFA11 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 11;
    this.eot = cssLexer.DFA11_eot;
    this.eof = cssLexer.DFA11_eof;
    this.min = cssLexer.DFA11_min;
    this.max = cssLexer.DFA11_max;
    this.accept = cssLexer.DFA11_accept;
    this.special = cssLexer.DFA11_special;
    this.transition = cssLexer.DFA11_transition;
};

org.antlr.lang.extend(cssLexer.DFA11, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "128:4: ( ( '0' .. '9' )* '.' )?";
    },
    dummy: null
});
org.antlr.lang.augmentObject(cssLexer, {
    DFA20_eotS:
        "\u0001\uffff\u0001\u0025\u0006\uffff\u0001\u0026\u0001\u0028\u0001"+
    "\u002a\u0006\uffff\u0008\u001e\u0001\u0037\u0002\u001e\u000f\uffff\u0001"+
    "\u003e\u0001\u003f\u0001\u0040\u0001\u0041\u0001\u0042\u0001\u0043\u0001"+
    "\u0044\u0001\u0045\u0001\u0046\u0003\u001e\u0001\uffff\u0001\u004a\u0001"+
    "\u001e\u000d\uffff\u0001\u004c\u0001\u004d\u0001\u001e\u0001\uffff\u0001"+
    "\u004f\u0002\uffff\u0001\u0050\u0002\uffff",
    DFA20_eofS:
        "\u0051\uffff",
    DFA20_minS:
        "\u0001\u0009\u0001\u0069\u0006\uffff\u0002\u0030\u0001\u003a\u0006"+
    "\uffff\u0001\u0063\u0002\u006d\u0001\u006e\u0001\u006d\u0001\u0065\u0001"+
    "\u0061\u0001\u0072\u0001\u002d\u0001\u007a\u0001\u0068\u0003\uffff\u0001"+
    "\u002e\u0002\uffff\u0001\u002a\u0001\uffff\u0001\u006d\u0006\uffff\u0009"+
    "\u002d\u0001\u0067\u0001\u0064\u0001\u0061\u0001\uffff\u0001\u002d\u0001"+
    "\u007a\u000d\uffff\u0002\u002d\u0001\u0064\u0001\uffff\u0001\u002d\u0002"+
    "\uffff\u0001\u002d\u0002\uffff",
    DFA20_maxS:
        "\u0001\ufffe\u0001\u0069\u0006\uffff\u0001\u0066\u0001\u0039\u0001"+
    "\u003a\u0006\uffff\u0001\u0078\u0001\u006d\u0001\u0073\u0001\u006e\u0001"+
    "\u0078\u0001\u0065\u0001\u0061\u0001\u0072\u0001\ufffe\u0001\u007a\u0001"+
    "\u0068\u0003\uffff\u0001\ufffe\u0002\uffff\u0001\u002f\u0001\uffff\u0001"+
    "\u006e\u0006\uffff\u0009\ufffe\u0001\u0067\u0001\u0064\u0001\u0061\u0001"+
    "\uffff\u0001\ufffe\u0001\u007a\u000d\uffff\u0002\ufffe\u0001\u0064\u0001"+
    "\uffff\u0001\ufffe\u0002\uffff\u0001\ufffe\u0002\uffff",
    DFA20_acceptS:
        "\u0002\uffff\u0001\u0004\u0001\u0005\u0001\u0006\u0001\u0007\u0001"+
    "\u0008\u0001\u0009\u0003\uffff\u0001\u000e\u0001\u000f\u0001\u0010\u0001"+
    "\u0011\u0001\u0012\u0001\u0013\u000b\uffff\u0001\u0023\u0001\u0024\u0001"+
    "\u0025\u0001\uffff\u0001\u0026\u0001\u0027\u0001\uffff\u0001\u002b\u0001"+
    "\uffff\u0001\u0003\u0001\u000a\u0001\u0028\u0001\u000b\u0001\u000d\u0001"+
    "\u000c\u000c\uffff\u0001\u0020\u0002\uffff\u0001\u0029\u0001\u002a\u0001"+
    "\u0001\u0001\u0002\u0001\u0014\u0001\u0018\u0001\u0019\u0001\u0015\u0001"+
    "\u0016\u0001\u001f\u0001\u0017\u0001\u001a\u0001\u001b\u0003\uffff\u0001"+
    "\u0021\u0001\uffff\u0001\u001c\u0001\u001d\u0001\uffff\u0001\u0022\u0001"+
    "\u001e",
    DFA20_specialS:
        "\u0051\uffff}>",
    DFA20_transitionS: [
            "\u0002\u0023\u0001\uffff\u0002\u0023\u0012\uffff\u0001\u0023"+
            "\u0001\uffff\u0001\u0020\u0001\u0008\u0001\uffff\u0001\u0010"+
            "\u0001\uffff\u0001\u0020\u0001\u001c\u0001\u001d\u0001\uffff"+
            "\u0001\u0006\u0001\u0004\u0001\u001f\u0001\u0009\u0001\u0022"+
            "\u000a\u0021\u0001\u000a\u0001\u0007\u0001\uffff\u0001\u000d"+
            "\u0001\u0005\u0001\uffff\u0001\u0001\u001a\u001e\u0001\u000b"+
            "\u0001\uffff\u0001\u000c\u0001\uffff\u0001\u001e\u0001\uffff"+
            "\u0002\u001e\u0001\u0012\u0001\u0016\u0001\u0015\u0001\u001e"+
            "\u0001\u0018\u0001\u001a\u0001\u0014\u0001\u001e\u0001\u001b"+
            "\u0001\u001e\u0001\u0013\u0002\u001e\u0001\u0011\u0001\u001e"+
            "\u0001\u0017\u0001\u0019\u0007\u001e\u0001\u0002\u0001\u000f"+
            "\u0001\u0003\u0001\u000e\u0081\uffff\ufeff\u001e",
            "\u0001\u0024",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u000a\u0027\u0007\uffff\u0006\u0027\u001a\uffff\u0006\u0027",
            "\u000a\u0021",
            "\u0001\u0029",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u002d\u0010\uffff\u0001\u002c\u0003\uffff\u0001\u002b",
            "\u0001\u002e",
            "\u0001\u002f\u0005\uffff\u0001\u0030",
            "\u0001\u0031",
            "\u0001\u0032\u000a\uffff\u0001\u0033",
            "\u0001\u0034",
            "\u0001\u0035",
            "\u0001\u0036",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u0038",
            "\u0001\u0039",
            "",
            "",
            "",
            "\u0001\u0021\u0001\uffff\u000a\u0021\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "",
            "",
            "\u0001\u003b\u0004\uffff\u0001\u003a",
            "",
            "\u0001\u003c\u0001\u003d",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u0047",
            "\u0001\u0048",
            "\u0001\u0049",
            "",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u004b",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "\u0001\u004e",
            "",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "",
            "",
            "\u0001\u001e\u0002\uffff\u000a\u001e\u0007\uffff\u001a\u001e"+
            "\u0004\uffff\u0001\u001e\u0001\uffff\u001a\u001e\u0085\uffff"+
            "\ufeff\u001e",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(cssLexer, {
    DFA20_eot:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA20_eotS),
    DFA20_eof:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA20_eofS),
    DFA20_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(cssLexer.DFA20_minS),
    DFA20_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(cssLexer.DFA20_maxS),
    DFA20_accept:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA20_acceptS),
    DFA20_special:
        org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA20_specialS),
    DFA20_transition: (function() {
        var a = [],
            i,
            numStates = cssLexer.DFA20_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(cssLexer.DFA20_transitionS[i]));
        }
        return a;
    })()
});

cssLexer.DFA20 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 20;
    this.eot = cssLexer.DFA20_eot;
    this.eof = cssLexer.DFA20_eof;
    this.min = cssLexer.DFA20_min;
    this.max = cssLexer.DFA20_max;
    this.accept = cssLexer.DFA20_accept;
    this.special = cssLexer.DFA20_special;
    this.transition = cssLexer.DFA20_transition;
};

org.antlr.lang.extend(cssLexer.DFA20, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( T__27 | T__28 | T__29 | T__30 | T__31 | T__32 | T__33 | T__34 | T__35 | T__36 | T__37 | T__38 | T__39 | T__40 | T__41 | T__42 | T__43 | T__44 | T__45 | T__46 | T__47 | T__48 | T__49 | T__50 | T__51 | T__52 | T__53 | T__54 | T__55 | T__56 | T__57 | T__58 | T__59 | T__60 | T__61 | T__62 | IDENT | STRING | NUM | COLOR | SL_COMMENT | COMMENT | WS );";
    },
    dummy: null
});
 
})();