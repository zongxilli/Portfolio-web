import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
	return (
		<div id="services" className="services">
			<h1 className="py-5">My Skills</h1>
			<div className="container">
				<div className="row">
					{/******************************/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
							</div>
							<h3>Framework</h3>
							<p>Express NodeJs Bootstrap Semantic UI ......</p>
						</div>
					</div>
					{/******************************/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
							</div>
							<h3>Language</h3>
							<p>JavaScript/JSX Java C Python R Html CSS ......</p>
						</div>
					</div>
					{/******************************/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon
									className="icon"
									icon={faFacebookF}
									size="2x"
								/>
							</div>
							<h3>Library</h3>
							<p>
								ReactJs Redux......
							</p>
						</div>
					</div>
					{/******************************/}
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="box">
							<div className="circle">
								<FontAwesomeIcon className="icon" icon={faGoogle} size="2x" />
							</div>
							<h3>Database</h3>
							<p>MongoDB PostgreSQL Firebase</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
