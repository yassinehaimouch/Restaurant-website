import React from 'react';
import starts from '../../assets/3star.png';
import './special.css';

const Special = (props) => {
  return (
    <div className='special'>
      <img src={props.image} alt="img" className='image-item'/>
      <h1>{props.title}</h1>
      <h2>{`$${props.price}`}</h2>
      <img src={starts} alt="starts" className='starts'/>
      <h3>{props.desc}</h3>
    </div>
  )
}

export default Special