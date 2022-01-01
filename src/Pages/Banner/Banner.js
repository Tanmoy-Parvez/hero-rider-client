import React from 'react';
import bannerImg from '../../images/banner.png'
import { Nav } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <div>
            <div className="row d-flex align-items-center">
                <div className="col-md-4 ps-5">
                    <div className="ms-3">
                        <h4 className="text-uppercase">Welcome to</h4>
                        <h1 className="text-uppercase">Hero Rider</h1>
                        <h5 >Drive on the platform with the largest network of active riders.</h5>
                    </div>
                    <Nav.Link as={NavHashLink} to="/home#register" className="hashLink">
                        <button className="btn btn-dark px-4 mt-3">Explore</button>
                    </Nav.Link>
                </div>
                <div className="col-md-8">
                    <img src={bannerImg} alt="" className="img-fluid" />
                </div>

            </div>
        </div>
    );
};

export default Banner; <div className="row">
    <div className="col-md-6">

    </div></div>