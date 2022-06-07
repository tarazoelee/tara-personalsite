import React,{useState} from 'react'
import './Cards.css'

class Cards extends React.Component {

  state={
    showing:false
  }
  

  render(){
  
   const{showing}=this.state

  return (
    <div className='card-container' onClick={()=> this.setState({showing:!showing})}>
        <img src={this.props.imageUrl} className='image-container'></img>
   
      { showing && 
          (<div className='overlay'>
                  <h3>{this.props.title}</h3>
                  <p>{this.props.body}</p>
            </div>
            )}
      </div>
);
  }
}


export default Cards
