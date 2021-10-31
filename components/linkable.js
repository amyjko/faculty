import React from 'react';
import { HashLink } from 'react-router-hash-link';

class Linkable extends React.Component {

    isLinked() {
        return window.location.hash.length > 0 && window.location.hash.substring(1) === this.props.id;
    }

    componentDidMount() {
		// If this window has a hash and it matches this header's ID, scroll to this header.
		if(this.isLinked()) {
            let element = document.getElementById(this.props.id);
            if(element)
                window.scrollTo({ top: element.getBoundingClientRect().top - window.innerHeight / 2, behavior: 'smooth' })
		}
    }

	render() {
		return (
			<h3 id={this.props.id} className={this.isLinked() ? "linked" : null}>
                {this.props.children}
                &nbsp;
                <HashLink 
                    to={this.props.app.getRoute() + "#" + this.props.id}
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                >
                    <img className="link" src={this.props.app.getWebRoot() + "/images/icons/link.png"} />
                </HashLink>
            </h3>
	    )
	}
}

export { Linkable };