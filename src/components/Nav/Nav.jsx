import React, {useState} from 'react';
import './Nav.css';
import {BiHomeHeart, BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {AiOutlineUser} from "react-icons/ai";
import {RiServiceLine} from "react-icons/ri";
import {observerSection} from "../../helpers";
import {BsBriefcase} from "react-icons/bs";

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');

	return (
			<nav>
				<a href="#"
				   id="home-nav"
				   onClick={() => observerSection('home-nav')}
				   className="t"
				><BiHomeHeart/></a>
				<a href="#about"
				   id="about-nav"
				   onClick={() => observerSection('about-nav')}
				   className="t"
				><AiOutlineUser/></a>
				<a href="#experience"
				   id="experience-nav"
				   onClick={() => observerSection('experience-nav')}
				   className="t"
				><BiBook/></a>
				<a href="#services"
				   id="services-nav"
				   onClick={() => observerSection('services-nav')}
				   className="t"
				><RiServiceLine/></a>
				<a href="#portfolio"
				   id="portfolio-nav"
				   onClick={() => observerSection('portfolio-nav')}
				   className="t"
				><BsBriefcase/></a>
				<a href="#contact"
				   id="contact-nav"
				   onClick={() => observerSection('contact-nav')}
				   className="t"
				><BiMessageSquareDetail/></a>
			</nav>
	);
};


export default Nav;
