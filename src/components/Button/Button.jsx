import React from "react";
import './button.css';

const Button = (props) => {
  return (
    <button className="btn">
      <a href={props.link}>{props.value}</a>
    </button>
  );
};

export default Button;
