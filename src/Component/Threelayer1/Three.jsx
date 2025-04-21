
import img1 from './ins-main-1.jpg'
import img2 from './ins-main-4.jpg'
import img3 from './ins-main-7.jpg'
import img4 from './ins-main-6.jpg'
import img5 from './ins-main-3.jpg'
import'../Threelayer1/Leyar.css'
import React from "react";
import Slider from "react-slick";
import Map from '../Crd/Map'

function Resizable() {
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="mt-lg-5 mb-lg-5 container-fluid cards ">
            <Slider {...settings}>
                <div className='slideImg'>
                   <img className='h-75 w-75' src={img1} alt="" />
                </div>
                <div className='slideImg'>
                <img className='h-75 w-75' src={img2} alt="" />
                </div>
                <div className='slideImg'>
                <img className='h-75 w-75' src={img3} alt="" />
                </div>
                <div className='slideImg'>
                <img className='h-75 w-75' src={img4} alt="" />
                </div>
                <div className='slideImg'>
                <img className='h-75 w-75' src={img5} alt="" />
                </div>
                
            </Slider>
            <Map/>
        </div>
      
    
  );

}

export default Resizable;
