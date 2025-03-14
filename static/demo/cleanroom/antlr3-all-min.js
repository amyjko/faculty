/*
Copyright (c) 2003-2008 Terence Parr. All rights reserved.
Code licensed under the BSD License:
http://www.antlr.org/license.html

Some parts of the ANTLR class:
Copyright (c) 2008, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.net/yui/license.txt
*/
if(typeof org=="undefined"||!org){
	var org={}
}
if(typeof org.antlr=="undefined"||!org.antlr){
	org.antlr={}
}
org.antlr.global=(function(){return this}).call(null);
org.antlr.namespace=function(){
	var A=arguments,E=null,C,B,D;
	for(C=0;C<A.length;C=C+1){
		D=A[C].split(".");
		E=org.antlr.global;
		for(B=0;B<D.length;B=B+1){
			E[D[B]]=E[D[B]]||{};
			E=E[D[B]]
		}
	}
	return E
};
org.antlr.env=org.antlr.env||{};
org.antlr.env.ua=function(){
	var D={
		ie:0,opera:0,gecko:0,webkit:0,mobile:null,air:0,rhino:false};
	var B,A;
	try{
		B=navigator.userAgent;
		if((/KHTML/).test(B)){D.webkit=1}
		A=B.match(/AppleWebKit\/([^\s]*)/);
		if(A&&A[1]){
			D.webkit=parseFloat(A[1]);
			if(/ Mobile\//.test(B)){
				D.mobile="Apple"
			}
			else{
				A=B.match(/NokiaN[^\/]*/);
				if(A){
					D.mobile=A[0]
				}
			}
			A=B.match(/AdobeAIR\/([^\s]*)/);
			if(A){
				D.air=A[0]
			}
		}
		if(!D.webkit){
			A=B.match(/Opera[\s\/]([^\s]*)/);
			if(A&&A[1]){
				D.opera=parseFloat(A[1]);
				A=B.match(/Opera Mini[^;]*/);
				if(A){
					D.mobile=A[0]
				}
			}
			else{
				A=B.match(/MSIE\s([^;]*)/);
				if(A&&A[1]){
					D.ie=parseFloat(A[1])
				}
				else{
					A=B.match(/Gecko\/([^\s]*)/);
					if(A){
						D.gecko=1;A=B.match(/rv:([^\s\)]*)/);
						if(A&&A[1]){
							D.gecko=parseFloat(A[1])
						}
					}
				}
			}
		}
	}
	catch(C){}
	try{
		if(typeof window=="undefined"&&loadClass){
			D.rhino=true
		}
	}
	catch(C){}
	return D
}();

org.antlr.namespace("org.antlr.runtime.tree");

org.antlr.lang = org.antlr.lang || {
    isArray: function(B) {
        if (B) {
            var A = org.antlr.lang;
            return A.isNumber(B.length) && A.isFunction(B.splice)
        }
        return false
    },
    isBoolean: function(A) {
        return typeof A === "boolean"
    },
    isFunction: function(A) {
        return typeof A === "function"
    },
    isNull: function(A) {
        return A === null
    },
    isNumber: function(A) {
        return typeof A === "number" && isFinite(A)
    },
    isObject: function(A) {
        return (A && (typeof A === "object" || org.antlr.lang.isFunction(A))) || false
    },
    isString: function(A) {
        return typeof A === "string"
    },
    isUndefined: function(A) {
        return typeof A === "undefined"
    },
    _IEEnumFix: function(C, B) {
        if (org.antlr.env.ua.ie) {
            var E = ["toString", "valueOf"],
            A;
            for (A = 0; A < E.length; A = A + 1) {
                var F = E[A],
                D = B[F];
                if (org.antlr.lang.isFunction(D) && D != Object.prototype[F]) {
                    C[F] = D
                }
            }
        }
    },
    extend: function(D, E, C) {
        if (!E || !D) {
            throw new Error("org.antlr.lang.extend failed, please check that all dependencies are included.")
        }
        var B = function() {};
        B.prototype = E.prototype;
        D.prototype = new B();
        D.prototype.constructor = D;
        D.superclass = E.prototype;
        if (E.prototype.constructor == Object.prototype.constructor) {
            E.prototype.constructor = E
        }
        if (C) {
            for (var A in C) {
                D.prototype[A] = C[A]
            }
            org.antlr.lang._IEEnumFix(D.prototype, C)
        }
    },
    augmentObject: function(E, D) {
        if (!D || !E) {
            throw new Error("Absorb failed, verify dependencies.")
        }
        var A = arguments,
        C,
        F,
        B = A[2];
        if (B && B !== true) {
            for (C = 2; C < A.length; C = C + 1) {
                E[A[C]] = D[A[C]]
            }
        } else {
            for (F in D) {
                if (B || !E[F]) {
                    E[F] = D[F]
                }
            }
            org.antlr.lang._IEEnumFix(E, D)
        }
    },
    augmentProto: function(D, C) {
        if (!C || !D) {
            throw new Error("Augment failed, verify dependencies.")
        }
        var A = [D.prototype, C.prototype];
        for (var B = 2; B < arguments.length; B = B + 1) {
            A.push(arguments[B])
        }
        org.antlr.lang.augmentObject.apply(this, A)
    },
    merge: function() {
        var D = {},
        B = arguments;
        for (var C = 0, A = B.length; C < A; C = C + 1) {
            org.antlr.lang.augmentObject(D, B[C], true)
        }
        return D
    },
    isValue: function(B) {
        var A = org.antlr.lang;
        return (A.isObject(B) || A.isString(B) || A.isNumber(B) || A.isBoolean(B))
    },
    array: {
        peek: function(B) {
            if (!org.antlr.lang.isArray(B)) {
                throw new Error("org.antlr.lang.array.peek: a is not an array.")
            }
            var A = B.length;
            if (A <= 0) {
                throw new Error("org.antlr.lang.array.peek: a is empty.")
            }
            return B[A - 1]
        }
    }
};
org.antlr.runtime.RecognizerSharedState = function() {
    this.following = [];
    this._fsp = -1;
    this.errorRecovery = false;
    this.lastErrorIndex = -1;
    this.failed = false;
    this.syntaxErrors = 0;
    this.backtracking = 0;
    this.ruleMemo = null;
    this.token = null;
    this.tokenStartCharIndex = -1;
    this.text = null
};
org.antlr.runtime.IndexOutOfBoundsException = function(A) {
    org.antlr.runtime.IndexOutOfBoundsException.superclass.constructor.call(this, A)
};
org.antlr.lang.extend(org.antlr.runtime.IndexOutOfBoundsException, Error, {
    name: "org.antlr.runtime.IndexOutOfBoundsException"
});
org.antlr.runtime.RecognitionException = function(A) {
    org.antlr.runtime.RecognitionException.superclass.constructor.call(this);
    this.input = A;
    this.index = A.index();
    if (A instanceof org.antlr.runtime.CommonTokenStream) {
        this.token = A.LT(1);
        this.line = this.token.getLine();
        this.charPositionInLine = this.token.getCharPositionInLine()
    }
    if (A instanceof org.antlr.runtime.tree.TreeNodeStream) {
        this.extractInformationFromTreeNodeStream(A)
    } else {
        if (A instanceof org.antlr.runtime.ANTLRStringStream) {
            this.c = A.LA(1);
            this.line = A.getLine();
            this.charPositionInLine = A.getCharPositionInLine()
        } else {
            this.c = A.LA(1)
        }
    }
    this.message = this.toString()
};
org.antlr.lang.extend(org.antlr.runtime.RecognitionException, Error, {
    input: null,
    index: null,
    token: null,
    node: null,
    c: null,
    line: null,
    name: "org.antlr.runtime.RecognitionException",
    charPositionInLine: null,
    approximateLineInfo: null,
    extractInformationFromTreeNodeStream: function(F) {
        var A = F,
        E,
        I,
        D,
        H,
        C;
        this.node = A.LT(1);
        var B = A.getTreeAdaptor(),
        G = B.getToken(this.node);
        if (G) {
            this.token = G;
            if (G.getLine() <= 0) {
                C = -1;
                E = A.LT(C);
                while (E) {
                    priorPayload = B.getToken(E);
                    if (priorPayload && priorPayload.getLine() > 0) {
                        this.line = priorPayload.getLine();
                        this.charPositionInLine = priorPayload.getCharPositionInLine();
                        this.approximateLineInfo = true;
                        break
                    }--C;
                    E = A.LT(C)
                }
            } else {
                this.line = G.getLine();
                this.charPositionInLine = G.getCharPositionInLine()
            }
        } else {
            if (this.node instanceof org.antlr.runtime.tree.CommonTree) {
                this.line = this.node.getLine();
                this.charPositionInLine = this.node.getCharPositionInLine();
                if (this.node instanceof org.antlr.runtime.tree.CommonTree) {
                    this.token = this.node.token
                }
            } else {
                D = B.getType(this.node);
                H = B.getText(this.node);
                this.token = new org.antlr.runtime.CommonToken(D, H)
            }
        }
    },
    getUnexpectedType: function() {
        if (this.input instanceof org.antlr.runtime.CommonTokenStream) {
            return this.token.getType()
        } else {
            if (this.input instanceof org.antlr.runtime.tree.TreeNodeStream) {
                var A = this.input;
                var B = A.getTreeAdaptor();
                return B.getType(this.node)
            } else {
                return this.c
            }
        }
    }
});
org.antlr.runtime.MismatchedTokenException = function(B, A) {
    if (arguments.length === 0) {
        this.expecting = org.antlr.runtime.Token.INVALID_TOKEN_TYPE
    } else {
        org.antlr.runtime.MismatchedTokenException.superclass.constructor.call(this, A);
        this.expecting = B
    }
};
org.antlr.lang.extend(org.antlr.runtime.MismatchedTokenException, org.antlr.runtime.RecognitionException, {
    toString: function() {
        return "MismatchedTokenException(" + this.getUnexpectedType() + "!=" + this.expecting + ")"
    },
    name: "org.antlr.runtime.MismatchedTokenException"
});
org.antlr.runtime.UnwantedTokenException = function(B, A) {
    if (arguments.length > 0) {
        org.antlr.runtime.UnwantedTokenException.superclass.constructor.call(this, B, A)
    }
};
org.antlr.lang.extend(org.antlr.runtime.UnwantedTokenException, org.antlr.runtime.MismatchedTokenException, {
    getUnexpectedToken: function() {
        return this.token
    },
    toString: function() {
        var A = ", expected " + this.expecting;
        if (this.expecting === org.antlr.runtime.Token.INVALID_TOKEN_TYPE) {
            A = ""
        }
        if (!org.antlr.lang.isValue(this.token)) {
            return "UnwantedTokenException(found=" + A + ")"
        }
        return "UnwantedTokenException(found=" + this.token.getText() + A + ")"
    },
    name: "org.antlr.runtime.UnwantedTokenException"
});
org.antlr.runtime.MissingTokenException = function(B, A, C) {
    if (arguments.length > 0) {
        org.antlr.runtime.MissingTokenException.superclass.constructor.call(this, B, A);
        this.inserted = C
    }
};
org.antlr.lang.extend(org.antlr.runtime.MissingTokenException, org.antlr.runtime.MismatchedTokenException, {
    getMissingType: function() {
        return this.expecting
    },
    toString: function() {
        if (org.antlr.lang.isValue(this.inserted) && org.antlr.lang.isValue(this.token)) {
            return "MissingTokenException(inserted " + this.inserted + " at " + this.token.getText() + ")"
        }
        if (org.antlr.lang.isValue(this.token)) {
            return "MissingTokenException(at " + this.token.getText() + ")"
        }
        return "MissingTokenException"
    },
    name: "org.antlr.runtime.MissingTokenException"
});
org.antlr.runtime.NoViableAltException = function(C, B, D, A) {
    org.antlr.runtime.NoViableAltException.superclass.constructor.call(this, A);
    this.grammarDecisionDescription = C;
    this.decisionNumber = B;
    this.stateNumber = D
};
org.antlr.lang.extend(org.antlr.runtime.NoViableAltException, org.antlr.runtime.RecognitionException, {
    toString: function() {
        if (this.input instanceof org.antlr.runtime.ANTLRStringStream) {
            return "NoViableAltException('" + this.getUnexpectedType() + "'@[" + this.grammarDecisionDescription + "])"
        } else {
            return "NoViableAltException(" + this.getUnexpectedType() + "@[" + this.grammarDecisionDescription + "])"
        }
    },
    name: "org.antlr.runtime.NoViableAltException"
});
org.antlr.runtime.EarlyExitException = function(B, A) {
    org.antlr.runtime.EarlyExitException.superclass.constructor.call(this, A);
    this.decisionNumber = B
};
org.antlr.lang.extend(org.antlr.runtime.EarlyExitException, org.antlr.runtime.RecognitionException, {
    name: "org.antlr.runtime.EarlyExitException"
});
org.antlr.runtime.MismatchedSetException = function(B, A) {
    org.antlr.runtime.MismatchedSetException.superclass.constructor.call(this, A);
    this.expecting = B
};
org.antlr.lang.extend(org.antlr.runtime.MismatchedSetException, org.antlr.runtime.RecognitionException, {
    toString: function() {
        return "MismatchedSetException(" + this.getUnexpectedType() + "!=" + this.expecting + ")"
    },
    name: "org.antlr.runtime.MismatchedSetException"
});
org.antlr.runtime.MismatchedNotSetException = function(B, A) {
    org.antlr.runtime.MismatchedNotSetException.superclass.constructor.call(this, B, A)
};
org.antlr.lang.extend(org.antlr.runtime.MismatchedNotSetException, org.antlr.runtime.MismatchedSetException, {
    toString: function() {
        return "MismatchedNotSetException(" + this.getUnexpectedType() + "!=" + this.expecting + ")"
    },
    name: "org.antlr.runtime.MismatchedNotSetException"
});
org.antlr.runtime.MismatchedRangeException = function(B, A, C) {
    if (arguments.length === 0) {
        return this
    }
    org.antlr.runtime.MismatchedRangeException.superclass.constructor.call(this, C);
    this.a = B;
    this.b = A
};
org.antlr.lang.extend(org.antlr.runtime.MismatchedRangeException, org.antlr.runtime.RecognitionException, {
    toString: function() {
        return "MismatchedRangeException(" + this.getUnexpectedType() + " not in [" + this.a + "," + this.b + "])"
    },
    name: "org.antlr.runtime.MismatchedRangeException"
});
org.antlr.runtime.FailedPredicateException = function(A, C, B) {
    org.antlr.runtime.FailedPredicateException.superclass.constructor.call(this, A);
    this.ruleName = C;
    this.predicateText = B
};
org.antlr.lang.extend(org.antlr.runtime.FailedPredicateException, org.antlr.runtime.RecognitionException, {
    toString: function() {
        return "FailedPredicateException(" + this.ruleName + ",{" + this.predicateText + "}?)"
    },
    name: "org.antlr.runtime.FailedPredicateException"
});
org.antlr.runtime.BitSet = function(A) {
    if (!A) {
        A = org.antlr.runtime.BitSet.BITS
    }
    if (org.antlr.lang.isArray(A)) {
        this.bits = A
    } else {
        if (org.antlr.lang.isNumber(A)) {
            this.bits = []
        }
    }
};
org.antlr.lang.augmentObject(org.antlr.runtime.BitSet, {
    BITS: 32,
    LOG_BITS: 5,
    MOD_MASK: 31,
    bitMask: function(B) {
        var A = B & org.antlr.runtime.BitSet.MOD_MASK;
        return 1 << A
    },
    numWordsToHold: function(A) {
        return (A >> org.antlr.runtime.BitSet.LOG_BITS) + 1
    },
    wordNumber: function(A) {
        return A >> org.antlr.runtime.BitSet.LOG_BITS
    },
    of: function(D, A) {
        var B,
        F,
        C,
        E;
        if (org.antlr.lang.isNumber(D)) {
            if (org.antlr.lang.isNumber(A)) {
                C = new org.antlr.runtime.BitSet(A + 1);
                for (B = D; B <= A; B++) {
                    F = org.antlr.runtime.BitSet.wordNumber(B);
                    C.bits[F] |= org.antlr.runtime.BitSet.bitMask(B)
                }
                return C
            } else {
                C = new org.antlr.runtime.BitSet(D + 1);
                C.add(D);
                return C
            }
        } else {
            if (org.antlr.lang.isArray(D)) {
                C = new org.antlr.runtime.BitSet();
                for (B = D.length - 1; B >= 0; B--) {
                    C.add(D[B])
                }
                return C
            } else {
                if (D instanceof org.antlr.runtime.BitSet) {
                    if (!D) {
                        return null
                    }
                    return D
                } else {
                    if (D instanceof org.antlr.runtime.IntervalSet) {
                        if (!D) {
                            return null
                        }
                        C = new org.antlr.runtime.BitSet();
                        C.addAll(D);
                        return C
                    } else {
                        if (org.antlr.lang.isObject(D)) {
                            E = [];
                            for (B in D) {
                                if (org.antlr.lang.isNumber(B)) {
                                    E.push(B)
                                }
                            }
                            return org.antlr.runtime.BitSet.of(E)
                        }
                    }
                }
            }
        }
    }
});
org.antlr.runtime.BitSet.prototype = {
    add: function(A) {
        var B = org.antlr.runtime.BitSet.wordNumber(A);
        if (B >= this.bits.length) {
            this.growToInclude(A)
        }
        this.bits[B] |= org.antlr.runtime.BitSet.bitMask(A)
    },
    addAll: function(C) {
        var A,
        B,
        D;
        if (C instanceof org.antlr.runtime.BitSet) {
            this.orInPlace(C)
        } else {
            if (C instanceof org.antlr.runtime.IntervalSet) {
                A = C
            } else {
                if (org.antlr.lang.isArray(C)) {
                    for (B = 0; B < C.length; B++) {
                        D = C[B];
                        this.add(D)
                    }
                } else {
                    return
                }
            }
        }
    },
    and: function(A) {
        var B = this.clone();
        B.andInPlace(A);
        return B
    },
    andInPlace: function(A) {
        var C = Math.min(this.bits.length, A.bits.length),
        B;
        for (B = C - 1; B >= 0; B--) {
            this.bits[B] &= A.bits[B]
        }
        for (B = C; B < this.bits.length; B++) {
            this.bits[B] = 0
        }
    },
    clear: function(B) {
        if (arguments.length === 0) {
            var A;
            for (A = this.bits.length - 1; A >= 0; A--) {
                this.bits[A] = 0
            }
            return
        }
        var C = org.antlr.runtime.BitSet.wordNumber(B);
        if (C >= this.bits.length) {
            this.growToInclude(B)
        }
        this.bits[C] &= ~org.antlr.runtime.BitSet.bitMask(B)
    },
    clone: function() {
        var C,
        B,
        A = [];
        for (C = 0, B = this.bits.length; C < B; C++) {
            A[C] = this.bits[C]
        }
        return new org.antlr.runtime.BitSet(A)
    },
    size: function() {
        var B = 0,
        A,
        C,
        D;
        for (A = this.bits.length - 1; A >= 0; A--) {
            C = this.bits[A];
            if (C !== 0) {
                for (D = org.antlr.runtime.BitSet.BITS - 1; D >= 0; D--) {
                    if ((C & (1 << D)) !== 0) {
                        B++
                    }
                }
            }
        }
        return B
    },
    equals: function(A) {
        if (!A || !(A instanceof org.antlr.runtime.BitSet)) {
            return false
        }
        var B = A,
        C,
        D = Math.min(this.bits.length, B.bits.length);
        for (C = 0; C < D; C++) {
            if (this.bits[C] != B.bits[C]) {
                return false
            }
        }
        if (this.bits.length > D) {
            for (C = D + 1; C < this.bits.length; C++) {
                if (this.bits[C] !== 0) {
                    return false
                }
            }
        } else {
            if (B.bits.length > D) {
                for (C = D + 1; C < B.bits.length; C++) {
                    if (B.bits[C] !== 0) {
                        return false
                    }
                }
            }
        }
        return true
    },
    growToInclude: function(D) {
        var A = Math.max(this.bits.length << 1, org.antlr.runtime.BitSet.numWordsToHold(D)),
        C = [],
        B;
        for (B = 0, len = this.bits.length; B < len; B++) {
            C[B] = this.bits[B]
        }
        this.bits = C
    },
    member: function(A) {
        var B = org.antlr.runtime.BitSet.wordNumber(A);
        if (B >= this.bits.length) {
            return false
        }
        return (this.bits[B] & org.antlr.runtime.BitSet.bitMask(A)) !== 0
    },
    getSingleElement: function() {
        var A;
        for (A = 0; A < (this.bits.length << org.antlr.runtime.BitSet.LOG_BITS); A++) {
            if (this.member(A)) {
                return A
            }
        }
        return - 1
    },
    isNil: function() {
        var A;
        for (A = this.bits.length - 1; A >= 0; A--) {
            if (this.bits[A] !== 0) {
                return false
            }
        }
        return true
    },
    complement: function(B) {
        if (B) {
            return B.subtract(this)
        } else {
            var A = this.clone();
            A.notInPlace();
            return A
        }
    },
    notInPlace: function() {
        var A,
        D,
        B,
        C;
        if (arguments.length === 0) {
            for (B = this.bits.length - 1; B >= 0; B--) {
                this.bits[B] = ~this.bits[B]
            }
        } else {
            if (arguments.length === 1) {
                A = 0;
                D = arguments[0]
            } else {
                A = arguments[0];
                D = arguments[1]
            }
            this.growToInclude(D);
            for (B = A; B <= D; B++) {
                C = org.antlr.runtime.BitSet.wordNumber(B);
                this.bits[C] ^= org.antlr.runtime.BitSet.bitMask(B)
            }
        }
    },
    or: function(A) {
        if (!A) {
            return this
        }
        var B = this.clone();
        B.orInPlace(A);
        return B
    },
    orInPlace: function(A) {
        if (!A) {
            return
        }
        if (A.bits.length > this.bits.length) {
            this.setSize(A.bits.length)
        }
        var C = Math.min(this.bits.length, A.bits.length),
        B;
        for (B = C - 1; B >= 0; B--) {
            this.bits[B] |= A.bits[B]
        }
    },
    remove: function(A) {
        var B = org.antlr.runtime.BitSet.wordNumber(A);
        if (B >= this.bits.length) {
            this.growToInclude(A)
        }
        this.bits[B] &= ~org.antlr.runtime.BitSet.bitMask(A)
    },
    setSize: function(A) {
        var B = A - this.bits.length;
        while (B >= 0) {
            this.bits.push(0);
            B--
        }
    },
    numBits: function() {
        return this.bits.length << org.antlr.runtime.BitSet.LOG_BITS
    },
    lengthInLongWords: function() {
        return this.bits.length
    },
    subset: function(A) {
        if (!A) {
            return false
        }
        return this.and(A).equals(this)
    },
    subtractInPlace: function(A) {
        if (!A) {
            return
        }
        var B;
        for (B = 0; B < this.bits.length && B < A.bits.length; B++) {
            this.bits[B] &= ~A.bits[B]
        }
    },
    subtract: function(A) {
        if (!A || !(A instanceof org.antlr.runtime.BitSet)) {
            return null
        }
        var B = this.clone();
        B.subtractInPlace(A);
        return B
    },
    toArray: function() {
        var A = [],
        C,
        B = 0;
        for (C = 0; C < (this.bits.length << org.antlr.runtime.BitSet.LOG_BITS); C++) {
            if (this.member(C)) {
                A[B++] = C
            }
        }
        return A
    },
    toPackedArray: function() {
        return this.bits
    },
    toString: function() {
        if (arguments.length === 0) {
            return this.toString1(null)
        } else {
            if (org.antlr.lang.isString(arguments[0])) {
                if (!org.antlr.lang.isValue(arguments[1])) {
                    return this.toString1(null)
                } else {
                    return this.toString2(arguments[0], arguments[1])
                }
            } else {
                return this.toString1(arguments[0])
            }
        }
    },
    toString1: function(D) {
        var A = "{",
        E = ",",
        B,
        C = false;
        for (B = 0; B < (this.bits.length << org.antlr.runtime.BitSet.LOG_BITS); B++) {
            if (this.member(B)) {
                if (B > 0 && C) {
                    A += E
                }
                if (D) {
                    A += D.getTokenDisplayName(B)
                } else {
                    A += B.toString()
                }
                C = true
            }
        }
        return A + "}"
    },
    toString2: function(C, B) {
        var D = "",
        A;
        for (A = 0; A < (this.bits.length << org.antlr.runtime.BitSet.LOG_BITS); A++) {
            if (this.member(A)) {
                if (D.length > 0) {
                    D += C
                }
                if (A >= B.size()) {
                    D += "'" + A + "'"
                } else {
                    if (!org.antlr.lang.isValue(B.get(A))) {
                        D += "'" + A + "'"
                    } else {
                        D += B.get(A)
                    }
                }
            }
        }
        return D
    }
};
org.antlr.runtime.CharStream = {
    EOF: -1
};
org.antlr.runtime.CommonToken = function() {
    var A;
    this.charPositionInLine = -1;
    this.channel = 0;
    this.index = -1;
    if (arguments.length == 1) {
        if (org.antlr.lang.isNumber(arguments[0])) {
            this.type = arguments[0]
        } else {
            A = arguments[0];
            this.text = A.getText();
            this.type = A.getType();
            this.line = A.getLine();
            this.index = A.getTokenIndex();
            this.charPositionInLine = A.getCharPositionInLine();
            this.channel = A.getChannel();
            if (A instanceof org.antlr.runtime.CommonToken) {
                this.start = A.start;
                this.stop = A.stop
            }
        }
    } else {
        if (arguments.length == 2) {
            this.type = arguments[0];
            this.text = arguments[1];
            this.channel = 0
        } else {
            if (arguments.length == 5) {
                this.input = arguments[0];
                this.type = arguments[1];
                this.channel = arguments[2];
                this.start = arguments[3];
                this.stop = arguments[4]
            }
        }
    }
};
org.antlr.runtime.CommonToken.prototype = {
    getType: function() {
        return this.type
    },
    setLine: function(A) {
        this.line = A
    },
    getText: function() {
        if (org.antlr.lang.isString(this.text)) {
            return this.text
        }
        if (!this.input) {
            return null
        }
        this.text = this.input.substring(this.start, this.stop);
        return this.text
    },
    setText: function(A) {
        this.text = A
    },
    getLine: function() {
        return this.line
    },
    getCharPositionInLine: function() {
        return this.charPositionInLine
    },
    setCharPositionInLine: function(A) {
        this.charPositionInLine = A
    },
    getChannel: function() {
        return this.channel
    },
    setChannel: function(A) {
        this.channel = A
    },
    setType: function(A) {
        this.type = A
    },
    getStartIndex: function() {
        return this.start
    },
    setStartIndex: function(A) {
        this.start = A
    },
    getStopIndex: function() {
        return this.stop
    },
    setStopIndex: function(A) {
        this.stop = A
    },
    getTokenIndex: function() {
        return this.index
    },
    setTokenIndex: function(A) {
        this.index = A
    },
    getInputStream: function() {
        return this.input
    },
    setInputStream: function(A) {
        this.input = A
    },
    toString: function() {
        var B = "";
        if (this.channel > 0) {
            B = ",channel=" + this.channel
        }
        var A = this.getText();
        if (!org.antlr.lang.isNull(A)) {
            A = A.replace(/n/g, "\\n");
            A = A.replace(/r/g, "\\r");
            A = A.replace(/t/g, "\\t")
        } else {
            A = "<no text>"
        }
        return "[@" + this.getTokenIndex() + "," + this.start + ":" + this.stop + "='" + A + "',<" + this.type + ">" + B + "," + this.line + ":" + this.getCharPositionInLine() + "]"
    }
};
org.antlr.runtime.Token = function() {};
org.antlr.lang.augmentObject(org.antlr.runtime.Token, {
    EOR_TOKEN_TYPE: 1,
    DOWN: 2,
    UP: 3,
    MIN_TOKEN_TYPE: 4,
    EOF: org.antlr.runtime.CharStream.EOF,
    EOF_TOKEN: new org.antlr.runtime.CommonToken(org.antlr.runtime.CharStream.EOF),
    INVALID_TOKEN_TYPE: 0,
    INVALID_TOKEN: new org.antlr.runtime.CommonToken(0),
    SKIP_TOKEN: new org.antlr.runtime.CommonToken(0),
    DEFAULT_CHANNEL: 0,
    HIDDEN_CHANNEL: 99
});
org.antlr.lang.augmentObject(org.antlr.runtime.CommonToken, org.antlr.runtime.Token);
org.antlr.runtime.tree.RewriteCardinalityException = function(A) {
    this.elementDescription = A
};
org.antlr.lang.extend(org.antlr.runtime.tree.RewriteCardinalityException, Error, {
    getMessage: function() {
        if (org.antlr.lang.isString(this.elementDescription)) {
            return this.elementDescription
        }
        return null
    },
    name: function() {
        return "org.antlr.runtime.tree.RewriteCardinalityException"
    }
});
org.antlr.runtime.tree.RewriteEmptyStreamException = function(B) {
    var A = org.antlr.runtime.tree.RewriteEmptyStreamException.superclass;
    A.constructor.call(this, B)
};
org.antlr.lang.extend(org.antlr.runtime.tree.RewriteEmptyStreamException, org.antlr.runtime.tree.RewriteCardinalityException, {
    name: function() {
        return "org.antlr.runtime.tree.RewriteEmptyStreamException"
    }
});
org.antlr.runtime.tree.RewriteEarlyExitException = function(B) {
    var A = org.antlr.runtime.tree.RewriteEarlyExitException.superclass;
    if (org.antlr.lang.isUndefined(B)) {
        B = null
    }
    A.constructor.call(this, B)
};
org.antlr.lang.extend(org.antlr.runtime.tree.RewriteEarlyExitException, org.antlr.runtime.tree.RewriteCardinalityException, {
    name: function() {
        return "org.antlr.runtime.tree.RewriteEarlyExitException"
    }
});
org.antlr.runtime.MismatchedTreeNodeException = function(B, A) {
    if (B && A) {
        org.antlr.runtime.MismatchedTreeNodeException.superclass.constructor.call(this, A);
        this.expecting = B
    }
};
org.antlr.lang.extend(org.antlr.runtime.MismatchedTreeNodeException, org.antlr.runtime.RecognitionException, {
    toString: function() {
        return "MismatchedTreeNodeException(" + this.getUnexpectedType() + "!=" + this.expecting + ")"
    },
    name: "org.antlr.runtime.MismatchedTreeNodeException"
});
org.antlr.runtime.tree.BaseTree = function() {};
org.antlr.runtime.tree.BaseTree.prototype = {
    getChild: function(A) {
        if (!this.children || A >= this.children.length) {
            return null
        }
        return this.children[A]
    },
    getChildren: function() {
        return this.children
    },
    getFirstChildWithType: function(C) {
        var B,
        A;
        for (B = 0; this.children && B < this.children.length; B++) {
            A = this.children[B];
            if (A.getType() === C) {
                return A
            }
        }
        return null
    },
    getChildCount: function() {
        if (!this.children) {
            return 0
        }
        return this.children.length
    },
    addChild: function(B) {
        if (!org.antlr.lang.isValue(B)) {
            return
        }
        var C = B,
        E,
        A,
        D;
        if (C.isNil()) {
            if (this.children && this.children == C.children) {
                throw new Error("attempt to add child list to itself")
            }
            if (C.children) {
                if (this.children) {
                    E = C.children.length;
                    for (A = 0; A < E; A++) {
                        D = C.children[A];
                        this.children.push(D);
                        D.setParent(this);
                        D.setChildIndex(this.children.length - 1)
                    }
                } else {
                    this.children = C.children;
                    this.freshenParentAndChildIndexes()
                }
            }
        } else {
            if (!this.children) {
                this.children = this.createChildrenList()
            }
            this.children.push(B);
            C.setParent(this);
            C.setChildIndex(this.children.length - 1)
        }
    },
    addChildren: function(A) {
        var C,
        B;
        for (C = 0; C < A.length; C++) {
            B = A[C];
            this.addChild(B)
        }
    },
    setChild: function(B, A) {
        if (!A) {
            return
        }
        if (A.isNil()) {
            throw new Error("Can't set single child to a list")
        }
        if (!this.children) {
            this.children = this.createChildrenList()
        }
        this.children[B] = A;
        A.setParent(this);
        A.setChildIndex(B)
    },
    deleteChild: function(B) {
        if (!this.children) {
            return null
        }
        if (B < 0 || B >= this.children.length) {
            throw new Error("Index out of bounds.")
        }
        var A = this.children.splice(B, 1)[0];
        this.freshenParentAndChildIndexes(B);
        return A
    },
    replaceChildren: function(H, I, P) {
        if (!this.children) {
            throw new Error("indexes invalid; no children in list")
        }
        var O = I - H + 1;
        var A;
        var K = P;
        var D = null;
        if (K.isNil()) {
            D = K.children
        } else {
            D = [];
            D.push(K)
        }
        A = D.length;
        var B = D.length;
        var N = O - A;
        var F,
        G,
        C,
        E,
        M,
        J,
        L;
        if (N === 0) {
            F = 0;
            for (G = H; G <= I; G++) {
                C = D[F];
                this.children[G] = C;
                C.setParent(this);
                C.setChildIndex(G);
                F++
            }
        } else {
            if (N > 0) {
                for (F = 0; F < B; F++) {
                    this.children[H + F] = D[F]
                }
                E = H + B;
                for (M = E; M <= I; M++) {
                    J = this.children.splice(E, 1)[0]
                }
                this.freshenParentAndChildIndexes(H)
            } else {
                for (F = 0; F < O; F++) {
                    this.children[H + F] = D[F]
                }
                L = A - O;
                for (F = O; F < A; F++) {
                    this.children.splice(H + F, 0, D[F])
                }
                this.freshenParentAndChildIndexes(H)
            }
        }
    },
    createChildrenList: function() {
        return []
    },
    isNil: function() {
        return false
    },
    freshenParentAndChildIndexes: function(A) {
        if (!org.antlr.lang.isNumber(A)) {
            A = 0
        }
        var D = this.getChildCount(),
        C,
        B;
        for (C = A; C < D; C++) {
            B = this.getChild(C);
            B.setChildIndex(C);
            B.setParent(this)
        }
    },
    sanityCheckParentAndChildIndexes: function(B, A) {
        if (arguments.length === 0) {
            B = null;
            A = -1
        }
        if (B !== this.getParent()) {
            throw new Error("parents don't match; expected " + B + " found " + this.getParent())
        }
        if (A !== this.getChildIndex()) {
            throw new Error("child indexes don't match; expected " + A + " found " + this.getChildIndex())
        }
        var E = this.getChildCount(),
        D,
        C;
        for (D = 0; D < E; D++) {
            C = this.getChild(D);
            C.sanityCheckParentAndChildIndexes(this, D)
        }
    },
    getChildIndex: function() {
        return 0
    },
    setChildIndex: function(A) {},
    getParent: function() {
        return null
    },
    setParent: function(A) {},
    getTree: function() {
        return this
    },
    toStringTree: function() {
        if (!this.children || this.children.length === 0) {
            return this.toString()
        }
        var A = "",
        C,
        B;
        if (!this.isNil()) {
            A += "(";
            A += this.toString();
            A += " "
        }
        for (C = 0; this.children && C < this.children.length; C++) {
            B = this.children[C];
            if (C > 0) {
                A += " "
            }
            A += B.toStringTree()
        }
        if (!this.isNil()) {
            A += ")"
        }
        return A
    },
    getLine: function() {
        return 0
    },
    getCharPositionInLine: function() {
        return 0
    }
};
org.antlr.runtime.tree.CommonTree = function(A) {
    this.startIndex = -1;
    this.stopIndex = -1;
    this.childIndex = -1;
    this.parent = null;
    this.token = null;
    if (A instanceof org.antlr.runtime.tree.CommonTree) {
        org.antlr.runtime.tree.CommonTree.superclass.constructor.call(this, A);
        this.token = A.token;
        this.startIndex = A.startIndex;
        this.stopIndex = A.stopIndex
    } else {
        if (A instanceof org.antlr.runtime.CommonToken) {
            this.token = A
        }
    }
};
org.antlr.lang.extend(org.antlr.runtime.tree.CommonTree, org.antlr.runtime.tree.BaseTree, {
    getToken: function() {
        return this.token
    },
    dupNode: function() {
        return new org.antlr.runtime.tree.CommonTree(this)
    },
    isNil: function() {
        return ! this.token
    },
    getType: function() {
        if (!this.token) {
            return org.antlr.runtime.Token.INVALID_TOKEN_TYPE
        }
        return this.token.getType()
    },
    getText: function() {
        if (!this.token) {
            return null
        }
        return this.token.getText()
    },
    getLine: function() {
        if (!this.token || this.token.getLine() === 0) {
            if (this.getChildCount() > 0) {
                return this.getChild(0).getLine()
            }
            return 0
        }
        return this.token.getLine()
    },
    getCharPositionInLine: function() {
        if (!this.token || this.token.getCharPositionInLine() === -1) {
            if (this.getChildCount() > 0) {
                return this.getChild(0).getCharPositionInLine()
            }
            return 0
        }
        return this.token.getCharPositionInLine()
    },
    getTokenStartIndex: function() {
        if (this.token) {
            return this.token.getTokenIndex()
        }
        return this.startIndex
    },
    setTokenStartIndex: function(A) {
        this.startIndex = A
    },
    getTokenStopIndex: function() {
        if (this.token) {
            return this.token.getTokenIndex()
        }
        return this.stopIndex
    },
    setTokenStopIndex: function(A) {
        this.stopIndex = A
    },
    getChildIndex: function() {
        return this.childIndex
    },
    getParent: function() {
        return this.parent
    },
    setParent: function(A) {
        this.parent = A
    },
    setChildIndex: function(A) {
        this.childIndex = A
    },
    toString: function() {
        if (this.isNil()) {
            return "nil"
        }
        if (this.getType() === org.antlr.runtime.Token.INVALID_TOKEN_TYPE) {
            return "<errornode>"
        }
        if (!this.token) {
            return null
        }
        return this.token.getText()
    }
});
org.antlr.runtime.tree.Tree = {
    INVALID_NODE: new org.antlr.runtime.tree.CommonTree(org.antlr.runtime.Token.INVALID_TOKEN)
};
org.antlr.runtime.tree.CommonErrorNode = function(A, D, B, C) {
    if (!B || (B.getTokenIndex() < D.getTokenIndex() && B.getType() != org.antlr.runtime.Token.EOF)) {
        B = D
    }
    this.input = A;
    this.start = D;
    this.stop = B;
    this.trappedException = C
};
org.antlr.lang.extend(org.antlr.runtime.tree.CommonErrorNode, org.antlr.runtime.tree.CommonTree, {
    isNil: function() {
        return false
    },
    getType: function() {
        return org.antlr.runtime.Token.INVALID_TOKEN_TYPE
    },
    getText: function() {
        var C = null;
        if (this.start instanceof org.antlr.runtime.CommonToken) {
            var B = this.start.getTokenIndex();
            var A = this.stop.getTokenIndex();
            if (this.stop.getType() === org.antlr.runtime.Token.EOF) {
                A = this.input.size()
            }
            C = this.input.toString(B, A)
        } else {
            if (this.start instanceof org.antlr.runtime.tree.CommonTree) {
                C = this.input.toString(this.start, this.stop)
            } else {
                C = "<unknown>"
            }
        }
        return C
    },
    toString: function() {
        if (this.trappedException instanceof org.antlr.runtime.MissingTokenException) {
            return "<missing type: " + this.trappedException.getMissingType() + ">"
        } else {
            if (this.trappedException instanceof org.antlr.runtime.UnwantedTokenException) {
                return "<extraneous: " + this.trappedException.getUnexpectedToken() + ", resync=" + this.getText() + ">"
            } else {
                if (this.trappedException instanceof org.antlr.runtime.MismatchedTokenException) {
                    return "<mismatched token: " + this.trappedException.token + ", resync=" + this.getText() + ">"
                } else {
                    if (this.trappedException instanceof org.antlr.runtime.NoViableAltException) {
                        return "<unexpected: " + this.trappedException.token + ", resync=" + this.getText() + ">"
                    }
                }
            }
        }
        return "<error: " + this.getText() + ">"
    }
});
org.antlr.runtime.tree.BaseTreeAdaptor = function() {
    this.uniqueNodeID = 1
};
org.antlr.runtime.tree.BaseTreeAdaptor.prototype = {
    nil: function() {
        return this.create(null)
    },
    errorNode: function(A, E, C, D) {
        var B = new org.antlr.runtime.tree.CommonErrorNode(A, E, C, D);
        return B
    },
    isNil: function(A) {
        return A.isNil()
    },
    dupTree: function(B, C) {
        if (arguments.length === 1) {
            C = null
        }
        if (!B) {
            return null
        }
        var D = this.dupNode(B);
        this.setChildIndex(D, this.getChildIndex(B));
        this.setParent(D, C);
        var G = this.getChildCount(B),
        A,
        F,
        E;
        for (A = 0; A < G; A++) {
            F = this.getChild(B, A);
            E = this.dupTree(F, B);
            this.addChild(D, E)
        }
        return D
    },
    addChild: function(A, B) {
        if (A && org.antlr.lang.isValue(B)) {
            A.addChild(B)
        }
    },
    becomeRoot: function(D, C) {
        if (D instanceof org.antlr.runtime.CommonToken || !D) {
            D = this.create(D)
        }
        var A = D,
        B = C;
        if (!C) {
            return D
        }
        if (A.isNil()) {
            if (A.getChildCount() > 1) {
                throw new Error("more than one node as root (TODO: make exception hierarchy)")
            }
            A = A.getChild(0)
        }
        A.addChild(B);
        return A
    },
    rulePostProcessing: function(A) {
        var B = A;
        if (B && B.isNil()) {
            if (B.getChildCount() === 0) {
                B = null
            } else {
                if (B.getChildCount() === 1) {
                    B = B.getChild(0);
                    B.setParent(null);
                    B.setChildIndex( - 1)
                }
            }
        }
        return B
    },
    create: function(C, B) {
        var D,
        A;
        if (arguments.length === 2) {
            if (org.antlr.lang.isString(arguments[1])) {
                D = arguments[1];
                B = this.createToken(C, D);
                A = this.create(B);
                return A
            } else {
                B = this.createToken(B);
                B.setType(C);
                A = this.create(B);
                return A
            }
        } else {
            if (arguments.length === 3) {
                D = arguments[2];
                B = this.createToken(B);
                B.setType(C);
                B.setText(D);
                A = this.create(B);
                return A
            }
        }
    },
    getType: function(A) {
        A.getType();
        return 0
    },
    setType: function(A, B) {
        throw new Error("don't know enough about Tree node")
    },
    getText: function(A) {
        return A.getText()
    },
    setText: function(A, B) {
        throw new Error("don't know enough about Tree node")
    },
    getChild: function(B, A) {
        return B.getChild(A)
    },
    setChild: function(B, A, C) {
        B.setChild(A, C)
    },
    deleteChild: function(B, A) {
        return B.deleteChild(A)
    },
    getChildCount: function(A) {
        return A.getChildCount()
    },
    getUniqueID: function(B) {
        if (!this.treeToUniqueIDMap) {
            this.treeToUniqueIDMap = {}
        }
        var C = this.treeToUniqueIDMap[B];
        if (org.antlr.lang.isValue(C)) {
            return C
        }
        var A = this.uniqueNodeID;
        this.treeToUniqueIDMap[B] = A;
        this.uniqueNodeID++;
        return A
    }
};
org.antlr.runtime.tree.CommonTreeAdaptor = function() {};
org.antlr.lang.extend(org.antlr.runtime.tree.CommonTreeAdaptor, org.antlr.runtime.tree.BaseTreeAdaptor, {
    dupNode: function(A) {
        if (!org.antlr.lang.isValue(A)) {
            return null
        }
        return A.dupNode()
    },
    create: function(A) {
        if (arguments.length > 1) {
            return org.antlr.runtime.tree.CommonTreeAdaptor.superclass.create.apply(this, arguments)
        }
        return new org.antlr.runtime.tree.CommonTree(A)
    },
    createToken: function(A) {
        if (arguments.length === 2) {
            return new org.antlr.runtime.CommonToken(arguments[0], arguments[1])
        } else {
            return new org.antlr.runtime.CommonToken(arguments[0])
        }
    },
    setTokenBoundaries: function(C, E, A) {
        if (!org.antlr.lang.isValue(C)) {
            return
        }
        var D = 0,
        B = 0;
        if (org.antlr.lang.isValue(E)) {
            if (E.getTokenIndex) {
                D = E.getTokenIndex()
            } else {
                if (E.getStartIndex) {
                    D = E.getStartIndex()
                } else {
                    D = E.getTokenStartIndex()
                }
            }
        }
        if (org.antlr.lang.isValue(A)) {
            if (B.getTokenIndex) {
                B = A.getTokenIndex()
            } else {
                if (A.getStopIndex) {
                    B = A.getStopIndex()
                } else {
                    B = A.getTokenStopIndex()
                }
            }
        }
        C.setTokenStartIndex(D);
        C.setTokenStopIndex(B)
    },
    getTokenStartIndex: function(A) {
        if (!A) {
            return - 1
        }
        return A.getTokenStartIndex()
    },
    getTokenStopIndex: function(A) {
        if (!A) {
            return - 1
        }
        return A.getTokenStopIndex()
    },
    getText: function(A) {
        if (!A) {
            return null
        }
        return A.getText()
    },
    getType: function(A) {
        if (!A) {
            return org.antlr.runtime.Token.INVALID_TOKEN_TYPE
        }
        return A.getType()
    },
    getToken: function(A) {
        if (A instanceof org.antlr.runtime.tree.CommonTree) {
            return A.getToken()
        }
        return null
    },
    getChild: function(B, A) {
        if (!B) {
            return null
        }
        return B.getChild(A)
    },
    getChildCount: function(A) {
        if (!A) {
            return 0
        }
        return A.getChildCount()
    },
    getParent: function(A) {
        return A.getParent()
    },
    setParent: function(A, B) {
        A.setParent(B)
    },
    getChildIndex: function(A) {
        return A.getChildIndex()
    },
    setChildIndex: function(B, A) {
        B.setChildIndex(A)
    },
    replaceChildren: function(D, B, A, C) {
        if (D) {
            D.replaceChildren(B, A, C)
        }
    }
});
org.antlr.runtime.ANTLRStringStream = function(A) {
    this.p = 0;
    this.line = 1;
    this.charPositionInLine = 0;
    this.markDepth = 0;
    this.markers = null;
    this.lastMarker = null;
    this.data = A;
    this.n = A.length
};
org.antlr.runtime.ANTLRStringStream.prototype = {
    reset: function() {
        this.p = 0;
        this.line = 1;
        this.charPositionInLine = 0;
        this.markDepth = 0
    },
    consume: function() {
        if (this.p < this.n) {
            this.charPositionInLine++;
            if (this.data.charAt(this.p) === "\n") {
                this.line++;
                this.charPositionInLine = 0
            }
            this.p++
        }
    },
    LA: function(B) {
        if (B < 0) {
            B++
        }
        var A = this.p + B - 1;
        if (A >= this.n || A < 0) {
            return org.antlr.runtime.CharStream.EOF
        }
        return this.data.charAt(A)
    },
    index: function() {
        return this.p
    },
    size: function() {
        return this.n
    },
    mark: function() {
        if (!this.markers) {
            this.markers = [];
            this.markers.push(null)
        }
        this.markDepth++;
        var A = null;
        if (this.markDepth >= this.markers.length) {
            A = {};
            this.markers.push(A)
        } else {
            A = this.markers[this.markDepth]
        }
        A.p = this.p;
        A.line = this.line;
        A.charPositionInLine = this.charPositionInLine;
        this.lastMarker = this.markDepth;
        return this.markDepth
    },
    rewind: function(A) {
        if (!org.antlr.lang.isNumber(A)) {
            A = this.lastMarker
        }
        var B = this.markers[A];
        this.seek(B.p);
        this.line = B.line;
        this.charPositionInLine = B.charPositionInLine;
        this.release(A)
    },
    release: function(A) {
        this.markDepth = A;
        this.markDepth--
    },
    seek: function(A) {
        if (A <= this.p) {
            this.p = A;
            return
        }
        while (this.p < A) {
            this.consume()
        }
    },
    substring: function(B, A) {
        return this.data.substr(B, A - B + 1)
    },
    getLine: function() {
        return this.line
    },
    getCharPositionInLine: function() {
        return this.charPositionInLine
    },
    setLine: function(A) {
        this.line = A
    },
    setCharPositionInLine: function(A) {
        this.charPositionInLine = A
    },
    getSourceName: function() {
        return null
    }
};
org.antlr.runtime.ANTLRStringStream.LT = org.antlr.runtime.ANTLRStringStream.LA;
org.antlr.runtime.CommonTokenStream = function(A, B) {
    this.p = -1;
    this.channel = org.antlr.runtime.Token.DEFAULT_CHANNEL;
    this.v_discardOffChannelTokens = false;
    this.tokens = [];
    if (arguments.length >= 2) {
        this.channel = B
    } else {
        if (arguments.length === 1) {
            this.tokenSource = A
        }
    }
};
org.antlr.runtime.CommonTokenStream.prototype = {
    setTokenSource: function(A) {
        this.tokenSource = A;
        this.tokens = [];
        this.p = -1;
        this.channel = org.antlr.runtime.Token.DEFAULT_CHANNEL
    },
    fillBuffer: function() {
        var B = 0,
        C = this.tokenSource.nextToken(),
        A,
        D;
        while (org.antlr.lang.isValue(C) && C.getType() != org.antlr.runtime.CharStream.EOF) {
            A = false;
            if (this.channelOverrideMap) {
                D = this.channelOverrideMap[C.getType()];
                if (org.antlr.lang.isValue(D)) {
                    C.setChannel(D)
                }
            }
            if (this.discardSet && this.discardSet[C.getType()]) {
                A = true
            } else {
                if (this.v_discardOffChannelTokens && C.getChannel() != this.channel) {
                    A = true
                }
            }
            if (!A) {
                C.setTokenIndex(B);
                this.tokens.push(C);
                B++
            }
            C = this.tokenSource.nextToken()
        }
        this.p = 0;
        this.p = this.skipOffTokenChannels(this.p)
    },
    consume: function() {
        if (this.p < this.tokens.length) {
            this.p++;
            this.p = this.skipOffTokenChannels(this.p)
        }
    },
    skipOffTokenChannels: function(A) {
        var B = this.tokens.length;
        while (A < B && (this.tokens[A]).getChannel() != this.channel) {
            A++
        }
        return A
    },
    skipOffTokenChannelsReverse: function(A) {
        while (A >= 0 && (this.tokens[A]).getChannel() != this.channel) {
            A--
        }
        return A
    },
    setTokenTypeChannel: function(B, A) {
        if (!this.channelOverrideMap) {
            this.channelOverrideMap = {}
        }
        this.channelOverrideMap[B] = A
    },
    discardTokenType: function(A) {
        if (!this.discardSet) {
            this.discardSet = {}
        }
        this.discardSet[A] = true
    },
    discardOffChannelTokens: function(A) {
        this.v_discardOffChannelTokens = A
    },
    getTokens: function(F, D, C) {
        if (this.p === -1) {
            this.fillBuffer()
        }
        if (arguments.length === 0) {
            return this.tokens
        }
        if (org.antlr.lang.isArray(C)) {
            C = new org.antlr.runtime.BitSet(C)
        } else {
            if (org.antlr.lang.isNumber(C)) {
                C = org.antlr.runtime.BitSet.of(C)
            }
        }
        if (D >= this.tokens.length) {
            D = this.tokens.length - 1
        }
        if (F < 0) {
            F = 0
        }
        if (F > D) {
            return null
        }
        var E = [],
        B,
        A;
        for (B = F; B <= D; B++) {
            A = this.tokens[B];
            if (!this.types || C.member(A.getType())) {
                E.push(A)
            }
        }
        if (E.length === 0) {
            E = null
        }
        return E
    },
    LT: function(A) {
        if (this.p === -1) {
            this.fillBuffer()
        }
        if (A === 0) {
            return null
        }
        if (A < 0) {
            return this.LB( - 1 * A)
        }
        if ((this.p + A - 1) >= this.tokens.length) {
            return org.antlr.runtime.Token.EOF_TOKEN
        }
        var B = this.p,
        C = 1;
        while (C < A) {
            B = this.skipOffTokenChannels(B + 1);
            C++
        }
        if (B >= this.tokens.length) {
            return org.antlr.runtime.Token.EOF_TOKEN
        }
        return this.tokens[B]
    },
    LB: function(A) {
        if (this.p === -1) {
            this.fillBuffer()
        }
        if (A === 0) {
            return null
        }
        if ((this.p - A) < 0) {
            return null
        }
        var B = this.p,
        C = 1;
        while (C <= A) {
            B = this.skipOffTokenChannelsReverse(B - 1);
            C++
        }
        if (B < 0) {
            return null
        }
        return this.tokens[B]
    },
    get: function(A) {
        return this.tokens[A]
    },
    LA: function(A) {
        return this.LT(A).getType()
    },
    mark: function() {
        if (this.p === -1) {
            this.fillBuffer()
        }
        this.lastMarker = this.index();
        return this.lastMarker
    },
    release: function(A) {},
    size: function() {
        return this.tokens.length
    },
    index: function() {
        return this.p
    },
    rewind: function(A) {
        if (!org.antlr.lang.isNumber(A)) {
            A = this.lastMarker
        }
        this.seek(A)
    },
    reset: function() {
        this.p = -1;
        this.lastMarker = 0
    },
    seek: function(A) {
        this.p = A
    },
    getTokenSource: function() {
        return this.tokenSource
    },
    getSourceName: function() {
        return this.getTokenSource().getSourceName()
    },
    toString: function(D, C) {
        if (arguments.length === 0) {
            if (this.p === -1) {
                this.fillBuffer()
            }
            D = 0;
            C = this.tokens.length - 1
        }
        if (!org.antlr.lang.isNumber(D) && !org.antlr.lang.isNumber(C)) {
            if (org.antlr.lang.isValue(D) && org.antlr.lang.isValue(C)) {
                D = D.getTokenIndex();
                C = C.getTokenIndex()
            } else {
                return null
            }
        }
        var A = "",
        B;
        if (D < 0 || C < 0) {
            return null
        }
        if (this.p == -1) {
            this.fillBuffer()
        }
        if (C >= this.tokens.length) {
            C = this.tokens.length - 1
        }
        for (B = D; B <= C; B++) {
            t = this.tokens[B];
            A = A + this.tokens[B].getText()
        }
        return A
    }
};
org.antlr.runtime.TokenRewriteStream = function() {
    var A = org.antlr.runtime.TokenRewriteStream.superclass;
    this.programs = null;
    this.lastRewriteTokenIndexes = null;
    if (arguments.length === 0) {
        this.init()
    } else {
        A.constructor.apply(this, arguments);
        this.init()
    }
}; (function() {
    var A = org.antlr.runtime.TokenRewriteStream;
    org.antlr.lang.augmentObject(A, {
        DEFAULT_PROGRAM_NAME: "default",
        PROGRAM_INIT_SIZE: 100,
        MIN_TOKEN_INDEX: 0
    });
    A.RewriteOperation = function(B, C) {
        this.index = B;
        this.text = C
    };
    A.RewriteOperation.prototype = {
        execute: function(B) {
            return this.index
        },
        toString: function() {
            return this.text
        }
    };
    A.InsertBeforeOp = function(B, C) {
        A.InsertBeforeOp.superclass.constructor.call(this, B, C)
    };
    org.antlr.lang.extend(A.InsertBeforeOp, A.RewriteOperation, {
        execute: function(B) {
            B.push(this.text);
            return this.index
        }
    });
    A.ReplaceOp = function(D, C, B) {
        A.ReplaceOp.superclass.constructor.call(this, D, B);
        this.lastIndex = C
    };
    org.antlr.lang.extend(A.ReplaceOp, A.RewriteOperation, {
        execute: function(B) {
            if (org.antlr.lang.isValue(this.text)) {
                B.push(this.text)
            }
            return this.lastIndex + 1
        }
    });
    A.DeleteOp = function(C, B) {
        A.DeleteOp.superclass.constructor.call(this, C, B)
    };
    org.antlr.lang.extend(A.DeleteOp, A.ReplaceOp);
    org.antlr.lang.extend(A, org.antlr.runtime.CommonTokenStream, {
        init: function() {
            this.programs = {};
            this.programs[A.DEFAULT_PROGRAM_NAME] = [];
            this.lastRewriteTokenIndexes = {}
        },
        rollback: function() {
            var B,
            C;
            if (arguments.length === 1) {
                B = A.DEFAULT_PROGRAM_NAME;
                C = arguments[0]
            } else {
                if (arguments.length === 2) {
                    B = arguments[0];
                    C = arguments[1]
                }
            }
            var D = this.programs[B];
            if (D) {
                programs[B] = D.slice(A.MIN_TOKEN_INDEX, this.instructionIndex)
            }
        },
        deleteProgram: function(B) {
            B = B || A.DEFAULT_PROGRAM_NAME;
            this.rollback(B, A.MIN_TOKEN_INDEX)
        },
        addToSortedRewriteList: function() {
            var H,
            E;
            if (arguments.length === 1) {
                H = A.DEFAULT_PROGRAM_NAME;
                E = arguments[0]
            } else {
                if (arguments.length === 2) {
                    H = arguments[0];
                    E = arguments[1]
                }
            }
            var F = this.getProgram(H);
            var G,
            I,
            D,
            J,
            B,
            C;
            for (I = 0, G = F.length; I < G; I++) {
                D = F[I];
                if (D.index === E.index) {
                    if (E instanceof A.ReplaceOp) {
                        J = false;
                        for (C = I; C < F.length; C++) {
                            B = F[I];
                            if (B.index !== E.index) {
                                break
                            }
                            if (B instanceof A.ReplaceOp) {
                                F[I] = E;
                                J = true;
                                break
                            }
                        }
                        if (!J) {
                            F.splice(C, 0, E)
                        }
                    } else {
                        F.splice(I, 0, E)
                    }
                    break
                } else {
                    if (D.index > E.index) {
                        F.splice(I, 0, E);
                        break
                    }
                }
            }
            if (I === G) {
                F.push(E)
            }
        },
        insertAfter: function() {
            var C,
            B,
            D;
            if (arguments.length === 2) {
                B = A.DEFAULT_PROGRAM_NAME;
                C = arguments[0];
                D = arguments[1]
            } else {
                if (arguments.length === 3) {
                    B = arguments[0];
                    C = arguments[1];
                    D = arguments[2]
                }
            }
            if (C instanceof org.antlr.runtime.CommonToken) {
                C = C.index
            }
            this.insertBefore(B, C + 1, D)
        },
        insertBefore: function() {
            var C,
            B,
            D;
            if (arguments.length === 2) {
                B = A.DEFAULT_PROGRAM_NAME;
                C = arguments[0];
                D = arguments[1]
            } else {
                if (arguments.length === 3) {
                    B = arguments[0];
                    C = arguments[1];
                    D = arguments[2]
                }
            }
            if (C instanceof org.antlr.runtime.CommonToken) {
                C = C.index
            }
            this.addToSortedRewriteList(B, new A.InsertBeforeOp(C, D))
        },
        replace: function() {
            var B,
            E,
            C,
            D;
            if (arguments.length === 2) {
                B = A.DEFAULT_PROGRAM_NAME;
                E = arguments[0];
                C = arguments[0];
                D = arguments[1]
            } else {
                if (arguments.length === 3) {
                    B = A.DEFAULT_PROGRAM_NAME;
                    E = arguments[0];
                    C = arguments[1];
                    D = arguments[2]
                }
            }
            if (arguments.length === 4) {
                B = arguments[0];
                E = arguments[1];
                C = arguments[2];
                D = arguments[3]
            }
            if (E instanceof org.antlr.runtime.CommonToken) {
                E = E.index
            }
            if (C instanceof org.antlr.runtime.CommonToken) {
                C = C.index
            }
            if (E > C || C < 0 || E < 0) {
                return
            }
            this.addToSortedRewriteList(B, new A.ReplaceOp(E, C, D))
        },
        remove: function() {
            var B = [],
            C = arguments.length - 1;
            while (C >= 0) {
                B[C] = arguments[C];
                C--
            }
            B.push("");
            this.replace.apply(this, B)
        },
        getLastRewriteTokenIndex: function(B) {
            B = B || A.DEFAULT_PROGRAM_NAME;
            return this.lastRewriteTokenIndexes[B] || -1
        },
        setLastRewriteTokenIndex: function(B, C) {
            this.lastRewriteTokenIndexes[B] = C
        },
        getProgram: function(B) {
            var C = this.programs[B];
            if (!C) {
                C = this.initializeProgram(B)
            }
            return C
        },
        initializeProgram: function(B) {
            var C = [];
            this.programs[B] = C;
            return C
        },
        toOriginalString: function(E, B) {
            if (!org.antlr.lang.isNumber(E)) {
                E = A.MIN_TOKEN_INDEX
            }
            if (!org.antlr.lang.isNumber(B)) {
                B = this.size() - 1
            }
            var C = [],
            D;
            for (D = E; D >= A.MIN_TOKEN_INDEX && D <= B && D < this.tokens.length; D++) {
                C.push(this.get(D).getText())
            }
            return C.join("")
        },
        toString: function() {
            var J,
            B,
            F;
            if (arguments.length === 0) {
                J = A.DEFAULT_PROGRAM_NAME;
                B = A.MIN_TOKEN_INDEX;
                F = this.size() - 1
            } else {
                if (arguments.length === 1) {
                    J = arguments[0];
                    B = A.MIN_TOKEN_INDEX;
                    F = this.size() - 1
                } else {
                    if (arguments.length === 2) {
                        J = A.DEFAULT_PROGRAM_NAME;
                        B = arguments[0];
                        F = arguments[1]
                    }
                }
            }
            var H = this.programs[J];
            if (!H || H.length === 0) {
                return this.toOriginalString(B, F)
            }
            var E = 0,
            D = B,
            C = [],
            G;
            while (D >= A.MIN_TOKEN_INDEX && D <= F && D < this.tokens.length) {
                if (E < H.length) {
                    G = H[E];
                    while (G.index < D && E < H.length) {
                        E++;
                        if (E < H.length) {
                            G = H[E]
                        }
                    }
                    while (D === G.index && E < H.length) {
                        D = G.execute(C);
                        E++;
                        if (E < H.length) {
                            G = H[E]
                        }
                    }
                }
                if (D <= F) {
                    C.push(this.get(D).getText());
                    D++
                }
            }
            var I;
            for (I = E; I < H.length; I++) {
                G = H[I];
                if (G.index >= this.size()) {
                    G.execute(C)
                }
            }
            return C.join("")
        },
        toDebugString: function(E, B) {
            if (!org.antlr.lang.isNumber(E)) {
                E = A.MIN_TOKEN_INDEX
            }
            if (!org.antlr.lang.isNumber(B)) {
                B = this.size() - 1
            }
            var C = [],
            D;
            for (D = E; D >= A.MIN_TOKEN_INDEX && D <= B && D < this.tokens.length; D++) {
                C.push(this.get(D))
            }
            return C.join("")
        }
    })
})();
org.antlr.runtime.tree.TreeNodeStream = function() {};
org.antlr.runtime.tree.CommonTreeNodeStream = function(D, A, B) {
    if (arguments.length === 1) {
        A = D;
        D = new org.antlr.runtime.tree.CommonTreeAdaptor()
    }
    if (arguments.length <= 2) {
        B = org.antlr.runtime.tree.CommonTreeNodeStream.DEFAULT_INITIAL_BUFFER_SIZE
    }
    this.uniqueNavigationNodes = false;
    this.p = -1;
    var C = org.antlr.runtime.Token;
    this.root = A;
    this.adaptor = D;
    this.nodes = [];
    this.down = this.adaptor.create(C.DOWN, "DOWN");
    this.up = this.adaptor.create(C.UP, "UP");
    this.eof = this.adaptor.create(C.EOF, "EOF")
};
org.antlr.lang.augmentObject(org.antlr.runtime.tree.CommonTreeNodeStream, {
    DEFAULT_INITIAL_BUFFER_SIZE: 100,
    INITIAL_CALL_STACK_SIZE: 10
});
org.antlr.lang.extend(org.antlr.runtime.tree.CommonTreeNodeStream, org.antlr.runtime.tree.TreeNodeStream, {
    StreamIterator: function() {
        var C = 0,
        B = this.nodes,
        A = this.eof;
        return {
            hasNext: function() {
                return C < B.length
            },
            next: function() {
                var D = C;
                C++;
                if (D < B.length) {
                    return B[D]
                }
                return A
            },
            remove: function() {
                throw new Error("cannot remove nodes from stream")
            }
        }
    },
    fillBuffer: function(C) {
        var B = false;
        if (org.antlr.lang.isUndefined(C)) {
            C = this.root;
            B = true
        }
        var A = this.adaptor.isNil(C);
        if (!A) {
            this.nodes.push(C)
        }
        var F = this.adaptor.getChildCount(C);
        if (!A && F > 0) {
            this.addNavigationNode(org.antlr.runtime.Token.DOWN)
        }
        var E,
        D;
        for (E = 0; E < F; E++) {
            D = this.adaptor.getChild(C, E);
            this.fillBuffer(D)
        }
        if (!A && F > 0) {
            this.addNavigationNode(org.antlr.runtime.Token.UP)
        }
        if (B) {
            this.p = 0
        }
    },
    getNodeIndex: function(C) {
        if (this.p == -1) {
            this.fillBuffer()
        }
        var B,
        A;
        for (B = 0; B < this.nodes.length; B++) {
            A = this.nodes[B];
            if (A === C) {
                return B
            }
        }
        return - 1
    },
    addNavigationNode: function(B) {
        var A = null;
        if (B === org.antlr.runtime.Token.DOWN) {
            if (this.hasUniqueNavigationNodes()) {
                A = this.adaptor.create(org.antlr.runtime.Token.DOWN, "DOWN")
            } else {
                A = this.down
            }
        } else {
            if (this.hasUniqueNavigationNodes()) {
                A = this.adaptor.create(org.antlr.runtime.Token.UP, "UP")
            } else {
                A = this.up
            }
        }
        this.nodes.push(A)
    },
    get: function(A) {
        if (this.p === -1) {
            this.fillBuffer()
        }
        return this.nodes[A]
    },
    LT: function(A) {
        if (this.p === -1) {
            this.fillBuffer()
        }
        if (A === 0) {
            return null
        }
        if (A < 0) {
            return this.LB( - 1 * A)
        }
        if ((this.p + A - 1) >= this.nodes.length) {
            return this.eof
        }
        return this.nodes[this.p + A - 1]
    },
    getCurrentSymbol: function() {
        return this.LT(1)
    },
    LB: function(A) {
        if (A === 0) {
            return null
        }
        if ((this.p - A) < 0) {
            return null
        }
        return this.nodes[this.p - A]
    },
    getTreeSource: function() {
        return this.root
    },
    getSourceName: function() {
        return this.getTokenStream().getSourceName()
    },
    getTokenStream: function() {
        return this.tokens
    },
    setTokenStream: function(A) {
        this.tokens = A
    },
    getTreeAdaptor: function() {
        return this.adaptor
    },
    setTreeAdaptor: function(A) {
        this.adaptor = A
    },
    hasUniqueNavigationNodes: function() {
        return this.uniqueNavigationNodes
    },
    setUniqueNavigationNodes: function(A) {
        this.uniqueNavigationNodes = A
    },
    consume: function() {
        if (this.p === -1) {
            this.fillBuffer()
        }
        this.p++
    },
    LA: function(A) {
        return this.adaptor.getType(this.LT(A))
    },
    mark: function() {
        if (this.p === -1) {
            this.fillBuffer()
        }
        this.lastMarker = this.index();
        return this.lastMarker
    },
    release: function(A) {},
    index: function() {
        return this.p
    },
    rewind: function(A) {
        if (!org.antlr.lang.isNumber(A)) {
            A = this.lastMarker
        }
        this.seek(A)
    },
    seek: function(A) {
        if (this.p === -1) {
            this.fillBuffer()
        }
        this.p = A
    },
    push: function(A) {
        if (!this.calls) {
            this.calls = []
        }
        this.calls.push(this.p);
        this.seek(A)
    },
    pop: function() {
        var A = this.calls.pop();
        this.seek(A);
        return A
    },
    reset: function() {
        this.p = -1;
        this.lastMarker = 0;
        if (this.calls) {
            this.calls = []
        }
    },
    size: function() {
        if (this.p === -1) {
            this.fillBuffer()
        }
        return this.nodes.length
    },
    iterator: function() {
        if (this.p === -1) {
            this.fillBuffer()
        }
        return this.StreamIterator()
    },
    replaceChildren: function(D, B, A, C) {
        if (D) {
            this.adaptor.replaceChildren(D, B, A, C)
        }
    },
    toTokenString: function(E, D) {
        if (this.p === -1) {
            this.fillBuffer()
        }
        var A = "",
        C,
        B;
        for (C = E; C < this.nodes.length && C <= D; C++) {
            B = this.nodes[C];
            A += " " + this.adaptor.getToken(B)
        }
        return A
    },
    toString: function(H, D) {
        var A = "",
        E,
        C,
        B;
        if (arguments.length === 0) {
            if (this.p === -1) {
                this.fillBuffer()
            }
            for (B = 0; B < this.nodes.length; B++) {
                C = this.nodes[B];
                A += " ";
                A += this.adaptor.getType(C)
            }
            return A
        } else {
            if (!org.antlr.lang.isNumber(H) || !org.antlr.lang.isNumber(D)) {
                return null
            }
            if (this.p === -1) {
                this.fillBuffer()
            }
            if (H instanceof org.antlr.runtime.tree.CommonTree) {} else {}
            if (D instanceof org.antlr.runtime.tree.CommonTree) {} else {}
            var G,
            F;
            if (this.tokens) {
                G = this.adaptor.getTokenStartIndex(H);
                F = this.adaptor.getTokenStopIndex(D);
                if (this.adaptor.getType(D) === org.antlr.runtime.Token.UP) {
                    F = this.adaptor.getTokenStopIndex(H)
                } else {
                    if (this.adaptor.getType(D) == org.antlr.runtime.Token.EOF) {
                        F = this.size() - 2
                    }
                }
                return this.tokens.toString(G, F)
            }
            C = null;
            B = 0;
            for (; B < this.nodes.length; B++) {
                C = this.nodes[B];
                if (C === H) {
                    break
                }
            }
            A = E = "";
            C = this.nodes[B];
            while (C !== D) {
                E = this.adaptor.getText(C);
                if (!org.antlr.lang.isString(E)) {
                    E = " " + this.adaptor.getType(C).toString()
                }
                A += E;
                B++;
                C = nodes[B]
            }
            E = this.adaptor.getText(D);
            if (!org.antlr.lang.isString(E)) {
                E = " " + this.adaptor.getType(D).toString()
            }
            A += E;
            return A
        }
    }
});
org.antlr.runtime.tree.RewriteRuleElementStream = function(C, B, A) {
    this.cursor = 0;
    this.dirty = false;
    this.elementDescription = B;
    this.adaptor = C;
    if (A) {
        if (org.antlr.lang.isArray(A)) {
            this.singleElement = null;
            this.elements = A
        } else {
            this.add(A)
        }
    }
};
org.antlr.runtime.tree.RewriteRuleElementStream.prototype = {
    reset: function() {
        this.cursor = 0;
        this.dirty = true
    },
    add: function(A) {
        if (!org.antlr.lang.isValue(A)) {
            return
        }
        if (this.elements) {
            this.elements.push(A);
            return
        }
        if (!org.antlr.lang.isValue(this.singleElement)) {
            this.singleElement = A;
            return
        }
        this.elements = [];
        this.elements.push(this.singleElement);
        this.singleElement = null;
        this.elements.push(A)
    },
    nextTree: function() {
        var B = this.size(),
        A;
        if (this.dirty || (this.cursor >= B && B == 1)) {
            A = this._next();
            return this.dup(A)
        }
        A = this._next();
        return A
    },
    _next: function() {
        var B = this.size();
        if (B === 0) {
            throw new org.antlr.runtime.tree.RewriteEmptyStreamException(this.elementDescription)
        }
        if (this.cursor >= B) {
            if (B === 1) {
                return this.toTree(this.singleElement)
            }
            throw new org.antlr.runtime.tree.RewriteCardinalityException(this.elementDescription)
        }
        if (org.antlr.lang.isValue(this.singleElement)) {
            this.cursor++;
            return this.toTree(this.singleElement)
        }
        var A = this.toTree(this.elements[this.cursor]);
        this.cursor++;
        return A
    },
    toTree: function(A) {
        if (A && A.getTree) {
            return A.getTree()
        }
        return A
    },
    hasNext: function() {
        return (org.antlr.lang.isValue(this.singleElement) && this.cursor < 1) || (this.elements && this.cursor < this.elements.length)
    },
    size: function() {
        var A = 0;
        if (org.antlr.lang.isValue(this.singleElement)) {
            A = 1
        }
        if (this.elements) {
            return this.elements.length
        }
        return A
    },
    getDescription: function() {
        return this.elementDescription
    }
};
org.antlr.runtime.tree.RewriteRuleNodeStream = function(C, B, A) {
    org.antlr.runtime.tree.RewriteRuleNodeStream.superclass.constructor.apply(this, arguments)
};
org.antlr.lang.extend(org.antlr.runtime.tree.RewriteRuleNodeStream, org.antlr.runtime.tree.RewriteRuleElementStream, {
    nextNode: function() {
        return this._next()
    },
    toTree: function(A) {
        return this.adaptor.dupNode(A)
    },
    dup: function() {
        throw new Error("dup can't be called for a node stream.")
    }
});
org.antlr.runtime.tree.RewriteRuleTokenStream = function(D, C, B) {
    var A = org.antlr.runtime.tree.RewriteRuleTokenStream.superclass;
    A.constructor.apply(this, arguments)
};
org.antlr.lang.extend(org.antlr.runtime.tree.RewriteRuleTokenStream, org.antlr.runtime.tree.RewriteRuleElementStream, {
    nextNode: function() {
        var A = this._next();
        return this.adaptor.create(A)
    },
    nextToken: function() {
        return this._next()
    },
    toTree: function(A) {
        return A
    },
    dup: function(A) {
        throw new Error("dup can't be called for a token stream.")
    }
});
org.antlr.runtime.tree.RewriteRuleSubtreeStream = function() {
    var A = org.antlr.runtime.tree.RewriteRuleSubtreeStream.superclass;
    A.constructor.apply(this, arguments)
};
org.antlr.lang.extend(org.antlr.runtime.tree.RewriteRuleSubtreeStream, org.antlr.runtime.tree.RewriteRuleElementStream, {
    nextNode: function() {
        var B = this.size(),
        A;
        if (this.dirty || (this.cursor >= B && B === 1)) {
            A = this._next();
            return this.adaptor.dupNode(A)
        }
        A = this._next();
        return A
    },
    dup: function(A) {
        return this.adaptor.dupTree(A)
    }
});
org.antlr.runtime.BaseRecognizer = function(A) {
    this.state = A || new org.antlr.runtime.RecognizerSharedState()
};
org.antlr.lang.augmentObject(org.antlr.runtime.BaseRecognizer, {
    MEMO_RULE_FAILED: -2,
    MEMO_RULE_UNKNOWN: -1,
    INITIAL_FOLLOW_STACK_SIZE: 100,
    MEMO_RULE_FAILED_I: -2,
    DEFAULT_TOKEN_CHANNEL: org.antlr.runtime.Token.DEFAULT_CHANNEL,
    HIDDEN: org.antlr.runtime.Token.HIDDEN_CHANNEL,
    NEXT_TOKEN_RULE_NAME: "nextToken"
});
org.antlr.runtime.BaseRecognizer.prototype = {
    reset: function() {
        var B,
        A;
        if (!this.state) {
            return
        }
        this.state._fsp = -1;
        this.state.errorRecovery = false;
        this.state.lastErrorIndex = -1;
        this.state.failed = false;
        this.state.syntaxErrors = 0;
        this.state.backtracking = 0;
        if (this.state.ruleMemo) {
            for (B = 0, A = this.state.ruleMemo.length; B < A; B++) {
                this.state.ruleMemo[B] = null
            }
        }
    },
    match: function(B, D, A) {
        var C = this.getCurrentInputSymbol(B);
        if (B.LA(1) === D) {
            B.consume();
            this.state.errorRecovery = false;
            this.state.failed = false;
            return C
        }
        if (this.state.backtracking > 0) {
            this.state.failed = true;
            return C
        }
        C = this.recoverFromMismatchedToken(B, D, A);
        return C
    },
    matchAny: function(A) {
        this.state.errorRecovery = false;
        this.state.failed = false;
        A.consume()
    },
    mismatchIsUnwantedToken: function(A, B) {
        return A.LA(2) === B
    },
    mismatchIsMissingToken: function(C, A) {
        if (!A) {
            return false
        }
        if (A.member(org.antlr.runtime.Token.EOR_TOKEN_TYPE)) {
            if (this.state._fsp >= 0) {
                A.remove(org.antlr.runtime.Token.EOR_TOKEN_TYPE)
            }
            var B = this.computeContextSensitiveRuleFOLLOW();
            A = A.or(this.viableTokensFollowingThisRule)
        }
        if (A.member(C.LA(1)) || A.member(org.antlr.runtime.Token.EOR_TOKEN_TYPE)) {
            return true
        }
        return false
    },
    mismatch: function(B, C, A) {
        if (this.mismatchIsUnwantedToken(B, C)) {
            throw new org.antlr.runtime.UnwantedTokenException(C, B)
        } else {
            if (this.mismatchIsMissingToken(B, A)) {
                throw new org.antlr.runtime.MissingTokenException(C, B, null)
            }
        }
        throw new org.antlr.runtime.MismatchedTokenException(C, B)
    },
    reportError: function(A) {
        if (this.state.errorRecovery) {
            return
        }
        this.state.syntaxErrors++;
        this.state.errorRecovery = true;
        this.displayRecognitionError(this.getTokenNames(), A)
    },


displayRecognitionError:function(A,B){
	var D=this.getErrorHeader(B),C=this.getErrorMessage(B,A);
// MYCODE
//	this.emitErrorMessage(D+" "+C)
	
},getErrorHeader:function(A){if(!org.antlr.lang.isNumber(A.line)){A.line=0}return"line "+A.line+":"+A.charPositionInLine},emitErrorMessage:function(A){if(typeof (window)!="undefined"&&window.alert){


// MYCODE
// Originally, the ANTLR code was doing an alert(), which was really annoying.
console.log(A)
// ENDMYCODE

}else{print(A)}},getErrorMessage:function(E,D){var F=(E&&E.getMessage)?E.getMessage():null,A,C;if(E instanceof org.antlr.runtime.UnwantedTokenException){var B=E;C="<unknown>";if(B.expecting==org.antlr.runtime.Token.EOF){C="EOF"}else{C=D[B.expecting]}F="extraneous input "+this.getTokenErrorDisplay(B.getUnexpectedToken())+" expecting "+C}else{if(E instanceof org.antlr.runtime.MissingTokenException){A=E;C="<unknown>";if(A.expecting==org.antlr.runtime.Token.EOF){C="EOF"}else{C=D[A.expecting]}F="missing "+C+" at "+this.getTokenErrorDisplay(E.token)}else{if(E instanceof org.antlr.runtime.MismatchedTokenException){A=E;C="<unknown>";if(A.expecting==org.antlr.runtime.Token.EOF){C="EOF"}else{C=D[A.expecting]}F="mismatched input "+this.getTokenErrorDisplay(E.token)+" expecting "+C}else{if(E instanceof org.antlr.runtime.NoViableAltException){F="no viable alternative at input "+this.getTokenErrorDisplay(E.token)}else{if(E instanceof org.antlr.runtime.EarlyExitException){F="required (...)+ loop did not match anything at input "+this.getTokenErrorDisplay(E.token)}else{if(E instanceof org.antlr.runtime.MismatchedSetException){F="mismatched input "+this.getTokenErrorDisplay(E.token)+" expecting set "+E.expecting}else{if(E instanceof org.antlr.runtime.MismatchedNotSetException){F="mismatched input "+this.getTokenErrorDisplay(E.token)+" expecting set "+E.expecting}else{if(E instanceof org.antlr.runtime.FailedPredicateException){F="rule "+E.ruleName+" failed predicate: {"+E.predicateText+"}?"}}}}}}}}return F},getNumberOfSyntaxErrors:function(){return this.state.syntaxErrors},getTokenErrorDisplay:function(A){var B=A.getText();if(!org.antlr.lang.isValue(B)){if(A.getType()==org.antlr.runtime.Token.EOF){B="<EOF>"}else{B="<"+A.getType()+">"}}B=B.replace(/\n/g,"\\n");B=B.replace(/\r/g,"\\r");B=B.replace(/\t/g,"\\t");return"'"+B+"'"},recover:function(A,B){if(this.state.lastErrorIndex==A.index()){A.consume()}this.state.lastErrorIndex=A.index();var C=this.computeErrorRecoverySet();this.beginResync();this.consumeUntil(A,C);this.endResync()},beginResync:function(){},endResync:function(){},computeErrorRecoverySet:function(){return this.combineFollows(false)},computeContextSensitiveRuleFOLLOW:function(){return this.combineFollows(true)},combineFollows:function(C){var E=this.state._fsp,B,A,D=new org.antlr.runtime.BitSet();for(B=E;B>=0;B--){A=this.state.following[B];D.orInPlace(A);if(C){if(A.member(org.antlr.runtime.Token.EOR_TOKEN_TYPE)){if(B>0){D.remove(org.antlr.runtime.Token.EOR_TOKEN_TYPE)}}else{break}}}return D},recoverFromMismatchedToken:function(B,F,A){var E=null;if(this.mismatchIsUnwantedToken(B,F)){E=new org.antlr.runtime.UnwantedTokenException(F,B);this.beginResync();B.consume();this.endResync();this.reportError(E);var D=this.getCurrentInputSymbol(B);B.consume();return D}if(this.mismatchIsMissingToken(B,A)){var C=this.getMissingSymbol(B,E,F,A);E=new org.antlr.runtime.MissingTokenException(F,B,C);this.reportError(E);return C}E=new org.antlr.runtime.MismatchedTokenException(F,B);throw E},recoverFromMismatchedSet:function(B,C,A){if(this.mismatchIsMissingToken(B,A)){this.reportError(C);return this.getMissingSymbol(B,C,org.antlr.runtime.Token.INVALID_TOKEN_TYPE,A)}throw C},getCurrentInputSymbol:function(A){return null},getMissingSymbol:function(B,D,C,A){return null},consumeUntil:function(A,C){var B=A.LA(1);while(B!=org.antlr.runtime.Token.EOF&&!C.member(B)){A.consume();B=A.LA(1)}},pushFollow:function(A){if((this.state._fsp+1)>=this.state.following.length){var C=[];var B;for(B=this.state.following.length-1;B>=0;B--){C[B]=this.state.following[B]}this.state.following=C}this.state._fsp++;this.state.following[this.state._fsp]=A},getRuleInvocationStack:function(B,A){throw new Error("Not implemented.")},getBacktrackingLevel:function(){return this.state.backtracking},getTokenNames:function(){return null},getGrammarFileName:function(){return null},toStrings:function(C){if(!C){return null}var A=[];var B;for(B=0;B<C.length;B++){A.push(C[B].getText())}return A},getRuleMemoization:function(B,A){if(!this.state.ruleMemo[B]){this.state.ruleMemo[B]={}}var C=this.state.ruleMemo[B][A];if(!org.antlr.lang.isNumber(C)){return org.antlr.runtime.BaseRecognizer.MEMO_RULE_UNKNOWN}return C},alreadyParsedRule:function(B,C){var A=this.getRuleMemoization(C,B.index());if(A==org.antlr.runtime.BaseRecognizer.MEMO_RULE_UNKNOWN){return false}if(A==org.antlr.runtime.BaseRecognizer.MEMO_RULE_FAILED){this.state.failed=true}else{B.seek(A+1)}return true},memoize:function(C,D,B){var A=this.state.failed?org.antlr.runtime.BaseRecognizer.MEMO_RULE_FAILED:C.index()-1;if(!org.antlr.lang.isValue(this.state.ruleMemo)){throw new Error("!!!!!!!!! memo array is null for "+this.getGrammarFileName())}if(D>=this.state.ruleMemo.length){throw new Error("!!!!!!!!! memo size is "+this.state.ruleMemo.length+", but rule index is "+D)}if(org.antlr.lang.isValue(this.state.ruleMemo[D])){this.state.ruleMemo[D][B]=A}},getRuleMemoizationCacheSize:function(){var C=0,A;for(A=0;this.state.ruleMemo&&A<this.state.ruleMemo.length;A++){var B=this.state.ruleMemo[A];if(B){C+=B.length}}return C},traceIn:function(C,B,A){this.emitErrorMessage("enter "+C+" "+A);if(this.state.failed){this.emitErrorMessage(" failed="+this.failed)}if(this.state.backtracking>0){this.emitErrorMessage(" backtracking="+this.state.backtracking)}},traceOut:function(C,B,A){this.emitErrorMessage("exit "+C+" "+A);if(this.state.failed){this.emitErrorMessage(" failed="+this.state.failed)}if(this.state.backtracking>0){this.emitErrorMessage(" backtracking="+this.state.backtracking)}}};org.antlr.runtime.Lexer=function(A,B){if(B){org.antlr.runtime.Lexer.superclass.constructor.call(this,B)}if(A){this.input=A}};org.antlr.lang.extend(org.antlr.runtime.Lexer,org.antlr.runtime.BaseRecognizer,{reset:function(){org.antlr.runtime.Lexer.superclass.reset.call(this);if(org.antlr.lang.isValue(this.input)){this.input.seek(0)}if(!org.antlr.lang.isValue(this.state)){return }this.state.token=null;this.state.type=org.antlr.runtime.Token.INVALID_TOKEN_TYPE;this.state.channel=org.antlr.runtime.Token.DEFAULT_CHANNEL;this.state.tokenStartCharIndex=-1;this.state.tokenStartCharPositionInLine=-1;this.state.tokenStartLine=-1;this.state.text=null},

nextToken:function(){
	while(true){
	
		// MYCODE
		this.state.CLEANROOM_PREVIOUS_TOKEN = this.state.token;
		// END
	
		this.state.token=null;
		this.state.channel=org.antlr.runtime.Token.DEFAULT_CHANNEL;
		this.state.tokenStartCharIndex=this.input.index();
		this.state.tokenStartCharPositionInLine=this.input.getCharPositionInLine();
		this.state.tokenStartLine=this.input.getLine();
		this.state.text=null;
		if(this.input.LA(1)===org.antlr.runtime.CharStream.EOF){
			return org.antlr.runtime.Token.EOF_TOKEN
		}
		try{
			this.mTokens();
			if(!org.antlr.lang.isValue(this.state.token)){
				this.emit();
			}
			else{
				if(this.state.token==org.antlr.runtime.Token.SKIP_TOKEN){continue}
			}
			return this.state.token
		}catch(A){
			if(A instanceof org.antlr.runtime.RecognitionException){
				this.reportError(A)
			}
			else{
				if(A instanceof org.antlr.runtime.NoViableAltException){
					this.reportError(A);
					this.recover(A)
				}
				else{throw A}
			}
		}
	}
},

skip:function(){this.state.token=org.antlr.runtime.Token.SKIP_TOKEN},setCharStream:function(A){this.input=null;this.reset();this.input=A},getCharStream:function(){return this.input},getSourceName:function(){return this.input.getSourceName()},

emit:function(){
	if(arguments.length===0){
		var A=new org.antlr.runtime.CommonToken(this.input,this.state.type,this.state.channel,this.state.tokenStartCharIndex,this.getCharIndex()-1);
		A.setLine(this.state.tokenStartLine);
		A.setText(this.state.text);
		A.setCharPositionInLine(this.state.tokenStartCharPositionInLine);
		this.state.token=A;
		
		// MYCODE
		if(this.state.CLEANROOM_PREVIOUS_TOKEN) this.state.CLEANROOM_PREVIOUS_TOKEN.CLEANROOM_NEXT_TOKEN = A;
		A.CLEANROOM_PREVIOUS_TOKEN = this.state.CLEANROOM_PREVIOUS_TOKEN;
		// END		
		
		return A
	}
	else{
		this.state.token=arguments[0]
		
		this.state.token = this.state.CLEANROOM_PREVIOUS_TOKEN;
		// MYCODE
		if(this.state.CLEANROOM_PREVIOUS_TOKEN) this.state.CLEANROOM_PREVIOUS_TOKEN.CLEANROOM_NEXT_TOKEN = this.state.token;
		// END		

	}
},

match:function(C){var B=0,A;if(org.antlr.lang.isString(C)){while(B<C.length){if(this.input.LA(1)!=C.charAt(B)){if(this.state.backtracking>0){this.state.failed=true;return }A=new org.antlr.runtime.MismatchedTokenException(C.charAt(B),this.input);this.recover(A);throw A}B++;this.input.consume();this.state.failed=false}}else{if(org.antlr.lang.isNumber(C)){if(this.input.LA(1)!=C){if(this.state.backtracking>0){this.state.failed=true;return }A=new org.antlr.runtime.MismatchedTokenException(C,this.input);this.recover(A);throw A}this.input.consume();this.state.failed=false}}},matchAny:function(){this.input.consume()},matchRange:function(B,A){if(this.input.LA(1)<B||this.input.LA(1)>A){if(this.state.backtracking>0){this.state.failed=true;return }mre=new org.antlr.runtime.MismatchedRangeException(B,A,this.input);this.recover(mre);throw mre}this.input.consume();this.state.failed=false},getLine:function(){return this.input.getLine()},getCharPositionInLine:function(){return this.input.getCharPositionInLine()},getCharIndex:function(){return this.input.index()},getText:function(){if(org.antlr.lang.isString(this.state.text)){return this.state.text}return this.input.substring(this.state.tokenStartCharIndex,this.getCharIndex()-1)},setText:function(A){this.state.text=A},reportError:function(A){this.displayRecognitionError(this.getTokenNames(),A)},

getErrorMessage:function(B,A){
	var C=null;
	if(B instanceof org.antlr.runtime.MismatchedTokenException){
		C="mismatched character "+this.getCharErrorDisplay(B.c)+" expecting "+this.getCharErrorDisplay(B.expecting)
	}
	else{
		if(B instanceof org.antlr.runtime.NoViableAltException){
			C="no viable alternative at character "+this.getCharErrorDisplay(B.c)
		}
		else{
			if(B instanceof org.antlr.runtime.EarlyExitException){
				C="required (...)+ loop did not match anything at character "+this.getCharErrorDisplay(B.c)
			}
			else{
				if(B instanceof org.antlr.runtime.MismatchedNotSetException){
					C="mismatched character "+this.getCharErrorDisplay(B.c)+" expecting set "+B.expecting
				}
				else{
					if(B instanceof org.antlr.runtime.MismatchedSetException){
						C="mismatched character "+this.getCharErrorDisplay(B.c)+" expecting set "+B.expecting
					}
					else{
						if(B instanceof org.antlr.runtime.MismatchedRangeException){
							C="mismatched character "+this.getCharErrorDisplay(B.c)+" expecting set "+this.getCharErrorDisplay(B.a)+".."+this.getCharErrorDisplay(B.b)
						}
						else{
							C=org.antlr.runtime.Lexer.superclass.getErrorMessage.call(this,B,A)
						}
					}
				}
			}
		}
	}
	return C
},

getCharErrorDisplay:function(B){var A=B;switch(A){case org.antlr.runtime.Token.EOF:A="<EOF>";break;case"\n":A="\\n";break;case"\t":A="\\t";break;case"\r":A="\\r";break}return"'"+A+"'"},recover:function(A){this.input.consume()},traceIn:function(C,B){var A=String.fromCharCode(this.input.LT(1))+" line="+this.getLine()+":"+this.getCharPositionInLine();org.antlr.runtime.Lexer.superclass.traceIn.call(this,C,B,A)},traceOut:function(C,B){var A=String.fromCharCode(this.input.LT(1))+" line="+this.getLine()+":"+this.getCharPositionInLine();org.antlr.runtime.Lexer.superclass.traceOut.call(this,C,B,A)}});org.antlr.runtime.ParserRuleReturnScope=function(){};org.antlr.runtime.ParserRuleReturnScope.prototype={getStart:function(){return this.start},getStop:function(){return this.stop}};org.antlr.runtime.tree.TreeRuleReturnScope=function(){};org.antlr.runtime.tree.TreeRuleReturnScope.prototype={getStart:function(){return this.start}};org.antlr.runtime.Parser=function(A,B){org.antlr.runtime.Parser.superclass.constructor.call(this,B);this.setTokenStream(A)};org.antlr.lang.extend(org.antlr.runtime.Parser,org.antlr.runtime.BaseRecognizer,{reset:function(){org.antlr.runtime.Parser.superclass.reset.call(this);if(org.antlr.lang.isValue(this.input)){this.input.seek(0)}},getCurrentInputSymbol:function(A){return A.LT(1)},getMissingSymbol:function(C,G,E,A){var B="<missing "+this.getTokenNames()[E]+">";var D=new org.antlr.runtime.CommonToken(E,B);var F=C.LT(1);var H;if(F.getType()===org.antlr.runtime.Token.EOF){H=F;F=C.LT(-1);if(!F){F=H}}D.line=F.getLine();D.charPositionInLine=F.getCharPositionInLine();D.channel=org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;return D},setTokenStream:function(A){this.input=null;this.reset();this.input=A},getTokenStream:function(){return this.input},getSourceName:function(){return this.input.getSourceName()},traceIn:function(B,A){org.antlr.runtime.Parser.superclass.traceIn.call(this,B,A,this.input.LT(1))},traceOut:function(B,A){org.antlr.runtime.Parser.superclass.traceOut.call(this,B,A,this.input.LT(1))}});org.antlr.runtime.DFA=function(){};org.antlr.runtime.DFA.prototype={predict:function(C){var F=C.mark(),D=0,B,E,A;try{while(true){B=this.special[D];if(B>=0){D=this.specialStateTransition(B,C);if(D===-1){this.noViableAlt(D,C);return 0}C.consume();continue}if(this.accept[D]>=1){return this.accept[D]}E=C.LA(1);if(E===org.antlr.runtime.Token.EOF){E=-1}else{if(org.antlr.lang.isString(E)){E=E.charCodeAt(0)}}if(E>=this.min[D]&&E<=this.max[D]){A=this.transition[D][E-this.min[D]];if(A<0){if(this.eot[D]>=0){D=this.eot[D];C.consume();continue}this.noViableAlt(D,C);return 0}D=A;C.consume();continue}if(this.eot[D]>=0){D=this.eot[D];C.consume();continue}if(E==org.antlr.runtime.Token.EOF&&this.eof[D]>=0){return this.accept[this.eof[D]]}this.noViableAlt(D,C);return 0}}finally{C.rewind(F)}},noViableAlt:function(C,A){if(this.recognizer.state.backtracking>0){this.recognizer.state.failed=true;return }var B=new org.antlr.runtime.NoViableAltException(this.getDescription(),this.decisionNumber,C,A);this.error(B);throw B},error:function(A){},specialStateTransition:function(B,A){return -1},getDescription:function(){return"n/a"}};org.antlr.lang.augmentObject(org.antlr.runtime.DFA,{unpackEncodedString:function(D){var C,F=[],E=0,G,A,B;for(C=0;C<D.length;C+=2){G=D.charCodeAt(C);A=D.charCodeAt(C+1);if(A===65535){A=-1}for(B=1;B<=G;B++){F[E++]=A}}return F},unpackEncodedStringToUnsignedChars:function(A){return org.antlr.runtime.DFA.unpackEncodedString(A)}});org.antlr.runtime.tree.TreeParser=function(A){org.antlr.runtime.tree.TreeParser.superclass.constructor.call(this,arguments[1]);this.setTreeNodeStream(A)};(function(){var A=org.antlr.runtime.tree.TreeParser;org.antlr.lang.augmentObject(A,{DOWN:org.antlr.runtime.Token.DOWN,UP:org.antlr.runtime.Token.UP});org.antlr.lang.extend(A,org.antlr.runtime.BaseRecognizer,{reset:function(){A.superclass.reset.call(this);if(this.input){this.input.seek(0)}},setTreeNodeStream:function(B){this.input=B},getTreeNodeStream:function(){return this.input},getSourceName:function(){return this.input.getSourceName()},getCurrentInputSymbol:function(B){return B.LT(1)},getMissingSymbol:function(D,F,E,B){var C="<missing "+this.getTokenNames()[E]+">";return new org.antlr.runtime.tree.CommonTree(new org.antlr.runtime.CommonToken(E,C))},matchAny:function(E){this.state.errorRecovery=false;this.state.failed=false;var B=this.input.LT(1);if(this.input.getTreeAdaptor().getChildCount(B)===0){this.input.consume();return }var D=0,C=this.input.getTreeAdaptor().getType(B);while(C!==org.antlr.runtime.Token.EOF&&!(C===A.UP&&D===0)){this.input.consume();B=this.input.LT(1);C=this.input.getTreeAdaptor().getType(B);if(C===A.DOWN){D++}else{if(C===A.UP){D--}}}this.input.consume()},mismatch:function(C,D,B){throw new org.antlr.runtime.MismatchedTreeNodeException(D,C)},getErrorHeader:function(B){return this.getGrammarFileName()+": node from "+(B.approximateLineInfo?"after ":"")+"line "+B.line+":"+B.charPositionInLine},getErrorMessage:function(C,B){var D;if(this instanceof A){D=C.input.getTreeAdaptor();C.token=D.getToken(C.node);if(!org.antlr.lang.isValue(C.token)){C.token=new org.antlr.runtime.CommonToken(D.getType(C.node),D.getText(C.node))}}return A.superclass.getErrorMessage.call(this,C,B)},traceIn:function(C,B){A.superclass.traceIn.call(this,C,B,this.input.LT(1))},traceOut:function(C,B){A.superclass.traceOut.call(this,C,B,this.input.LT(1))}})})();