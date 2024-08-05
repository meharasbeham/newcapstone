import React from 'react';
import imge from './imgtitle.jpg';
import { Link } from 'react-router-dom';
import imge2 from './indian food.png';
import './Home.css';

export default function Home() {
  return (
    <div>
<ul>
  <img src={imge2} alt={"foodimg"} width={"100px"} className='food'></img>
  <li style={{float:"right"}}><Link to={"/Home"}>Login</Link></li>
  <li style={{float:"right"}}><Link to={"/Home"}>singin</Link></li>
  <li style={{float:"left"}}><Link to={"/Home"}>Home</Link></li>
  <li style={{float:"left"}}><Link to={"/Menu"}>Menu</Link></li>
  <li style={{float:"left"}}><Link to={"/Userpage"}>Userpage</Link></li>
   <li style={{float:"center"}} className='title'>indian foods</li>
 </ul>

 <h1>welcome indian foods</h1>

<img src={imge} id="pic" width={"1250px"}height={"600px"} alt='img'/>
<footer>Thank you for visit indian food page</footer>

</div>
  ); 
};
