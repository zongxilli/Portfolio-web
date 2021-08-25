import React from 'react';
import { Link } from 'react-scroll';
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
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
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
								<a className="footer-nav">
									<Link smooth={true} to="home" offset={-110}>
										Home
									</Link>
								</a>
								<br />
								<a className="footer-nav">
									<Link smooth={true} to="about" offset={-110}>
										About Me
									</Link>
								</a>
								<br />
								<a className="footer-nav">
									<Link smooth={true} to="services" offset={-110}>
										Skills
									</Link>
								</a>
							</div>
							<div className="col">
								<a className="footer-nav">
									<Link smooth={true} to="experience" offset={-110}>
										Experiences
									</Link>
								</a>
								<br />
								<a className="footer-nav">
									<Link smooth={true} to="portfolio" offset={-110}>
										Projects
									</Link>
								</a>
								<br />
								<a className="footer-nav">
									<Link smooth={true} to="contacts" offset={-110}>
										Contacts
									</Link>
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
						<div className="d-flex justify-content-center">
							<SocialIcon
								className="mx-3"
								style={{ height: 36, width: 36 }}
								bgColor="white"
								url="https://github.com/zongxilli"
							/>
							<SocialIcon
								className="mx-3"
								style={{ height: 36, width: 36 }}
								url="https://www.linkedin.com/in/zongxi-kenny-li-zongxi2014"
							/>
							<SocialIcon
								className="mx-3"
								style={{ height: 36, width: 36 }}
								url="https://www.instagram.com/kenniii3"
							/>
							<SocialIcon
								className="mx-3"
								style={{ height: 36, width: 36 }}
								url="https://wa.me/16478664668"
							/>
							{/* <FacebookShareButton
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
							</LinkedinShareButton> */}
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
