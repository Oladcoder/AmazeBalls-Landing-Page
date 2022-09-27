import './App.css';
import React, {useEffect} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  useEffect (()=>{
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
}, [])

  return (
    <div data-scroll-container className="App flex items-center flex-col bg-[#C2CAD0]">
      <Navbar/>
      <Home />

   
    
          </div>
  );
}

export default App;
