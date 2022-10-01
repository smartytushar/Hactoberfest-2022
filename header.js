import React from 'react'
import medicin from './imgs/medicin.png'
import wellness from "./imgs/navimg3.png"
import labtest from "./imgs/navimg1.png"
import beauty from "./imgs/navimg6.png"
import healthcare from "./imgs/navimg8.png"

import './header.css'

function Header() {
  return (
   <>
   <div className="nav_marg">
      <nav className=" navbar navbar-expand-lg ">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavi" aria-controls="navbarNavi"  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse" id="navbarNavi">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Medicine</a>
            <ul className="dropdown-menu dropdownbackground" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">All Medicines</a></li>
                <li><a className="dropdown-item" href="#">Previously Ordered Products</a></li>
            </ul>
            </li>
       
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Wellness
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
            
                <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Labtest
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Beauty
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item " href="#">Personal Care</a></li>
            <li><a className="dropdown-item" href="#">Make-Up</a></li>
            <li><a className="dropdown-item" href="#">Hair</a></li>
            <li><a className="dropdown-item" href="#">Skin Care</a></li>
            <li><a className="dropdown-item" href="#">Tools & Application</a></li>
            <li><a className="dropdown-item" href="#">Mom & Baby</a></li>
            <li><a className="dropdown-item" href="#">Fragrances</a></li>
            
            
            <li><a className="dropdown-item" href="#">Men's Grooming</a></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle navbarcolor" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Healthcare
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item currsor">
          <a className="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Diabetes
          </a>
        </li>
       
        <li className="nav-item currsor">
          <a className="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Eyewear
          </a>
        </li>

        <li className="nav-item currsor">
          <a className="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Ayurvedic
          </a>
        </li>

        <li className="nav-item currsor">
          <a className="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Homeopathy
          </a>
        </li>

        <li className="nav-item currsor">
          <a className="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Fitness
          </a>
        </li>

        <li className="nav-item currsor">
          <a className="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Surgicals
          </a>
        </li>

        <li className="nav-item currsor">
          <a className="nav-link navbarcolor" href="#" id="navbarDropdown" role="button" >
          Surigcare 
          </a>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
</div>
 
</>
  )
}

export default Header