import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	LinkedinShareButton,
	LinkedinIcon,
	WhatsappShareButton,
	WhatsappIcon,
} from 'react-share';

const Footer = () => {
	return (
		<div className="footer">
			<div classNama="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p>North York, Ontario, Canada</p>
						</div>
						<div className="d-flex">
							<a href="tel:647-866-4668">+1(647)866-4668</a>
						</div>
						<div className="d-flex">
							<p>Zongxi2014@gmail.com</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								<a className="footer-nav">Home</a>
								<br />
								<a className="footer-nav">About Me</a>
								<br />
								<a className="footer-nav">My Skills</a>
							</div>
							<div className="col">
								<a className="footer-nav">Experience</a>
								<br />
								<a className="footer-nav">My Projects</a>
								<br />
								<a className="footer-nav">Contacts</a>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
						<div className="d-flex justify-content-center">
							<FacebookShareButton
								url={'https://www.facebook.com/Kenny.Zongxi.li/'}
								hashtag="#javascript">
								<FacebookIcon className="mx-3" size={36} round="true" />
							</FacebookShareButton>
							<TwitterShareButton url={'https://twitter.com/xiaokennya'}>
								<TwitterIcon className="mx-3" size={36} round="true" />
							</TwitterShareButton>
							<WhatsappShareButton url={'https://wa.me/6478664668'}>
								<WhatsappIcon className="mx-3" size={36} round="true" />
							</WhatsappShareButton>
							<LinkedinShareButton
								url={'https://www.linkedin.com/in/zongxi-kenny-li-zongxi2014'}>
								<LinkedinIcon className="mx-3" size={36} round="true" />
							</LinkedinShareButton>
						</div>
						<p className="pt-3 text-center">
							Copyright&copy;
							{new Date().getFullYear()}&nbsp;Zongxi Li | All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
