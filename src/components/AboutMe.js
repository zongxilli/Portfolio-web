import React from 'react';
import me from '../images/me1.jpg';

const AboutMe = () => {
	return (
		<div id="about" className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
						<img className="profile-img" src={me} alt="me..." />
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">About Me</h1>
					<p>
						Hi! I am Zongxi(Kenny), I enjoy designing and building fullstack Web
						Applications also I am very eager to learn the newest technologies
						and use them into my projects!
					</p>
					<p>
						What I did in my past internship: <br />
						- Designed and implemented an image detection web application with
						React and Node.js<br />
						- Created responsive UI with Semantic UI and Bootstrap <br />
						- Achieved MongoDB and PostgreSQL databases connection and migration
						with Mongoose, Knex and Sequelize
						<br /> - Managed user authentication and authorization with AWS
						Cognito. Integrated AWS S3 into the application for storing and
						retrieving data
						<br /> - Created RESTful APIs with Node.js & Express and use Axios &
						Cors to make synchronize HTTP requests and promise to APIs
						<br /> - Made a Canvas that is able to draw, move and delete many
						shapes with the auto-complete feature, also it is able to store the
						data of drawing and interact with backend APIs
					</p>
					<p>
						I am currently seeking for a developer job, feel free to contact me
						at anytime!
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
