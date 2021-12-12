import React from 'react';

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
                Object.keys(this.props.facets).map(facet =>
                    <p key={"facet-" + facet} role="radiogroup" aria-label="Filter">
                    {
                        this.props.facets[facet].sort().map(value =>
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