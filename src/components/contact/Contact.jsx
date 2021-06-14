import './contact.scss';
import shake from '../../images/shake.svg';
import { useState } from 'react';

function Contact() {
    const [message, setMessage] = useState(false);

    const sendEmail = e => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src={shake} alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder='Your Name' name='name' required />
                    <input type="email" placeholder='Your Email' name='email' required />
                    <textarea placeholder='Your Message' name='message'></textarea>
                    <button type="submit">Send</button>
                    {
                        message && <span>Not working. But Coming soon</span>
                    }
                </form>
            </div>
        </div>
    );
}

export default Contact;