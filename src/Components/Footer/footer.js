import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <ul className='footer-links'>
        <Link className='footer-link' to='/'>
         Home
        </Link>
        <Link className='footer-link' to='/auth'>
          Authenticate
        </Link>
        <Link className='footer-link' to='latestmovies'>
          Latest Movies
        </Link>
        <Link className='footer-link' to='/upcomingmovies'>
         Upcoming movies
        </Link>
      </ul>
      <q className='footer-message'>The show must go on</q>
    </div>
  )
}

export default Footer
