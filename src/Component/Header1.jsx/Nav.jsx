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

      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand fs-3" href="ttt">Libreria</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav text-center mx-auto">
                <li className="nav-item ">
                  <a className="nav-link active" aria-current="page" href="abc">Home</a>
                </li>
                <li className="nav-item nav-underline">
                  <a className="nav-link ms-lg-5" href="ccd">SHOPS</a>
                </li>
                <li className="nav-item ms-lg-5 nav-underline">
                  <a className="nav-link" href="ccd">PRODUCTS</a>
                </li>
                <li className="nav-item ms-lg-5 nav-underline">
                  <a className="nav-link" href="ccd">PAGES</a>
                </li>
                <li className="nav-item ms-lg-5 nav-underline">
                  <a className="nav-link" href="ccd">FOXKIT</a>
                </li>
              </ul>
              <form className="d-flex mt-2  " style={{ marginLeft: "140px", gap: "10px" }} role="search">
                <a className="nav-link active mx-lg-3 icon" aria-current="page" href="egt"><BsSearch /></a>




               
                <Link to={'/register'} >   <a className="nav-link mx-lg-3 icon" href='rty'><VscAccount/></a></Link>



                <a className="nav-link mx-lg-3 icon" href="dd"><FaRegHeart /></a>


                <a className="nav-link mx-lg-3 icon" href="dd"><BsBag /></a>



              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>


  </>
  )
}




