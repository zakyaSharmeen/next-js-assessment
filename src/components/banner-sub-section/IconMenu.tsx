import React from 'react'
import { FaUser } from "react-icons/fa";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';



function IconMenu() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

 
  return (
    <>
     

      <div className="icon-menu-content mt-7 py-12"  data-aos-duration="1500" data-aos-delay="300">
      <Slider {...settings}>
        <div>
          <div className="icon mx-[10px]" data-aos="fade-in">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div className="icon"  data-aos="fade-in">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div className="icon"  data-aos="fade-in">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div className="icon"  data-aos="fade-in">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>
        <div>
          <div className="icon"   data-aos="fade-in">
            <div className="sub-content">

              <div className='user-icon'>
                <FaUser />
              </div>
              <p>Global Marketing</p>
            </div>
          </div>
        </div>

        

      </Slider>



     </div>







    </>
  )
}

export default IconMenu