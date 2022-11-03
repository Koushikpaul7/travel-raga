import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'
import More from './More';
import Others from './Others';
import Queries from './Queries';
import Services from './Services';
const Home = () => {



    return (
        <div>
        <div className='container-fluid background'>

            
            <div className='row'>
                <div className="col-md-6 text-white mt-5 d-none d-lg-block ">
                   <div className=' p-5 mt-5 ms-5'>
                   <h1 className='mt-5'>CoxsBazar </h1>
                   <p >Cox's Bazar Beach: The beach in Cox's Bazar is the main attraction of the town with an unbroken length of 150 km (93 mi) also termed the "longest natural unbroken sea beach" in the world. There are several 3 stars and 5 star hotels provide the exclusive beachside area with accessories for the tourist.</p> 
                   </div>
                </div>
                <div className="col-md-6  mt-5">
                   <div className='w-50 mx-auto mt-5 p-5 bg-gradient shadow-lg rounded-2 pb-4 book-form text-white fw-bold'>
                    <label htmlFor="Origin">Origin</label> <br />
                    <input className='rounded' type="text" name="" id="" placeholder='Dhaka' />
                    <label htmlFor="Destination">Destination</label> <br />
                    <input className='rounded' type="text" name="" id="" placeholder='CoxsBazar' />

                    <div className='d-flex'>
                   <div>
                   <label htmlFor="from">From</label>
                    
                    <input type="date" className='rounded' />
                   
                   <div>
                   <label htmlFor="from">To</label>
                   </div>
                   
                    <input type="date" className='rounded' />
                   </div>
                    </div>
                   <Link to='/confirmpage'>
                   <button className= 'w-100 btn-warning rounded mb-4'>Book now</button>
                   </Link>
                   </div>
                </div>
            </div>
         
            
        </div>
        <Services/>
            <More/>
            <Queries/>
        </div>
    );
};

export default Home;