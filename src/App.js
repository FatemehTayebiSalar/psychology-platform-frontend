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



import Navbar from './components/Navbar/Navbar.js'
import Login from './components/Login/Login.js';
import Psychologits from './components/Psychologists/Psychologists.js';
import Footer from './components/Footer/Footer.js';
import PsychDetail from './components/Psychologists/PsychDetail.js';
import Events from './components/Events/Events.js';
import EventDetail from './components/Events/EventDetail';
import Podcasts from './components/Podcasts/Podcasts';
import PodcastDetail from './components/Podcasts/PodcastDetail';
import VideoDetail from './components/Videos/VideoDetail';
import Videos from './components/Videos/Videos';
import UserProfile from './components/UserProfile/UserProfile';
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
        <Route path='/videos/:id' element={<VideoDetail/>} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/profile' element={<UserProfile/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer /> 
       
        
    </div>
  );
}

export default App;
