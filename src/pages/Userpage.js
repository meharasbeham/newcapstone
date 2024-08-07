import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import './Userpage.css'
import Backimage from'./backimage.jpg'
import axios from 'axios'
  

export default function Userpage() {
const [dish,setDish]=useState()
const [comment,setComment]=useState()
 
const create = (e)=>{ 
  const data={"Dishname":dish,
  "Comment":comment

}

  axios.post("https://capstonedb.onrender.com/api/Menu/Create",data)

  .then((response)=>console.log(response.data)
  .catch((error)=> console.log(error)))
   
}
  
  return (
<div className='container-fluid'>
<div className="row">
<div className="col-sm-3">  
  <h1 class="menu">User page</h1><hr/>
  
  </div>
   <div className="col-sm-9">
    <img src={Backimage} alt="menu" width={"50%"} height={"650PX"} className='menuimg'/>
    <form onSubmit={create} className="form">
    <h2>User form</h2>

    <label for="dish">Dish Name *</label><br/>
    <input type="name" value={dish}required onChange={(e)=>setDish(e.target.value)}/><br/>

    <label for="text"></label> Comment*<br/>
     <textarea id="text"  rows="10" cols="50"value={comment}required onChange={(e)=>setComment(e.target.value)}></textarea><br/>
       <button type="submit" class="btn" onClick={create}>Create</button>
    
  </form>
    </div>
    <button className='but'><Link to={"/Home"}>Home Page</Link></button>
 </div>
</div>

  )
}