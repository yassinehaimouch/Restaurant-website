import React from 'react';
import './dish.css';
import starts from '../../assets/3star.png';

const Dish = (props) => {
  return (
    <div className='dich-container'>
      <img src={props.image} alt="img" className='dich-img'/>
      <div className='dich-desc'>
        <h1>{props.title}</h1>
        <h2>{`$${props.price}`}</h2>
        <img src={starts} alt="starts" />
      </div>
    </div>
  )
}

export default Dish