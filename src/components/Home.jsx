import React, {useState, useEffect} from 'react'
import Image from './Image'
import Testimonial from './Testimonial'
import { BsHammer, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'




const Home = () => {
    const data = [
        { 'id': '1', 'image': 'images/i1.jpg', 'description': 'description', 'type': 'interior' },
        { 'id': '1', 'image': 'images/i2.jpg', 'description': 'description', 'type': 'interior' },
        { 'id': '1', 'image': 'images/i3.jpg', 'description': 'description', 'type': 'interior' }, 
        { 'id': '1', 'image': 'images/i4.jpg', 'description': 'description', 'type': 'interior' }, 
        { 'id': '1', 'image': 'images/i5.jpg', 'description': 'description', 'type': 'interior' }, 
        { 'id': '1', 'image': 'images/i6.jpg', 'description': 'description', 'type': 'interior' }, 
        { 'id': '1', 'image': 'images/i7.jpg', 'description': 'description', 'type': 'interior' }, 
        { 'id': '1', 'image': 'images/l1.jpg', 'description': 'description', 'type': 'landscape' },
        { 'id': '1', 'image': 'images/l2.jpg', 'description': 'description', 'type': 'landscape' },
        { 'id': '1', 'image': 'images/l3.jpg', 'description': 'description', 'type': 'landscape' },
        { 'id': '1', 'image': 'images/l5.jpg', 'description': 'description', 'type': 'landscape' }, 
        { 'id': '1', 'image': 'images/s1.jpg', 'description': 'description', 'type': 'structures' }, 
        { 'id': '1', 'image': 'images/s2.jpg', 'description': 'description', 'type': 'structures' }, 
        { 'id': '1', 'image': 'images/s3.jpg', 'description': 'description', 'type': 'structures' }, 
        { 'id': '1', 'image': 'images/s4.jpg', 'description': 'description', 'type': 'structures' }, 
        { 'id': '1', 'image': 'images/i3.jpg', 'description': 'description', 'type': 'structures' }
    ]
    

    

    const [images, setImages] = useState(data)
    const checker = (item) => {
           return item.type === 'landscape'
    }

    const filterExpression = (arr, exp) => {
        return (arr.filter((item) => 
            item.type === exp)
        )

    }
   
        
    const handlePortfolioClick = (arr, querry) => {
       const filled = filterExpression(arr,querry)
        console.log(filled)
        setImages(filled)
    }

    
    const mappedImages = images.map((item) =>(
        <Image item = {item} />
    ))


    
  return (
    <div>
    <div  className="flex px-10 w-full sm:justify-center sm:px-1 justify-center hero">
        <div  className="w-1/3 heroText sm:w-80 sm:items-center  mx-2 flex items-start text-left justify-center flex-col">
            <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3" data-scroll-class="appear" data-scroll-repeat="true" className="text-5xl font-normal sm:text-7xl text-typo w-92">
                LET'S BRING YOUR VISION TO LIFE
            </h1>
            <h1 className="my-4 text-lg w-78">Making your ideas functional and Asthetically Apealling Is What We Do Best </h1>
            <button className="w-24 bg-typo h-12">
                Contact Us
            </button>
        </div>
        <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-3" data-scroll-class="appear" data-scroll-repeat="true" className="sideHero sm:hidden flex justify-end items-center">
        <img  src='images/5.png' className=' heroImg'/>
        </div>
    </div>

    {/* About Us */}
    <div  className='my-10 w-full px-10 flex flex-col aboutContainer justify-center items-center mb-4'>
    <div className=" px-10 flex sm:px-1 sm:justify-center justify-start items-center w-full">
    <h1 className="text-4xl sm:text-3xl text-left sm:w-44 w-2/3 border-b-4"><span className="sm:text-3xl text-5xl text-typo">1.</span> ABOUT US</h1>
    </div>
        <div className="flex justify-center my-16 items-center gap-5 aboutdiv">
            <div className="shadow-sm flex sm:hidden justify">
            <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="2" data-scroll-class="appear" data-scroll-repeat="true" className=" aboutImage" src="images/1.png" />
            </div>
        <div className="flex sm:w-96 sm:justify-center flex-wrap">
            <div className="w-1/2 sm:w-36 flex justify-start flex-col items-start my-4">
                <h1 className="text-3xl">1.</h1>
                <p className="text-xl sm:text-typo text-left">What We Do</p>
                <p className="text-xs text-left">Lorem ipsum dolor sit amet  dignissimos saepe hic minus.</p>
            </div>

            <div className="w-1/2 sm:w-36 flex justify-start flex-col items-start my-4">
                <h1 className="text-3xl">2.</h1>
                <p className="text-xl text-left sm:text-typo">What We Do</p>
                <p className="text-xs text-left">Lorem ipsum dolor sit amet  dignissimos saepe hic minus.</p>
            </div>

            <div className="w-1/2 sm:w-36 flex justify-start flex-col items-start my-4">
                <h1 className="text-3xl">3.</h1>
                <p className="text-xl text-left sm:text-typo">What We Do</p>
                <p className="text-xs text-left">Lorem ipsum dolor sit amet  dignissimos saepe hic minus.</p>
            </div>
            <div className="w-1/2 flex justify-start flex-col items-start my-4">
                <h1 className="text-3xl">4.</h1>
                <p className="text-xl text-left sm:text-typo">What We Do</p>
                <p className="text-xs text-left">Lorem ipsum dolor sit amet  dignissimos saepe hic minus.</p>
            </div>

            </div>

    </div>
    </div>

    {/* PortFolio */}

    <div id="about"  className='my-14 w-full sm:w-full  flex flex-col justify-center items-center mb-4'>
        <div className=" px-10 sm:px-1 sm:justify-center flex justify-start items-center w-full">
    <h1 className="text-4xl sm:text-2xl text-left w-56 border-b-4"><span className="text-5xl sm:text-2xl text-typo">3.</span> OUR RECENT WORKS</h1>
    </div>
    <ul className="flex sm:w-52 sm:gap-1 gap-6 my-6 border-b-2">
        <li onClick={() => {setImages(data)}} className="border-r-2 px-5 sm:px-1 sm:text-xs">ALL</li>
        <li onClick = {() => handlePortfolioClick(data, 'landscape')} className="border-r-2 px-5 sm:px-1 sm:text-xs">LANDSCAPE</li>
        <li className="border-r-2 px-5 sm:px-1 sm:text-xs" onClick={() => handlePortfolioClick(data,'interior')} >INTERIOR</li>
        <li  className="border-r-2 px-5 sm:px-1 sm:text-xs" onClick={() => handlePortfolioClick(data,'structures')} >STRUCTURES</li>

    </ul>
    <div className='flex flex-wrap justify-center sm:w-80 items-center w-full'>
        {mappedImages}
    </div>

{/* why choose us */}
    </div><div className='w-full flex flex-col items-center justify-center px-10 mt-36'>
        <div  className=" px-10 sm:w-96 sm:justify-start flex justify-start items-center w-full">
            <h1 className="text-4xl text-left w-2/3 border-b-4">
                <span className="text-5xl text-typo">4. </span>
                WHY CHOOSE US
            </h1>
        </div>
        <div className="flex justify-center sm:80 w-full gap-8 mt-12">
            <div className='w-3/4 sm:hidden'>
                <img className="" src="images/2.png" alt="Architecture building" />
            </div>
            <div className='w-1/2 flex flex-col justify-center items-start gap-12'>
            <div className="flex flex-col justify-center items-center w-4/5 text-left">
                <div className="flex-row flex justify-start items-center gap-6"> <BsHammer className="text-typo"/><h1 className="text-3xl text-typo"> Inovative Designs </h1></div>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed deleniti, minima animi tenetur eaque aspernatur veniam minus earum tempora. Beatae ratione animi sapiente consequuntur itaque accusamus tenetur placeat. Incidunt?</p>
            </div>

            <div className="flex flex-col justify-center items-center w-4/5 text-left">
               <div className="flex-row flex justify-start items-center gap-6"> <BsHammer/> <h1  className="text-3xl text-typo">Passionate Approach</h1></div>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed deleniti, minima animi tenetur eaque aspernatur veniam minus earum tempora. Beatae ratione animi sapiente consequuntur itaque accusamus tenetur placeat. Incidunt?</p>
            </div>

            <div className="flex flex-col justify-center items-center w-4/5 text-left">
               <div className="flex-row flex justify-start items-center gap-2"> <BsHammer/> <h1  className="text-3xl text-typo"> Transparent Business Model</h1></div>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed deleniti, minima animi tenetur eaque aspernatur veniam minus earum tempora. Beatae ratione animi sapiente consequuntur itaque accusamus tenetur placeat. Incidunt?</p>
            </div>

            <div className="flex flex-col justify-center items-center w-4/5 text-left">
                <div className="flex-row flex justify-start items-center gap-6"> <BsHammer/><h1  className="text-3xl text-typo"> Inovative Designs</h1>
</div>                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed deleniti, minima animi tenetur eaque aspernatur veniam minus earum tempora. Beatae ratione animi sapiente consequuntur itaque accusamus tenetur placeat. Incidunt?</p>
            </div>
            </div>


        </div>

    </div>

    {/* Testimonials */}
    <div  className=" px-10 flex testimony justify-center flex-col mb-24 mt-24 items-center w-full">
        <div data-scroll className="px-10 flex sm:w-96 justify-start items-center w-full">
        <h1 className ="text-4xl sm:text-2xl sm:w-96 sm:text-center text-left w-2/3 border-b-4"><span className="text-5xl text-typo">5. </span>WORD FROM OUR CLIENTS</h1>
        </div>
        <div className='w-7vw sm:w-full my-9'>
            <Testimonial /> 
        </div>
    </div>

    {/* Contact Us */}
<div  className='w-full gap-8 px-10 flex flex-col'>
<div className="px-10 flex sm:justify-center justify-start sm:80 items-center w-full">
        <h1 className ="text-4xl text-left w-2/3 border-b-4"><span className="text-5xl text-typo">6. </span>GET IN TOUCH</h1>
        </div>
        <div className=" flex gap-16">
            <div className='w-1/2  sm:hidden'>
                <img src="images/contact.jpg" alt="people in a company" />
            </div>

            <div className="flex flex-col contact sm:bg-opacity-10 justify-center sm:items-center sm:w-full w-1/2 items-start">
                <h1 className="text-4xl  sm:text-white">Contact Us</h1>
                <p className="w-96 text-lg sm:text-typo text-left"> Have an inquiry or some feedback for us? fill the form below to contact our team</p>
                <div className='flex gap-4 mt-8'>
                    <div>
                        <p className="text-lg">First Name</p>
                        <input className="w-64 sm:w-44" />
                    </div>
                    <div>
                        <p className="text-lg">Last Name</p>
                        <input className="w-64 sm:w-44" />
                    </div>
                    </div>
                    <div>
                        <p className="text-lg">Email Address</p>
                        <input className="w-64 sm:w-52"/>
                    </div>
                    <div>
                        <p className="text-lg">Message</p>
                    <textarea className="w-96">
                    </textarea>
                    </div>
                    <div className="w-1/2 flex justify-start mt-5">
                <button className="bg-typo w-52 h-12">Send Message</button>
            </div>
                
        
            </div>
        </div>
        <div className='flex justify-center items-center px-10 w-full'>
            <div className="w-full flex justify-center">
                <div className='w-1/4 flex-col items-center justify-center border-r-2'>
                    <h5 className='text-typo px-2'>Where to find us?</h5>
                    <p> P.B.O 1290 Ahmadu Bello Way, Kaduna, Nigeria</p>
                </div>
                <div className='w-1/4 flex-col items-center justify-center border-r-2 border-r-typo'>
                    <h5 className='text-typo px-2'>Open Hours</h5>
                    <p> P.B.O 1290 Ahmadu Bello Way, Kaduna, Nigeria</p>
                </div>
                <div className='w-1/4 flex-col items-center justify-center border-r-2'>
                    <h5 className='text-typo px-2'>Where to find us?</h5>
                    <p> P.B.O 1290 Ahmadu Bello Way, Kaduna, Nigeria</p>
                </div>

            </div>
            

        </div>
</div>

{/* footer */}

<div  className='footer'>
<div className="px-10 sm:px-0 mt-56 w-full flex sm:pb-4 sm:justify-center sm:items-center footer pt-12 border-b-2">
    <div className='w-1/3 flex flex-col justify-center items-start '>
        <h1 className='text-3xl sm:text-xl text-typo'>AMAZEBALLS</h1>
        <p className='text-left sm:text-sm sm:w-24 w-72'>Lorem, ipsum dolor sit. Dignissimos quas ipsa illum eligendi vitae</p>
<div className='flex gap-3 mt-4'><BsFacebook/> <BsTwitter/> <BsLinkedin/> </div>
    </div>

    <div className="w-1/4 sm:mt-1 mt-2">
        <h3 className='2xl sm:text-typo font-bold'>Visit Us</h3>
        <p className='text-left'> P.B.O 1290 Ahmadu Bello Way, Kaduna, Nigeria</p>  
    </div>

    <div className="w-1/5 sm:hidden">
        <h3  className='2xl font-bold'>Contact Us</h3>
        <p>+23490737662</p>
        <p>Sike@google.com</p>  
</div>

<ul className='flex justify-center items-end w-1/5 flex-col'>
    <li className='text-typo'>Twitter</li>
    <li  className='text-typo'>Facebook</li>
    <li  className='text-typo'>LinkedIn</li>
    <li  className='text-typo'>Dribble</li>   
    </ul>

    </div>
    <div className="flex justify-center sm:mt-10 items-center w-full gap-7 px-10">
        <h6 className='text-typo'>Terms &amp; Condition</h6>
        <h6 className='text-typo'>Privacy Policy</h6>
        <h6 className='text-typo'>Cookies</h6>
        <h6 className='text-typo'>Copyright 2022</h6>
    </div>
</div>

    </div>
  )
}

export default Home