import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  const isAuth = useSelector((state) => state.authenticate.isAuthenticated)

  const [keyword, setkeyword] = useState("")

  return (
    <nav className='nav-container'>
      <Link className='nav-logo' to='/'>
        E-cube
      </Link>

      <ul className='nav-links'>
        <li className='nav-link-item'>
          <Link
            className={isAuth ? 'auth' : ''}
            style={{ textDecoration: 'none', color: 'white' }}
            to={isAuth ? '/' : '/auth'}
            onClick={() => {
              if (isAuth) {
                alert('user Already authenticated')
              }
            }}
          >
            {isAuth ? 'AUTHENTICATED' : 'Authenticate'}
          </Link>
        </li>
        <li>
          <input
            type='text'
            placeholder='star wars'
            value={keyword}
            onChange={(e) => setkeyword(e.target.value)}
          />
        </li>
        <li>
          <input
            type='submit'
            value='Go'
            onClick={() => {
              setkeyword('')
              alert('SORRY :( The functionality is yet to be implemented')
            }}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
