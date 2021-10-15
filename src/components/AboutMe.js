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
						Hi! I am Zongxi(Kenny), I am a new grad in 2021 with a
						Bachelor's degree in Mathematics & Statistics from the
						University of Toronto Scarborough.
					</p>
					<p>
						I am good at developing full-stack React applications
						especially with Redux, Node.js, Express, MongoDB,
						PostgreSQL and I have experience in AWS like S3,
						Cognito, also google APIs & firebase ...
					</p>
					<p>
						What I did in my past internship: <br />
						- Designed and implemented a powerful image detection &
						annotation React application with React, Redux, Express,
						Node.js, Bootstrap, Sequelize, Mongoose ... It is able
						to draw, move and delete many shapes with the
						auto-complete and zoom in/out feature, also it is able
						to store the relative coordinates data interacting with
						2 backend servers of 2 databases (PostgreSQL & MongoDB)
						<br />- Created responsive UI with Semantic UI and
						Bootstrap <br />
						- Achieved MongoDB and PostgreSQL databases connection
						and migration with Mongoose, Knex and Sequelize
						<br /> - Managed user authentication and authorization
						with AWS Cognito. Integrated AWS S3 into the application
						for storing and retrieving data
						<br /> - Created RESTful APIs with Node.js & Express and
						use Axios & Cors to make synchronize HTTP requests and
						promise to APIs
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
