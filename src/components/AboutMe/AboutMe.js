import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className='about-container'>
      <div className='my-pic'><img src={'mepic.png'}></img></div>
      <div className='descript'> hi again!! thanks for checking out my site. <span role="img" aria-label="smiley">☺️ </span> <br/> <br/>
      in my free time I love to read&nbsp; 
      <span className='goodreads'>(checkout my <a href='https://www.goodreads.com/user/show/132176441-tara-lee'>goodreads</a>!)</span>, i'm trying to read 22 books in 2022.
      I'm also an avid hobbier & explorer... which includes crocheting, baking, sewing, exploring new restaurants, and travelling.
      </div>
    </div>
  )
}

export default AboutMe
