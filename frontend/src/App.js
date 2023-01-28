import React from 'react'
import Landing from './components/Home/Landing';
import {Route ,Routes} from "react-router-dom";
import "./App.css";

//import fonts
import "./fonts/IRANSansWeb.ttf";
import "./fonts/IRANSansWeb_Bold.ttf";
import "./fonts/IRANSansWeb_Light.ttf";
import "./fonts/IRANSansWeb_UltraLight.ttf";
import "./fonts/IRANSansWeb_Medium.ttf";
import "./fonts/IRANSansWeb_Black.ttf"



import Navbar from './components/Navbar.js'
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
// import StartPage from './components/StartPage.js';
import Psychologits from './components/Psychologists.js';
import Footer from './components/Footer.js';
import PsychDetail from './components/PsychDetail.js';
import Events from './components/Events/Events.js';
import EventDetail from './components/Events/EventDetail';
import Podcasts from './components/Podcasts/Podcasts';
import PodcastDetail from './components/Podcasts/PodcastDetail';
// import Appointment from './components/Appointment.js';




function App() {
  return (
    <div  >
      
       <Navbar />
       <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/psychs/:id' element={<PsychDetail/>} />
        <Route path='/psychs' element={<Psychologits/>} />
        {/* <Route path='/appointment' element={<Appointment/>} /> */}
        <Route path='/events/:id' element={<EventDetail/>} />
        <Route path='/events' element={<Events />} />
        <Route path='/podcasts/:id' element={<PodcastDetail/>} />
        <Route path='/podcasts' element={<Podcasts />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer /> 
       
        
    </div>
  );
}

export default App;
