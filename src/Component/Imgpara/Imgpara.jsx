import React from 'react'
import img1 from './collection-tab-2.webp'
import img2 from './collection-tab-1.webp'
import img3 from './collap-tab-min.jpg'
import img4 from './logo-1.webp'
import img5 from './logo-2.avif'
import img6 from './logo-3.avif'
import img7 from './logo-4.webp'
import img8 from './logo-5.webp'
import img9 from './logo-6.webp'
import '../Styles/Cards.css'


import img10 from './lookbook-1-min_42fd8f57-f056-4b9b-8d30-613a9bcab508.jpg'
import img11 from './lookbook-2-min_4706a63c-4510-4b71-bf8a-d00ee9f7a0e8.jpg'
import Threeleyar from '../../Threelayer/Threeleyar'



export default function Imgpara() {
    return (<>
        <div className='container-fluid'>
            <div className='d-flex row mt-lg-5'>

                <div class="accordion accordion-flush col-lg-6 col-md-6 col-sm-12" id="accordionFlushExample">
                    <div class="accordion-item my-lg-3">
                        <p className='my-lg-3'>Hot This Week</p>
                        <h1 className='my-lg-5' >Beautifully functional <br />consciously crafted</h1>
                        <h2 class="accordion-header pb-lg-5">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <h4>01. Sweaters & Cardigans</h4>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">This snuggly soft cloud Relaxed cardigian serves a relaxed fit, with saddle <br />shoulders ---where the armhole seams curve towards the necline so that <br />the sleeve seamlessly hugs your shoulder</div>
                        </div>
                    </div>
                    <div class="accordion-item pb-lg-5">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <h4>02. The Bomber Jackets </h4>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">This snuggly soft cloud Relaxed cardigian serves a relaxed fit, with saddle <br />shoulders ---where the armhole seams curve towards the necline so that <br />the sleeve seamlessly hugs your shoulder</div>
                        </div>
                    </div>
                    <div class="accordion-item pb-lg-5">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                <h4>03. Carduroy Shirts</h4>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">This snuggly soft cloud Relaxed cardigian serves a relaxed fit, with saddle <br />shoulders ---where the armhole seams curve towards the necline so that <br />the sleeve seamlessly hugs your shoulder</div>
                        </div>
                    </div>
                </div>


                <div className=' col-lg-6 col-md-6 col-sm-12 '>
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src={img1} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={img2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={img3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>


        <div className='container-fluid'>
            <div className=' mt-lg-5' >
                <h5 className='text-center'>Featured in Press</h5>
            </div>
            <div className='d-flex row justify-content-around mt-lg-5 mb-lg-5'>
                <img className=' col-lg-2 col-md-4 col-sm-6 col-xs-12' src={img4} alt="" />
                <img className=' col-lg-2 col-md-4 col-sm-6 col-xs-12' src={img5} alt="" />
                <img className=' col-lg-2 col-md-4 col-sm-6 col-xs-12' src={img6} alt="" />
                <img className=' col-lg-2 col-md-4 col-sm-6 col-xs-12' src={img7} alt="" />
                <img className=' col-lg-2 col-md-4 col-sm-6 col-xs-12' src={img8} alt="" />
                <img className=' col-lg-2 col-md-4 col-sm-6 col-xs-12' src={img9} alt="" />
            </div>
        </div>
        <hr />

        <div className='container text-center mb-lg-5 mt-lg-5'>
            <h1 >The Coastal Edition</h1>
            <p className='mt-lg-4'>Our new cozy collection is made with environmentally friendly materials and <br />
                simple to care for so you can stay cozy wherever.</p>
            <button className='border border-3 mt-lg-4 btn1'>Shop Now</button>
        </div>

        <div className='ps-lg-1 container'>
            <div className=' d-flex row'>
                <div className=' col-lg-6 col-md-12 column-gap-md-4 ps-lg-0'>
                <img width={600} src={img10} className='img-fluid' alt="" />
               </div>
                <div className=' col-lg-6 col-md-12 column-gap-md-4 ps-lg-0'>
                    <img width={600} src={img11} className='img-fluid' alt="" />
                </div>
            </div>
  <Threeleyar/>
        </div>

    </>
    )
}
