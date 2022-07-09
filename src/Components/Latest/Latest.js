import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestMovies } from '../../Redux/filterSlice';
import Card from '../Card/Card';
import './latest.css'

const Latest = () => {
  const latestMovies = useSelector(state => state.filteredMovies.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLatestMovies())
  }, [dispatch]);

  return (
    <div>
      <h1 className='ml-5'>Latest Movies</h1>
      <div className='grid-container'>
        {latestMovies.map(movie => <Card details={movie}/>)}
      </div>
    </div>
  );
}

export default Latest;
