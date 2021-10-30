import React from 'react';

const Experience = () => {
	return (
		<div id='experience' className='experience'>
			<div className='d-flex justify-content-center my-5'>
				<h1>experiences</h1>
			</div>
			<div className='container experience-wrapper'>
				<div className='timeline-block timeline-block-right'>
					<div className='marker'></div>
					<div className='timeline-content'>
						<h3>2015 - 2021</h3>
						<p>
							BS in Math & Stats from the University of Toronto
							Scarborough
						</p>
					</div>
				</div>
				{/*-----------------------------------------------------*/}
				<div className='timeline-block timeline-block-left'>
					<div className='marker'></div>
					<div className='timeline-content'>
						<h3>2021 May - Aug</h3>
						<p>Software Developer at Fintelics</p>
					</div>
				</div>
				{/*-----------------------------------------------------*/}
				<div className='timeline-block timeline-block-right'>
					<div className='marker'></div>
					<div className='timeline-content'>
						<h3>2021 Nov - Present</h3>
						<p>Full Stack Developer at Mosaic Manufacturing</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
