import React from 'react'
import img1 from './collection-list-1.webp'
import img2 from './collection-list-2.webp'
import img3 from './collection-list-3.webp'
import img4 from './collection-list-4.webp'
import img5 from './collection-list-5.webp'
import img6 from './collection-list-6.webp'
import img7 from './before-image-min.jpg'
import img8 from './after-image-min.jpg'
import '../Threelayer/Three.css'
import Three from '../Component/Threelayer1/Three';


export default function Threeleyar() {
  return (
    <div className='container-fluid'>
        <div className=' text-center mt-lg-5 mb-lg-5'>
            <h5>Minimog Store</h5>
            <h1 className='mt-lg-3'>Living out every single day and <br /> be brave to show off your own true colors</h1>
            <p claasName='mt-lg-5'>Our new cozy collection is made with environmentally friendly materials and simple to <br /> care for so you can stay cozy wherever .</p>
            <a className='mt-lg-5  link-underline' href="abc">Shop Collection</a>

        </div>

        <div>
            <div className='row Con mt-lg-5 p-lg-0 mb-lg-5 '>
              <img  className=' h-25 w-10 col-xs-12 col-sm-6 col-md-4 col-lg-2' src={img1} alt="" />
              <img className='  h-25 w-10 col-xs-12 col-sm-6 col-md-4 col-lg-2' src={img2} alt="" />
              <img className='  h-25 w-10 col-xs-12 col-sm-6 col-md-4 col-lg-2' src={img3} alt="" />
              <img className='  h-25 w-10 col-xs-12 col-sm-6 col-md-4 col-lg-2' src={img4} alt="" />
              <img className='  h-25 w-10 col-xs-12 col-sm-6 col-md-4 col-lg-2' src={img5} alt="" />
              <img className='  h-25 w-10 col-xs-12 col-sm-6 col-md-4 col-lg-2' src={img6} alt="" />

            </div>
        </div>

  <div className='row'>
    <div className='col-12  col-sm-12 col-md-6 col-lg-6'>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner mt-lg-5 mb-lg-5">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={img7} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={img8} className="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

        <div className=' col-12  col-sm-12 col-md-6 col-lg-6  align-content-center text-center'>
           <h5>Mix & Match</h5>
           <h1 className=' mt-lg-3'>Layer up with <br />
           pieces designed</h1>
           <p className=' mt-lg-3'>Here is your chance to upgrade your wardrobe <br/> with a variation of styles and fits that are both.</p>
           <button className='border border-3 mt-lg-3 btn2'>Shop Mix & Match</button>
     </div>
        </div>

   <div className=' mt-lg-5 text-center '>
    <h3 classname='text-center'>Follow us Instagram</h3>
    <p className=' text-center'>Tag @minimog in your Instagram photos for a chance to be featured here.<br/>
    Find more inspiration on <a className="link-underline" href="abc"> our Instagram.</a></p>
   </div>Name
   <Three/>
    </div>
  )
}
