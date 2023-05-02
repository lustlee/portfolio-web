import React, {useEffect} from 'react';
import './Portfolio.css';

import data from '../../constants/data-portfolio';
import {useInView} from "react-intersection-observer";
import {observerSection} from "../../helpers";
const Portfolio = () => {
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			observerSection('portfolio-nav');
		}
	}, [inView]);

	return (
			<section id='portfolio' ref={ref}>
				<h5>My Recent Work</h5>
				<h2>Portfolio</h2>

				<div className="container portfolio__container">
					{
						data.map(({id, image, title, github, demo}) => {
							return (
									<article key={id} className='portfolio__item'>
										<div className='portfolio__item-image'>
											<img src={image} alt={title}/>
										</div>
										<h3>{title}</h3>
										<div className="portfolio__item-cta">
											<a href={github} className='btn' target='_blank'>GitHub</a>
											<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
										</div>
									</article>
							)
						})
					}
				</div>

			</section>
	);
};

export default Portfolio;
