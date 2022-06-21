import React,{useState} from 'react'
import './Cards.css'

class Cards extends React.Component {

  render(){

  return (
    <div className='card-container' >
        <img src={this.props.imageUrl} className='image-container'></img>
    <div className='overlay'>
            <div className='title'>{this.props.title}</div>
            <div className='date'>{this.props.date}</div>
            <div className='body'> {this.props.body}</div>
      </div>
    
      </div>
);
  }
}


export default Cards
