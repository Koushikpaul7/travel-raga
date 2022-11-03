import React from 'react';

const Service = ({service}) => {
    const{company,picture,name}=service;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 mb-5'>
            <div className="card border-warning shadow card-hover zoom" style={{ width: "18rem",height:'580px' }}>
                <img src={picture} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{company}</h5>
                    <p className="card-text">{name}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Service;