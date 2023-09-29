import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
      name:"users",
      initialState: {value: []},
      reducers: {
           adduser: (state,action)=>{
                state.value.push(action.payload)
           },
           deleteUser : (state,action)=>{
               state.value = state.value.filter((user)=> user.id !== action.payload.id)
           }
      }
})

export const {adduser,deleteUser} = userSlice.actions;

export default userSlice.reducer;