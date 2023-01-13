import React from 'react';
import './md-square.css';

const MdSquare = (props) => {
  return (
    <div className='md-square'>
      <div className='md-square-icon'>{props.icon}</div>
      <h1>{props.title}</h1>
      <h3>{props.desc}</h3>
    </div>
  )
}

export default MdSquare