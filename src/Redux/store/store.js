import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../moviesSlice'
import sliderReducer from '../sliderSlice'
import detailsReducer from '../detailsSlice'
import filterReducer from '../filterSlice'
import authReducer from '../authSlice'

const store = configureStore({
  reducer:{
    allMovies : movieReducer,
    sliderMovies : sliderReducer,
    detail:detailsReducer,
    filteredMovies : filterReducer,
    authenticate : authReducer
  }
})

export default store