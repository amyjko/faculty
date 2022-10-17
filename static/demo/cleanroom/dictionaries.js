var DICTIONARIES = {

	// DICTIONARY
	htmlEventAttributes: {
		onblur: true,
		onchange: true,
		onclick: true,
		ondblclick: true,
		onfocus: true,
		onkeydown: true,
		onkeypress: true,
		onkeyup: true,
		onload: true,
		onmousedown: true,
		onmousemove: true,
		onmouseout: true,
		onmouseover: true,
		onmouseup: true,
		onreset: true,
		onselect: true,
		onsubmit: true,
		onunload: true
	},	

	// DICTIONARY
	htmlAttributeNames: {
	
		abbr: {
			td: { type: "%text;", required: "no", deprecated: "no" }, 
			th: { type: "%text;", required: "no", deprecated: "no" }
		},
		
		accept: {
			form: { type: "%contenttypes;", required: "no", deprecated: "no" }, 
			input: { type: "%contenttypes;", required: "no", deprecated: "no" }
		},
		
		accesskey: {
			a: { type: "%character;", required: "no", deprecated: "no" }, 
			area: { type: "%character;", required: "no", deprecated: "no" }, 
			button: { type: "%character;", required: "no", deprecated: "no" }, 
			input: { type: "%character;", required: "no", deprecated: "no" }, 
			label: { type: "%character;", required: "no", deprecated: "no" }, 
			legend: { type: "%character;", required: "no", deprecated: "no" }, 
			textarea: { type: "%character;", required: "no", deprecated: "no" }
		},
		
		action: {
			form: { type: "%uri;", required: "yes", deprecated: "no" }
		},
		
		align: {
			caption: { type: "%calign;", required: "no", deprecated: "yes" }
		},
		
		align: {
			applet: { type: "%ialign;", required: "no", deprecated: "yes" }, 
			iframe: { type: "%ialign;", required: "no", deprecated: "yes" }, 
			img: { type: "%ialign;", required: "no", deprecated: "yes" }, 
			input: { type: "%ialign;", required: "no", deprecated: "yes" }, 
			object: { type: "%ialign;", required: "no", deprecated: "yes" },
			legend: { type: "%lalign;", required: "no", deprecated: "yes" },
			table: { type: "%talign;", required: "no", deprecated: "yes" },
			hr: { type: "(left | center | right)", required: "no", deprecated: "yes" },
			div: { type: "(left | center | right | justify)", required: "no", deprecated: "yes" }, 
			h1: { type: "(left | center | right | justify)", required: "no", deprecated: "yes" }, 
			h2: { type: "(left | center | right | justify)", required: "no", deprecated: "yes" }, 
			h3: { type: "(left | center | right | justify)", required: "no", deprecated: "yes" }, 
			h4: { type: "(left | center | right | justify)", required: "no", deprecated: "yes" }, 
			h5: { type: "(left | center | right | justify)", required: "no", deprecated: "yes" }, 
			h6: { type: "(left | center | right | justify)", required: "no", deprecated: "yes" }, 
			p: { type: "(left | center | right | justify)", required: "no", deprecated: "yes" },
			col: { type: "(left | center | right | justify | char)", required: "no", deprecated: "no" }, 
			colgroup: { type: "(left | center | right | justify | char)", required: "no", deprecated: "no" }, 
			tbody: { type: "(left | center | right | justify | char)", required: "no", deprecated: "no" }, 
			td: { type: "(left | center | right | justify | char)", required: "no", deprecated: "no" }, 
			tfoot: { type: "(left | center | right | justify | char)", required: "no", deprecated: "no" }, 
			th: { type: "(left | center | right | justify | char)", required: "no", deprecated: "no" }, 
			thead: { type: "(left | center | right | justify | char)", required: "no", deprecated: "no" }, 
			tr: { type: "(left | center | right | justify | char)", required: "no", deprecated: "no" }
		},
		
		alink: {
			body: { type: "%color;", required: "no", deprecated: "yes" }
		},
		
		alt: {
			applet: { type: "%text;", required: "no", deprecated: "yes" },
			area: { type: "%text;", required: "yes", deprecated: "no" }, 
			img: { type: "%text;", required: "yes", deprecated: "no" },
			input: { type: "cdata", required: "no", deprecated: "no" }
		},
		
		archive: {
			applet: { type: "cdata", required: "no", deprecated: "yes" },
			object: { type: "cdata", required: "no", deprecated: "no" }
		},
		
		axis: {
			td: { type: "cdata", required: "no", deprecated: "no" }, 
			th: { type: "cdata", required: "no", deprecated: "no" }
		},
		
		background: {
			body: { type: "%uri;", required: "no", deprecated: "yes" }
		},
		
		bgcolor: {
			table: { type: "%color;", required: "no", deprecated: "yes" },
			tr: { type: "%color;", required: "no", deprecated: "yes" },
			td: { type: "%color;", required: "no", deprecated: "yes" }, 
			th: { type: "%color;", required: "no", deprecated: "yes" },
			body: { type: "%color;", required: "no", deprecated: "yes" }
		},
		
		border: {
			table: { type: "%pixels;", required: "no", deprecated: "no" },
			img: { type: "%pixels;", required: "no", deprecated: "yes" }, 
			object: { type: "%pixels;", required: "no", deprecated: "yes" }
		},
		
		cellpadding: {
			table: { type: "%length;", required: "no", deprecated: "no" }
		},
		
		cellspacing: {
			table: { type: "%length;", required: "no", deprecated: "no" }
		},
		
		char: {
			col: { type: "%character;", required: "no", deprecated: "no" }, 
			colgroup: { type: "%character;", required: "no", deprecated: "no" }, 
			tbody: { type: "%character;", required: "no", deprecated: "no" }, 
			td: { type: "%character;", required: "no", deprecated: "no" }, 
			tfoot: { type: "%character;", required: "no", deprecated: "no" }, 
			th: { type: "%character;", required: "no", deprecated: "no" }, 
			thead: { type: "%character;", required: "no", deprecated: "no" }, 
			tr: { type: "%character;", required: "no", deprecated: "no" }
		},
		
		charoff: {
			col: { type: "%length;", required: "no", deprecated: "no" }, 
			colgroup: { type: "%length;", required: "no", deprecated: "no" }, 
			tbody: { type: "%length;", required: "no", deprecated: "no" }, 
			td: { type: "%length;", required: "no", deprecated: "no" }, 
			tfoot: { type: "%length;", required: "no", deprecated: "no" }, 
			th: { type: "%length;", required: "no", deprecated: "no" }, 
			thead: { type: "%length;", required: "no", deprecated: "no" }, 
			tr: { type: "%length;", required: "no", deprecated: "no" }
		},
		
		charset: {
			a: { type: "%charset;", required: "no", deprecated: "no" }, 
			link: { type: "%charset;", required: "no", deprecated: "no" }, 
			script: { type: "%charset;", required: "no", deprecated: "no" }
		},
		
		checked: {
			input: { type: "(checked)", required: "no", deprecated: "no" }
		},
		
		cite: {
			blockquote: { type: "%uri;", required: "no", deprecated: "no" }, 
			q: { type: "%uri;", required: "no", deprecated: "no" },
			del: { type: "%uri;", required: "no", deprecated: "no" }, 
			ins: { type: "%uri;", required: "no", deprecated: "no" }
		},
		
		classid: {
			object: { type: "%uri;", required: "no", deprecated: "no" }
		},
		
		clear: {
			br: { type: "(left | all | right | none)", required: "no", deprecated: "yes" }
		},
		
		code: {
			applet: { type: "cdata", required: "no", deprecated: "yes" }
		},
		
		codebase: {
			object: { type: "%uri;", required: "no", deprecated: "no" },
			applet: { type: "%uri;", required: "no", deprecated: "yes" }
		},
		
		color: {
			basefont: { type: "%color;", required: "no", deprecated: "yes" }, 
			font: { type: "%color;", required: "no", deprecated: "yes" }
		},
		
		cols: {
			frameset: { type: "%multilengths;", required: "no", deprecated: "no" },
			textarea: { type: "number", required: "yes", deprecated: "no" }
		},
		
		colspan: {
			td: { type: "number", required: "no", deprecated: "no" }, 
			th: { type: "number", required: "no", deprecated: "no" }
		},
		
		compact: {
			dir: { type: "(compact)", required: "no", deprecated: "yes" }, 
			dl: { type: "(compact)", required: "no", deprecated: "yes" }, 
			menu: { type: "(compact)", required: "no", deprecated: "yes" }, 
			ol: { type: "(compact)", required: "no", deprecated: "yes" }, 
			ul: { type: "(compact)", required: "no", deprecated: "yes" }
		},
		
		content: {
			meta: { type: "cdata", required: "yes", deprecated: "no" }
		},
		
		coords: {
			area: { type: "%coords;", required: "no", deprecated: "no" },
			a: { type: "%coords;", required: "no", deprecated: "no" }
		},
		
		data: {
			object: { type: "%uri;", required: "no", deprecated: "no" }
		},
		
		datetime: {
			del: { type: "%datetime;", required: "no", deprecated: "no" }, 
			ins: { type: "%datetime;", required: "no", deprecated: "no" }
		},
		
		declare: {
			object: { type: "(declare)", required: "no", deprecated: "no" }
		},
		
		defer: {
			script: { type: "(defer)", required: "no", deprecated: "no" }
		},
		
		dir: {
			all: { type: "(ltr | rtl)", required: "no", deprecated: "no" }, 
		},
		
		disabled: {
			button: { type: "(disabled)", required: "no", deprecated: "no" }, 
			input: { type: "(disabled)", required: "no", deprecated: "no" }, 
			optgroup: { type: "(disabled)", required: "no", deprecated: "no" }, 
			option: { type: "(disabled)", required: "no", deprecated: "no" }, 
			select: { type: "(disabled)", required: "no", deprecated: "no" }, 
			textarea: { type: "(disabled)", required: "no", deprecated: "no" }
		},
		
		enctype: {
			form: { type: "%contenttype;", required: "no", deprecated: "no" }
		},
		
		face: {
			basefont: { type: "cdata", required: "no", deprecated: "yes" }, 
			font: { type: "cdata", required: "no", deprecated: "yes" }
		},
		
		frame: {
			table: { type: "%tframe;", required: "no", deprecated: "no" }
		},
		
		frameborder: {
			frame: { type: "(1 | 0)", required: "no", deprecated: "no" }, 
			iframe: { type: "(1 | 0)", required: "no", deprecated: "no" }
		},
		
		headers: {
			td: { type: "idrefs", required: "no", deprecated: "no" }, 
			th: { type: "idrefs", required: "no", deprecated: "no" }
		},
		
		height: {
			iframe: { type: "%length;", required: "no", deprecated: "no" },
			td: { type: "%length;", required: "no", deprecated: "yes" }, 
			th: { type: "%length;", required: "no", deprecated: "yes" },
			img: { type: "%length;", required: "no", deprecated: "no" }, 
			object: { type: "%length;", required: "no", deprecated: "no" },
			applet: { type: "%length;", required: "yes", deprecated: "yes" },
			canvas: { type: "%length;", required: "no", deprecated: "no" }
		},
		
		href: {
			a: { type: "%uri;", required: "no", deprecated: "no" }, 
			area: { type: "%uri;", required: "no", deprecated: "no" }, 
			link: { type: "%uri;", required: "no", deprecated: "no" },
			base: { type: "%uri;", required: "no", deprecated: "no" }
		},
		
		hreflang: {
			a: { type: "%languagecode;", required: "no", deprecated: "no" }, 
			link: { type: "%languagecode;", required: "no", deprecated: "no" }
		},
		
		hspace: {
			applet: { type: "%pixels;", required: "no", deprecated: "yes" }, 
			img: { type: "%pixels;", required: "no", deprecated: "yes" }, 
			object: { type: "%pixels;", required: "no", deprecated: "yes" }
		},
		
		id: {
			all: { type: "%text;", required: "no", deprecated: "no" },
		},
		
		ismap: {
			img: { type: "(ismap)", required: "no", deprecated: "no" }, 
			input: { type: "(ismap)", required: "no", deprecated: "no" }
		},
		
		label: {
			option: { type: "%text;", required: "no", deprecated: "no" },
			optgroup: { type: "%text;", required: "yes", deprecated: "no" }
		},
		
		lang: {
		},
		
		language: {
			script: { type: "cdata", required: "no", deprecated: "yes" }
		},
		
		link: {
			body: { type: "%color;", required: "no", deprecated: "yes" }
		},
		
		longdesc: {
			img: { type: "%uri;", required: "no", deprecated: "no" },
			frame: { type: "%uri;", required: "no", deprecated: "no" }, 
			iframe: { type: "%uri;", required: "no", deprecated: "no" }
		},
		
		marginheight: {
			frame: { type: "%pixels;", required: "no", deprecated: "no" }, 
			iframe: { type: "%pixels;", required: "no", deprecated: "no" }
		},
		
		marginwidth: {
			frame: { type: "%pixels;", required: "no", deprecated: "no" }, 
			iframe: { type: "%pixels;", required: "no", deprecated: "no" }
		},
		
		maxlength: {
			input: { type: "number", required: "no", deprecated: "no" }
		},
		
		media: {
			style: { type: "%mediadesc;", required: "no", deprecated: "no" },
			link: { type: "%mediadesc;", required: "no", deprecated: "no" }
		},
		
		method: {
			form: { type: "(get | post)", required: "no", deprecated: "no" }
		},
		
		multiple: {
			select: { type: "(multiple)", required: "no", deprecated: "no" }
		},
		
		name: {
			button: { type: "cdata", required: "no", deprecated: "no" }, 
			textarea: { type: "cdata", required: "no", deprecated: "no" },
			applet: { type: "cdata", required: "no", deprecated: "yes" },
			select: { type: "cdata", required: "no", deprecated: "no" },
			form: { type: "cdata", required: "no", deprecated: "no" },
			frame: { type: "cdata", required: "no", deprecated: "no" }, 
			iframe: { type: "cdata", required: "no", deprecated: "no" },
			img: { type: "cdata", required: "no", deprecated: "no" },
			a: { type: "cdata", required: "no", deprecated: "no" },
			input: { type: "cdata", required: "no", deprecated: "no" }, 
			object: { type: "cdata", required: "no", deprecated: "no" },
			map: { type: "cdata", required: "yes", deprecated: "no" },
			param: { type: "cdata", required: "yes", deprecated: "no" },
			meta: { type: "name", required: "no", deprecated: "no" }
		},
		
		nohref: {
			area: { type: "(nohref)", required: "no", deprecated: "no" }
		},
		
		noresize: {
			frame: { type: "(noresize)", required: "no", deprecated: "no" }
		},
		
		noshade: {
			hr: { type: "(noshade)", required: "no", deprecated: "yes" }
		},
		
		nowrap: {
			td: { type: "(nowrap)", required: "no", deprecated: "yes" }, 
			th: { type: "(nowrap)", required: "no", deprecated: "yes" }
		},
		
		object: {
			applet: { type: "cdata", required: "no", deprecated: "yes" }
		},
		
		onblur: {
			a: { type: "%script;", required: "no", deprecated: "no" }, 
			area: { type: "%script;", required: "no", deprecated: "no" }, 
			button: { type: "%script;", required: "no", deprecated: "no" }, 
			input: { type: "%script;", required: "no", deprecated: "no" }, 
			label: { type: "%script;", required: "no", deprecated: "no" }, 
			select: { type: "%script;", required: "no", deprecated: "no" }, 
			textarea: { type: "%script;", required: "no", deprecated: "no" }
		},
		
		onchange: {
			input: { type: "%script;", required: "no", deprecated: "no" }, 
			select: { type: "%script;", required: "no", deprecated: "no" }, 
			textarea: { type: "%script;", required: "no", deprecated: "no" }
		},
		
		onclick: {
			all: { type: "%script;", required: "no", deprecated: "no" }
		},

		ondblclick: {
			all: { type: "%script;", required: "no", deprecated: "no" }, 
		},
		
		onfocus: {
			a: { type: "%script;", required: "no", deprecated: "no" }, 
			area: { type: "%script;", required: "no", deprecated: "no" }, 
			button: { type: "%script;", required: "no", deprecated: "no" }, 
			input: { type: "%script;", required: "no", deprecated: "no" }, 
			label: { type: "%script;", required: "no", deprecated: "no" }, 
			select: { type: "%script;", required: "no", deprecated: "no" }, 
			textarea: { type: "%script;", required: "no", deprecated: "no" }
		},
		
		onkeydown: {
			all: { type: "%script;", required: "no", deprecated: "no" }, 
		},
		
		onkeypress: {
			all: { type: "%script;", required: "no", deprecated: "no" }, 
		},
		
		onkeyup: {
			all: { type: "%script;", required: "no", deprecated: "no" }, 
		},
		
		onload: {
			frameset: { type: "%script;", required: "no", deprecated: "no" },
			body: { type: "%script;", required: "no", deprecated: "no" }
		},
		
		onmousedown: {
			all: { type: "%script;", required: "no", deprecated: "no" }, 
		},
		
		onmousemove: {
			all: { type: "%script;", required: "no", deprecated: "no" }, 
		},
		
		onmouseout: {
			all: { type: "%script;", required: "no", deprecated: "no" }, 
		},
		
		onmouseover: {
			all: { type: "%script;", required: "no", deprecated: "no" }, 
		},
		
		onmouseup: {
			all: { type: "%script;", required: "no", deprecated: "no" }, 
		},
		
		onreset: {
			form: { type: "%script;", required: "no", deprecated: "no" }
		},
		
		onselect: {
			input: { type: "%script;", required: "no", deprecated: "no" }, 
			textarea: { type: "%script;", required: "no", deprecated: "no" }
		},
		
		onsubmit: {
			form: { type: "%script;", required: "no", deprecated: "no" }
		},
		
		onunload: {
			frameset: { type: "%script;", required: "no", deprecated: "no" },
			body: { type: "%script;", required: "no", deprecated: "no" }
		},
		
		profile: {
			head: { type: "%uri;", required: "no", deprecated: "no" }
		},
		
		prompt: {
			isindex: { type: "%text;", required: "no", deprecated: "yes" }
		},
		
		readonly: {
			textarea: { type: "(readonly)", required: "no", deprecated: "no" },
			input: { type: "(readonly)", required: "no", deprecated: "no" }
		},
		
		rel: {
			a: { type: "%linktypes;", required: "no", deprecated: "no" }, 
			link: { type: "%linktypes;", required: "no", deprecated: "no" }
		},
		
		rev: {
			a: { type: "%linktypes;", required: "no", deprecated: "no" }, 
			link: { type: "%linktypes;", required: "no", deprecated: "no" }
		},
		
		rows: {
			frameset: { type: "%multilengths;", required: "no", deprecated: "no" },
			textarea: { type: "number", required: "yes", deprecated: "no" }
		},
		
		rowspan: {
			td: { type: "number", required: "no", deprecated: "no" }, 
			th: { type: "number", required: "no", deprecated: "no" }
		},
		
		rules: {
			table: { type: "%trules;", required: "no", deprecated: "no" }
		},
		
		scheme: {
			meta: { type: "cdata", required: "no", deprecated: "no" }
		},
		
		scope: {
			td: { type: "%scope;", required: "no", deprecated: "no" }, 
			th: { type: "%scope;", required: "no", deprecated: "no" }
		},
		
		scrolling: {
			frame: { type: "(yes | no | auto)", required: "no", deprecated: "no" }, 
			iframe: { type: "(yes | no | auto)", required: "no", deprecated: "no" }
		},
		
		selected: {
			option: { type: "(selected)", required: "no", deprecated: "no" }
		},
		
		shape: {
			area: { type: "%shape;", required: "no", deprecated: "no" },
			a: { type: "%shape;", required: "no", deprecated: "no" }
		},
		
		size: {
			hr: { type: "%pixels;", required: "no", deprecated: "yes" },
			font: { type: "cdata", required: "no", deprecated: "yes" },
			input: { type: "cdata", required: "no", deprecated: "no" },
			basefont: { type: "cdata", required: "yes", deprecated: "yes" },
			select: { type: "number", required: "no", deprecated: "no" }
		},
		
		span: {
			col: { type: "number", required: "no", deprecated: "no" },
			colgroup: { type: "number", required: "no", deprecated: "no" }
		},
		
		src: {
			script: { type: "%uri;", required: "no", deprecated: "no" },
			input: { type: "%uri;", required: "no", deprecated: "no" },
			frame: { type: "%uri;", required: "no", deprecated: "no" }, 
			iframe: { type: "%uri;", required: "no", deprecated: "no" },
			img: { type: "%uri;", required: "yes", deprecated: "no" }
		},
		
		standby: {
			object: { type: "%text;", required: "no", deprecated: "no" }
		},
		
		start: {
			ol: { type: "number", required: "no", deprecated: "yes" }
		},
		
		style: {
			all: { type: "%stylesheet;", required: "no", deprecated: "no" }, 
		},
		
		summary: {
			table: { type: "%text;", required: "no", deprecated: "no" }
		},
		
		tabindex: {
			a: { type: "number", required: "no", deprecated: "no" }, 
			area: { type: "number", required: "no", deprecated: "no" }, 
			button: { type: "number", required: "no", deprecated: "no" }, 
			input: { type: "number", required: "no", deprecated: "no" }, 
			object: { type: "number", required: "no", deprecated: "no" }, 
			select: { type: "number", required: "no", deprecated: "no" }, 
			textarea: { type: "number", required: "no", deprecated: "no" }
		},
		
		target: {
			a: { type: "%frametarget;", required: "no", deprecated: "no" }, 
			area: { type: "%frametarget;", required: "no", deprecated: "no" }, 
			base: { type: "%frametarget;", required: "no", deprecated: "no" }, 
			form: { type: "%frametarget;", required: "no", deprecated: "no" }, 
			link: { type: "%frametarget;", required: "no", deprecated: "no" }
		},
		
		text: {
			body: { type: "%color;", required: "no", deprecated: "yes" }
		},
		
		title: {
			all: { type: "%text;", required: "no", deprecated: "no" }, 
		},
		
		type: {
			a: { type: "%contenttype;", required: "no", deprecated: "no" },
			link: { type: "%contenttype;", required: "no", deprecated: "no" },
			object: { type: "%contenttype;", required: "no", deprecated: "no" },
			param: { type: "%contenttype;", required: "no", deprecated: "no" },
			script: { type: "%contenttype;", required: "yes", deprecated: "no" },
			style: { type: "%contenttype;", required: "yes", deprecated: "no" },
			input: { type: "%inputtype;", required: "no", deprecated: "no" },
			li: { type: "%listyle;", required: "no", deprecated: "yes" },
			ol: { type: "%olstyle;", required: "no", deprecated: "yes" },
			ul: { type: "%ulstyle;", required: "no", deprecated: "yes" },
			button: { type: "(button | submit | reset)", required: "no", deprecated: "no" }
		},
		
		usemap: {
			img: { type: "%uri;", required: "no", deprecated: "no" }, 
			input: { type: "%uri;", required: "no", deprecated: "no" }, 
			object: { type: "%uri;", required: "no", deprecated: "no" }
		},
		
		valign: {
			col: { type: "(top | middle | bottom | baseline)", required: "no", deprecated: "no" }, 
			colgroup: { type: "(top | middle | bottom | baseline)", required: "no", deprecated: "no" }, 
			tbody: { type: "(top | middle | bottom | baseline)", required: "no", deprecated: "no" }, 
			td: { type: "(top | middle | bottom | baseline)", required: "no", deprecated: "no" }, 
			tfoot: { type: "(top | middle | bottom | baseline)", required: "no", deprecated: "no" }, 
			th: { type: "(top | middle | bottom | baseline)", required: "no", deprecated: "no" }, 
			thead: { type: "(top | middle | bottom | baseline)", required: "no", deprecated: "no" }, 
			tr: { type: "(top | middle | bottom | baseline)", required: "no", deprecated: "no" }
		},
		
		value: {
			input: { type: "cdata", required: "no", deprecated: "no" },
			option: { type: "cdata", required: "no", deprecated: "no" },
			param: { type: "cdata", required: "no", deprecated: "no" },
			button: { type: "cdata", required: "no", deprecated: "no" },
			li: { type: "number", required: "no", deprecated: "yes" }
		},
		
		valuetype: {
			param: { type: "(data | ref | object)", required: "no", deprecated: "no" }
		},
		
		version: {
			html: { type: "cdata", required: "no", deprecated: "yes" }
		},
		
		vlink: {
			body: { type: "%color;", required: "no", deprecated: "yes" }
		},
		
		vspace: {
			applet: { type: "%pixels;", required: "no", deprecated: "yes" }, 
			img: { type: "%pixels;", required: "no", deprecated: "yes" }, 
			object: { type: "%pixels;", required: "no", deprecated: "yes" }
		},
		
		width: {
			hr: { type: "%length;", required: "no", deprecated: "yes" },
			iframe: { type: "%length;", required: "no", deprecated: "no" },
			img: { type: "%length;", required: "no", deprecated: "no" }, 
			object: { type: "%length;", required: "no", deprecated: "no" },
			table: { type: "%length;", required: "no", deprecated: "no" },
			td: { type: "%length;", required: "no", deprecated: "yes" }, 
			th: { type: "%length;", required: "no", deprecated: "yes" },
			applet: { type: "%length;", required: "yes", deprecated: "yes" },
			col: { type: "%multilength;", required: "no", deprecated: "no" },
			colgroup: { type: "%multilength;", required: "no", deprecated: "no" },
			pre: { type: "number", required: "no", deprecated: "yes" },
			canvas: { type: "%length;", required: "no", deprecated: "no" }
		}	
	
	},

	// DICTIONARY
	// Note that the actual property names have hyphens (-) not underscores (_)
	// but hyphens aren't allowed in JavaScript property names. Lookups will need
	// to replace underscores with hyphens.
	cssPropertyNames: {
		"azimuth": { formats: ["<angle>"], values:  ["left-side", "far-left", "left", "center-left", "center", "center-right", "right", "far-right", "right-side", "behind", "leftwards", "rightwards", "inherit" ], initial: "center" },
		"background-attachment": { formats: [], values:  ["scroll", "fixed", "inherit" ], initial: "scroll" },
		"background-color": { formats: ["<color>"], values:  ["transparent", "inherit" ], initial: "transparent" },
		"background-image": { formats: ["<uri>"], values:  ["none", "inherit" ], initial: "none" },
		"background-position": { formats: ["<percentage>", "<length>"], values:  ["left", "center", "right", "top", "bottom", "inherit" ], initial: "0% 0%" },
		"background-repeat": { formats: [], values:  ["repeat", "repeat-x", "repeat-y", "no-repeat", "inherit" ], initial: "repeat" },
		"background": { formats: ["<background-color>", "<background-image>", "<background-repeat>", "<background-attachment>", "<background-position>"], values:  ["inherit" ], initial: "" },
		"border-collapse": { formats: [], values:  ["collapse", "separate", "inherit" ], initial: "separate" },
		"border-color": { formats: ["<color>"], values:  ["transparent", "inherit" ], initial: "<composite>" },
		"border-spacing": { formats: ["<length>"], values:  ["inherit" ], initial: "0" },
		"border-style": { formats: ["<border-style>"], values:  ["inherit" ], initial: "<composite>" },
		"border-top": { formats: ["<border-width>", "<border-style>", "<border-top-color>"], values: ["inherit"], initial: "<composite>" },
		"border-right": { formats: ["<border-width>", "<border-style>", "<border-top-color>"], values:  ["inherit"], initial: "<composite>" },
		"border-bottom": { formats: ["<border-width>", "<border-style>", "<border-top-color>"], values:  ["inherit"], initial: "<composite>" },
		"border-left": { formats: ["<border-width>", "<border-style>", "<border-top-color>"], values:  ["inherit"], initial: "<composite>" },
		"border-top-color": { formats: ["<color>"], values:  ["transparent", "inherit" ], initial: "" },
		"border-right-color": { formats: ["<color>"], values: ["transparent", "inherit" ], initial: "" },
		"border-bottom-color": { formats: ["<color>"], values: ["transparent", "inherit" ], initial: "" },
		"border-left-color": { formats: ["<color>"], values:  ["transparent", "inherit" ], initial: "" },		
		"border-top-style": { formats: ["<border-style>"], values:  ["inherit" ], initial: "none" },
		"border-right-style": { formats: ["<border-style>"], values:  ["inherit" ], initial: "none" },
		"border-bottom-style": { formats: ["<border-style>"], values:  ["inherit" ], initial: "none" },
		"border-left-style": { formats: ["<border-style>"], values:  ["inherit" ], initial: "none" },
		"border-top-width": { formats: ["<border-width-value>"], values: ["inherit" ], initial: "medium" },
		"border-right-width": { formats: ["<border-width-value>"], values: ["inherit" ], initial: "medium" },
		"border-bottom-width": { formats: ["<border-width-value>"], values: ["inherit" ], initial: "medium" },
		"border-left-width": { formats: ["<border-width-value>"], values:  ["inherit" ], initial: "medium" },
		"border-width": { formats: ["<border-width-value>"], values:  ["inherit" ], initial: "" },
		"border": { formats: ["<border-width>", "<border-top-color>"], values: ["inherit" ], initial: "" },
		"bottom": { formats: ["<length>", "<percentage>"], values:  ["auto", "inherit" ], initial: "auto" },
		"caption-side": { formats: [], values:  ["top", "bottom", "inherit" ], initial: "top" },
		"clear": { formats: [], values:  ["none", "left", "right", "both", "inherit" ], initial: "none" },
		"clip": { formats: ["<shape>"], values:  ["auto", "inherit" ], initial: "auto" },
		"color": { formats: ["<color>"], values:  ["inherit" ], initial: "depends on user agent" },
		"content": { formats: ["<string>", "<uri>", "<counter>", "attr(<identifier>)"], values:  ["normal", "none", "open-quote", "close-quote", "no-open-quote", "no-close-quote +", "inherit" ], initial: "normal" },
		"counter-increment": { formats: ["<identifier> <integer>? +"], values:  ["none", "inherit" ], initial: "none" },
		"counter-reset": { formats: ["<identifier> <integer>? +"], values:  ["none", "inherit" ], initial: "none" },
		"cue-after": { formats: ["<uri>"], values:  ["none", "inherit" ], initial: "none" },
		"cue-before": { formats: ["<uri>"], values:  ["none", "inherit" ], initial: "none" },
		"cue": { formats: [], values:  ["cue-before", "cue-after", "inherit" ], initial: "<composite>" },
		"cursor": { formats: ["<uri>,*"], values:  ["auto", "crosshair", "default", "pointer", "move", "e-resize", "ne-resize", "nw-resize", "n-resize", "se-resize", "sw-resize", "s-resize", "w-resize", "text", "wait", "help", "progress", "inherit" ], initial: "auto" },
		"direction": { formats: [], values:  ["ltr", "rtl", "inherit" ], initial: "ltr" },
		"display": { formats: [], values:  ["inline", "block", "list-item", "run-in", "inline-block", "table", "inline-table", "table-row-group", "table-header-group", "table-footer-group", "table-row", "table-column-group", "table-column", "table-cell", "table-caption", "none", "inherit" ], initial: "inline" },
		"elevation": { formats: ["<angle>"], values:  ["below", "level", "above", "higher", "lower", "inherit" ], initial: "level" },
		"empty-cells": { formats: [], values:  ["show", "hide", "inherit" ], initial: "show" },
		"float": { formats: [], values:  ["left", "right", "none", "inherit" ], initial: "none" },
		"font-family": { formats: ["<family-name>", "<generic-family>", "<family-name>", "<generic-family>*"], values:  ["inherit" ], initial: "" },
		"font-size": { formats: ["<absolute-size>", "<relative-size>", "<length>", "<percentage>"], values:  ["inherit" ], initial: "medium" },
		"font-style": { formats: [], values:  ["normal", "italic", "oblique", "inherit" ], initial: "normal" },
		"font-variant": { formats: [], values:  ["normal", "small-caps", "inherit" ], initial: "normal" },
		"font-weight": { formats: [], values:  ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900", "inherit" ], initial: "normal" },
		"font": { formats: ["<font-style>", "<font-variant>", "<font-weight> ?", "<font-size/line-height> ?", "font-family"], values:  ["caption", "icon", "menu", "message-box", "small-caption", "status-bar", "inherit" ], initial: "" },
		"height": { formats: ["<length>", "<percentage>"], values:  ["auto", "inherit" ], initial: "auto" },
		"left": { formats: ["<length>", "<percentage>"], values:  ["auto", "inherit" ], initial: "auto" },
		"letter-spacing": { formats: ["<length>"], values:  ["normal", "inherit" ], initial: "normal" },
		"line-height": { formats: ["<number>", "<length>", "<percentage>"], values:  ["normal", "inherit" ], initial: "normal" },
		"list-style-image": { formats: ["<uri>"], values:  ["none", "inherit" ], initial: "none" },
		"list-style-position": { formats: [], values:  ["inside", "outside", "inherit" ], initial: "outside" },
		"list-style-type": { formats: [], values:  ["disc", "circle", "square", "decimal", "decimal-leading-zero", "lower-roman", "upper-roman", "lower-greek", "lower-latin", "upper-latin", "armenian", "georgian", "lower-alpha", "upper-alpha", "none", "inherit" ], initial: "disc" },
		"list-style": { formats: ["<list-style-type>", "<list-style-position>", "<list-style-image>"], values:  ["inherit" ], initial: "<composite>" },
		"margin-right": { formats: ["<margin-width>"], values:  ["inherit" ], initial: "0" },
		"margin-left": { formats: ["<margin-width>"], values:  ["inherit" ], initial: "0" },
		"margin-top": { formats: ["<margin-width>"], values:  ["inherit" ], initial: "0" },
		"margin-bottom": { formats: ["<margin-width>"], values:  ["inherit" ], initial: "0" },
		"margin": { formats: ["<margin-width>"], values: ["inherit" ], initial: "<composite>" },
		"max-height": { formats: ["<length>", "<percentage>"], values:  ["none", "inherit" ], initial: "none" },
		"max-width": { formats: ["<length>", "<percentage>"], values:  ["none", "inherit" ], initial: "none" },
		"min-height": { formats: ["<length>", "<percentage>"], values:  ["inherit" ], initial: "0" },
		"min-width": { formats: ["<length>", "<percentage>"], values:  ["inherit" ], initial: "0" },
		"orphans": { formats: ["<integer>"], values:  ["inherit" ], initial: "2" },
		"outline-color": { formats: ["<color>"], values:  ["invert", "inherit" ], initial: "invert" },
		"outline-style": { formats: ["<border-style>"], values:  ["inherit" ], initial: "none" },
		"outline-width": { formats: ["<border-width>"], values:  ["inherit" ], initial: "medium" },
		"outline": { formats: [], values:  ["outline-color", "outline-style", "outline-width", "inherit" ], initial: "<composite>" },
		"overflow": { formats: [], values:  ["visible", "hidden", "scroll", "auto", "inherit" ], initial: "visible" },
		"padding-top": { formats: ["<padding-width>"], values: ["inherit" ], initial: "0" },
		"padding-right": { formats: ["<padding-width>"], values: ["inherit" ], initial: "0" },
		"padding-bottom": { formats: ["<padding-width>"], values: ["inherit" ], initial: "0" },
		"padding-left": { formats: ["<padding-width>"], values:  ["inherit" ], initial: "0" },
		"padding": { formats: ["<padding-width>"], values:  ["inherit" ], initial: "<composite>" },
		"page-break-after": { formats: [], values:  ["auto", "always", "avoid", "left", "right", "inherit" ], initial: "auto" },
		"page-break-before": { formats: [], values:  ["auto", "always", "avoid", "left", "right", "inherit" ], initial: "auto" },
		"page-break-inside": { formats: [], values:  ["avoid", "auto", "inherit" ], initial: "auto" },
		"pause-after": { formats: ["<time>", "<percentage>"], values: ["inherit" ], initial: "0" },
		"pause-before": { formats: ["<time>", "<percentage>"], values: ["inherit" ], initial: "0" },
		"pause": { formats: ["<time>", "<percentage>"], values:  ["inherit" ], initial: "<composite>" },
		"pitch-range": { formats: ["<number>"], values:  ["inherit" ], initial: "50" },
		"pitch": { formats: ["<frequency>"], values:  ["x-low", "low", "medium", "high", "x-high", "inherit" ], initial: "medium" },
		"play-during": { formats: ["<uri>"], values:  ["mix", "repeat", "auto", "none", "inherit" ], initial: "auto" },
		"position": { formats: [], values:  ["static", "relative", "absolute", "fixed", "inherit" ], initial: "static" },
		"quotes": { formats: ["<string>"], values:  ["none", "inherit" ], initial: "depends on user agent" },
		"richness": { formats: ["<number>"], values:  ["inherit" ], initial: "50" },
		"right": { formats: ["<length>", "<percentage>"], values:  ["auto", "inherit" ], initial: "auto" },
		"speak-header": { formats: [], values:  ["once", "always", "inherit" ], initial: "once" },
		"speak-numeral": { formats: [], values:  ["digits", "continuous", "inherit" ], initial: "continuous" },
		"speak-punctuation": { formats: [], values:  ["code", "none", "inherit" ], initial: "none" },
		"speak": { formats: [], values:  ["normal", "none", "spell-out", "inherit" ], initial: "normal" },
		"speech-rate": { formats: ["<number>"], values:  ["x-slow", "slow", "medium", "fast", "x-fast", "faster", "slower", "inherit" ], initial: "medium" },
		"stress": { formats: ["<number>"], values:  ["inherit" ], initial: "50" },
		"table-layout": { formats: [], values:  ["auto", "fixed", "inherit" ], initial: "auto" },
		"text-align": { formats: [], values:  ["left", "right", "center", "justify", "inherit" ], initial: "" },
		"text-decoration": { formats: [], values:  ["none", "underline", "overline", "line-through", "blink", "inherit" ], initial: "none" },
		"text-indent": { formats: ["<length>", "<percentage>"], values:  ["inherit" ], initial: "0" },
		"text-transform": { formats: [], values:  ["capitalize", "uppercase", "lowercase", "none", "inherit" ], initial: "none" },
		"top": { formats: ["<length>", "<percentage>"], values:  ["auto", "inherit" ], initial: "auto" },
		"unicode-bidi": { formats: [], values:  ["normal", "embed", "bidi-override", "inherit" ], initial: "normal" },
		"vertical-align": { formats: [], values:  ["baseline", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom", "<percentage>", "<length>", "inherit" ], initial: "baseline" },
		"visibility": { formats: [], values:  ["visible", "hidden", "collapse", "inherit" ], initial: "visible" },
		"voice-family": { formats: [], values:  ["inherit"], initial: "depends on user agent" },
		"volume": { formats: ["<number>", "<percentage>"], values:  ["silent", "x-soft", "soft", "medium", "loud", "x-loud", "inherit" ], initial: "medium" },
		"white-space": { formats: [], values:  ["normal", "pre", "nowrap", "pre-wrap", "pre-line", "inherit" ], initial: "normal" },
		"widows": { formats: ["<integer>"], values:  ["inherit" ], initial: "2" },
		"width": { formats: ["<length>", "<percentage>"], values:  ["auto", "inherit" ], initial: "auto" },
		"word-spacing": { formats: ["<length>"], values:  ["normal", "inherit" ], initial: "normal" },
		"z-index": { formats: ["<integer>"], values:  ["auto", "inherit" ], initial: "auto" }
	},

	// DICTIONARY
	cssColors: {
		"aliceblue"             : true,
		"antiquewhite"          : true,
		"aqua"                  : true,
		"aquamarine"            : true,
		"azure"                 : true,
		"beige"                 : true,
		"bisque"                : true,
		"black"                 : true,
		"blanchedalmond"        : true,
		"blue"                  : true,
		"blueviolet"            : true,
		"brown"                 : true,
		"burlywood"             : true,
		"cadetblue"             : true,
		"chartreuse"            : true,
		"chocolate"             : true,
		"coral"                 : true,
		"cornflowerblue"        : true,
		"cornsilk"              : true,
		"crimson"               : true,
		"cyan"                  : true,
		"darkblue"              : true,
		"darkcyan"              : true,
		"darkgoldenrod"         : true,
		"darkgray"              : true,
		"darkgreen"             : true,
		"darkkhaki"             : true,
		"darkmagenta"           : true,
		"darkolivegreen"        : true,
		"darkorange"            : true,
		"darkorchid"            : true,
		"darkred"               : true,
		"darksalmon"            : true,
		"darkseagreen"          : true,
		"darkslateblue"         : true,
		"darkslategray"         : true,
		"darkturquoise"         : true,
		"darkviolet"            : true,
		"deeppink"              : true,
		"deepskyblue"           : true,
		"dimgray"               : true,
		"dodgerblue"            : true,
		"firebrick"             : true,
		"floralwhite"           : true,
		"forestgreen"           : true,
		"fuchsia"               : true,
		"gainsboro"             : true,
		"ghostwhite"            : true,
		"gold"                  : true,
		"goldenrod"             : true,
		"gray"                  : true,
		"green"                 : true,
		"greenyellow"           : true,
		"honeydew"              : true,
		"hotpink"               : true,
		"indianred"             : true,
		"indigo"                : true,
		"ivory"                 : true,
		"khaki"                 : true,
		"lavender"              : true,
		"lavenderblush"         : true,
		"lawngreen"             : true,
		"lemonchiffon"          : true,
		"lightblue"             : true,
		"lightcoral"            : true,
		"lightcyan"             : true,
		"lightgoldenrodyellow"  : true,
		"lightgreen"            : true,
		"lightpink"             : true,
		"lightsalmon"           : true,
		"lightseagreen"         : true,
		"lightskyblue"          : true,
		"lightslategray"        : true,
		"lightsteelblue"        : true,
		"lightyellow"           : true,
		"lime"                  : true,
		"limegreen"             : true,
		"linen"                 : true,
		"magenta"               : true,
		"maroon"                : true,
		"mediumaquamarine"      : true,
		"mediumblue"            : true,
		"mediumorchid"          : true,
		"mediumpurple"          : true,
		"mediumseagreen"        : true,
		"mediumslateblue"       : true,
		"mediumspringgreen"     : true,
		"mediumturquoise"       : true,
		"mediumvioletred"       : true,
		"midnightblue"          : true,
		"mintcream"             : true,
		"mistyrose"             : true,
		"moccasin"              : true,
		"navajowhite"           : true,
		"navy"                  : true,
		"oldlace"               : true,
		"olive"                 : true,
		"olivedrab"             : true,
		"orange"                : true,
		"orangered"             : true,
		"orchid"                : true,
		"palegoldenrod"         : true,
		"palegreen"             : true,
		"paleturquoise"         : true,
		"palevioletred"         : true,
		"papayawhip"            : true,
		"peachpuff"             : true,
		"peru"                  : true,
		"pink"                  : true,
		"plum"                  : true,
		"powderblue"            : true,
		"purple"                : true,
		"red"                   : true,
		"rosybrown"             : true,
		"royalblue"             : true,
		"saddlebrown"           : true,
		"salmon"                : true,
		"sandybrown"            : true,
		"seagreen"              : true,
		"seashell"              : true,
		"sienna"                : true,
		"silver"                : true,
		"skyblue"               : true,
		"slateblue"             : true,
		"slategray"             : true,
		"snow"                  : true,
		"springgreen"           : true,
		"steelblue"             : true,
		"tan"                   : true,
		"teal"                  : true,
		"thistle"               : true,
		"tomato"                : true,
		"turquoise"             : true,
		"violet"                : true,
		"wheat"                 : true,
		"white"                 : true,
		"whitesmoke"            : true,
		"yellow"                : true,
		"yellowgreen"           : true
	},

	// DICTIONARY
    cssUnits: {
        '%': true,
        'cm': true,
        'em': true,
        'ex': true,
        'in': true,
        'mm': true,
        'pc': true,
        'pt': true,
        'px': true
    },
    
	// DICTIONARY
    htmlTags: {
	    a:        {},
	    abbr:     {},
	    acronym:  {},
	    address:  {},
	    applet:   {},
	    area:     {empty: true, parent: ' map '},
	    b:        {},
	    base:     {empty: true, parent: ' head '},
	    bdo:      {},
	    big:      {},
	    blockquote: {},
	    body:     {parent: ' html noframes '},
	    br:       {empty: true},
	    button:   {},
	    canvas:   {parent: ' body p div th td '},
	    caption:  {parent: ' table '},
	    center:   {},
	    cite:     {},
	    code:     {},
	    col:      {empty: true, parent: ' table colgroup '},
	    colgroup: {parent: ' table '},
	    dd:       {parent: ' dl '},
	    del:      {},
	    dfn:      {},
	    dir:      {},
	    div:      {},
	    dl:       {},
	    dt:       {parent: ' dl '},
	    em:       {},
	    embed:    {},
	    fieldset: {},
	    font:     {},
	    form:     {},
	    frame:    {empty: true, parent: ' frameset '},
	    frameset: {parent: ' html frameset '},
	    h1:       {},
	    h2:       {},
	    h3:       {},
	    h4:       {},
	    h5:       {},
	    h6:       {},
	    head:     {parent: ' html '},
	    html:     {parent: '*'},
	    hr:       {empty: true},
	    i:        {},
	    iframe:   {},
	    img:      {empty: true},
	    input:    {empty: true},
	    ins:      {},
	    kbd:      {},
	    label:    {},
	    legend:   {parent: ' fieldset '},
	    li:       {parent: ' dir menu ol ul '},
	    link:     {empty: true, parent: ' head '},
	    map:      {},
	    menu:     {},
	    meta:     {empty: true, parent: ' head noframes noscript '},
	    noframes: {parent: ' html body '},
	    noscript: {parent: ' body head noframes '},
	    object:   {},
	    ol:       {},
	    optgroup: {parent: ' select '},
	    option:   {parent: ' optgroup select '},
	    p:        {},
	    param:    {empty: true, parent: ' applet object '},
	    pre:      {},
	    q:        {},
	    samp:     {},
	    script:   {empty: true, parent: ' body div frame head iframe p pre span '},
	    select:   {},
	    small:    {},
	    span:     {},
	    strong:   {},
	    style:    {parent: ' head ', empty: true},
	    sub:      {},
	    sup:      {},
	    table:    {},
	    tbody:    {parent: ' table '},
	    td:       {parent: ' tr '},
	    textarea: {},
	    tfoot:    {parent: ' table '},
	    th:       {parent: ' tr '},
	    thead:    {parent: ' table '},
	    title:    {parent: ' head '},
	    tr:       {parent: ' table tbody thead tfoot '},
	    tt:       {},
	    u:        {},
	    ul:       {},
	    'var':    {}
	},
	
	// DICTIONARY
	// a "" type means global, everything else is an object name
	// the kind is p for property, f for function, o for object, v for variable, a for array
	javascriptGlobals: {
	
		// Global variables
		document: "v",
		window: "v",
		console: "v",

		// Global objects
		Infinity: "o",
		NaN: "o",
		undefined: "o",
		Array: "o",
		Boolean: "o",
		Date: "o",
		Error: "o",
		EvalError: "o",
		Function: "o",
		Math: "o",
		Number: "o",
		Object: "o",
		RangeError: "o",
		ReferenceError: "o",
		RegExp: "o",
		String: "o",
		SyntaxError: "o",
		TypeError: "o",
		URIError: "o"
		
	},

	// DICTIONARY
	javascriptProperties: {

		// Array properties
		constructor: ["Array"],
		length: ["Array"],
		prototype: ["Array"],

		// Math
		E: ["Math"],
		LN2: ["Math"],
		LN10: ["Math"],
		LOG2E: ["Math"],
		LOG10E: ["Math"],
		PI: ["Math"],
		SQRT1_2: ["Math"],
		SQRT2: ["Math"],
		
		// Number		
		MAX_VALUE: ["Number"],
		MIN_VALUE: ["Number"],
		NEGATIVE_INFINITY: ["Number"],
		POSITIVE_INFINITY: ["Number"],

		// RegExp
		global: ["RegExp"],
		ignoreCase: ["RegExp"],
		lastIndex: ["RegExp"],
		multiline: ["RegExp"],
		source: ["RegExp"],

		// Window
		closed: ["window"],
		defaultStatus: ["window"],
		document: ["window"],
		frames: ["window"],
		history: ["window"],
		innerHeight: ["window"],
		innerWidth: ["window"],
		length: ["window"],
		location: ["window"],
		name: ["window"],
		opener: ["window"],
		outerHeight: ["window"],
		outerWidth: ["window"],
		pageXOffset: ["window"],
		pageYOffset: ["window"],
		parent: ["window"],
		screenLeft: ["window"],
		screenTop: ["window"],
		screen: ["window"],
		screenX: ["window"],
		screenY: ["window"],
		self: ["window"],
		status: ["window"],
		top: ["window"],
		onblur: ["window"],
		onchange: ["window"],
		onclick: ["window"],
		ondblclick: ["window"],
		onfocus: ["window"],
		onkeydown: ["window"],
		onkeypress: ["window"],
		onkeyup: ["window"],
		onload: ["window"],
		onmousedown: ["window"],
		onmousemove: ["window"],
		onmouseout: ["window"],
		onmouseover: ["window"],
		onmouseup: ["window"],
		onreset: ["window"],
		onselect: ["window"],
		onsubmit: ["window"],
		onunload: ["window"],

		// Screen
		availHeight: ["screen"],
		availWidth: ["screen"],
		colorDepth: ["screen"],
		height: ["screen"],
		pixelDepth: ["screen"],
		width: ["screen"],

		// Location
		hash: ["location"],
		host: ["location"],
		hostname: ["location"],
		href: ["location"],
		pathname: ["location"],
		port: ["location"],
		protocol: ["location"],
		search: ["location"],

		// Document		
		cookie: ["document"],
		documentMode: ["document"],
		domain: ["document"],
		lastModified: ["document"],
		readyState: ["document"],
		body: ["document"],
		referrer: ["document"],
		title: ["document"],
		URL: ["document"],
		doctype: ["document"],
		implementation: ["document"],
		documentElement: ["document"],
		inputEncoding: ["document"],
		xmlEncoding: ["document"],
		xmlStandalone: ["document"],
		xmlVersion: ["document"],
		strictErrorChecking: ["document"],
		documentURI: ["document"],
		domConfig: ["document"],
		anchors: ["document"],
		forms: ["document"],
		images: ["document"],
		links: ["document"],

		// Anchor
		accessKey: [""],
		charset: [""],
		coords: [""],
		href: [""],
		hreflang: [""],
		id: [""],
		innerHTML: [""],
		name: [""],
		rel: [""],
		rev: [""],
		shape: [""],
		tabIndex: [""],
		target: [""],
		type: [""],
		className: [""],

		// Style properties
		background: ["style"],
		backgroundAttachment: ["style"],
		backgroundColor: ["style"],
		backgroundImage: ["style"],
		backgroundPosition: ["style"],
		backgroundPositionX: ["style"],
		backgroundPositionY: ["style"],
		backgroundRepeat: ["style"],
		border: ["style"],
		borderBottom: ["style"],
		borderBottomColor: ["style"],
		borderBottomStyle: ["style"],
		borderBottomWidth: ["style"],
		borderColor: ["style"],
		borderLeft: ["style"],
		borderLeftColor: ["style"],
		borderLeftStyle: ["style"],
		borderLeftWidth: ["style"],
		borderRight: ["style"],
		borderRightColor: ["style"],
		borderRightStyle: ["style"],
		borderRightWidth: ["style"],
		borderStyle: ["style"],
		borderTop: ["style"],
		borderTopColor: ["style"],
		borderTopStyle: ["style"],
		borderTopWidth: ["style"],
		borderWidth: ["style"],
		margin: ["style"],
		marginBottom: ["style"],
		marginLeft: ["style"],
		marginRight: ["style"],
		marginTop: ["style"],
		outline: ["style"],
		outlineColor: ["style"],
		outlineStyle: ["style"],
		outlineWidth: ["style"],
		padding: ["style"],
		paddingBottom: ["style"],
		paddingLeft: ["style"],
		paddingRight: ["style"],
		paddingTop: ["style"],
		clear: ["style"],
		clip: ["style"],
		content: ["style"],
		counterIncrement: ["style"],
		counterReset: ["style"],
		cssFloat: ["style"],
		cursor: ["style"],
		direction: ["style"],
		display: ["style"],
		height: ["style"],
		markerOffset: ["style"],
		marks: ["style"],
		maxHeight: ["style"],
		maxWidth: ["style"],
		minHeight: ["style"],
		minWidth: ["style"],
		overflow: ["style"],
		verticalAlign: ["style"],
		visibility: ["style"],
		width: ["style"],
		listStyle: ["style"],
		listStyleImage: ["style"],
		listStylePosition: ["style"],
		listStyleType: ["style"],
		bottom: ["style"],
		left: ["style"],
		position: ["style"],
		right: ["style"],
		top: ["style"],
		zIndex: ["style"],
		orphans: ["style"],
		page: ["style"],
		pageBreakAfter: ["style"],
		pageBreakBefore: ["style"],
		pageBreakInside: ["style"],
		size: ["style"],
		widows: ["style"],
		borderCollapse: ["style"],
		borderSpacing: ["style"],
		captionSide: ["style"],
		emptyCells: ["style"],
		tableLayout: ["style"],
		color: ["style"],
		font: ["style"],
		fontFamily: ["style"],
		fontSize: ["style"],
		fontSizeAdjust: ["style"],
		fontStretch: ["style"],
		fontStyle: ["style"],
		fontVariant: ["style"],
		fontWeight: ["style"],
		letterSpacing: ["style"],
		lineHeight: ["style"],
		quotes: ["style"],
		textAlign: ["style"],
		textDecoration: ["style"],
		textIndent: ["style"],
		textShadow: ["style"],
		textTransform: ["style"],
		unicodeBidi: ["style"],
		whiteSpace: ["style"],
		wordSpacing: ["style"],

		// Node
		nodeName: [""],
		nodeValue: [""],
		nodeType: [""],
		parentNode: [""],
		childNodes: [""],
		firstChild: [""],
		lastChild: [""],
		previousSibling: [""],
		nextSibling: [""],
		attributes: [""],
		ownerDocument: [""],
		namespaceURI: [""],
		prefix: [""],
		localName: [""],
		baseURI: [""],
		textContent: [""]
	},
	
	// DICTIONARY
	javascriptFunctions: {
	
		// Global functions
		decodeURI: [""],
		decodeURIComponent: [""],
		encodeURI: [""],
		encodeURIComponent: [""],
		eval: [""],
		isFinite: [""],
		isNaN: [""],
		parseFloat: [""],
		parseInt: [""],
		call: [""],

		// Array methods and properties
		concat: [""],
		join: [""],
		pop: [""],
		push: [""],
		reverse: [""],
		shift: [""],
		slice: [""],
		sort: [""],
		splice: [""],
		toString: [""],
		unshift: [""],
		valueOf: [""],
		
		// Date methods
		getDate: ["Date"],
		getDay: ["Date"],
		getFullYear: ["Date"],
		getHours: ["Date"],
		getMilliseconds: ["Date"],
		getMinutes: ["Date"],
		getMonth: ["Date"],
		getSeconds: ["Date"],
		getTime: ["Date"],
		getTimezoneOffset: ["Date"],
		getUTCDate: ["Date"],
		getUTCDay: ["Date"],
		getUTCFullYear: ["Date"],
		getUTCHours: ["Date"],
		getUTCMilliseconds: ["Date"],
		getUTCMinutes: ["Date"],
		getUTCMonth: ["Date"],
		getUTCSeconds: ["Date"],
		getYear: ["Date"],
		parse: ["Date"],
		setDate: ["Date"],
		setFullYear: ["Date"],
		setHours: ["Date"],
		setMilliseconds: ["Date"],
		setMinutes: ["Date"],
		setMonth: ["Date"],
		setSeconds: ["Date"],
		setTime: ["Date"],
		setUTCDate: ["Date"],
		setUTCFullYear: ["Date"],
		setUTCHours: ["Date"],
		setUTCMilliseconds: ["Date"],
		setUTCMinutes: ["Date"],
		setUTCMonth: ["Date"],
		setUTCSeconds: ["Date"],
		setYear: ["Date"],
		toDateString: ["Date"],
		toGMTString: ["Date"],
		toLocaleDateString: ["Date"],
		toLocaleTimeString: ["Date"],
		toLocaleString: ["Date"],
		toTimeString: ["Date"],
		toUTCString: ["Date"],
		UTC: ["Date"],
		
		// Math		
		abs: ["Math"],
		acos: ["Math"],
		asin: ["Math"],
		atan: ["Math"],
		atan2: ["Math"],
		ceil: ["Math"],
		cos: ["Math"],
		exp: ["Math"],
		floor: ["Math"],
		log: ["Math","console"],
		max: ["Math"],
		min: ["Math"],
		pow: ["Math"],
		random: ["Math"],
		round: ["Math"],
		sin: ["Math"],
		sqrt: ["Math"],
		tan: ["Math"],
		
		// Number		
		toExponential: [""],
		toFixed: [""],
		toPrecision: [""],
		
		// String		
		charAt: ["String"],
		charCodeAt: ["String"],
		concat: ["String"],
		fromCharCode: ["String"],
		indexOf: ["String"],
		lastIndexOf: ["String"],
		match: ["String"],
		replace: ["String"],
		search: ["String"],
		slice: ["String"],
		split: ["String"],
		substr: ["String"],
		substring: ["String"],
		toLowerCase: ["String"],
		toUpperCase: ["String"],
		
		anchor: ["String"],
		big: ["String"],
		blink: ["String"],
		bold: ["String"],
		fixed: ["String"],
		fontcolor: ["String"],
		fontsize: ["String"],
		italics: ["String"],
		link: ["String"],
		small: ["String"],
		strike: ["String"],
		sub: ["String"],
		sup: ["String"],
		
		// Regex
		compile: ["RegExp"],
		exec: ["RegExp"],
		test: ["RegExp"],
		
		// Window		
		alert: ["window"],
		blur: ["window"],
		clearInterval: ["window"],
		clearTimeout: ["window"],
		close: ["window"],
		confirm: ["window"],
		createPopup: ["window"],
		focus: ["window"],
		moveBy: ["window"],
		moveTo: ["window"],
		open: ["window"],
		print: ["window"],
		prompt: ["window"],
		resizeBy: ["window"],
		resizeTo: ["window"],
		scrollBy: ["window"],
		scrollTo: ["window"],
		setInterval: ["window"],
		setTimeout: ["window"],
		
		// History
		back: ["history"],
		forward: ["history"],
		go: ["history"],
		
		// Location		
		assign: ["location"],
		reload: ["location"],
		replace: ["location"],
		
		// Document		
		createElement: ["document"],
		createDocumentFragment: ["document"],
		createTextNode: ["document"],
		createComment: ["document"],
		createCDATASection: ["document"],
		createProcessingInstruction: ["document"],
		createAttribute: ["document"],
		createEntityReference: ["document"],
		getElementsByTagName: ["document"],
		getElementsByClassName: ["document"],
		getElementsByName: ["document"],
		importNode: ["document"],
		createElementNS: ["document"],
		createAttributeNS: ["document"],
		getElementsByTagNameNS: ["document"],
		getElementById: ["document"],
		adoptNode: ["document"],
		normalizeDocument: ["document"],
		renameNode: ["document"],		
		close: ["document"],
		getElementById: ["document"],
		getElementsByName: ["document"],
		getElementsByTagName: ["document"],
		open: ["document"],
		write: ["document"],
		writeln: ["document"],

		// Window
				closed: ["window"],
		defaultStatus: ["window"],
		document: ["window"],
		frames: ["window"],
		history: ["window"],
		innerHeight: ["window"],
		innerWidth: ["window"],
		length: ["window"],
		location: ["window"],
		name: ["window"],
		opener: ["window"],
		outerHeight: ["window"],
		outerWidth: ["window"],
		pageXOffset: ["window"],
		pageYOffset: ["window"],
		parent: ["window"],
		screenLeft: ["window"],
		screenTop: ["window"],
		screen: ["window"],
		screenX: ["window"],
		screenY: ["window"],
		self: ["window"],
		status: ["window"],
		top: ["window"],
		onblur: ["window"],
		onchange: ["window"],
		onclick: ["window"],
		ondblclick: ["window"],
		onfocus: ["window"],
		onkeydown: ["window"],
		onkeypress: ["window"],
		onkeyup: ["window"],
		onload: ["window"],
		onmousedown: ["window"],
		onmousemove: ["window"],
		onmouseout: ["window"],
		onmouseover: ["window"],
		onmouseup: ["window"],
		onreset: ["window"],
		onselect: ["window"],
		onsubmit: ["window"],
		onunload: ["window"],

		// Node
		insertBefore: ["Node","Element","HTMLElement"],
		replaceChild: ["Node","Element","HTMLElement"],
		removeChild: ["Node","Element","HTMLElement"],
		appendChild: ["Node","Element","HTMLElement"],
		hasChildNodes: ["Node","Element","HTMLElement"],
		cloneNode: ["Node","Element","HTMLElement"],
		normalize: ["Node","Element","HTMLElement"],
		isSupported: ["Node","Element","HTMLElement"],
		hasAttributes: ["Node","Element","HTMLElement"],
		compareDocumentPosition: ["Node","Element","HTMLElement"],
		isSameNode: ["Node","Element","HTMLElement"],
		lookupPrefix: ["Node","Element","HTMLElement"],
		isDefaultNamespace: ["Node","Element","HTMLElement"],
		lookupNamespaceURI: ["Node","Element","HTMLElement"],
		isEqualNode: ["Node","Element","HTMLElement"],
		getFeature: ["Node","Element","HTMLElement"],
		setUserData: ["Node","Element","HTMLElement"],
		getUserData: ["Node","Element","HTMLElement"]

	}
	
};

// DICTIONARY
JAVASCRIPT_KEYWORDS = {
	"break": true,
	"case": true,
	"catch": true,
	"continue": true,
	"default": true,
	"delete": true,
	"do": true,
	"else": true,
	"finally": true,
	"for": true,
	"function": true,
	"if": true,
	"in": true,
	"instanceof": true,
	"new": true,
	"return": true,
	"switch": true,
	"this": true,
	"throw": true,
	"try": true,
	"typeof": true,
	"var": true,
	"void": true,
	"while": true,
	"with": true,
	"abstract": true,
	"boolean": true,
	"byte": true,
	"char": true,
	"class": true,
	"const": true,
	"debugger": true,
	"double": true,
	"enum": true,
	"export": true,
	"extends": true,
	"final": true,
	"float": true,
	"goto": true,
	"implements": true,
	"import": true,
	"int": true,
	"interface": true,
	"long": true,
	"native": true,
	"package": true,
	"private": true,
	"protected": true,
	"public": true,
	"short": true,
	"static": true,
	"super": true,
	"synchronized": true,
	"throws": true,
	"transient": true,
	"volatile": true	
};
