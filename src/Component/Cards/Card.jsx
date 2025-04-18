

import React from "react";
import Slider from "react-slick";
import img1 from './Bitmap.webp'
import img2 from './47871772.webp'
import img3 from './collection-list-9.webp'
import img4 from './collection-list-10.webp'
import img5 from './collection-list-11.webp'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiArrowRightCircle } from "react-icons/fi";
import '../Styles/Cards.css'
import Cards from "../Cards1/Cards";



function Card() {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,

    responsive: [
            {
                breakpoint: 1200, // Large screens (desktop)
                settings: {
                    slidesToShow: 3, // 3 slides for large screens
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]

    };
    return (<>
        <div>
            <h3 className="ms-lg-5 mt-lg-5">Shop by Categories</h3>
        </div>
        <div className=" cardCon1 row  slider-container mt-lg-5 me-lg-5 container-fluid" >

            <Slider {...settings}>

                <div className="col">
                    <div className="card   mt-lg-5 mb-lg-5" style={{ width: "15rem" }}>
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <div className="d-flex">
                                <h5 className="card-title mt-2 ms-4">Glasses <br /><small> 6 items</small></h5>
                                <p className="fs-1 ms-lg-5"><FiArrowRightCircle /></p>
                            </div>


                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card  mt-lg-5 mb-lg-5" style={{ width: "15rem" }}>
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <div className="d-flex">
                                <h5 className="card-title mt-2">Knit Wears <br /><small> 19 items</small></h5>
                                <p className="fs-1 ms-lg-5"><FiArrowRightCircle /></p>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card  mt-lg-5  mb-lg-5" style={{ width: "15rem" }}>
                        <img src={img3} className="card-img-top  " alt="..." />
                        <div className="card-body ">
                            <div className="d-flex">
                                <h5 className="card-title mt-2">Bags <br /><small> 32 items</small></h5>
                                <p className="fs-1 ms-lg-5"><FiArrowRightCircle /></p>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card  mt-lg-5 mb-lg-5" style={{ width: "15rem" }}>
                        <img src={img4} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <div className="d-flex">
                                <h5 className="card-title mt-2">Sneakers <br /><small> 6 items</small></h5>
                                <p className="fs-1 ms-lg-5"><FiArrowRightCircle /></p>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card  mt-lg-5 mb-lg-5" style={{ width: "15rem" }}>
                        <img src={img5} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <div className="d-flex">
                                <h5 className="card-title mt-2">Assesaries<br /><small> 8 item</small></h5>
                                <p className="fs-1 ms-lg-5"><FiArrowRightCircle /></p>
                            </div>


                        </div>
                    </div>
                  
                </div>

            </Slider >
            <Cards/>
        </div >
    </>
    );
}

export default Card;






