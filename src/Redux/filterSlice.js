import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLatestMovies = createAsyncThunk(
  'filteredMovies/getLatestMovies',
   async ()=> {
    //  return fetch('http://localhost:8000/latest')
     return fetch('https://movies-databse.herokuapp.com/latestmovies')
            .then(response => response.json())
   } 
)
export const getUpcomingMovies = createAsyncThunk(
  'filteredMovies/getUpcomingMovies',
   async ()=> {
    //  return fetch('http://localhost:8000/upcoming')
     return fetch('https://movies-databse.herokuapp.com/latestmovies')
            .then(response => response.json())
   } 
)
export const getNearByEvents = createAsyncThunk(
  'filteredMovies/getNearByEvents',
   async ()=> {
    //  return fetch('http://localhost:8000/nearbyevents')
     return fetch('https://movies-databse.herokuapp.com/nearbyevents')
            .then(response => response.json())
   } 
)




export const filterSlice = createSlice({
  name:"filteredMovies",
  initialState:{
    // latestItems:[],
    // upcomingItems:[],
    // nearByItems:[],
    items:[],
    status:null
  },
  extraReducers:{
    
    // Latest Movies
    [getLatestMovies.pending] : (state) => {
      state.status = 'loading'
    },
    [getLatestMovies.fulfilled] : (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [getLatestMovies.rejected] : (state) => {
      state.status = 'Failed'
    },
    
    // Upcoming
    [getUpcomingMovies.pending] : (state) => {
      state.status = 'loading'
    },
    [getUpcomingMovies.fulfilled] : (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [getUpcomingMovies.rejected] : (state) => {
      state.status = 'Failed'
    },

    // Near By Events
    [getNearByEvents.pending] : (state) => {
      state.status = 'loading'
    },
    [getNearByEvents.fulfilled] : (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [getNearByEvents.rejected] : (state) => {
      state.status = 'Failed'
    },


  }
})

export default filterSlice.reducer