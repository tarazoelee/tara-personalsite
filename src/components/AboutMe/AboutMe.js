import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className='footer-container'>
    <div className='about-container'>
      <div className='my-pic'><img src={'images/mepic.png'}></img></div>
      <div className='descript'> hi again!! thanks for checking out my site. <span role="img" aria-label="smiley">☺️ </span> <br/> <br/>
      i'm currently in my 3rd year of software engineering at Western University. in my free time I love to read&nbsp; 
      <span className='goodreads'>(checkout my <a href='https://www.goodreads.com/user/show/132176441-tara-lee'>goodreads</a>!)</span>, i'm trying to read 30 books in 2022.
      i'm also an avid hobbier & explorer... which includes crocheting, baking, sewing, exploring new restaurants, and travelling.

      <div className='contact-title'>let's connect <span role="img" aria-label="love-letter">💌</span></div> 
     <div className='contact-info'>if you want to chat or get coffee, email me at <span className='email'>tarazoelee@gmail.com</span> or send me a message on <a href=''>linkedin!</a></div>
      </div>
    </div>
    <div className='footer'>
      built with reactjs and love
    </div>
  </div>
  
  )
}

export default AboutMe
