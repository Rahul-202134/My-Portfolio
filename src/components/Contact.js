import React from 'react'


export default function Contact() {
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <h3 className='text-white text-center'>---Contact Me---</h3>
            <p className='text-white text-center'>Get In Touch</p>
            <div className='col-lg-5'> 
                <form action="">
                        <label className='text-white' htmlFor="">Full Name*</label>
                        <input className='form-control' type="text" placeholder='Enter The Name' />
                        <label className='text-white' htmlFor="">Email*</label>
                        <input className='form-control' type="text" placeholder='Enter The Email' />
                        <label className='text-white' htmlFor="">Contact No*</label>
                        <input className='form-control' type="text" placeholder='Enter The Contact Number'/>
                        <label className='text-white' htmlFor="">Subject*</label>
                        <input className='form-control' type="text" placeholder='Enter the Subject' />
                        <label className='text-white' htmlFor="">Message</label>
                        <textarea className='form-control' name="" placeholder='Write The Message Here...' cols="30" rows="5"></textarea>
                        <button className='form-control btn btn-primary mt-2 mb-4'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}
