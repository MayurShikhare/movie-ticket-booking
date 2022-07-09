import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNearByEvents } from '../../Redux/filterSlice';
import Card from '../Card/Card';

const Nearby = () => {
  const nearByEvents = useSelector(state => state.filteredMovies.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNearByEvents())
  }, [dispatch]);
  
  return (
    <div>
      <h2 className='ml-5 mt-2'>Near By Events</h2>
      <div className='grid-container'>
      {nearByEvents.map(movie => <Card details={movie}/>)}
      </div>
    </div>
  );
}

export default Nearby;
