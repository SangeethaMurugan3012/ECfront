import React from 'react'
import img1 from './image-card1_26dbdee9-e640-45db-835b-00d8c15522cc.webp'
import img2 from './shoe2.jpg'
import img3 from './shoe1.jpg'
import img4 from './shoe3.jpg'
import { FiArrowRightCircle } from "react-icons/fi";
import '../Styles/Cards.css'
import Pic from '../Picture1/Pic'

export default function Picture() {
  return (
    <div className='container-fluid'>
        <div className="card  mb-lg-5 mt-lg-5 h-100 w-100 bg-secondary-subtleName" >
  <div className="row g-0">
    <div className=" col-md-4">
      <img src={img1} className="img-fluid rounded-start w-100 h-100" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-center">New Collection</h5>
        <p className="card-text text-center fs-1">The ReLeather Beige <br /> Tennis Shoe</p>
        <div className="d-flex">
        <img className=" ms-lg-5 w-25 h-50" src={img2} alt="" />
        <img className=" ms-lg-5 w-25 h-50" src={img3} alt="" />
        <img className=" ms-lg-5 w-25 " src={img4} alt="" />
        </div>
        <hr />
        <div className="d-flex justify-content-between">
           
        <p className="card-text fs-4">Shop New Collection</p>
        <p className="card-text fs-4 pe-2"><FiArrowRightCircle /></p>
        </div>
      </div>
    </div>
  </div>
</div>
<Pic/>
    </div>
  )
}
