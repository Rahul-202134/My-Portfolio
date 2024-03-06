import React from 'react'
import about from './About.jpg'
export default function About() {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-5'>
              <h2 className='text-center text-white'>--About Me--</h2>
              <p className='text-center text-white'>Let Me Introduce Myself</p>
                <p className='text-white'>
                  MCA student with a keen interest in software development
                  and a passion for solving complex problems. Seeking
                  opportunities to apply my knowledge and contribute to
                  innovative projects in the tech industry.
                  Ability adapts to any technology rapidly making me
                  flexible upon any tech stack.
                </p>
                <button className='text-center btn btn-primary mb-4'>Read More</button>
            </div>
            <div className='col-lg-5 text-center'>
              <img src={about} width={300} height={300} alt="" />
            </div>
<hr />
<br />
        </div>
      
    </div>
  )
}
