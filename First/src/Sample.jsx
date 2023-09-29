import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, resetval } from './Reducers/Counter';
function Sample() {
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.counter.value)
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <h2>{counter}</h2>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(resetval())}>Reset</button>
    </div>
  )
}

export default Sample