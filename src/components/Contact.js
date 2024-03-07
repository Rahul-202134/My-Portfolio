import React, { useState } from 'react'


export default function Contact() {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [number,setnumber]=useState('')
  const [subject,setsubject]=useState('')
  const [message,setmessage]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    setname('')
    setemail('')
    setnumber('')
    setsubject('')
    setmessage('')
  }
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <h3 className='text-white text-center'>---Contact Me---</h3>
            <p className='text-white text-center'>Get In Touch</p>
            <div className='col-lg-5'> 
                <form onSubmit={handleSubmit}>
                        <label className='text-white' htmlFor="">Full Name*</label>
                        <input className='form-control' type="text" placeholder='Enter The Name' value={name} onChange={(e)=>setname(e.target.value)} required/>
                        <label className='text-white' htmlFor="">Email*</label>
                        <input className='form-control' type="text" placeholder='Enter The Email' value={email} onChange={(e)=>setemail(e.target.value)} required/>
                        <label className='text-white' htmlFor="">Contact No*</label>
                        <input className='form-control' type="text" placeholder='Enter The Contact Number' value={number} onChange={(e)=>setnumber(e.target.value)} required/>
                        <label className='text-white' htmlFor="">Subject*</label>
                        <input className='form-control' type="text" placeholder='Enter the Subject' value={subject} onChange={(e)=>setsubject(e.target.value)} required />
                        <label className='text-white' htmlFor="">Message</label>
                        <textarea className='form-control' value={message} placeholder='Write The Message Here...' cols="30" rows="5" required></textarea>
                        <button type='submit' className='form-control btn btn-primary mt-2 mb-4'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}
