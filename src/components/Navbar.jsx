import React, {useState} from 'react'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {FaBars} from 'react-icons/fa'



const Navbar = () => {
  const [Active, setActive] = useState(false)

  const navbar = document.querySelector('ul')
  
      function toggler (){
        setActive(prev => !prev)
          console.log('working')
          }

  return (
    <div className = "px-10 sm:px-0 sm:w-96 sm:justify-center  flex justify-between items-center w-full">
      <ul className={` ${Active ? 'showNav' : ''} flex justify-start sm:bg-typo sm:h-96 ulNav sm:px-12 items-center sm:fixed sm:flex-col sm: sm:py-14 sm:translate-x-96  w-1/3`}>
       <Link to='about' smooth ={true}>  <li  className="text-xs px-1 sm:text-lg sm:text-white navitem hover:text-typo">HOME</li></Link>
        <li className="text-xs sm:text-lg px-1 sm:text-white navitem hover:text-typo">ABOUT</li>
        <li className="text-xs sm:text-lg px-1 sm:text-white navitem hover:text-typo">PORTFOLIO</li>
        <li className="text-xs sm:text-lg px-1 sm:text-white navitem hover:text-typo">TESTIMONIALS</li>
        <li className="text-xs sm:text-lg sm:text-white sm:hover:bg-typo sm:font-bold px-1 navitem hover:text-typo">WHY US</li>
      </ul>

      <div className="flex justify-center sm:shadow-md sm:h-16 items-center sm:w-96 w-1/3">
        
        <h1 className="sm:mr-20 text-4xl">AMAZEBAALLS</h1>
        <button onClick={() => {toggler()}} className='hidden trigger sm:block'><FaBars /></button>
      </div>
      
      
      <div className="flex justify-end sm:hidden sm:ml-20 sm:justify-center sm:w-2 w-1/3">
        <button className="rounded-full flex justify-center items-center bg-slate-400 w-22 h-12 sm:hidden">Contact Us</button>
      </div>

      
    </div>
  )
}

export default Navbar
