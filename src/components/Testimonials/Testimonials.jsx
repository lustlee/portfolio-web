import React from 'react';
import './Testimonials.css';
import data from '../../constants/data-clients';
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
	return (
			<section id='testimonials'>
				<h5>Review from clients</h5>
				<h2>Testimonials</h2>

				<Swiper className='container testimonials__container'
				        modules={[Pagination]}
				        spaceBetween={40}
				        slidesPerView={1}
				        pagination={{clickable: true}}
				>

					{
						data.map(({avatar, id, content, name}) => (
								<SwiperSlide key={id} className='testimonial'>
									<div className="client__avatar">
										<img src={avatar} alt={name}/>
									</div>
									<h5 className='client__name'>{name}</h5>
									<small className='client__review'>
										{content}
									</small>
								</SwiperSlide>
						))
					}

				</Swiper>
			</section>
	);
};

export default Testimonials;
