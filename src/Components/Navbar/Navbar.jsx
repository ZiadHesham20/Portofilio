import React from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";

export default function Navbar() {
  $(window).scroll(function(){
  
    if($(window).scrollTop() > (($("#thechange").offset().top - 85) - $('nav').innerHeight())){
     $('nav').addClass('bg-black')
     $('nav').addClass("shadow-sm");
     $('.toupbutton').removeClass("opacity-0");


     

     
     

    
     
     
    }
    else{
    //  $('nav').css("backgroundColor","rgba(0, 0, 0, 0)");
    $('nav').removeClass('bg-black')
     $('nav').removeClass("shadow-sm");
     $('.toupbutton').addClass("opacity-0");
     

     
     
 
    }
 })
  return <>
    <nav className="navbar navbar-expand-lg position-fixed end-0 start-0">
  <div className="container-fluid">
  <a href='#Home' className='text-white p-0 ziad1 fw-bold ms-4'>Z I A D</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav ms-auto mb-2 mb-lg-0 me-4 ">
        <a href='#Home'><li className="nav-item mx-3">Home</li></a>
        <a href='#About'><li className="nav-item mx-3">About</li></a>
        <a href='#Projects'><li className="nav-item mx-3">Projects</li></a>
        <a href='#Services'><li className="nav-item mx-3">Services</li></a>
      </ul>
    </div>
  </div>
</nav>
  </>
}
