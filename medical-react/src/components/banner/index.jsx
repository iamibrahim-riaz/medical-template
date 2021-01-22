import Header from '../header'

import { Container, Row, Col } from 'reactstrap';

// Import Assets
import videoIcon from '../../assets/images/video-icon.svg';


function Banner() {
	return(
	    <div id="tcd-banner" className="tcd-banner">
			{/* Header Part */}
		    <Header />

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
	)
}

export default Banner