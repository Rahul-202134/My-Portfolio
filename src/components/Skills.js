import React, { useState } from 'react';

export default function Skills() {
  // Define state for each skill's percentage
  const [htmlPercentage, setHtmlPercentage] = useState(90);
  const [cssPercentage, setCssPercentage] = useState(80);
  const [bootstrapPercentage, setBootstrapPercentage] = useState(75);
  const [javascriptPercentage, setJavascriptPercentage] = useState(70);
  const [javaPercentage, setJavaPercentage] = useState(75);
  const [phpPercentage, setPhpPercentage] = useState(80);
  const [reactJsPercentage, setReactJsPercentage] = useState(70);

  return (
    <div className='container text-white'>
      <div className="row justify-content-center">
        <div className="col-lg-5 mb-4">
          <h3 className='text-center'>Technical Skills</h3>
          <div>
            <p>Html</p>
            <div className="progress">
              <div className="progress-bar bar" role="progressbar" style={{ width: `${htmlPercentage}%` }} aria-valuenow={htmlPercentage} aria-valuemin="0" aria-valuemax="100">{htmlPercentage}%</div>
            </div>
          </div>
          <div>
            <p>Css</p>
            <div className="progress">
              <div className="progress-bar bar" role="progressbar" style={{ width: `${cssPercentage}%` }} aria-valuenow={cssPercentage} aria-valuemin="0" aria-valuemax="100">{cssPercentage}%</div>
            </div>
          </div>
          <div>
            <p>Bootstrap</p>
            <div className="progress">
              <div className="progress-bar bar" role="progressbar" style={{ width: `${bootstrapPercentage}%` }} aria-valuenow={bootstrapPercentage} aria-valuemin="0" aria-valuemax="100">{bootstrapPercentage}%</div>
            </div>
          </div>
          <div>
            <p>Javascript</p>
            <div className="progress">
              <div className="progress-bar bar" role="progressbar" style={{ width: `${javascriptPercentage}%` }} aria-valuenow={javascriptPercentage} aria-valuemin="0" aria-valuemax="100">{javascriptPercentage}%</div>
            </div>
          </div>
          <div>
            <p>Java</p>
            <div className="progress">
              <div className="progress-bar bar" role="progressbar" style={{ width: `${javaPercentage}%` }} aria-valuenow={javaPercentage} aria-valuemin="0" aria-valuemax="100">{javaPercentage}%</div>
            </div>
          </div>
          <div>
            <p>Php</p>
            <div className="progress">
              <div className="progress-bar bar" role="progressbar" style={{ width: `${phpPercentage}%` }} aria-valuenow={phpPercentage} aria-valuemin="0" aria-valuemax="100">{phpPercentage}%</div>
            </div>
          </div>
          <div>
            <p>React Js</p>
            <div className="progress">
              <div className="progress-bar bar" role="progressbar" style={{ width: `${reactJsPercentage}%` }} aria-valuenow={reactJsPercentage} aria-valuemin="0" aria-valuemax="100">{reactJsPercentage}%</div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <h3 className='text-center'>Professional Skills</h3>
          <div className="justify-content-center con d-flex mt-4">
            <p>Problem Solving</p>
            <p>Critical Thinking</p>
          </div>
          <div className="justify-content-center con d-flex">
            <p>Leadership</p>
            <p>Time Management</p>
          </div>
        </div>
      </div>
    </div>
  )
}
