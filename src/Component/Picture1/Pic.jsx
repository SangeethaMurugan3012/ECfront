import React from 'react'
import img1 from './lookbook-2.webp'
import img2 from './lookbook-3_bc7bcae7-cb23-4629-a100-5952dd11fec5.webp'
import img3 from './lookbook-4.webp'
import Autohead from '../autohead/Autohead'

export default function Pic() {
  return (
    <div className='container-fluid'>
      <div>
        <h2 className="text-center mt-lg-5">Check Out Mix & Match</h2>
      </div>
      <div className='container'>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ms-lg-5">
          <div className="col">
            <div className="card  mb-3 mt-lg-5  p-lg-10" style={{width:"15rem"}}>
              <img src={img1} className="card-img-top " alt="..." />
              <div className="card-body">

                <p className="card-text">Beautifully Functional. Purposefully Designed.</p>
              </div>
            </div>
          </div>


          <div className="col">
            <div className="card mb-3 mt-lg-5  p-lg-10" style={{width:"15rem"}}>
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">

                <p className="card-text">Beautifully Functional. Purposefully Designed.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-3 mt-lg-5  p-lg-10" style={{width:"15rem"}}>
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">

                <p className="card-text">Beautifully Functional. Purposefully Designed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Autohead/>
    </div>

  )
}
