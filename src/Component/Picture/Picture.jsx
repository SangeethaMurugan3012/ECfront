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
        <div class="card  mb-lg-5 mt-lg-5 h-100 w-100 bg-secondary-subtle" >
  <div class="row g-0">
    <div class=" col-md-4">
      <img src={img1} class="img-fluid rounded-start w-100 h-100" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-center">New Collection</h5>
        <p class="card-text text-center fs-1">The ReLeather Beige <br /> Tennis Shoe</p>
        <div class="d-flex">
        <img class=" ms-lg-5 w-25 h-50" src={img2} alt="" />
        <img class=" ms-lg-5 w-25 h-50" src={img3} alt="" />
        <img class=" ms-lg-5 w-25 " src={img4} alt="" />
        </div>
        <hr />
        <div class="d-flex justify-content-between">
           
        <p class="card-text fs-4">Shop New Collection</p>
        <p class="card-text fs-4 pe-2"><FiArrowRightCircle /></p>
        </div>
      </div>
    </div>
  </div>
</div>
<Pic/>
    </div>
  )
}
