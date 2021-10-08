import './contact.scss';
import shake from '../../images/shake.svg';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
	const [message, setMessage] = useState(false);

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_97v1wkb',
				'template_42wy8ps',
				e.target,
				'user_y8p4lPQmmLkW31uRt8aGx'
			)
			.then(
				result => {
					if (result.text) {
						setMessage(true);
					}
				},
				error => {
					setMessage(error.message);
				}
			);
	};

	return (
		<div className='contact' id='contact'>
			<div className='left'>
				<img src={shake} alt='' />
			</div>
			<div className='right'>
				<h2>Contact</h2>
				<form onSubmit={sendEmail}>
					<input type='text' placeholder='Your Name' name='name' required />
					<input type='email' placeholder='Your Email' name='email' required />
					<textarea placeholder='Your Message' name='message'></textarea>
					<button type='submit'>Send</button>
					{message ? (
						<span className='success'>Email Send Successfully</span>
					) : (
						<span className='error'>{message}</span>
					)}
				</form>
			</div>
		</div>
	);
}

export default Contact;
