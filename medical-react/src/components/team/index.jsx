import { Container, Row, Col } from 'reactstrap';
import SectionHeading from '../heading';
import SingleTeam from './single';

import teamImage1 from '../../assets/images/team/1.png';
import teamImage2 from '../../assets/images/team/2.png';
import teamImage3 from '../../assets/images/team/3.png';


function Team() {
	return(
	    <div id="tcd-team" className="tcd-team pt-110 pb-110 md-pt-70 md-pb-70">
	        <Container>	 
				<SectionHeading
					classes="sec-title center mb-40"
					title="Our Specialist"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit
					veniam quis nostrud exercitation..."
				/>
	            <Row className="team-member">
	            	<Col> 
	            		<SingleTeam 
							img={teamImage1}
							name="Ibrahim Riaz" 
							designation="Web Developer" 
							description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Donec quam felis..."
							googleLink="#"
							facebookLink="#"
							twitterLink="#"
						/>
	            	</Col>
	            	<Col> 
	            		<SingleTeam 
							img={teamImage2}
							name="Paul Walker"
							designation="Manager" 
							description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Donec quam felis..."
							googleLink="#"
							facebookLink="#"
							twitterLink="#"
						/>	            		
	            	</Col>
	            	<Col> 
	            		<SingleTeam 
							img={teamImage3}
							name="Kory Anderson"
							designation="Designer" 
							description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Donec quam felis..."
							googleLink="#"
							facebookLink="#"
							twitterLink="#"
						/>
	            	</Col>
	            </Row>
	        </Container>
	    </div>
	)
}

export default Team