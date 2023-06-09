import React from 'react'
import './ExperienceItem.css'

class ExperienceItem extends React.Component {

  render(){

  return (
    <div className='item-container'>
        <div className='item-title'>
            <div className='title'>
                <div className='title-image'>
                     <img className='company-img' src={this.props.img} alt='company-image'></img>
                </div>
                <div className='title-info'>
                    <div className='company'>{this.props.companyName}</div>
                    <div className='role'>{this.props.role}</div>
                    <div className='item-descript'> {this.props.descript}</div>
                </div>
            </div>
            <div className='date'>
                <div>{this.props.date}</div>
            </div>
        </div>
        <div className='item-info'>
            <li className='body1'>{this.props.body1}</li>
        </div>
   </div>
);
  }
}


export default ExperienceItem
