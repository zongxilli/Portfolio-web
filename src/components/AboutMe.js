import React from 'react';
import me from '../images/me1.jpg';

const AboutMe = () => {
	return (
		<div id="about" className="container py-5" >
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
						<img className="profile-img" src={me} alt="me..." />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">About Me</h1>
					<p>
						Hi! I am Zongxi(Kenny). I have been developing websites over 1
						years. Technologies I use is MERN(MongoDB, Express, ReactJS and
						NodeJS). Feel free to contact me at any time!
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
