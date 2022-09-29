import './App.css';
import React, {useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  useEffect (()=>{
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
}, [])

// useEffect(() => {
//   const scroll = new LocomotiveScroll()
//   const target = document.querySelector('#js-target');

//   scroll.scrollTo(target)
// }, [])




  return (
    <div data-scroll-container className="App flex items-center flex-col bg-[#C2CAD0]">
      <Navbar/>
      <Home />

   
    
          </div>
  );
}

export default App;
