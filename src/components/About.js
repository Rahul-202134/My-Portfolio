import React, { useState } from 'react'
import about from './About.jpg'
export default function About() {
  const [ReadMore, setReadMore] = useState(false)
  const handleReadMore = () => {
    setReadMore(!ReadMore)
  }
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-5'>
          <h2 className='text-center'>--About Me--</h2>
          <p className='text-center'>Let Me Introduce Myself</p>
          <p>
            MCA student with a keen interest in software development
            and a passion for solving complex problems. Seeking
            opportunities to apply my knowledge and contribute to
            innovative projects in the tech industry.
            Ability adapts to any technology rapidly making me
            flexible upon any tech stack.
          </p>
          {
            ReadMore && (
              <p>And i am creative and innovative thinker who
                enjoy exploring new ideas and finding creative
                solution to complex problem.</p>
            )
          }
          <button className='text-center btn btn-primary mb-4' onClick={handleReadMore}>Read More</button>

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
