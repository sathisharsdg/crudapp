import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { adduser, deleteUser } from './Reducers/Users';
function App() {
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.users.value)
  const [firstName,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  console.log(users);
  return (
    <div>
        <input type="text" placeholder='firstname' onChange={(e)=>setFirstName(e.target.value)} />
        <input type="text" placeholder='lastname' onChange={(e)=>setLastName(e.target.value)}/>
        <button onClick={()=>dispatch(adduser({id:users.length+1, firstName:firstName, lastname:lastname}))}>ADD USER</button>
      
          {
             users.map((user)=>(
                <div key={user.id}>
                  <h1>{user.id}</h1> 
                  <h1> {user.firstName}</h1>
                  <h1>  {user.lastname}</h1>                  
                  <button onClick={()=>dispatch(deleteUser({id:user.id}))}>DELETE USER</button>
                </div>
             ))
          }
    </div>
  )
}

export default App