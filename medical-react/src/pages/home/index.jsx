import { Container, Row, Col } from 'reactstrap';

// Impot Components
import Banner from '../../components/banner'
import Services from '../../components/services'
import About from '../../components/about'
import Team from '../../components/team'
import ServiceTab from '../../components/tab'
import Faq from '../../components/faq'
import Blog from '../../components/blog'
import Testimonial from '../../components/testimonial'
import Newsletter from '../../components/newsletter'
import Footer from '../../components/footer'

 
function HomePage() {
	return (
		<div>
			{/* Banner Part */}
			<Banner />

			{/* Service Part */}
			<Services />

			{/* About Part */}
			<About />

			{/* Service Tab Part */}
			<ServiceTab />

			{/* Team Part */}
			<Team />

			{/* Testimonial Part */}
			<Testimonial />

			{/* Blog & Faq Part */}
			<div id="tcd-double-section" className="tcd-double-section pt-110 pb-110 md-pt-70 md-pb-70">
            	<div className="container">                
                	<Row>
						<Col className="md-pb-70">
							<Faq />
						</Col>
						<Col>
							<Blog />
						</Col>
					</Row>
				</div>
			</div>
                        
            {/* Newsletter Part */}
			<Newsletter />

			{/* Footer Part */}
			<Footer />
		</div>
	)
}

export default HomePage; 