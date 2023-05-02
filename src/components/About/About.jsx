import React, {useEffect} from 'react';
import './About.css';
import ME from '../../assets/me.png'
import {FaAward, FaUsers} from 'react-icons/fa';
import {VscFolderActive} from 'react-icons/vsc';
import {useInView} from "react-intersection-observer";
import {observerSection} from "../../helpers";
const About = () => {

	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			observerSection('about-nav');
		}
	}, [inView]);

	return (
			<section id='about' ref={ref}>
				<h5>Get to Know</h5>
				<h2>About Me</h2>

				<div className="container about__container">
					<div className="about__me">
						<div className="about__me-image">
							<img src={ME} alt="About me"/>
						</div>
					</div>

					<div className="about__content">
						<div className="about__cards">
							<article className='about__card'>
								<FaAward className='about__icon'/>
								<h5>Experience</h5>
								<small>1.5+ Years Working</small>
							</article>
							<article className='about__card'>
								<FaUsers className='about__icon'/>
								<h5>Clients</h5>
								<small>50+ Worldwide</small>
							</article>
							<article className='about__card'>
								<VscFolderActive className='about__icon'/>
								<h5>Projects</h5>
								<small>20+ Completed</small>
							</article>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda deserunt ex hic inventore maxime quaerat reiciendis sapiente! Illo ipsa maxime, minus mollitia quidem sint voluptate? Ab enim fuga praesentium repellat.
						</p>
						<a href="#contact" className='btn btn-primary'>Talk to me</a>
					</div>
				</div>
			</section>
	);
};

export default About;