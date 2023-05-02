import React, {useEffect} from 'react';
import './Contact.css';
import {MdEmail} from "react-icons/md";
import {FaTelegramPlane} from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {useInView} from "react-intersection-observer";
import {observerSection} from "../../helpers";

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_jxirrcm', 'template_v96byvp', form.current, 'ZnoHuByC1wY4oWa2P');

		e.target.reset();
	};

	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			observerSection('contact-nav');
		}
	}, [inView]);

	return (
			<section id='contact' ref={ref}>
				<h5>Get in Touch</h5>
				<h2>Contact me</h2>

				<div className="container contact__container">
					<div className='contact__options'>
						<article className="contact__option">
							<MdEmail className='contact__option-icon'/>
							<h4>Email</h4>
							<h5>r.tokoshev@gmail.com</h5>
							<a href="mailto:r.tokoshev@gmail.com">Send a message</a>
						</article>
						<article className="contact__option">
							<FaTelegramPlane className='contact__option-icon'/>
							<h4>Telegram</h4>
							<h5>@ARAMUSHI</h5>
							<a href="https://t.me/aramushi" target='_blank'>Send a message</a>
						</article>
					</div>

					<form ref={form} onSubmit={sendEmail}>
						<input type="text" name='name' placeholder='Your Full Name' required/>
						<input type="email" name='email' placeholder='Your Email'/>
						<textarea name="message" rows="7" placeholder='Your Message'></textarea>
						<button type='submit' className='btn btn-primary'>Send Message</button>
					</form>

				</div>
			</section>
	);
};

export default Contact;