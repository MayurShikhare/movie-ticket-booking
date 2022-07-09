import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUpcomingMovies } from '../../Redux/filterSlice';
import Card from '../Card/Card';

const Upcoming = () => {
  const upComingMovies = useSelector(state => state.filteredMovies.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUpcomingMovies())
  }, [dispatch]);
  
  return (
    <div>
      <h2 className='ml-5 mt-2'>Upcoming</h2>
      <div className='grid-container'>
      {upComingMovies.map(movie => <Card details={movie}/>)}
      </div>
    </div>
  );
}

export default Upcoming;
