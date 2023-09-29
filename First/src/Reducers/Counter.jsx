import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
      name:"counter",
      initialState: {value: 10},
      reducers: {
           increment: (state,action)=>{
               state.value +=1;
           },
           decrement : (state,action)=>{
                state.value -=1;
           },
           resetval : (state,action)=>{
                state.value = 0;
           }
      }
})


export const {increment,decrement,resetval} = counterSlice.actions;
export default counterSlice.reducer;