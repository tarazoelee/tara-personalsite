import React,{useState} from 'react'
import './Cards.css'

class Cards extends React.Component {
/*
  state={
    showing:false
  }
  onClick={()=> this.setState({showing:!showing})}
  const{showing}=this.state
  { showing && 
          (<div className='overlay'>
                  <h3>{this.props.title}</h3>
                  <p>{this.props.body}</p>
            </div>
            )}
            
  */

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
