import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Login() {
  const [Name,setName]=useState()
   const [Email,setEmail]=useState()
  const [Password,setPassword]=useState()

  const Create=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3500/api/User/Create',{Name,Email,Password})
   
    .then((response)=>console.log(response))
    .catch(err=>console.log(err))
}
  
  return (
    
    <div className=''>
<form onSubmit={Create}>
<h1>Create Account</h1>
<p>
  <label type='name' >Name:</label>
  <input type='name' className='name' size={25}value={Name}required onChange={(e)=>setName(e.target.value)}></input>
</p>
<p>
  <label type='email' >Email:</label>
  <input type='email' className='email' size={25}value={Email}required onChange={(e)=>setEmail(e.target.value)}></input>
</p>
<p>
  <label type='password' >password:</label>
  <input type='password'  className='password'  size={25}value={Password}required onChange={(e)=>setPassword(e.target.value)}></input>
</p>

<Link to={"/home"}> login</Link>
</form>

    </div>
  )
}
