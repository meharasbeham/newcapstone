import React from 'react'
import './Menu.css'
import briyani from './briyani.jpg'
import vegtable from './vegetable.jpg'
import stepimg from './stepimg.jpg'
import familyimg from './familyimg.jpg'
import { Link } from 'react-router-dom'


export default function Menu() {
  
  return (
    <div>

      <img src={vegtable} width={"200px"} height={"200px"} alt='pic'  className='vegtable'/>

<div className='container'>

<div className='row'>

<div className='col-sm-3'>
<h1 id='bri'>Briyani</h1>
<img src={briyani} width={"500px"} height={"400px"} alt='pic'   className='briyani'/>

<h2>Ingridients</h2>
<p  className='ing'>
<li>hee and oil 250ml</li><br/>
    <li>mutton 1kg</li><br/>
    <li>pasmadi rice 1kg</li><br/>
    <li>onion 1/2kg</li><br/>
    <li>tomoto 1/2g</li><br/>
    <li>garlic1/4 kg</li><br/>
    <li>ginger 1/4kg</li><br/>
    <li>curd 1/4kg</li><br/>
    <li>lemon 2</li><br/>
    <li> corienderleef </li><br/>
    <li>Spearmint </li><br/>
    <li> cinnamon,clove,cordamom,star,brinchileef </li><br/>
    <li>briyani masala</li><br/>
    <li> salt and water</li><br/>
  </p>

</div>
<img src={stepimg} width={"400px"} height={"300px"} alt='im' className='step'/>
<h1>Method</h1>
<p className='step1'>
  <li>step 1</li><br/>
  first wash the rice. fill a bowel water and pour in the rice and let it soak 15minutes.
heat oil in a pan over medium heat. ad the cloves caramom and cinnamon to the pan.</p>

<p className='step2'> 
<li>step 2</li><br/>
saute for a few seconds, then add cutting onions, satue until the onion turn light brown color.
add tomoto and salt mix well and saute few minutes.
add mint leaves, coriander leaves and green chillis to the pan.</p>

<p className='step3'>
<li>step 3</li><br/>
stir and satue for a aminutes. then add ginger and garlic past mixer in the pan couple of minutes. 
add priyani masala, and curd mix well ,and add cleaned mutton and  2cup of water, 
then mix well and closed lid ...then 20minutes cooking mutton.</p>

<p className='step4'>
<li>step 4</li><br/>
 and open lid add poiled water 2cup and add lemon juse two spoon and add salt mix well and closed lid tightly and damp 15 minutes.

 slowely open and add litil bit of fryed cashews nuts and add some hee.**
 tasty briyani ready.**
</p>

<img src={familyimg} width={"900px"} alt='img' />
<h3>serving briyani with happyness..!</h3>
<p>
  <button className='but'><Link to={"/Home"}>Home Page</Link></button>
</p>
</div>
</div>

</div>
   
  )
}
