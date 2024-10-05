import React, { useRef } from 'react';
import { init, send } from 'emailjs-com'; 
import './Contact.css';

init('Wegjuvysa__Q6dH1N'); 

function Contact() {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault(); 

    
    const formData = new FormData(form.current);
    
    
    const emailData = {
      name: formData.get('name'), 
      email: formData.get('email'), 
      message: formData.get('message'),
    };

    send('service_qzz9adv', 'template_5nvc96p', emailData, 'Wegjuvysa__Q6dH1N') 
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!'); 
        form.current.reset(); 
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.'); 
      });
  };

  return (
    <div className="contact-page" id="contactsection">
      <h1>CONTACT ME</h1>
      <p>If you have any questions, feel free to reach out to me through this form!</p>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
