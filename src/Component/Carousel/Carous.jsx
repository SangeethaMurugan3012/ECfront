import React from 'react'
import img1 from './fashion1.jpg'
import img2 from './fashion2.jpg'
import img3 from './fashion3.jpg'
import Card from '../Cards/Card'


export default function Carous() {
  return (
    <div className='container-fluid'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={img1} className="d-block w-100" alt=""/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={img2} className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item" data-bs-interval="3000" >
            <img src={img3} className="d-block w-100" alt="" />
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
      <Card />
    </div>
  )
}
