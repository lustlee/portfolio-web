import React, {useEffect} from 'react';
import CTA from "./CTA";
import ME from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials";
import './Header.css';
import {useInView} from "react-intersection-observer";
import {observerSection} from "../../helpers";
const Header = () => {
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			observerSection('home-nav');
		}
	}, [inView]);
	return (
			<header ref={ref}>
				<div className="container header__container">
					<h5>Hello I'm</h5>
					<h1>Ramazan Tokoshev</h1>
					<h5 className="text-light">FullStack Developer</h5>
					<CTA />
					<HeaderSocials />

					<div className="me">
						<img src={ME} alt=""/>
					</div>

					<a href="#contact" className='scroll__down'>Scroll Down</a>


				</div>
			</header>
	);
};

export default Header;
