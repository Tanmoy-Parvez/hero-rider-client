import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth()
    return (
        <div className="container">
            <div className="d-flex align-items-center">
                <Link to='/home'>
                    <button className="btn btn-outline-dark">
                        <i className="fas fa-arrow-circle-left"></i>
                    </button>
                </Link>
                <h1 className="text-center my-4 mx-auto">{user.displayName}'s Dashboard</h1>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">

                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Dashboard;