import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faGoogle,
	faAirbnb,
	faReact,
	faNodeJs,
	faAws,
	faYarn,
	faNpm,
	faGithub,
	faCodepen,
	faConnectdevelop,
	faPushed,
} from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
	return (
		<div id="services" className="services">
			<h1 className="py-5">Skills</h1>
			<div className="container">
				<div className="row">
					{/******************************/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon
									className="icon1"
									icon={faNodeJs}
									size="2x"
									spin
								/>
							</div>
							<h3>Frameworks</h3>
							<p>Express, Node.js, Bootstrap, Semantic UI, Material UI</p>
						</div>
					</div>
					{/******************************/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon
									className="icon2"
									icon={faReact}
									size="2x"
									spin
								/>
							</div>
							<h3>Libraries</h3>
							<p>React.js, Redux, Mongoose, Sequelize</p>
						</div>
					</div>
					{/******************************/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon
									className="icon3"
									icon={faNpm}
									size="2x"
									spin
								/>
							</div>
							<h3>Tools</h3>
							<p>
								MongoDB, PostgreSQL, GraphQL, Knex, Firebase, AWS S3, AWS Cognito,
								
							</p>
						</div>
					</div>
					{/******************************/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon
									className="icon4"
									icon={faConnectdevelop}
									size="2x"
									spin
								/>
							</div>
							<h3>Programming Language</h3>
							<p>JavaScript, Java, Python, C, HTML, CSS, R language </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
