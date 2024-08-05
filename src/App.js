
import {Routes,Route}from 'react-router-dom';
import Home from './pages/Home';
import Sigin from './pages/sigin'
import Userpage from './pages/Userpage';
import Menu from './pages/Menu';
import Login from './pages/login';

export default function App (){
    
      return(
        <Routes>
          <Route path='/Home'Component={Home}/>
          <Route path='/'Component={Sigin}/>
          <Route path='/Menu'Component={Menu}/>
          <Route path='/Userpage'Component={Userpage}/>
          <Route path='/Home'Component={Login}/>
         
        </Routes>
)};
   
    
  



