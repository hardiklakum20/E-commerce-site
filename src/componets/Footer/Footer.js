import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import {FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
   
        <div className='contact-short'>
            <div className='grid grid-two-column'>
                <div>
                    <h3>Ready to get started</h3>
                    <h3>Talk to us today</h3>
                </div>
               <button>
                    <NavLink to={'./contact'}>Get Started</NavLink>
               </button>
            </div>

        </div>
        <footer>
            <div className='container grid grid-four-column'>
                <div className='footer-about'>
                    <h3>Shopping Technical</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='footer-subscribe'>
                    <h3>Subscribe to get important updates</h3>
                    <form action='#'>
                        <input type='email' placeholder='your e-mail'></input>
                        <input type='submit' value='Subscribe'></input>
                    </form>
                </div>

                <div className='footer-social'>
                    <h3>follow us</h3>
                    <div className='footer-social--icons'>
                        <div>
                           <a href='#' target='_blank'> <FaDiscord className='icons'/> </a>
                        </div>

                        <div>
                          <a href='#' target='_blank'>  <FaInstagram className='icons'/></a>
                        </div>

                        <div>
                          <a href='#' target='_blank'> <FaYoutube className='icons'/></a>
                        </div>
                    </div>
                </div>

                <div className='footer-contact'>
                    <h3>Call Us</h3>
                    <a href='tel:8140726485'>+91 8140726485</a>
                </div>
            </div>

            {/* bottom footer */}
            <div className='footer-bottom--section'>
                <hr/>
                <div className='container grid grid-two-column'>
                    <p>@{new Date().getFullYear()} Shopping. All Rights Reserved</p>
                    <div>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDITIONS</p>
                     </div>
                </div>
                
            </div>
        </footer>
    </>
  )
}

export default Footer