import React from 'react'
import  { useEffect } from 'react';
// import AOS from '@types/aos';
import 'aos/dist/aos.css';

import IconMenu from './banner-sub-section/IconMenu'
import Slider from './banner-sub-section/Slider';
import Aos from 'aos';

function Banner() {
  useEffect(() => {
    Aos.init({
        duration: 1500,  
        once: true      
    });
}, []);
  return (
    <>
      {/* <div className="main-banner-container">
        <div className="container">
          <div className='banner-flex-1'>
            <div className='banner-header'>
              <div className="header">
                <div className='lorem'>
                <p data-aos="fade-in-up"  data-aos-duration="1500" data-aos-delay="300">lorem ipsum</p>
                </div>
                <h1 data-aos="fade-in-up" data-aos-duration="500">Full-time, Part-time,<br /> Every-time Looking for Top Talent?</h1>
                
                <p data-aos="fade-up" data-aos-duration="500">Hire exceptional foreign professionals <br /> with ease within a week! Lorem ipsum dolor sit amet</p>
                <p data-aos="fade-left">Lorem ipsum dolor sit amet</p>
              </div>

              <div className="stats">
                <div className='box-1 margin' data-aos="fade-in" data-aos-duration="1500">
                <h3>Up to 3 Interviews</h3>
                <p>Make a decision without pressure. Be prepared for it</p>
                </div>
                <div className='box-1' data-aos="fade-in" data-aos-duration="1500">
                <h3>Up to 3 Interviews</h3>
                <p>Make a decision without pressure. Be prepared for it</p>
                </div>
                <div className='box-1' data-aos="fade-in" data-aos-duration="1500">
                <h3>Up to 3 Interviews</h3>
                <p>Make a decision without pressure. Be prepared for it</p>
                </div>
              </div>
            </div>

            <div className="cards-container">
             
              
              <Slider/>
            </div>
          </div>



          <div className="icon-menu">
          

            <IconMenu/>
          </div>
        </div>
      </div> */}

<div className="main-banner-container pt-[50px] text-white">
  <div className="container mx-auto max-w-[1200px] px-4">
    <div className="banner-flex-1 flex border-2 border-red-600">
     
      <div className="banner-header flex-[0_0_50%] max-w-[50%]">
        <div className="header">
          <div className="lorem mb-4">
            <p
              data-aos="fade-in-up"
              data-aos-duration="1500"
              data-aos-delay="300"
              className="inline-block px-1.5 py-1 bg-white text-black"
            >
              lorem ipsum
            </p>
          </div>
          <h1
            data-aos="fade-in-up"
            data-aos-duration="500"
            className="py-4 text-3xl font-bold"
          >
            Full-time, Part-time,<br /> Every-time Looking for Top Talent?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            className="py-4"
          >
            Hire exceptional foreign professionals <br /> with ease within a
            week! Lorem ipsum dolor sit amet
          </p>
          <p data-aos="fade-left">Lorem ipsum dolor sit amet</p>
        </div>

        <div className="stats flex py-[50px] bg-transparent text-white">
          <div
            className="box-1 margin border-white mx-0 py-2"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <h3 className="py-2 text-lg font-medium">Up to 3 Interviews</h3>
            <p>Make a decision without pressure. Be prepared for it</p>
          </div>
          <div
            className="box-1  pl-[10px] border-white mx-4 py-2"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <h3 className="py-2 text-lg  font-medium">Up to 3 Interviews</h3>
            <p>Make a decision without pressure. Be prepared for it</p>
          </div>
          <div
            className="box-1  pl-[10px] border-white mx-4 py-2"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <h3 className="py-2 text-lg font-medium">Up to 3 Interviews</h3>
            <p>Make a decision without pressure. Be prepared for it</p>
          </div>
        </div>
      </div>

      <div className="cards-container flex-[0_0_50%] max-w-[50%]">
        <Slider />
      </div>
    </div>

    <div className="icon-menu mt-8">
      <IconMenu />
    </div>
  </div>
</div>



    </>
  )
}

export default Banner