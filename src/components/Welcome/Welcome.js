import React from 'react'
import './Welcome.css'
import Emoji from '../Emojis/Emoji'

function Welcome() {
  return (
    <div className='welcome-container'>
    <div className='container'>
        <div className='typewriter'>
            hi, i'm tara!
        </div>
    </div>
    <div className='info'>
          a software engineering student based in toronto, on. <br/>
          <span className='sentence2'>
          i like designing and building creative and intuitive websites.</span>
          <span role="img" aria-label="bouquet">💐</span>
    </div>
    <div className='current-info'>
          <span role="img" aria-label="stars">✨</span>
          currently working at Aiera as a machine learning intern 
          <span role="img" aria-label="stars">✨</span>
    </div>
    </div>
  )
}
export default Welcome
