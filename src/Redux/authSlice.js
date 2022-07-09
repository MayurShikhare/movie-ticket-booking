import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name:'auth',
  initialState:{
    isAuthenticated : false,
    // status : null
  },
  reducers:{
    authenticate :(state) => {
      state.isAuthenticated = !state.isAuthenticated
      // state.status = "Successfully verified user"
      }
  }
})

export const {authenticate} = authSlice.actions
export default authSlice.reducer