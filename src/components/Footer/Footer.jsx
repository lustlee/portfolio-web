import React from 'react';
import './Footer.css'
import {FaPinterest} from "react-icons/fa";
import {SiReddit} from "react-icons/si";
import {IoLogoTwitter} from "react-icons/io";
const Footer = () => {
	return (
			<footer>
				<a href="#" className='footer__logo'>ARAMUSHI</a>

				<ul className='permalinks'>
					<li><a href="#">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#experience">Experience</a></li>
					<li><a href="#services">Services</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#testimonials">Testimonials</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>

				<div className="footer__socials">
					<a href="https://www.pinterest.com/LustLee/">
						<FaPinterest/>
					</a>
					<a href="https://twitter.com/">
						<IoLogoTwitter/>
					</a>
					<a href="https://www.reddit.com/user/LustLee">
						<SiReddit/>
					</a>
				</div>

				<div className="footer__copyright">
					<small>&copy; ARAMUSHI. All rights reserved.</small>
				</div>

			</footer>
	);
};

export default Footer;
