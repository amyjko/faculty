import React from 'react';
import _, { max } from 'lodash';

class Facets extends React.Component {

    constructor() {

        super()

        this.state = {"selection": {}};

    }

    selectValue(facet, value) {

        var selection = this.state.selection;
        if(facet in selection && selection[facet] === value)
            delete selection[facet];
        else
            selection[facet] = value;
        this.setState({"selection": selection});

        this.props.update.call(null, selection);

    }

    render() {
        return (
            <div>
            {
                _.map(Object.keys(this.props.facets), facet =>
                    <p key={"facet-" + facet} role="radiogroup" aria-label="Filter">
                    {
                        _.map(this.props.facets[facet].sort(), value =>
                            <mark 
                                key={"topic-" + value} 
                                role="radio"
                                aria-checked={facet in this.state.selection && this.state.selection[facet] === value}
                                tabIndex={facet in this.state.selection && this.state.selection[facet] === value ? 0 : 1}
                                aria-label={"Filter by " + value}
                                className={"clickable topic" + (facet in this.state.selection && this.state.selection[facet] === value ? " selected" : "")} 
                                onClick={this.selectValue.bind(this, facet, value)}
                            >
                                <small>{value}</small>
                            </mark>
                        )
                    }
                    </p>
                )
                }
            </div>
        );
    }

}

export { Facets };