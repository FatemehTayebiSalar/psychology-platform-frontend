import React from 'react'
import Landing from './components/Landing.js';
import {Route ,Routes} from "react-router-dom";
import Navbar from './components/Navbar.js'
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
import StartPage from './components/StartPage.js';
import './fonts/IRANSansWeb.ttf'
import Psychologits from './components/Psychologists.js';
import Footer from './components/Footer.js';



function App() {
  return (
    <div >
     
       <Navbar />
       <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/psych' element={<Psychologits/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer /> 
       
        
    </div>
  );
}

export default App;
