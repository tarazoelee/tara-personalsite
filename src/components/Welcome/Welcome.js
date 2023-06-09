import React from 'react'
import './Welcome.css'

function Welcome() {
  return (
    <div className='container'>
      <div className='left'>
      <div className='left-container'>
        <div className='typewriter'>
              hi, i'm tara!  
        </div>
        <div className='sub-heading'>
            a software engineering student based in toronto, on. <br/><br/>
            <span className='sentence2'>
              i like building creative and intuitive products.</span>
        </div>
      </div>
      </div>
      <div className='right-container'>
        <img src='images/headshot2.jpeg' className='headshot'></img>
      </div>
    </div>
  )
}
export default Welcome

/*  

<span role="img"><img src='images/tulips.png' className='welcome-image'></img></span> 

<div className='current-info'>
          <span role="img" aria-label="stars">✨</span> currently working at Aiera as a machine learning intern<span role="img" aria-label="stars">✨</span>
    </div>*/