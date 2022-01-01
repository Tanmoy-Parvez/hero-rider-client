import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="text-center my-5" id="register">
            <Link to='/rider'>
                <button className="btn btn-dark">
                    Sign Up as a Rider
                </button>
            </Link>
            <Link to='/learner'>
                <button className="btn btn-dark ms-5">
                    Sign Up as a Learner
                </button>
            </Link>

        </div>
    );
};

export default Register;