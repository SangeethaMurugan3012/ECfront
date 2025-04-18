import React from 'react'
import Slider from "react-slick";
import img1 from './collection-list-9.webp'
import img2 from './4.1a.jpg'
import img3 from './collection-list-9.webp'
import img4 from './7.1a.jpg'
import img5 from './14.1a_923e2467-dbba-4e11-92ef-6a73309660c0.jpg'
import img6 from './collection-list-9.webp'
import Imgpara from '../Imgpara/Imgpara';



export default function Autohead() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div  className=' mt-5 align-items-center  container-fluid'>
         <hr className=' text-secondary w-100 ' />
      <Slider {...settings}>
        <div className=' d-flex'>
        <div>
          <img className=' mx-lg-2 mx-md-2 mx-sm-2 rounded rounded-3' height={40} width={50} src={img1} alt="" />
          </div>
          <h3>New Season Essential</h3>
        </div>
        <div className=' d-flex'>
        <div>
          <img className=' mx-lg-2 mx-md-2 mx-sm-2 rounded rounded-3' height={40} width={50} src={img2} alt="" />
          </div>
          <h3>Purposefully Designed</h3>
        </div>
        <div className=' d-flex'>
        <div>
          <img className=' mx-lg-2 mx-md-2 mx-sm-2 rounded rounded-3' height={40} width={50} src={img3} alt="" />
          </div>
          <h3>New Season Essential</h3>
        </div>
        <div className=' d-flex'>
        <div>
          <img className=' mx-lg-2 mx-md-2 mx-sm-2 rounded rounded-3' height={40} width={50} src={img4} alt="" />
          </div>
          <h3>Purposefully Designed</h3>
        </div>
        <div className=' d-flex'>
        <div>
          <img className=' mx-lg-2 mx-md-2 mx-sm-2 rounded rounded-3' height={40} width={50} src={img5} alt="" />
          </div>
          <h3>New Season Essential</h3>
        </div>
        <div className=' d-flex'>
        <div>
          <img className=' mx-lg-2 mx-md-2 mx-sm-2 rounded rounded-3' height={40} width={50} src={img6} alt="" />
          </div>
          <h3>Purposefully Designed</h3>
        </div>
      </Slider>
      <hr className=' text-secondary w-100 text-bg-secondary' />
      <Imgpara/>
    </div>
  );
}

