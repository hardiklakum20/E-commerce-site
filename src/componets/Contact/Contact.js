import React from 'react';
import './Contact.css';


export const Contact = () => {
  return (
    <>
    <h2 className='common-heading'>Contact Page</h2>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.7881998427365!2d72.57337917449567!3d23.068225314624534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83869a0efef1%3A0xc73838b3a35017a8!2sD%20Mart!5e0!3m2!1sen!2sin!4v1683808251827!5m2!1sen!2sin"
       width="100%" 
       height="320" 
       style={{ border: 0 }} 
       allowFullScreen="" 
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className='container'>
        <div className='contact-form'>
            <form action='https://formspree.io/f/xoqzbjwk' method='POST' className='contact-inputs'>
                <input type='text' placeholder='username' name='username' required autoComplete='off'></input>
                <input type='email' name='Email' placeholder='Email' autoComplete='off' required></input>
                <textarea name='Message' col='30' roe='10' required autoComplete='off' placeholder='Enter your message'></textarea>
                <input type='submit' value="send"></input>
            </form>
        </div>
    </div>
    </>
  );
};
