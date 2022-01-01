import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="text-center my-5" id="register">
            <h2 className="text-center mb-3 text-uppercase">Register</h2>
            <div className="row g-0 container mx-auto">
                <div className="col-md-6 mt-3">
                    <Link to='/rider'>
                        <button className="btn btn-outline-dark w-75 py-3 fs-5 fw-bold">
                            Join as a Rider <i className="fas fa-arrow-circle-right"></i>
                        </button>
                    </Link>
                </div>
                <div className="col-md-6 mt-3">
                    <Link to='/learner'>
                        <button className="btn btn-outline-dark w-75 py-3 fs-5 fw-bold">
                            Join as a Driving Lesson Learner <i className="fas fa-arrow-circle-right"></i>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Register;