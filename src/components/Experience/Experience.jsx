import React from 'react';
import './Experience.css';
import {BsFillPatchCheckFill} from "react-icons/bs";
import data from '../../constants/data-experience';
const Experience = () => {
	return (
			<section id='experience'>
				<h5>What skills I Have</h5>
				<h2>My Experience</h2>

				<div className='container experience__container'>
					<div className='experience__frontend'>
						<h3>Frontend Development</h3>
						<div className="experience__content">
							{
								data[0].map(({id, title, experience}) => (
										<article key={id} className='experience__details'>
											<BsFillPatchCheckFill className='experience__details-icon'/>
											<div>
												<h4>{title}</h4>
												<small className='text-light'>{experience}</small>
											</div>
										</article>
								))
							}
						</div>
					</div>

					<div className='experience__backend'>
						<h3>Backend Development</h3>
						<div className="experience__content">
							{
								data[1].map(({id, title, experience}) => (
										<article key={id} className='experience__details'>
											<BsFillPatchCheckFill className='experience__details-icon'/>
											<div>
												<h4>{title}</h4>
												<small className='text-light'>{experience}</small>
											</div>
										</article>
								))
							}
						</div>
					</div>
				</div>
			</section>
	);
};

export default Experience;
