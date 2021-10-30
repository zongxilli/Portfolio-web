import React from 'react';
import me from '../images/me3.jpg';

const AboutMe = () => {
	return (
		<div id='about' className='container py-5'>
			<div className='row'>
				<div className='col-lg-6 col-xm-12'>
					<div className='photo-wrap mb-5'>
						<img className='profile-img' src={me} alt='me...' />
					</div>
				</div>
				<div className='col-lg-6 col-xm-12'>
					<h1 className='about-heading'>About Me</h1>
					<p>
						<br />
						Hi! I am Zongxi(Kenny), I graduated from the University
						of Toronto Scarborough with an Honours Bachelor of
						Science degree in Mathematics & Statistics in 2021
						<br />
						<br />
						The interesting thing is that I found I love
						programming much more than mathematics and statistics in
						the last year of my study at UofT...
						<br />
						<br />
						But fortunately, I am a full stack developer at Mosaic
						Manufacturing now
						<br />
						<br />
						Nobody knew that in the future what matter will have :)
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
