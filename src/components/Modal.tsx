import React from 'react'
import './modal.css'
import { VscChromeClose } from "react-icons/vsc";
import gitar from '../assets/loginEntryPointPost.webp'
import { Link } from 'react-router';

export const Modal = React.memo(({toggleModal}) => {

  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <div className='modal-thumb'>
          <img src={gitar} alt="guitar" />
        </div>
        <p>Help us become one of the safest places to buy and sell</p>
        
        <form className="login-section">
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter your email' />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your password' />
          </div>
          <button className='login-button'>Login</button>
        </form>
        
        <p>New to Olx? <Link/> </p>

        <VscChromeClose className='close-modal' size={50} />
      </div>
    </div>
  )
})
