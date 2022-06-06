import React from 'react'
import './Welcome.css'
import Emoji from '../Emojis/Emoji'

function Welcome() {
  return (
    <>
    <div className='container'>
        <div className='typewriter'>
            hi, i'm tara!
        </div>
    </div>
    <div className='info'>
          a software engineering student based in toronto, canada. 
          <span role="img" aria-label="bouquet">💐</span>
    </div>
    <div className='current-info'>
          currently working at Aiera as a machine learning intern <span role="img" aria-label="stars">✨</span>
    </div>
    </>
  )
}
export default Welcome
