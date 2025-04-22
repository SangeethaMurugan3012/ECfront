import React from 'react'
import img1 from './icon-collection-1.png'
import img2 from './icon-collection-2.png'
import img3 from './icon-collection-3.png'
import img4 from './icon-collection-4.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import '../Footer.jsx/Foot.css'

export default function Footer() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        
        <div className='d-flex col-sm-12 col-md-6 col-lg-3'>
          <div>
            <img className='h-25 w-10 img1' src={img1} alt="" />
          </div>
          <div>
            <h4>Free Shipping</h4>
            <p>Free Shipping for orders overF £130</p>
          </div>
        </div>
        <div className='d-flex col-sm-12 col-md-6 col-lg-3 '>
          <div>
            <img className='h-25 w-10 img1' src={img2} alt="" />
          </div>
          <div>
            <h4>Money Guarantee</h4>
            <p>Within 30 days for an exchange.</p>
          </div>
        </div>
        <div className='d-flex col-sm-12 col-md-6 col-lg-3   '>
          <div>
            <img className='h-25 w-10 img1' src={img3} alt="" />
          </div>
          <div>
            <h4>Online Support</h4>
            <p>24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className='d-flex col-sm-12 col-md-6 col-lg-3 '>
          <div>
            <img className='h-25 w-10 img1' src={img4} alt="" />
          </div>
          <div>
            <h4>Flexible Payment</h4>
            <p>Pay with Multiple Credit Cards</p>
          </div>
        </div>

      </div>


<div className='row mb-lg-5 justify-content-around bg-secondary-subtle '>
  <div className=' col-sm-12 col-md-6 col-lg-3 mt-lg-5 mb-lg-5'>
    <h3>Let's get in touch</h3>
    <p>Sign up for our newsletter and receive 10% off your first order</p>
    <input type="text" placeholder='Enter your email' />
    <button className='border border-3 bg-dark text-light mt-lg-4 btn4'>Subscribe now</button>

  </div>
  <div className='col-sm-12 col-md-6 col-lg-3 mt-lg-5 mb-lg-5'>
    <ul className='list-unstyled'>
      <li className=' fs-4 fw-bold under'> Ouick link</li>
      <li className='mt-2 under'>My account</li>
      <li className='mt-2 under'>Cart</li>
      <li className='mt-2 under'>Wishlist</li>
      <li className='mt-2 under'>Product Compare</li>
      
    </ul>

  </div>
  <div className='col-sm-12 col-md-6 col-lg-3 mt-lg-5 mb-lg-5'>
  <ul className='list-unstyled '>
      <li className=' fs-4 fw-bold under'> Company</li>
      <li className='mt-2 under'>About Us</li>
      <li className='mt-2 under'>Careers</li>
      <li className='mt-2 under'>Delivery Information</li>
      <li className='mt-2 under'>Privacy Policy</li>
      <li className='mt-2 under'>Terms & Condition</li>
      
    </ul>

  </div>

  <div className='col-sm-12 col-md-6 col-lg-3 mt-lg-5 mb-lg-5'>
  <h5 className='fs-4 fw-bold'>Our Store</h5>
    <ul className='d-flex gap-3 fs-3 list-unstyled'>
      
    <li className='img1'><FaFacebook /></li>
    <li className='img1'><IoLogoInstagram /></li>
    <li className='img1'><FaSnapchatSquare /></li>
    <li className='img1'><FaYoutube /></li>
    <li className='img1'><SiTiktok /></li>
    </ul>
  </div>
</div>




    </div>

    

    
  )
}
