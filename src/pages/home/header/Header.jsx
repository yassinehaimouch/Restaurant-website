import React from 'react';
import './header.css';
import HeaderImg from '../../../assets/heroimg.png';
import Button from '../../../components/Button/Button';

const Header = () => {
  return (
    <section className='header-section'>
      <div className='header-left-side'>
        <h1 className='title'>The flavor of<br />tradition</h1>
        <h3>We are a multi-cuisine restaurant offering<br />a wide variety of food experience in both<br />casual and fine dining environment.</h3>
        <div className='buttons'>
          <Button value="Explore Menu" link=""/>
          <button className='btn-sec'>Book Table</button>
        </div>
      </div>
      <img src={HeaderImg} alt="Img" />
    </section>
  )
}

export default Header