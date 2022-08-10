import React from 'react'
import './Cards.css'


class Cards extends React.Component {
  state={showMessage:false};
    onClickHandler=()=>{
      this.setState({showMessage:!this.state.showMessage});
    }

  companyTitle(){
    return(
      <div className='companyTitle' onClick={this.onClickHandler}>
            <img src={this.props.imageUrl} alt='company'></img>
            <div className='companyName'>{this.props.companyName}</div>
          </div>
    )
  }

  render(){

  return (
    <div className='card-container' onClick={this.onClickHandler}>
        <div className='companyTitle'>
            <img src={this.props.imageUrl} alt='company'></img>
            <div className='companyName'>{this.props.companyName}</div>
            </div>
          {this.state.showMessage && (
          <div>
            <div className='overlay'>
                    <div className='title'>{this.props.title}</div>
                    <div className='date'>{this.props.date}</div>
                    <ul className='body1'>{this.props.body1}</ul>
                    <ul className='body2'>{this.props.body2}</ul>
                    <ul className='body3'>{this.props.body3}</ul>
              </div>
          </div>
      )
      }
    
   </div>
);
  }
}


export default Cards
