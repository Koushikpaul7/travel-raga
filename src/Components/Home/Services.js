import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='container mt-5'>
            <h2 className=' text-center text-warning my-5'>Our services </h2>
        <div className='row'>
        {
                    services.map(service => <Service
                        key={service.id}
                        service= {service}
                    ></Service>)
                }
        </div>
            
        </div>
    );
};

export default Services;