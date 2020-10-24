import React from 'react';
import {Block} from './block';
import _ from 'lodash';

class Funding extends React.Component {
		
	render() {
		
		return (
			<div>
			
				<div className="lead">
					My lab recieves funding from many sources.
				</div>

				<Block 
					image={this.props.app.getWebRoot() + "/images/funding/ischool.jpg"}
					alt="The Information School logo"
					link="https://ischool.uw.edu"
					header="The Information School"
					content=". My lab's primary source of funding is the University of Washington Information School. It pays 9 months of my salary, it subsidizes my doctoral students' time through teaching assistantships, it provides space and staff support, and it provides my core intellectual community. The iSchool's resources come from tuition, fees, taxes from the Washington state government, and philanthropic giving."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/funding/nsf.jpg"}
					alt="The NSF logo."
					link="https://nsf.gov"
					header="National Science Foundation"
					content={
						<span>
							. The majority of my sponsored research is funded by the U.S. National Science Foundation, which is tax-funded. I write proposals, which are confidentially evaluated by my peers, and when my peers and NSF find my proposals to have compelling intellectual merit and potential for broader impact, I receive grants. I use these grants to support my summer salary, my doctoral students stipends, benefits, and tuition, my lab's research expenses, hourly undergraduate research assistants, and our travel. My doctoral students also write their own proposals, often winning NSF graduate research fellowships to support the first 3 years of their doctoral work. My NSF awards include:
							<ul>
							{
								_.map(
									this.props.app.getProfile().getFunding(
										funding => funding.funder === "National Science Foundation" && !funding.private, 
										funding => -funding.commitment.end.getFullYear()
									),
									(award, index) => { return <li key={index}><a href={award.url} target="_blank">{award.title}</a></li>; }
								)
							}
							</ul>
							Six of my 13 past and present doctoral students have also won NSF Graduate Research Fellowships, which support three years of their research.
						</span>
					}
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/funding/microsoft.jpg"}
					alt="The Microsoft logo."
					link="https://microsoft.com"
					header="Microsoft"
					content=". Occasionally, collaborators across Microsoft, such as those in Microsoft Research and Microsoft's developer division, will give me unrestricted gifts to support my lab. These are no strings attached contributions, which I rely on for expenses that the iSchool and NSF will not support, such as buying out of teaching to free up research time and unplanned research expenses."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/funding/google.jpg"}
					alt="The Google logo."
					link="https://google.com"
					header="Google"
					content=". Occasionally, I will write proposals to Google's faculty research awards program, which support 1-year projects that support me and a doctoral student. This funding comes with no strings attached."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/funding/adobe.jpg"}
					alt="The Adobe logo."
					link="http://adobe.com"
					header="Adobe"
					content=". When my doctoral students or I have collaborated with Adobe researchers, they have given unrestricted gifts in support of my lab. This funding comes with no strings attached."
				/>

			</div>
			
		)
		
	}

}

export { Funding };