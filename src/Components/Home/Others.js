import React from 'react';
import '../Home/Home.css';
import Lottie from 'react-lottie';
import animationData from '../../lottie/110986-contact-us.json';

const Others = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
    return (
       <div className='container mb-5'>
        <h1 className='text-center mt-5 mb-5'>Contact us</h1>
         <div className='row'>
         <div className='col-md-6 w-full'>
       <div>
       <Lottie 
	    options={defaultOptions}
        height={400}
       
      />
       </div>
  </div>
  <div className='col-md-6 '>
  <form className='card p-5 bg-white shadow-lg d-flex mx-auto w-75'>
    <h3 className='text-center'>Please Send us your queries</h3>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Your message</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
  
        </div>
       </div>
    );
};

export default Others;