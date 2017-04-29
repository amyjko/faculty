import React from 'react';

class EmbeddedGist extends React.Component {

	constructor() {

		super();

    	this.gistCallbackId = 0;		
		this.stylesheetAdded = false;
		
		this.state = {
			loading: true,
			src: ""
		};
		
	}

    // Each time we request a Gist, we'll need to generate a new
    // global function name to serve as the JSONP callback.
    nextGistCallback() {
      return "embed_gist_callback_" + this.gistCallbackId++;
    }

    // The Gist JSON data includes a stylesheet to add to the page
    // to make it look correct. `addStylesheet` ensures we only add
    // the stylesheet one time.
    addStylesheet(href) {
      if (!this.stylesheetAdded) {
        this.stylesheetAdded = true;
        var link = document.createElement('link');
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = href;

        document.head.appendChild(link);
      }
    }

	componentDidMount() {
	
	    // Create a JSONP callback that will set our state with the data that comes back from the Gist site
	    var gistCallback = this.nextGistCallback();
	    window[gistCallback] = function(gist) {
			this.setState({
				loading: false,
				src: gist.div
			});
	        this.addStylesheet(gist.stylesheet);
	    }.bind(this);

		// Construct the URL for the data
	    var url = "https://gist.github.com/" + this.props.gist + ".json?callback=" + gistCallback;
	    if (this.props.file) {
	      url += "&file=" + this.props.file;
	    }
	
	    // Add the JSONP script tag to the document.
	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = url;
	    document.head.appendChild(script);
	    
	}
	
	render() {
	    if (this.state.loading) {
	      return <div>Loading the FAQ from GitHub...</div>;
	    } else {
	      return <div dangerouslySetInnerHTML={{__html: this.state.src}} />;
	    }
	}

}


class CER extends React.Component {

	render() {
		
		return <EmbeddedGist gist="andyjko/689837b8eefccb3a8a28ff0aa5300615" />
		
	}
}

export { CER };