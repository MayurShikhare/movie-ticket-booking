import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../Redux/moviesSlice';
import Movie from './Movie';
import './movie.css'

const Allmovies = () => {
  const movies = useSelector(state =>state.allMovies.items )
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getMovies())
    // console.log(movies)
  }, [dispatch]);
  
  
  return (
    <div>
      <h3 className='card-title ml-5 mt-5'>All Movies</h3>
      {
          movies.length > 0 ? 
          <div className='cards-container'>
          {movies.map(movie => {
            return <Movie key={movie.id} item ={movie}/>
          })}

        </div>
          : 
          <center>
            <div className='loading'></div>
          </center>
              
      }

    </div>
  );
}

export default Allmovies;
