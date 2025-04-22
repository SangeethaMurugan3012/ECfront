import React from 'react'
import img1 from './22.1a.jpg'
import img11 from './22.1b (1).jpg'
import img2 from './2.1a.jpg'
import img12 from './2.1b.jpg'
import img3 from './7.1a.jpg'
import img13 from './7.1b.jpg'
import img4 from './14.1a_923e2467-dbba-4e11-92ef-6a73309660c0.jpg'
import img14 from './14.1b_7dfad9d2-b8fd-49aa-9e87-8c2afc776a68.jpg'
import img5 from './6.1a.jpg'
import img15 from './6.1b.jpg'
import img6 from './9.1a copy.jpg'
import img16 from './9.1b.jpg'
import img7 from './11.1a.jpg'
import img17 from './11.1b.jpg'
import img8 from './4.1a.jpg'
import img18 from './4.1b.jpg'
import img9 from './13.1a.jpg'
import img19 from './13.1b.jpg'
import img10 from './18.1a-1.jpg'
import img20 from './18.1b-1.jpg'
import '../Styles/Cards.css'
import Picture from '../Picture/Picture'

export default function Cards() {
  return (
    <div className="container-fluid">
      <div>
        <h2 className="mt-lg-5 text-center">You are in best sellers </h2>
      </div>

      <div className="cardCon row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
        <div className="col ">
          <div className="card item1 mt-lg-5" style={{ width: "14rem" }}>
            <div className='card-header'>
            <img src={img1}  alt='this img not avilable' className="card-img-top bottom"  />
            <img src={img11} alt='this img not avilable'  className="card-img-top top" />
            </div>
            <div className="card-body cardbody1">
              <h5 className="card-title">Strppy Crop <br /> top</h5>
              <p className="card-text">$6.00</p>
            </div>
          </div>
        </div>

        <div className="col ">
          <div className="card item2 mt-lg-5 " style={{ width: "14rem" }}>
            <div className='card-header'>
            <img src={img2}  alt='this img not avilable' className="card-img-top bottom" />
            <img src={img12} alt='this img not avilable'  className="card-img-top top"  />
            </div>
            <div className="card-body cardbody2">
              <h5 className="card-title">Flat sandals with ankle strap</h5>
              <p className="card-text">$19.90</p>

            </div>
          </div>
        </div>
        
        <div className="col">
          <div className="card item3 mt-lg-5" style={{ width: "14rem" }}>
            <div className='card-header'>
              <img src={img3}  alt='this img not avilable' className="card-img-top bottom"  />
              <img src={img13} alt='this img not avilable'  className="card-img-top top"  />
            </div>
            <div className="card-body cardbody3">
              <h5 className="card-title">Printed tank <br /> top</h5>
              <p className="card-text">$9.90</p>
            </div>
          </div>
        </div>


        <div className="col ">
          <div className="card item4 mt-lg-5" style={{ width: "14rem" }}>
            <div className='card-header'>
            <img src={img4}  alt='this img not avilable' className="card-img-top bottom"  />
            <img src={img14} alt='this img not avilable'  className="card-img-top top" />
            </div>
            <div className="card-body cardbody4">
              <h5 className="card-title">Cotton Cargo Bermuda shorts</h5>
              <p className="card-text">$20.00</p>

            </div>
          </div>
        </div>

        <div className="col ">
          <div className="card item5 mt-lg-5" style={{ width: "14rem" }}>
            <div className='card-header' >
            <img src={img5}  alt='this img not avilable' className="card-img-top bottom"  />
            <img src={img15} alt='this img not avilable'  className="card-img-top top" />
            </div>
            <div className="card-body cardbody5">
              <h5 className="card-title">Rustic Strappy Crop top with</h5>
              <p className="card-text">$15.90</p>

            </div>
          </div>
        </div>
      </div>


      <div className=" cardCon row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
        <div className="col">
          <div className="card item6 mt-lg-5" style={{ width: "14rem" }}>
            <div className='card-header'>
            <img src={img6}  alt='this img not avilable' className="card-img-top bottom" />
            <img src={img16} alt='this img not avilable'  className="card-img-top top"  />
            </div>
            <div className="card-body cardbody6">
              <h5 className="card-title">Mini dress with ruffled strap</h5>
              <p className="card-text">$14.90</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card item7 mt-lg-5" style={{ width: "14rem" }}>
            <div className='card-header'>
            <img src={img7}  alt='this img not avilable' className="card-img-top bottom" />
            <img src={img17} alt='this img not avilable'  className="card-img-top top" />
            </div>
            <div className="card-body cardbody7">
              <h5 className="card-title">Contrast trainers with mesh</h5>
              <p className="card-text">$29.90</p>

            </div>
          </div>
        </div>

        <div className="col">
          <div className="card item8 mt-lg-5" style={{ width: "14rem" }}>
            <div className='card-header'></div>
            <img src={img8}  alt='this img not avilable' className="card-img-top bottom" />
            <img src={img18} alt='this img not avilable'  className="card-img-top top"/>
            <div className="card-body cardbody8">
              <h5 className="card-title">Linen blend waistcoat</h5>
              <p className="card-text">$13.90</p>

            </div>
          </div>
        </div>

        <div className="col">
          <div className="card item9 mt-lg-5" style={{ width: "14rem" }}>
            <div className='card-header'></div>
            <img src={img9}  alt='this img not avilable' className="card-img-top bottom" />
            <img src={img19} alt='this img not avilable'  className="card-img-top top" />
            <div className="card-body cardbody9">
              <h5 className="card-title">Denim bag with fringing</h5>
              <p className="card-text">$23.90</p>

            </div>
          </div>
        </div>

        <div className="col">
          <div className="card item10 mt-lg-5" style={{ width: "14rem" }}>
            <div className='card-header'>
            <img src={img10} alt='this img not avilable'  className="card-img-top bottom"  />
            <img src={img20} alt='this img not avilable'  className="card-img-top top"/>
            </div>
            <div className="card-body cardbody10">
              <h5 className="card-title">Striped knit bandeau crop top</h5>
              <p className="card-text">$9.99</p>

            </div>
          </div>
        </div>
      </div>

      <div className="mb-lg-5 mt-lg-5 text-center border-primary ">
        <button className="text-center btn border border-3 ">Shop All Products</button>
      </div>

    <Picture/>
    </div>










  )
}
