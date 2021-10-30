import React from 'react';
import {Block} from './block';

class Communities extends React.Component {
		
	render() {
		return (
			<div>

				<div className="lead">
					These are communities I work with to do research, advocate, and have impact.
				</div>

				<Block 
					image={this.props.app.getWebRoot() + "/images/communities/computinged.jpg"}
					alt="The ComputingEd@UW logo."
					link="http://computinged.uw.edu/"
					header="ComputingEd@UW"
					content=" is the grassroots community of computing education researchers and educators at the University of Washington, spanning the Paul G. Allen School of Computer Science & Engineering, The Information School, the College of Education, Human-Centered Design and Engineering, and the Department of Communication."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/communities/dub.jpg"}
					alt="The DUB logo."
					link="http://dub.uw.edu/"
					header="DUB"
					content=" is the grassroots community of HCI and design researchers and educators + teachers at the University of Washington. Amy helped grow it from a small group of HCI faculty to one of the largest and most prolific HCI research communities in the world."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/communities/plse.jpg"}
					alt="The PLSE logo."
					link="http://uwplse.org"
					header="PLSE"
					content=" is the programming languages + software engineering researcher group in the Paul G. Allen School of Computer Science & Engineering at the University of Washington. Amy often advises or co-advises Ph.D. students in PLSE."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/communities/digitalyouth.jpg"}
					alt="The Digital Youth logo."
					link="https://digitalyouth.ischool.uw.edu"
					header="The Digital Youth Lab"
					content=" studies the transformative potential of technology in young people’s lives. Amy collaborates with faculty in the lab."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/communities/soundcsed.jpg"}
					alt="The Sound CS Ed logo."
					link="http://soundcsed.org/"
					header="Sound CS Ed"
					content=" is a community of CS teachers, researchers, makers, and advocates in Puget Sound that Amy facilites. It hosts a quarterly meetup and chats on Slack."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/communities/csforallwa.jpg"}
					alt="The CS for All Washington logo."
					link="https://www.csforallwa.org"
					header="CS for All Washington"
					content=". Amy founded this coalition to advocate for universal K-12 CS education in Washington state, bringing together CSTA chapters, the Washington State Office of the Superintendent of Public Instruction, and several Educational Service Districts."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/communities/accesscomputing.jpg"}
					alt="The AccessComputing logo."
					link="https://www.washington.edu/accesscomputing/"
					header="AccessComputing"
					content=". First funded by NSF and led by Richard Ladner and Sheryl Burgstahler, AccessComputing creates pathways for students with disabilities into computing. Amy joined as a co-PI in 2016, and brought leadership in teaching accessibility. I help make strategic decision for the project and give talks regularly about the alliance's activities."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/communities/create.png"}
					alt="The CREATE center logo."
					link="https://create.uw.edu"
					header="CREATE"
					content=". The Center for Research and Education on Accessible Technology and Experiences explores how to make technology and the world accessible. My work in the center explores how to educate students and teachers about accessible computing, to ensure future generations of technologists create a more accessible digital world."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/communities/euses.jpg"}
					alt="The EUSES Washington logo."
					link="http://www.eusesconsortium.org"
					header="EUSES Consortium"
					content=" is a former coalition of end-user programming and end-user software engineering researchers. Amy was its last director."
				/>

			</div>
			
		)
		
	}

}

export { Communities };