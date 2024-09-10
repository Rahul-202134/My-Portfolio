import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const bodyDarkMode = document.body.classList.contains('dark-mode');
    setDarkMode(bodyDarkMode);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vevrh23', 'template_v1oiuib', e.target, '486Ln3eldIcejqw9V')
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.error(error.text);
          alert('Error sending email');
        }
      );
  };

  return (
    <div className={`container contact-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="row justify-content-center">
        <h3 className='text-center section-heading'>---Contact Me---</h3>
        <p className='text-center section-subheading'>Get In Touch</p>
        <div className='col-lg-5 contact-form'>
          <form onSubmit={handleSubmit} className="animated-form">
            <label htmlFor="name">Full Name*</label>
            <input
              className='form-control animated-input'
              type="text"
              name="from_name"
              placeholder='Full Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email*</label>
            <input
              className='form-control animated-input'
              type="email"
              name="from_email"
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="subject">Subject*</label>
            <input
              className='form-control animated-input'
              type="text"
              name="subject"
              value={subject}
              placeholder='Subject'
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              className='form-control animated-textarea'
              style={{ height: '120px' }}
              name="message"
              value={message}
              placeholder='Write The Message Here...'
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type='submit' className='form-control btn btn-primary animated-button mt-2 mb-4'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
