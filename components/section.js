import React from 'react';
import { Linkable } from './linkable';

class Section extends React.Component {

	render() {
        return <>
            <Linkable app={ this.props.app} id={this.props.id}>{this.props.header}</Linkable>
            {this.props.children}
        </>
	}
}

export { Section };