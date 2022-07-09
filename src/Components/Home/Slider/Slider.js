import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../../Redux/sliderSlice';
import {getMovieDetails} from '../../../Redux/detailsSlice'


import './slider.css'
import { useNavigate } from 'react-router-dom';

const Slider = () => {
	const sliderMovies = useSelector(state =>state.sliderMovies.items)
  const dispatch = useDispatch()
	const [slideNumber, setslideNumber] = useState(2);

	const imageUrls = sliderMovies?.map(movie => 
		movie.image
	)

	const ids = sliderMovies?.map(movie => 
		movie.id
	)

	// const dispatch = useDispatch()
	const navigate = useNavigate()

  
  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch]);


  return (


				<div className="carrousel">

					<button
					className='btn slider-btn'
					onClick={() =>{
						if(slideNumber !== 1){
							setslideNumber(slideNumber-1)
						}else{
							setslideNumber(4)
						}
					}}
					> {"\<"} </button>
					

		  {imageUrls?.length > 0 ?
			  <section className='slides-container'>
			  
			  <img src={imageUrls[0]} alt="image name" 
			  className={slideNumber===1 ?"slider-img active-slide":"slider-img "}
			  onClick={()=>{
				  
				  dispatch(getMovieDetails(ids[0]))
				  navigate("/details/1")
			  }}
			  />
			  <img 
			  src={imageUrls[1]} alt="image name"
			  className={slideNumber===2 ?"slider-img active-slide":"slider-img "}
			  onClick={()=>{
				  dispatch(getMovieDetails(ids[1]))
				  navigate("/details/2")
			  }}
			  />
			  <img 
			  src={imageUrls[2]} alt="image name"
			  className={slideNumber===3 ?"slider-img active-slide":"slider-img "}
			  onClick={()=>{
				  dispatch(getMovieDetails(ids[2]))
				  navigate("/details/3")
			  }}
			  />

			  <img 
			  src={imageUrls[3]} alt="image name"
			  className={slideNumber===4 ?"slider-img active-slide":"slider-img "}
			  onClick={()=>{
				  dispatch(getMovieDetails(ids[3]))
				  navigate("/details/4")
			  }}
			  />

		  </section>
		   
		   :""}
		  

					<button 
					className='btn slider-btn'
					onClick={() =>{
						if(slideNumber !== 4){
							setslideNumber(slideNumber+1)
						}else{
							setslideNumber(1)
						}
					}}
					>{"\>"}</button>
			
		</div>		


  );
}

export default Slider;
