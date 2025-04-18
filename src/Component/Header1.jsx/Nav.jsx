import React from 'react'
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

import '../Header1.jsx/Nav.css'
import {Link } from 'react-router-dom';


export default function Nav() {
  return (<>


    <div className='container-fluid'>

      <nav class="navbar navbar-expand-md bg-body-tertiary fixed-top">
        <div class="container">
          <a class="navbar-brand fs-3" href="ttt">Libreria</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav text-center mx-auto">
                <li class="nav-item ">
                  <a class="nav-link active" aria-current="page" href="abc">Home</a>
                </li>
                <li class="nav-item nav-underline">
                  <a class="nav-link ms-lg-5" href="ccd">SHOPS</a>
                </li>
                <li class="nav-item ms-lg-5 nav-underline">
                  <a class="nav-link" href="ccd">PRODUCTS</a>
                </li>
                <li class="nav-item ms-lg-5 nav-underline">
                  <a class="nav-link" href="ccd">PAGES</a>
                </li>
                <li class="nav-item ms-lg-5 nav-underline">
                  <a class="nav-link" href="ccd">FOXKIT</a>
                </li>
              </ul>
              <form class="d-flex mt-2  " style={{ marginLeft: "140px", gap: "10px" }} role="search">
                <a class="nav-link active mx-lg-3 icon" aria-current="page" href="e"><BsSearch /></a>




                {/* <a class="nav-link mx-lg-3 icon" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><VscAccount /></a> */}
                <Link to={'/register'} >   <a class="nav-link mx-lg-3 icon" href='rty'><VscAccount/></a></Link>



                <a class="nav-link mx-lg-3 icon" href="dd"><FaRegHeart /></a>


                <a class="nav-link mx-lg-3 icon" href="dd"><BsBag /></a>



              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>


  </>
  )
}




