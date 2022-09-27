import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper"
const Testimonial = () => {
  return (
    <div className="w-full">
    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="flex sm:text-left flex-col text-3xl">"I made back the purchase price in just 48 hours! I'd be lost without Amazeballs. The service was excellent. Needless to say we are extremely satisfied with the results."
<span className="text-typo"> - Fernandina J.</span>
</SwiperSlide>
        <SwiperSlide className="flex flex-col  text-3xl">"Amazeballs has completely surpassed our expectations. I love Amazeballs. You've saved our business!"
        <span className="text-typo"> - Hans-Peter S.</span>
</SwiperSlide>
        <SwiperSlide className="flex flex-col  text-3xl">"We can't understand how we've been living without Amazeballs. Your company is truly upstanding and is behind its product 100%. The very best. I just can't get enough of Amazeballs. I want to get a T-Shirt with Amazeballs on it so I can show it off to everyone."
 <span className="text-typo"> - Huntington R.</span></SwiperSlide>
        <SwiperSlide className="flex flex-col  text-3xl">"I am really satisfied with my Amazeballs."
  <span className="text-typo"> - Trace I..</span></SwiperSlide>
        <SwiperSlide className="flex flex-col  text-3xl">"Amazeballs should be nominated for service of the year. I will recommend you to my colleagues. It fits our needs perfectly. Amazeballs is both attractive and highly adaptable."
 <span className="text-typo"> - Imelda Z.</span></SwiperSlide>  
      </Swiper>
      </div>
  );

}

export default Testimonial
