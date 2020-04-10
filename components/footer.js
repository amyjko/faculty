import React from 'react';

class Footer extends React.Component {
	render() {
		
		var path = this.props.path || "";
		
		return (
			<div>
				<hr/>
				<small>
					Copyright Amy J. Ko.
					<br/>See <a href="https://github.com/amyjko/faculty" target="_blank">this site's GitHub repository</a> to view source and provide feedback.
					<br/>Computing diversity and equity icon "Diversity" by Stephen Plaster from the Noun Project. 
					Understanding program behavior icon "Dependency" by Knut M. Synstad from the Noun Project.
					Programming problem solving icon "Thinking" icon by AomAm from the Noun Project.
					Software engineering expertise icon "Teamwork" by Maxim Kulikov from the Noun Project.
					API learning icon "Shape" by Noura Mbarki from the Noun Project.
					Programming language learning icon "Code" by faisalovers from the Noun Project.
					Machine learning literacy icon "Data" by priyanka from the Noun Project.
					Bug triage icon "feedback" by Adrien Coquet from the Noun Project.
					Methods and theory icon "atom" by Chattapat Kunlapatpisit from the Noun Project.
					User interface mining icon "Wireframe" by mikicon from the Noun Project.
				</small>
			</div>
	    )
	}
}

export { Footer };