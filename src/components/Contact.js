import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vevrh23', 'template_v1oiuib', e.target, '486Ln3eldIcejqw9V')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
      console.error(error.text);
        alert('Error sending email');
      });
  };
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <h3 className='text-center'>---Contact Me---</h3>
        <p className='text-center'>Get In Touch</p>
        <div className='col-lg-5 contact-form'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Full Name*</label>
            <input className='form-control' type="text" name="from_name" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="">Email*</label>
            <input className='form-control' type="email" name="from_email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="">Subject*</label>
            <input className='form-control' type="text" name="subject" value={subject} placeholder='Subject' onChange={(e) => setSubject(e.target.value)} required />
            <label htmlFor="">Message</label>
            <textarea className='form-control' style={{height:'150px'}} name="message" value={message} placeholder='Write The Message Here...' onChange={(e) => setMessage(e.target.value)} required></textarea>
            <button type='submit' className='form-control btn btn-primary mt-2 mb-4'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}