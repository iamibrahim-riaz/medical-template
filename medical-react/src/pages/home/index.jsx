import { Container, Row, Col } from 'reactstrap';

//Import Assets

import callLogo from '../../assets/images/arrows/phone.svg';
import quoteImage from '../../assets/images/arrows/quote.png';
import servicesIcon1 from '../../assets/images/services/1.svg';
import servicesIcon2 from '../../assets/images/services/2.svg';
import servicesIcon3 from '../../assets/images/services/3.svg';
import servicesImage1 from '../../assets/images/services/1.jpg';
import servicesImage2 from '../../assets/images/services/2.jpg';
import servicesImage3 from '../../assets/images/services/3.jpg';
import servicesImage4 from '../../assets/images/services/4.jpg';
import servicesRightShape from '../../assets/images/services/services-right-shape.png';
import aboutImage1 from '../../assets/images/about/about1.png';
import aboutRightShape from '../../assets/images/about/about-right-shape.png';
import videoIcon from '../../assets/images/video-icon.svg';
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
			                    <Col lg="1">
			                        <div className="logo">
			                            <a href="#">
			                                <span>EMedical</span>
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
			                    <Col lg="11">
			                        <div className="mainmenu">
			                            <ul id="onepage-menu" className="nav-menu onepage-menu">
			                                <li><a href="#tcd-banner">Home</a></li>

			                                <li><a href="#tcd-about">About</a></li>

			                                <li><a href="#tcd-services">Services</a></li>

			                                <li><a href="#tcd-team">Team</a></li>

			                                <li><a href="#tcd-blog">Blog</a></li>

			                                <li><a href="#tcd-footer">Contact</a></li>
			                            </ul>
			                            <div className="contact-menu hidden-md">
                                            <span className="icon">
                                            	<img 
                                            		src={callLogo}
                                            		alt="Phone Icon"
                                            	/> 
                                            </span>
                                            <div className="contact-number">
                                                <span>Call Us</span>
                                                <span>
                                                	<a 
                                                		className="phone" 
                                                		href="tel:01234567"
                                                	>
                                                		+088-123456
                                                	</a>
                                                </span>
                                            </div>
                                        </div>
			                        </div>
			                        <div className="search hidden-md">
			                        	<a 
			                        		className="tc-search" 
			                        		data-target=".search-modal" 
			                        		data-toggle="modal" 
			                        		href="#"
			                        	>
			                        		<i className="fa fa-search"></i>
			                        	</a>
			                        </div>
			                    </Col>
			                </Row>
			            </Container>
			        </div>
			    </header>

				{/* Banner Wrapper Part */}
			    <div className="banner-wrapper">
			        <Container>
			            <div className="banner-part">
			                <div className="banner-content text-center">
				                <div className="video-icon">
				                    <a 
				                    	className="video-play-button" 
				                    	href="#"
				                    >
				                        <img 
				                        	src={videoIcon}
				                        	alt="Video Icon"
				                        />
				                    </a>
				                </div>
			                    <h5 className="banner-subtitle">
			                        Best Medical Theme Ever
			                    </h5>
			                    <h2 className="banner-title uppercase">
			                        Providing Health Solution
			                    </h2>
			                    <p className="banner-desc">
			                    	A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which
			                    </p>
			                    <div className="banner-btn">
			                        <a 
			                        	href="#" 
			                        	className="primary-btn white-btn"
			                        >
			                        	Read More
			                        </a>
			                    </div>
			                    <div className="banner-newsletter">
			                        <form className="mb-0">
			                            <div className="form-group mb-0">
			                                <input 
			                                	type="email" 
			                                	name="your-email" 
			                                	placeholder="Appointment Now"
			                                />
			                                <button className="btn-newsletter">
			                                	Book Now
			                                </button>
			                            </div>
			                        </form>
			                    </div>
			                </div>
			            </div>
			        </Container>
			    </div>
			</div>

			{/* Service Part */}
			<div id="tcd-services" className="tcd-services">
			    <Container>
			        <div className="sec-title center mb-40">
			            <h2 className="title mb-20">Our Specialist</h2>
			            <p className="desc mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit <br />veniam quis nostrud exercitation...</p>
			        </div>
			        <Row>
			            <Col lg="9" md="12">
			                <div className="single-services mb-70 sm-mb-50">
			                    <div className="services-icon">
			                        <img 
			                        	src={servicesIcon1} 
			                        	alt="Service Icon"
			                        />
			                    </div>
			                    <div className="services-text">
			                        <h3 className="title"><a href="#">Medical Investigation</a></h3>
			                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit <br />veniam quis nostrud exercitation...</p>
			                    </div>
			                </div>

			                <div className="single-services left-gap mb-70 sm-mb-50">
			                    <div className="services-icon">
			                        <img 
			                        	src={servicesIcon2} 
			                        	alt="Service Icon"
			                        />
			                    </div>
			                    <div className="services-text">
			                        <h3 className="title"><a href="#">Admission</a></h3>
			                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit <br />veniam quis nostrud exercitation...</p>
			                    </div>
			                </div>

			                <div className="single-services">
			                    <div className="services-icon">
			                        <img 
			                        	src={servicesIcon3} 
			                        	alt="Service Icon"
			                        />
			                    </div>
			                    <div className="services-text">
			                        <h3 className="title"><a href="#">Dedicated Lounge</a></h3>
			                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit <br />veniam quis nostrud exercitation...</p>
			                    </div>
			                </div>
			            </Col>
			        </Row>
			    </Container>
			    <div className="shape-img hidden-md">
			        <img 
			        	src={servicesRightShape} 
			        	alt="Services Shape Image"
			        />
			    </div>
			</div>

			{/* About Part */}
			<div id="tcd-about" className="tcd-about">
			    <Row className="align-items-center margin-0">
			        <Col lg="6" className="padding-0 md-mb-50">
			            <div className="about-img">
			                <img 
			                	src={aboutImage1}
			                	alt="About Image" 
			                />
			            </div>
			        </Col>
			        <Col lg="6">
			            <div className="about-text">
				            <div className="sec-title left-shape">
				                <h2 className="title mb-20">Why Is Medical</h2>
				                <h4 className="subtitle mb-50">Lorem ipsum dolor sit amet consectetur adipisicing elit...</h4>
				            </div>
				            <ul className="listing mb-50">
				                <li>Feel like you are at Home Services.</li>
				                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</li>
				                <li>Medicies And Drug Store</li>
				                <li>Feel like Home Services</li>
				                <li>Save your Money and Time with us</li>
				                <li>Easy and Affordable Billing</li>
				                <li>Last list item or something</li>
				            </ul>
				            <div className="about-btn">
				                <a className="primary-btn" href="#">View More Details</a>
				            </div>
			            </div>
			        </Col>
			    </Row>
			    <div className="shape-img hidden-md">
			        <img 
			        	src={aboutRightShape} 
			        	alt="About Shape Image"
			        />
			    </div>
			</div>

			{/* Service Part */}
			<div id="tcd-services" className="tcd-services-tab pt-110 md-pt-70">
			    <Container>
			        <div className="tcd-nav-part gray-bg">
	                    <ul className="nav nav-tabs tcd-nav-tabs">
	                        <li><a className="active show" data-toggle="tab" href="#one">Orthopaedics</a></li>
	                        <li><a data-toggle="tab" href="#two">Cardiology</a></li>
	                        <li><a data-toggle="tab" href="#three">Neurology</a></li>
	                        <li><a data-toggle="tab" href="#four">Haematology</a></li>
	                    </ul>
	                </div>
			        <div className="tab-content tcd-tab-content">
			            <div id="one" className="single-tab-part tab-pane fade active show">
			                <Row className="align-items-center">
			                    <Col>
			                        <div className="single-tab">                                    
			                            <div className="img-part">
			                                <img 
			                                	src={servicesImage1}
			                                	alt="Services Image"
			                                />
			                            </div>
			                        </div>
			                    </Col>
			                    <Col>
			                        <div className="service-content">
			                            <div className="service-categories">
			                                <span className="subtitle">Services</span>
			                                <span className="title">Orthopaedics</span>
			                            </div>
			                            <p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae.</p>
			                            <div className="row">
			                                <div className="col-sm-6">
			                                    <ul className="listing mt-10">
			                                        <li>Qualified Doctors</li>
			                                        <li>24×7 Emergency Services</li>
			                                        <li>General Medical</li>
			                                    </ul>
			                                </div>
			                                <div className="col-sm-6">
			                                    <ul className="listing mt-10 xs-mt-0">
			                                        <li>Feel like Home Services</li>
			                                        <li>Outdoor Checkup</li>
			                                        <li>Easy and Affordable Billing</li>
			                                    </ul>
			                                </div>
			                            </div>
			                            <a className="primary-btn mt-30" href="#">View Details</a>
			                        </div>
			                    </Col>
			                </Row>
			            </div>
			            <div id="two" className="single-tab-part tab-pane fade">
			                <Row className="align-items-center">
			                    <Col>
			                        <div className="single-tab">
			                            <div className="img-part">
			                                <img 
			                                	src={servicesImage2}
			                                	alt="Services Image"
			                                />
			                            </div>
			                        </div>
			                    </Col>
			                    <Col>
			                        <div className="service-content">
			                            <div className="service-categories">
			                                <span className="subtitle">Services</span>
			                                <span className="title">Cardiology</span>
			                            </div>
			                            <p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae.</p>
			                            <div className="row">
			                                <div className="col-sm-6">
			                                    <ul className="listing mt-10">
			                                        <li>Qualified Doctors</li>
			                                        <li>24×7 Emergency Services</li>
			                                        <li>General Medical</li>
			                                    </ul>
			                                </div>
			                                <div className="col-sm-6">
			                                    <ul className="listing mt-10 xs-mt-0">
			                                        <li>Feel like Home Services</li>
			                                        <li>Outdoor Checkup</li>
			                                        <li>Easy and Affordable Billing</li>
			                                    </ul>
			                                </div>
			                            </div>
			                            <a className="primary-btn mt-30" href="#">View Details</a>
			                        </div>
			                    </Col>
			                </Row>
			            </div>
			            <div id="three" className="single-tab-part tab-pane fade">
			                <Row className="align-items-center">
			                    <Col>
			                        <div className="single-tab">
			                            <div className="img-part">
			                                <img 
			                                	src={servicesImage3}
			                                	alt="Services Image"
			                                />
			                            </div>
			                        </div>
			                    </Col>
			                    <Col>
			                        <div className="service-content">
			                            <div className="service-categories">
			                                <span className="subtitle">Services</span>
			                                <span className="title">Neurology</span>
			                            </div>
			                            <p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae.</p>
			                            <div className="row">
			                                <div className="col-sm-6">
			                                    <ul className="listing mt-10">
			                                        <li>Qualified Doctors</li>
			                                        <li>24×7 Emergency Services</li>
			                                        <li>General Medical</li>
			                                    </ul>
			                                </div>
			                                <div className="col-sm-6">
			                                    <ul className="listing mt-10 xs-mt-0">
			                                        <li>Feel like Home Services</li>
			                                        <li>Outdoor Checkup</li>
			                                        <li>Easy and Affordable Billing</li>
			                                    </ul>
			                                </div>
			                            </div>
			                            <a className="primary-btn mt-30" href="#">View Details</a>
			                        </div>
			                    </Col>
			                </Row>
			            </div>
			            <div id="four" className="single-tab-part tab-pane fade">
			                <Row className="align-items-center">
			                    <Col>
			                        <div className="single-tab">
			                            <div className="img-part">
			                                <img 
			                                	src={servicesImage4}
			                                	alt="Services Image"
			                                />
			                            </div>
			                        </div>
			                    </Col>
			                    <Col>
			                        <div className="service-content">
			                            <div className="service-categories">
			                                <span className="subtitle">Services</span>
			                                <span className="title">Haematology</span>
			                            </div>
			                            <p>One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, iste, architecto ullam tenetur quia nemo ratione tempora consectetur quos minus ut quo nulla ipsa aliquid neque molestias et qui sunt. Odit, molestiae.</p>
			                            <div className="row">
			                                <div className="col-sm-6">
			                                    <ul className="listing mt-10">
			                                        <li>Qualified Doctors</li>
			                                        <li>24×7 Emergency Services</li>
			                                        <li>General Medical</li>
			                                    </ul>
			                                </div>
			                                <div className="col-sm-6">
			                                    <ul className="listing mt-10 xs-mt-0">
			                                        <li>Feel like Home Services</li>
			                                        <li>Outdoor Checkup</li>
			                                        <li>Easy and Affordable Billing</li>
			                                    </ul>
			                                </div>
			                            </div>
			                            <a className="primary-btn mt-30" href="#">View Details</a>
			                        </div>
			                    </Col>
			                </Row>
			            </div>
			        </div>
			    </Container>
			</div>

			{/* Team Part */}
			<div id="tcd-team" className="tcd-team pt-110 pb-110 md-pt-70 md-pb-70">
			    <Container>
			        <div className="sec-title center mb-40">
			            <h2 className="title mb-20">Our Specialist</h2>
			            <p className="desc mb-0">There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum <br />Lorem ipsum dolor sit amet consectetur adipisicing elit <br />veniam quis nostrud exercitation...</p>
			        </div>
			        <Row className="team-member">
			        	<Col> 
			        		<div className="single-team">
			        		    <div className="team-img">
			        		        <img 
			        		        	src={teamImage1}
			        		        	alt="Team Image"
			        		        />
			        		        <div className="team-info">
			        		            <h3 className="title"><a href="#">Mira Smith</a></h3>
			        		            <p className="post">Heart Specialist</p>
			        		        </div>
			        		    </div>
			        		    <div className="team-desc">
			        		        <p className="desc">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Donec quam felis...</p>
			        		    </div>
			        		    <ul className="social-info">
			        		        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
			        		        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			        		        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			        		        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
			        		    </ul>
			        		</div>
			        	</Col>
			        	<Col> 
			        		<div className="single-team">
			        		    <div className="team-img">
			        		        <img 
			        		        	src={teamImage1}
			        		        	alt="Team Image"
			        		        />
			        		        <div className="team-info">
			        		            <h3 className="title"><a href="#">Mira Smith</a></h3>
			        		            <p className="post">Heart Specialist</p>
			        		        </div>
			        		    </div>
			        		    <div className="team-desc">
			        		        <p className="desc">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Donec quam felis...</p>
			        		    </div>
			        		    <ul className="social-info">
			        		        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
			        		        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			        		        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			        		        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
			        		    </ul>
			        		</div>
			        	</Col>
			        	<Col> 
			        		<div className="single-team">
			        		    <div className="team-img">
			        		        <img 
			        		        	src={teamImage1}
			        		        	alt="Team Image"
			        		        />
			        		        <div className="team-info">
			        		            <h3 className="title"><a href="#">Mira Smith</a></h3>
			        		            <p className="post">Heart Specialist</p>
			        		        </div>
			        		    </div>
			        		    <div className="team-desc">
			        		        <p className="desc">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Donec quam felis...</p>
			        		    </div>
			        		    <ul className="social-info">
			        		        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
			        		        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			        		        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			        		        <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
			        		    </ul>
			        		</div>
			        	</Col>
			        </Row>
			    </Container>
			</div>

			{/* Testimonial Part */}
			<div id="tcd-testimonial" className="tcd-testimonial">
			    <Container>
		            <Row className="testi-slider">
			            <Col>
			            	<div className="testi-item">
			            	    <div className="testi-img">
			            	        <img 
			            	        	className="quote" 
			            	        	src={quoteImage} 
			            	        	alt="Testimonial Image"
			            	        />
			            	    </div>
			            	    <div className="testi-info">
			            	        <h5 className="testi-title">Imelda M. Jefferson</h5>
			            	        <div className="testi-content">
		                                <p className="desc">But I must explain to you how all this to mistaken idea of denouncing But I must explain to you how all this to mistaken idea of denouncing idea of denouncing...</p>
		                            </div>
			            	    </div>
			            	</div>
			            </Col>
		            </Row>
			    </Container>
			</div>

			{/* Blog & Faq Part */}
			<div id="tcd-double-section" className="tcd-double-section pt-110 pb-110 md-pt-70 md-pb-70">
			    <Container>
				    <Row>
				    	<Col>
					    	<div className="tcd-faq">
					    	    <div className="sec-title mb-40">
					    	        <h2 className="title mb-20">Our Department</h2>
					    	        <p className="desc mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit <br />veniam quis nostrud exercitation...</p>
					    	    </div>
					    	    <div id="tcd-accordion" className="tcd-accordion">
					    	        <div className="accordion-item mb-15">
					    	            <div className="accordion-header" id="heading-1">
					    	            <h4 className="mb-0">
					    	                <button className="accordion-btn collapsed" data-toggle="collapse" data-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
					    	                    General Health Care
					    	                </button>
					    	            </h4>
					    	            </div>
					    	            <div id="collapse-1" className="collapse" aria-labelledby="heading-1" data-parent="#tcd-accordion">
					    	                <div className="accordion-body">
					    	                    <span className="d-block mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit veniam quis nostrud exercitation A collection of textile samples lay spread out on the table - Samsa was a travelling</span>
					    	                    <span className="mb-0">salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine...</span>
					    	                </div>
					    	            </div>
					    	        </div>
					    	        <div className="accordion-item mb-15">
					    	            <div className="accordion-header" id="heading-2">
					    	            <h4 className="mb-0">
					    	                <button className="accordion-btn collapsed" data-toggle="collapse" data-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
					    	                    Cancer Care
					    	                </button>
					    	            </h4>
					    	            </div>
					    	            <div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#tcd-accordion">
					    	                <div className="accordion-body">
					    	                    <span className="d-block mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit veniam quis nostrud exercitation A collection of textile samples lay spread out on the table - Samsa was a travelling</span>
					    	                    <span className="mb-0">salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine...</span>
					    	                </div>
					    	            </div>
					    	        </div>
					    	        <div className="accordion-item mb-15">
					    	            <div className="accordion-header" id="heading-3">
					    	            <h4 className="mb-0">
					    	                <button className="accordion-btn collapsed" data-toggle="collapse" data-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
					    	                    Dental Cleaning Care
					    	                </button>
					    	            </h4>
					    	            </div>
					    	            <div id="collapse-3" className="collapse" aria-labelledby="heading-3" data-parent="#tcd-accordion">
					    	                <div className="accordion-body">
					    	                    <span className="d-block mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit veniam quis nostrud exercitation A collection of textile samples lay spread out on the table - Samsa was a travelling</span>
					    	                    <span className="mb-0">salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine...</span>
					    	                </div>
					    	            </div>
					    	        </div>
					    	        <div className="accordion-item">
					    	            <div className="accordion-header" id="heading-4">
					    	            <h4 className="mb-0">
					    	                <button className="accordion-btn" data-toggle="collapse" data-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
					    	                    Nurology Department
					    	                </button>
					    	            </h4>
					    	            </div>
					    	            <div id="collapse-4" className="collapse show" aria-labelledby="heading-4" data-parent="#tcd-accordion">
					    	                <div className="accordion-body mb-0">
					    	                    <span className="d-block mb-30">Lorem ipsum dolor sit amet consectetur adipisicing elit veniam quis nostrud exercitation A collection of textile samples lay spread out on the table - Samsa was a travelling</span>
					    	                    <span className="mb-0">salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine...</span>
					    	                </div>
					    	            </div>
					    	        </div>
					    	    </div>
					    	</div>
					    </Col>
					    <Col>
					    	<div id="tcd-blog" className="tcd-blog">
					    	    <div className="sec-title mb-40">
					    	        <h2 className="title mb-20">Our Blog</h2>
					    	        <p className="desc mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit <br />veniam quis nostrud exercitation...</p>
					    	    </div>
					    	    <div className="blog-item mb-25 wow fadeInUp" data-wow-duration="800ms" data-wow-delay="800ms">
					    	        <div className="blog-img">
					    	            <a href="#">
					    	            	<img 
					    	            		src={blogImage1} 
					    	            		alt="Blog Image"
					    	            	/>
					    	            </a>
					    	        </div>
					    	        <div className="blog-content">
					    	            <div className="top-part">
					    	                <span className="date">12 January</span>
					    	            </div>
					    	            <div className="content-part">
					    	                <h4 className="title"><a href="#">Dental Operation</a></h4>
					    	                <p className="desc">A wonderful serenity has taken <br />possessionof my entire soul like these....</p>
					    	            </div>
					    	            <div className="comment-part">
					    	                <span><i className="fa fa-thumbs-o-up"></i> 08</span>
					    	                <span><i className="fa fa-comment-o"></i> 01</span>
					    	            </div>
					    	        </div>
					    	    </div>
					    	    <div className="blog-item wow fadeInUp" data-wow-duration="800ms" data-wow-delay="800ms">
					    	        <div className="blog-img">
					    	            <a href="#">
					    	            	<img 
					    	            		src={blogImage2} 
					    	            		alt="Blog Image"
					    	            	/>
					    	            </a>
					    	        </div>
					    	        <div className="blog-content">
					    	            <div className="top-part">
					    	                <span className="date">12 January</span>
					    	            </div>
					    	            <div className="content-part">
					    	                <h4 className="title"><a href="#">Dental Operation</a></h4>
					    	                <p className="desc">A wonderful serenity has taken <br />possessionof my entire soul like these....</p>
					    	            </div>
					    	            <div className="comment-part">
					    	                <span><i className="fa fa-thumbs-o-up"></i> 08</span>
					    	                <span><i className="fa fa-comment-o"></i> 01</span>
					    	            </div>
					    	        </div>
					    	    </div>
					    	</div>
					    </Col>
				    </Row>
			    </Container>
			</div>

			{/* Footer Part */}
			<div id="tcd-timing-newsletter" className="tcd-timing-newsletter newsletter-bg">
			    <Row className="align-items-center margin-0">
			        <Col lg="7">
			            <div className="tcd-newsletter">
			                <h2 className="title">Ask Your Own Question</h2>
			                <h5 className="subtitle">A collection of textile samples lay spread out on the table samples lay...</h5>
			                <div className="newsletter-part">
			                    <form className="mb-0">
			                        <div className="form-group mb-0">
			                            <input 
			                            	type="email" 
			                            	name="your-email" 
			                            	placeholder="Type Your Message..." 
			                            />
			                            <button className="btn-newsletter"><i className="fa fa-long-arrow-right"></i></button>
			                        </div>
			                    </form>
			                </div>
			            </div>
			        </Col>

			        <Col lg="5" className="pr-0 md-pl-0">
			            <div className="tcd-time-table">
			                <h2 className="timing-title mb-10">Working Hours</h2>
			                <h5 className="subtitle mb-20">Checkout EMedical's Working Time </h5>
			                <div className="table-part">
			                    <div className="single-time pt-0">
			                        <span className="day">Monday</span>
			                        <span className="time">8AM-9PM</span>
			                        <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
			                    </div>
			                    <div className="single-time">
			                        <span className="day">Tuesday</span>
			                        <span className="time">8AM-9PM</span>
			                        <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
			                    </div>
			                    <div className="single-time">
			                        <span className="day">Wednesday</span>
			                        <span className="time">8AM-9PM</span>
			                        <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
			                    </div>
			                    <div className="single-time">
			                        <span className="day">Thursday</span>
			                        <span className="time">8AM-9PM</span>
			                        <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
			                    </div>
			                    <div className="single-time">
			                        <span className="day">Friday</span>
			                        <span className="time">8AM-9PM</span>
			                        <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
			                    </div>
			                    <div className="single-time closed">
			                        <span className="day">Saturday-Sunday</span>
			                        <span className="time">Closed</span>
			                        <span className="btn-part"><a className="primary-btn timing-btn" href="#">Book Now <i className="fa fa-clock-o"></i></a></span>
			                    </div>
			                </div>
			                <h2 className="timing-title mb-20">Need Flexible Time?</h2>
			                <a className="primary-btn icon-btn wow fadeInUp" data-wow-duration="800ms" data-wow-delay="800ms" href="#">Suggest Checkup Time <i className="fa fa-long-arrow-right"></i></a>
			            </div>
			        </Col>
			    </Row>
			</div>

			{/* Footer Part */}
			<div id="tcd-footer" className="tcd-footer pt-110 md-pt-70">
			    <Container>
			    	<div className="footer-top-part">
				        <Row>
				            <Col>
				                <div className="footer-widget">
				                	<h4 className="footer-title">Quick Links</h4>
				                	<ul className="footer-menu left">
				                	    <li><a href="#">Doctor</a></li>
				                	    <li><a href="#">Services</a></li>
				                	    <li><a href="#">Gallery</a></li>
				                	    <li><a href="#">News</a></li>
				                	</ul>
				                	<ul className="footer-menu right">
				                	    <li><a href="#">Terms of Use</a></li>
				                	    <li><a href="#">Privacy & Policy</a></li>
				                	    <li><a href="#">Disclaimer</a></li>
				                	    <li><a href="#">Sitemap</a></li>
				                	</ul>				                    
				                </div>
				            </Col>
				            <Col>
				                <div className="footer-widget">
				                    <h4 className="footer-title">Opening Hours</h4>
				                    <div className="footer-schedule">
	                                    <ul className="appointment">
	                                        <li><span className="date">Monday - Friday</span><span className="time">9 am - 4 pm</span></li>
	                                        <li><span className="date">Monday - Friday</span><span className="time">9 am - 4 pm</span></li>
	                                        <li><span className="date">Monday - Friday</span><span className="time">9 am - 4 pm</span></li>
	                                    </ul>
	                                </div>
				                </div>
				            </Col>
				            <Col>
				                <div className="footer-widget">
				                    <h4 className="footer-title">Contact Us</h4>
				                    <div className="footer-desc">
	                                    <p>Lorem ipsum dolor sit amet,<br /> ipsum consectetuer</p>
	                                    <p className="mb-10">Phone: <a className="phone" href="tel:01234567">+088-123456</a></p>
	                                    <p>Email: <a className="email" href="mailto:your@website.com">your@website.com</a></p>
	                                </div>
				                </div>
				            </Col>
				        </Row>
			        </div>
			        <div className="footer-bottom-part text-center pt-75 pb-100 md-pt-35 md-pb-60">
			            <p className="copyright mb-0">Copyright 2018-2020 Medical Theme by <a href="#">The Codude</a></p>
			        </div>
			    </Container>
			</div>
		</div>
	)
}

export default HomePage; 