import React, {useEffect} from 'react';
import './Services.css';
import {BsCheckLg} from "react-icons/bs";
import {useInView} from "react-intersection-observer";
import {observerSection} from "../../helpers";
const Services = () => {
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			observerSection('services-nav');
		}
	}, [inView]);

	return (
			<section id='services' ref={ref}>
				<h5>What I Offer</h5>
				<h2>Services</h2>

				<div className='container services__container'>


					<article className='service'>
						<div className='service__head'>
							<h3>Frontend Develop</h3>
						</div>
						<ul className='service__list'>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
						</ul>
					</article>

					<article className='service'>
						<div className='service__head'>
							<h3>Full Web Develop</h3>
						</div>
						<ul className='service__list'>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
						</ul>
					</article>

					<article className='service'>
						<div className='service__head'>
							<h3>Backend Develop</h3>
						</div>
						<ul className='service__list'>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
							<li>
								<BsCheckLg className='service__list-icon'/>
								<p>Lorem ipsum dolor sit amet.</p>
							</li>
						</ul>
					</article>


				</div>
			</section>
	);
};

export default Services;
