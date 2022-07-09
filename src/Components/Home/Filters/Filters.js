import React from 'react';
import { Link } from 'react-router-dom';
import './filter.css'

const Filters = () => {
  return (
    <div className="fileter-container">
      <Link className='filter-option' to="/latestmovies"> Latest Movies</Link>
      <Link className='filter-option'  to="/upcomingmovies"> upcoming Movies</Link>
      <Link className='filter-option'  to="/nearbyevents"> Nearby Events</Link>
    </div>
  );
}

export default Filters;
