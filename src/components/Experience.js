import React from 'react';

const Experience = () => {
	return (
		<div id="experience" className="experience">
			<div className="d-flex justify-content-center my-5">
				<h1>experience</h1>
			</div>
			<div className="container experience-wrapper">
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2015 - 2021</h3>
						<p>
							Honours Bachelor of Science degree at University of Toronto at
							Scarborough (Mathematics and Statistics double majors)
						</p>
					</div>
				</div>
				{/*-----------------------------------------------------*/}
				<div className="timeline-block timeline-block-left">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2021 Summer</h3>
						<p>Internship at Fintelics (Software Developer)</p>
					</div>
				</div>
				{/*-----------------------------------------------------*/}
				<div className="timeline-block timeline-block-right">
					<div className="marker"></div>
					<div className="timeline-content">
						<h3>2021 - Present</h3>
						<p>
							Advanced Diploma at Centennial College (Software Engineering
							Technology)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
