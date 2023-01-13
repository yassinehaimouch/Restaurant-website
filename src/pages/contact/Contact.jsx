import React from 'react';
import './contact.css';
import Squares from '../home/squares/Squares';
import Button from '../../components/Button/Button';

const Contact = () => {
  return (
    <div>
      <Squares />
      <div className='contact-container container'>
        <h1>Contact & Inquiry</h1>
        <form action="">
          <div className='form-items'>
            <div className='form-item'>
              <label htmlFor="first-name">First Name</label>
              <input type="text" />
            </div>
            <div className='form-item'>
              <label htmlFor="last-name">Last Name</label>
              <input type="text" />
            </div>
            <div className='form-item'>
              <label htmlFor="email">Email</label>
              <input type="text" />
            </div>
            <div className='form-item'>
              <label htmlFor="subject">Subject</label>
              <input type="text" />
            </div>
          </div>
          <div className='textarea-container'>
            <label htmlFor="message" className='message'>Message</label>
            <textarea name="Message" id="message" cols="30" rows="10" required="" style={{height: "243px"}}></textarea>
          </div>
          <Button value="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact