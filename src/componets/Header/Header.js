import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';
import Nav from './Nav';

const Header = () => {
  return (
    <>
    <div className='container-fluid nav'>
        <NavLink to="/">
           <img src='./Picture/logo.png' alt='logo' className='img-fluid'/> 
        </NavLink> 
    </div>
    <Nav/>
    </>
  )
}

export default Header