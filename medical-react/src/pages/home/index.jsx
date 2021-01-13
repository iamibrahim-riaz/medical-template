import { Container, Row, Col } from 'reactstrap';

//Import Assets

import mainLogo from '../../assets/images/logo.svg';
import whiteLogo from '../../assets/images/logo-white.svg';
import callLogo from '../../assets/images/arrows/phone.svg';
import quoteImage from '../../assets/images/arrows/quote.png';
import aboutImage1 from '../../assets/images/about/about.png';
import servicesIcon1 from '../../assets/images/services/1.svg';
import servicesIcon2 from '../../assets/images/services/2.svg';
import servicesIcon3 from '../../assets/images/services/3.svg';
import videoIcon from '../../assets/images/video-icon.svg';
import videoBg from '../../assets/images/bg/video-bg.png';
import featureImage1 from '../../assets/images/features/1.jpg';
import featureImage2 from '../../assets/images/features/2.jpg';
import featureImage3 from '../../assets/images/features/3.jpg';
import teamImage1 from '../../assets/images/team/1.png';
import teamImage2 from '../../assets/images/team/2.png';
import teamImage3 from '../../assets/images/team/3.png';
import blogImage1 from '../../assets/images/blog/1.jpg';
import blogImage2 from '../../assets/images/blog/2.jpg';
import blogImage3 from '../../assets/images/blog/3.jpg';


function HomePage() {
	return (
		<div>
			{/* Banner Part */}
			<div id="tcd-banner" className="tcd-banner">
				{/* Header Part */}
			    <header id="tcd-header" className="tcd-header-1">
			        <div className="menu-bar menu-sticky">
			            <Container>
			                <Row>
			                    <Col lg="3">
			                        <div className="logo">
			                            <a href="#">
			                                <img 
			                                	src={whiteLogo} 
			                                	alt="White Logo" 
			                                />
			                            </a>
			                        </div>
			                        <button 
			                        	className="mobile-menu-icon" 
			                        	aria-label="Main Menu"
			                        >
			                            <span></span>
			                            <span></span>
			                            <span></span>
			                        </button>
			                    </Col>
			                    <Col lg="9">
			                        <div className="mainmenu">
			                            <ul className="nav-menu">
			                                <li><a href="#tcd-banner">Home</a></li>

			                                <li><a href="#tcd-about">About</a></li>

			                                <li><a href="#tcd-services">Services</a></li>

			                                <li><a href="#tcd-features">Features</a></li>

			                                <li><a href="#tcd-blog">Blog</a></li>

			                                <li><a href="#tcd-footer">Contact</a></li>
			                            </ul>
			                            <div className="contact-menu">
			                                <span className="icon">
			                                	<img 
			                                		src={callLogo} 
			                                		alt="Phone Icon" 
			                                	/> 
			                                </span>
			                                <div className="contact-number">
			                                    <span>
			                                    	<a 
				                                    	className="phone" 
				                                    	href="tel:01234567"
				                                    >
				                                    	(+1) 212-946-2707
			                                    	</a>
			                                    </span>
			                                    <span>
			                                    	Opening Hours 09-05
			                                    </span>
			                                </div>
			                            </div>
			                        </div>
			                    </Col>
			                </Row>
			            </Container>
			            <div className="menu-bg hidden-md"></div>
			        </div>
			    </header>

				{/* Banner Wrapper Part */}
			    <div className="banner-wrapper">
			        <Container>
			            <div className="banner-slider">
			                <div className="banner-content text-center">
			                    <h2 className="banner-title uppercase">
			                        We are Financial Experts Boost Your Business! Right Now
			                    </h2>
			                    <h5 className="banner-desc">Over 24 years experience and knowledge international...</h5>
			                    <div className="banner-btn">
			                        <a 
			                        	href="#" 
			                        	className="primary-btn mr-30"
			                        >
			                        	Read More
			                        </a>
			                        <a 
			                        	href="#" 
			                        	className="primary-btn transparent"
			                        >
			                        	View Details
			                        </a>
			                    </div>
			                </div>
			            </div>
			        </Container>
			    </div>
			</div>

			{/* About Part */}
			<div id="tcd-about" className="tcd-about sec-spacer">
			    <Row className="align-items-center margin-0">
			        <Col lg="6" className="padding-0 d-none d-xl-block d-lg-block d-xl-none">
			            <div className="about-img">
			                <img 
			                	src={aboutImage1}
			                	alt="About Image" 
			                />
			            </div>
			        </Col>
			        <Col lg="6" className="padding-0">
			            <div className="about-content">
			                <h2 className="mb-25">Learn About Us</h2>
			                <p className="mb-20">A collection of textile samples lay spread out on the table - Samsa was a travelling
			                    salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine
			                    and housed in a nice.</p>
			                <p className="mb-0">It showed a lady fitted out with a fur hat and fur boa who sat upright</p>
			            </div>
			        </Col>
			    </Row>
			</div>

			{/* Service Part */}
			<div id="tcd-services" className="tcd-services">
			    <Container>
			        <div className="sec-title top-border text-center pb-120">
			            <h2 className="title">Services We Provide</h2>
			            <p className="desc">There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum <br />passages of LoremIpsum available passages of LoremIpsum available...</p>
			        </div>
			        <Row>
			            <Col className="md-mt-80">
			                <div className="single-service">
			                    <div className="service-icon">
			                        <img 
			                        	src={servicesIcon1} 
			                        	alt="Service Icon"
			                        />
			                    </div>
			                    <div className="service-text">
			                        <h4 className="title"><a href="#">Best Industry Leaders</a></h4>
			                        <p className="desc">There are many variation passages of sum passages available there are many variation passages take some moment available.</p>
			                    </div>
			                </div>
			            </Col>
			            <Col className="md-mt-80">
			                <div className="single-service">
			                    <div className="service-icon">
			                        <img 
			                        	src={servicesIcon2}
			                        	alt="Service Icon"
			                        />
			                    </div>
			                    <div className="service-text">
			                        <h4 className="title"><a href="#">Finance Management</a></h4>
			                        <p className="desc">There are many variation passages of sum passages available there are many variation passages take some moment available.</p>
			                    </div>
			                </div>
			            </Col>
			            <Col>
			                <div className="single-service">
			                    <div className="service-icon">
			                        <img 
			                        	src={servicesIcon3} 
			                        	alt="Service Icon"
			                        />
			                    </div>
			                    <div className="service-text">
			                        <h4 className="title"><a href="#">Business Insurance</a></h4>
			                        <p className="desc">There are many variation passages of sum passages available there are many variation passages take some moment available.</p>
			                    </div>
			                </div>
			            </Col>
			        </Row>
			    </Container>
			</div>

			{/* Video Part */}
			<div id="tcd-video-area" className="tcd-video-area">
			    <div className="video-img">
			        <img 
			        	src={videoBg} 
			        	alt="Video Bg Image" 
			        />
			    </div>
			    <div className="video-icon">
			        <a 
			        	id="play-home-video" 
			        	className="video-play-button"
			        	href="#"
			        >
				        <img 
				        	src={videoIcon} 
				        	alt="Video Icon"
				        />
			        </a>
			        <p className="video-txt">Just as AMC Theaters took advantage</p>
			    </div>
			</div>

			{/* Feature Part */}
			<div id="tcd-features" className="tcd-features sec-spacer">
			    <Container>
			        <div className="sec-title top-border text-center pb-75 md-pb-50">
			            <h2 className="title">Our Best Feature</h2>
			            <p className="desc">There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum <br />passages of LoremIpsum available passages of LoremIpsum available...</p>
			        </div>
			        <Row className="feature-slider">
			            <Col className="feature-item">
			                <div className="feature-img">
			                    <img 
			                    	src={featureImage1} 
			                    	alt="Image Alt"
			                    />
			                </div>
			                <div className="feature-text">
			                    <span className="water-text">01</span>
			                    <h4 className="title"><a href="#">Materials Technology</a></h4>
			                    <span className="desc">Aliquet quia autem maecenas, digniss inceptos axime eveniet</span>
			                </div>
			            </Col>
			            <Col className="feature-item">
			                <div className="feature-img">
			                    <img 
			                    	src={featureImage2}
			                    	alt="Image Alt"
			                    />
			                </div>
			                <div className="feature-text">
			                    <span className="water-text">02</span>
			                    <h4 className="title"><a href="#">Startup Funding</a></h4>
			                    <span className="desc">Relique quia autem maecenas, digniss inceptos axime eveniet</span>
			                </div>
			            </Col>
			            <Col className="feature-item">
			                <div className="feature-img">
			                    <img 
			                    	src={featureImage3}
			                    	alt="Image Alt" 
			                    />
			                </div>
			                <div className="feature-text">
			                    <span className="water-text">03</span>
			                    <h4 className="title"><a href="#">Business Matching</a></h4>
			                    <span className="desc">Vermoes quia autem maecenas, digniss inceptos axime necto</span>
			                </div>
			            </Col>
			        </Row>
			    </Container>
			</div>

			{/* Team Part */}
			<div id="tcd-team" className="tcd-team">
			    <Container>
			        <div className="sec-title top-border text-center pb-75 md-pb-50">
			            <h2 className="title">Developing Team</h2>
			            <p className="desc">There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum <br />passages of LoremIpsum available passages of LoremIpsum available...</p>
			        </div>
			        <Row className="team-slider">
			        	<Col> 
			        		<div className="single-team">
			        		    <div className="team-img">
			        		        <img 
			        		        	src={teamImage1}
			        		        	alt="Team Image"
			        		        />
			        		    </div>
			        		    <div className="team-text">
			        		        <a href="#" className="title">Herman Sheffield</a>
			        		        <span className="designation">Designer</span>
			        		        <div className="hidden-content">
			        		            <span className="desc">Aenean animi error sint iusto hynae</span>
			        		            <ul className="social-icon">
			        		                <li><a href="#"><i className="fa fa-google"></i></a></li>
			        		                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			        		                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			        		            </ul>
			        		        </div>
			        		    </div>
			        		</div>
			        	</Col>
			        	<Col> 
			        		<div className="single-team">
			        		    <div className="team-img">
			        		        <img 
			        		        	src={teamImage2}
			        		        	alt="Team Image"
			        		        />
			        		    </div>
			        		    <div className="team-text">
			        		        <a href="#" className="title">Paul Walker</a>
			        		        <span className="designation">Designer</span>
			        		        <div className="hidden-content">
			        		            <span className="desc">Aenean animi error sint iusto hynae</span>
			        		            <ul className="social-icon">
			        		                <li><a href="#"><i className="fa fa-google"></i></a></li>
			        		                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			        		                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			        		            </ul>
			        		        </div>
			        		    </div>
			        		</div>
			        	</Col>
			        	<Col> 
			        		<div className="single-team">
			        		    <div className="team-img">
			        		        <img 
			        		        	src={teamImage3}
			        		        	alt="Team Image"
			        		        />
			        		    </div>
			        		    <div className="team-text">
			        		        <a href="#" className="title">Kory Anderson</a>
			        		        <span className="designation">Designer</span>
			        		        <div className="hidden-content">
			        		            <span className="desc">Aenean animi error sint iusto hynae</span>
			        		            <ul className="social-icon">
			        		                <li><a href="#"><i className="fa fa-google"></i></a></li>
			        		                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			        		                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			        		            </ul>
			        		        </div>
			        		    </div>
			        		</div>
			        	</Col>
			        </Row>
			    </Container>
			</div>

			{/* Blog Part */}
			<div id="tcd-blog" className="tcd-blog sec-spacer">
			    <Container fluid={true}>
			        <div className="sec-title top-border text-center pb-75 md-pb-50">
			            <h2 className="title">Our Blog Post</h2>
			            <p className="desc">There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum <br />passages of LoremIpsum available passages of LoremIpsum available...</p>
			        </div>
			        <Row className="blog-slider">
				        <Col>
				        	<div className="blog-item">
				        	    <div className="blog-img">
				        	        <a href="#">
				        	        	<img 
				        	        		src={blogImage1} 
				        	        		alt="Blog Image"
				        	        	/>
				        	        </a>
				        	    </div>
				        	    <div className="blog-content">
				        	        <div className="left-part">
				        	            <div className="single-part">
				        	                <span className="date">25</span>
				        	                <span className="date">May</span>
				        	            </div>
				        	            <div className="single-part">
				        	                <span>Likes: 10</span>
				        	            </div>
				        	            <div className="single-part">
				        	                <span>08</span>
				        	                <span>Comments</span>
				        	            </div>
				        	        </div>
				        	        <div className="right-part">
				        	            <h4 className="title"><a href="#">New Chicago school budget relies on the state
				        	                pension</a></h4>
				        	            <p className="desc">There are many variation passages of Lorem Ipsum There are many variation
				        	                passages oform pasages of Ipsum available...</p>
				        	            <a className="blog-btn" href="#">Read More</a>
				        	        </div>
				        	    </div>
				        	</div>
				        </Col>
				        <Col>
				        	<div className="blog-item">
				        	    <div className="blog-img">
				        	        <a href="#">
				        	        	<img 
				        	        		src={blogImage2} 
				        	        		alt="Blog Image"
				        	        	/>
				        	        </a>
				        	    </div>
				        	    <div className="blog-content">
				        	        <div className="left-part">
				        	            <div className="single-part">
				        	                <span className="date">25</span>
				        	                <span className="date">May</span>
				        	            </div>
				        	            <div className="single-part">
				        	                <span>Likes: 10</span>
				        	            </div>
				        	            <div className="single-part">
				        	                <span>08</span>
				        	                <span>Comments</span>
				        	            </div>
				        	        </div>
				        	        <div className="right-part">
				        	            <h4 className="title"><a href="#">New Chicago school budget relies on the state
				        	                pension</a></h4>
				        	            <p className="desc">There are many variation passages of Lorem Ipsum There are many variation
				        	                passages oform pasages of Ipsum available...</p>
				        	            <a className="blog-btn" href="#">Read More</a>
				        	        </div>
				        	    </div>
				        	</div>
				        </Col>
				        <Col>
				        	<div className="blog-item">
				        	    <div className="blog-img">
				        	        <a href="#">
				        	        	<img 
				        	        		src={blogImage3}
				        	        		alt="Blog Image"
				        	        	/>
				        	        </a>
				        	    </div>
				        	    <div className="blog-content">
				        	        <div className="left-part">
				        	            <div className="single-part">
				        	                <span className="date">25</span>
				        	                <span className="date">May</span>
				        	            </div>
				        	            <div className="single-part">
				        	                <span>Likes: 10</span>
				        	            </div>
				        	            <div className="single-part">
				        	                <span>08</span>
				        	                <span>Comments</span>
				        	            </div>
				        	        </div>
				        	        <div className="right-part">
				        	            <h4 className="title"><a href="#">New Chicago school budget relies on the state
				        	                pension</a></h4>
				        	            <p className="desc">There are many variation passages of Lorem Ipsum There are many variation
				        	                passages oform pasages of Ipsum available...</p>
				        	            <a className="blog-btn" href="#">Read More</a>
				        	        </div>
				        	    </div>
				        	</div>
				        </Col>
			        </Row>
			    </Container>
			</div>

			{/* Testimonial Part */}
			<div id="tcd-testimonial" className="tcd-testimonial">
			    <Container>
			        <div className="testimonial-area testi-watermark-text">
			            <Row className="testi-slider">
				            <Col>
				            	<div className="testi-item">
				            	    <div className="testi-img">
				            	        <img 
				            	        	className="img" 
				            	        	src={teamImage1} 
				            	        	alt="Testimonial Image"
				            	        />
				            	        <div className="quote">
				            	            <img 
				            	            	src={quoteImage} 
				            	            	alt="Quote Icon"
				            	            />
				            	        </div>
				            	    </div>
				            	    <div className="testi-info">
				            	        <h6 className="title">Kori Anderson</h6>
				            	        <span className="designation">Founder</span>
				            	    </div>
				            	    <div className="testi-desc">
				            	        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
				            	            ipsum...</p>
				            	    </div>
				            	</div>
				            </Col>
				            <Col>
				            	<div className="testi-item">
				            	    <div className="testi-img">
				            	        <img 
				            	        	className="img" 
				            	        	src={teamImage2} 
				            	        	alt="Testimonial Image"
				            	        />
				            	        <div className="quote">
				            	            <img 
				            	            	src={quoteImage} 
				            	            	alt="Quote Icon"
				            	            />
				            	        </div>
				            	    </div>
				            	    <div className="testi-info">
				            	        <h6 className="title">Kori Anderson</h6>
				            	        <span className="designation">Founder</span>
				            	    </div>
				            	    <div className="testi-desc">
				            	        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
				            	            ipsum...</p>
				            	    </div>
				            	</div>
				            </Col>
			            </Row>
			        </div>
			    </Container>
			</div>

			{/* Footer Part */}
			<div id="tcd-footer" className="tcd-footer">
			    <Container>
			        <Row className="footer-content">
			            <Col>
			                <div className="footer-widget">
			                    <div className="footer-logo">
			                        <a href="#">
			                            <img 
			                            	src={mainLogo} 
			                            	alt="Logo"
			                            />
			                        </a>
			                    </div>
			                    <p className="copyright-text">© 2020 <a href="#">Budget.com</a>. All Rights Reserved.</p>
			                    <div className="footer-social">
			                        <ul className="social-icon">
			                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
			                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			                        </ul>
			                    </div>
			                </div>
			            </Col>
			            <Col>
			                <div className="footer-widget">
			                    <h4 className="footer-title">Latest Information</h4>
			                    <p>Information Update</p>
			                    <ul className="footer-menu">
			                        <li><a href="#">Home</a></li>
			                        <li><a href="#">About Us</a></li>
			                        <li><a href="#">Departent</a></li>
			                        <li><a href="#">Event</a></li>
			                    </ul>
			                </div>
			            </Col>
			            <Col>
			                <div className="footer-widget">
			                    <h4 className="footer-title">Contact Us</h4>
			                    <p>Social Address</p>
			                    <div className="tcd-newsletter">
			                        <form className="mb-0">
			                            <div className="form-group">
			                                <input type="email" name="your-email" placeholder="Your Email" />
			                                <button className="btn-newsletter"><i className="fa fa-paper-plane-o" aria-hidden="true"></i>
			                                </button>
			                            </div>
			                        </form>
			                    </div>

			                    <div className="footer-address">
			                        <a className="phone" href="tel:01234567">(+1) 212-946-2707</a><a href="mailto:Hello@agency.com">Hello@agency.com</a>
			                        <span>12W 34th St, bangladesh</span>
			                    </div>
			                </div>
			            </Col>
			        </Row>
			    </Container>
			</div>
		</div>
	)
}

export default HomePage; 