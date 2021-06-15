import React from 'react';
import img1 from '../images/006.jpg';
import img2 from '../images/002.png';
import img3 from '../images/003.jpg';
import img4 from '../images/004.png';

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
					src={img1}
					alt="This is my project1 ..."
				/>
				<p>This is the introduction of my project 1</p>
				<b>Demo: </b>
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							'https://my-personal-website-o77luofz6-zongxilli.vercel.app/'
						)
					}>
					https://my-personal-website-o77luofz6-zongxilli.vercel.app/
				</a>
				<br />
				<b>GitHub: </b>
				<a
					className="hyper-link"
					onClick={() =>
						window.open('https://github.com/zongxilli/Toy-Portfolio-web')
					}>
					https://github.com/zongxilli/Toy-Portfolio-web
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigProject1 = {
		titleBar: {
			enable: true,
			text: 'This is the title',
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
					alt="This is my project2 ..."
				/>
				<p>This is the introduction of my project 2</p>
				<b>Demo: </b>
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							'https://my-personal-website-o77luofz6-zongxilli.vercel.app/'
						)
					}>
					https://my-personal-website-o77luofz6-zongxilli.vercel.app/
				</a>
				<br />
				<b>GitHub: </b>
				<a
					className="hyper-link"
					onClick={() =>
						window.open('https://github.com/zongxilli/Toy-Portfolio-web')
					}>
					https://github.com/zongxilli/Toy-Portfolio-web
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigProject2 = {
		titleBar: {
			enable: true,
			text: 'This is the title',
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
					src={img3}
					alt="This is my project3 ..."
				/>
				<p>This is the introduction of my project 3</p>
				<b>Demo: </b>
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							'https://my-personal-website-o77luofz6-zongxilli.vercel.app/'
						)
					}>
					https://my-personal-website-o77luofz6-zongxilli.vercel.app/
				</a>
				<br />
				<b>GitHub: </b>
				<a
					className="hyper-link"
					onClick={() =>
						window.open('https://github.com/zongxilli/Toy-Portfolio-web')
					}>
					https://github.com/zongxilli/Toy-Portfolio-web
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigProject3 = {
		titleBar: {
			enable: true,
			text: 'This is the title',
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
					src={img4}
					alt="This is my project2 ..."
				/>
				<p>This is the introduction of my project 3</p>
				<b>Demo: </b>
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							'https://my-personal-website-o77luofz6-zongxilli.vercel.app/'
						)
					}>
					https://my-personal-website-o77luofz6-zongxilli.vercel.app/
				</a>
				<br />
				<b>GitHub: </b>
				<a
					className="hyper-link"
					onClick={() =>
						window.open('https://github.com/zongxilli/Toy-Portfolio-web')
					}>
					https://github.com/zongxilli/Toy-Portfolio-web
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};

	const popupboxConfigProject4 = {
		titleBar: {
			enable: true,
			text: 'This is the title',
		},
		fadeIn: true,
		fadeInSpeed: 300,
	};

	return (
		<div>
			<div className="portfolio-wrapper">
				<div className="container">
					<h1 className="text-uppercase text-center py-5">portfolio</h1>

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
							<img className="portfolio-image" src={img3} alt="Project 3" />
							<div className="overflow"></div>
							<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
						</div>

						{/*-----------------------------------------------------------*/}

						<div className="portfolio-image-box" onClick={openPopupboxProject4}>
							<img className="portfolio-image" src={img4} alt="Project 4" />
							<div className="overflow"></div>
							<FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
						</div>
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
