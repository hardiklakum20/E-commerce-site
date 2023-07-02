import React from 'react';
import './Error.css';
import {NavLink} from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='containr'>
      <div>
        <h2>404</h2>
        <h2>UH OH! You're lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a mystery.But you can click the button
          below to go back to the homepage.
        </p>
        <NavLink to={'/'}>
        <button>Go Back Home</button>
        </NavLink>
      </div>
    </div>
  )
}
