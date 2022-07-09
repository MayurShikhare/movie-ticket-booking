import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
  'slider/getMovies',
   async ()=> {
     return await fetch('https://movies-databse.herokuapp.com/movies')
       .then(response => {
        //  console.log(response.json())
         response.json()
       })
   } 
)

export const sliderSlice = createSlice({
  name:"slider",
  initialState:{
    items:[],
    status:null
  },
  extraReducers:{
    [getMovies.pending] : (state) => {
      state.status = 'loading'
    },
    [getMovies.fulfilled] : (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [getMovies.rejected] : (state) => {
      state.status = 'Failed'
    },

  }
})

export default sliderSlice.reducer