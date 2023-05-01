import React from 'react';
import './Services.css';
import {BsCheckLg} from "react-icons/bs";
const Services = () => {
	return (
			<section id='services'>
				<h5>What I Offer</h5>
				<h2>Services</h2>

				<div className='container services__container'>


					<article className='service'>
						<div className='service__head'>
							<h3>Frontend Developer</h3>
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
							<h3>Backend Developer</h3>
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
