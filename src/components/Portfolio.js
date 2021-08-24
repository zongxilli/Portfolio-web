import React from 'react';
import img1 from '../images/Project Image (1).png';
import img11 from '../images/Project Image (2).png';
import img2 from '../images/Project Image (3).png';
import img3 from '../images/003.jpg';
import img4 from '../images/004.png';
import ComingSoon from '../images/Coming Soon.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

export const Portfolio = () => {
	//! Project 1 ----------------------------------------------------------------
	const openPopupboxProject1 = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={img11}
					alt="E-commerce"
				/>
				<p>E-Commerce App (Using React Redux Express Node.Js MongoDB...)</p>
				<b>Link: </b>
				<a
					className="hyper-link"
					onClick={() => window.open('https://kennysshop.herokuapp.com')}>
					https://kennysshop.herokuapp.com
				</a>
				<br />
				<b>GitHub: </b>
				<a
					className="hyper-link"
					onClick={() => window.open('https://github.com/zongxilli/E-shop')}>
					https://github.com/zongxilli/E-shop
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: popupboxConfigProject1,
		});
	};

	const popupboxConfigProject1 = {
		titleBar: {
			enable: true,
			text: 'Postcard Shop',
		},
		fadeIn: true,
		fadeInSpeed: 300,
	};

	//! Project 2 ----------------------------------------------------------------
	const openPopupboxProject2 = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={img2}
					alt="GeoLocation Share"
				/>
				<p>
					GeoLocationPin App (Using React Apollo Node.Js MongoDB React-Map-GL GraphQL
					 ...)
				</p>
				<b>Link: </b>
				<a
					className="hyper-link"
					onClick={() => window.open('https://geoshares.netlify.app')}>
					https://geoshares.netlify.app
				</a>
				<br />
				<b>GitHub: </b>
				<a
					className="hyper-link"
					onClick={() => window.open('https://github.com/zongxilli/GeoShares')}>
					https://github.com/zongxilli/GeoShares
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: popupboxConfigProject2,
		});
	};

	const popupboxConfigProject2 = {
		titleBar: {
			enable: true,
			text: 'GeoShares',
		},
		fadeIn: true,
		fadeInSpeed: 300,
	};

	//! Project 3 ----------------------------------------------------------------
	const openPopupboxProject3 = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={ComingSoon}
					alt="This is my project3 ..."
				/>
				<p>This is the introduction of my project 3</p>
				<b>Link: </b>
				{/* <a
					className="hyper-link"
					onClick={() =>
						window.open(
							'https://my-personal-website-o77luofz6-zongxilli.vercel.app/'
						)
					}>
					https://my-personal-website-o77luofz6-zongxilli.vercel.app/
				</a> */}
				<br />
				<b>GitHub: </b>
				{/* <a
					className="hyper-link"
					onClick={() =>
						window.open('https://github.com/zongxilli/Toy-Portfolio-web')
					}>
					https://github.com/zongxilli/Toy-Portfolio-web
				</a> */}
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: popupboxConfigProject3,
		});
	};

	const popupboxConfigProject3 = {
		titleBar: {
			enable: true,
			text: 'This is the title of pj3',
		},
		fadeIn: true,
		fadeInSpeed: 300,
	};

	//! Project 4 ----------------------------------------------------------------
	const openPopupboxProject4 = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={ComingSoon}
					alt="This is my project4 ..."
				/>
				<p>This is the introduction of my project 4</p>
				<b>Link: </b>
				{/* <a
					className="hyper-link"
					onClick={() =>
						window.open(
							'https://my-personal-website-o77luofz6-zongxilli.vercel.app/'
						)
					}>
					https://my-personal-website-o77luofz6-zongxilli.vercel.app/
				</a> */}
				<br />
				<b>GitHub: </b>
				{/* <a
					className="hyper-link"
					onClick={() =>
						window.open('https://github.com/zongxilli/Toy-Portfolio-web')
					}>
					https://github.com/zongxilli/Toy-Portfolio-web
				</a> */}
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: popupboxConfigProject4,
		});
	};

	const popupboxConfigProject4 = {
		titleBar: {
			enable: true,
			text: 'This is the title of pj4',
		},
		fadeIn: true,
		fadeInSpeed: 300,
	};

	return (
		<div id="portfolio" className="portfolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5">Projects</h1>

				<div className="image-box-wrapper row justify-content-center">
					<div className="portfolio-image-box" onClick={openPopupboxProject1}>
						<img className="portfolio-image" src={img1} alt="Project 1" />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					{/*-----------------------------------------------------------*/}

					<div className="portfolio-image-box" onClick={openPopupboxProject2}>
						<img className="portfolio-image" src={img2} alt="Project 2" />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					{/*-----------------------------------------------------------*/}

					<div className="portfolio-image-box" onClick={openPopupboxProject3}>
						<img className="portfolio-image" src={ComingSoon} alt="Project 3" />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>

					{/*-----------------------------------------------------------*/}

					<div className="portfolio-image-box" onClick={openPopupboxProject4}>
						<img className="portfolio-image" src={ComingSoon} alt="Project 4" />
						<div className="overflow"></div>
						<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
					</div>
				</div>
			</div>
			<PopupboxContainer {...popupboxConfigProject1} />
			<PopupboxContainer {...popupboxConfigProject2} />
			<PopupboxContainer {...popupboxConfigProject3} />
			<PopupboxContainer {...popupboxConfigProject4} />
		</div>
	);
};

export default Portfolio;
