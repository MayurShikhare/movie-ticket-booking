import React from 'react'
import Allmovies from './AllMovies/AllMovies'
import Filters from './Filters/Filters'
// import Navbar from './NabBar/NavBar';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <Filters />
      <Allmovies />
    </div>
  )
}

export default Home
