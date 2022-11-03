import React from 'react';
import logo from '../../images/icons/logo.png'
const Footer = () => {
    return (
       
  
<footer class="text-center text-lg-start bg-warning text-dark mb-0">
 
  
 
  <section class="py-5">
    <div class="container text-center text-md-start mt-5">
      
      <div class="row mt-3">
    
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          
          <div>
          <img className='w-50 h-50 mb-3' src={logo} alt="" />
          </div>
         
          <p>
            The leading travel agency in Bangladesh provides lots of best services
            to make tourism better and enjoyable.
          </p>
        </div>
       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Travelling</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Bus service</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Air ticket</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Taxi rent</a>
          </p>
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> Chiitagong, Bangladesh</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            Travel-guru@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      
      </div>
     
    </div>
  </section>
 

 
  <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
   
    <p > © 2022 Copyright: <span  class="text-reset fw-bold"> Travel Guru</span></p>
  </div>
 
</footer>

      
    );
};

export default Footer;