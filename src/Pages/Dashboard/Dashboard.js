import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth()
    const [allUsers, setAllUsers] = useState([])
    const [displayUsers, setDisplayUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allUser')
            .then(res => res.json())
            .then(data => {
                setAllUsers(data)
                setDisplayUser(data)
            })
    }, [])

    const handleSearch = (event) => {
        const searchText = event.target.value;

        const matchedProduct = allUsers.filter(person => (person.phone === searchText) || (person.email.toLowerCase().includes(searchText.toLowerCase())) || (person.name.toLowerCase().includes(searchText.toLowerCase()))

        );
        setDisplayUser(matchedProduct);
    }

    const handleAgeRange = e => {

        if (e.target.value === "1") {
            const matchedProduct = allUsers.filter(person => parseInt(person.age) >= 18 && parseInt(person.age) <= 25);
            setDisplayUser(matchedProduct);
        }
        else if (e.target.value === "2") {
            const matchedProduct = allUsers.filter(person => parseInt(person.age) >= 26 && parseInt(person.age) <= 30);
            setDisplayUser(matchedProduct);
        }
        else if (e.target.value === "3") {
            const matchedProduct = allUsers.filter(person => parseInt(person.age) >= 31 && parseInt(person.age) <= 50);
            setDisplayUser(matchedProduct);
        }
        else if (e.target.value === "4") {
            const matchedProduct = allUsers.filter(person => parseInt(person.age) >= 51 && parseInt(person.age) <= 90);
            setDisplayUser(matchedProduct);
        }
        else {
            setDisplayUser(allUsers)
        }
    }

    return (
        <div className="container">
            <div className="d-flex align-items-center">
                <Link to='/home'>
                    <button className="btn btn-outline-dark">
                        <i className="fas fa-arrow-circle-left"></i>
                    </button>
                </Link>
                <h1 className="text-center my-4 mx-auto">{user?.displayName}'s Dashboard</h1>
            </div>

            <div className="search-container">
                <input type="text"
                    className="form-control w-50 mx-auto"
                    onChange={handleSearch}
                    placeholder="Search user..." />

                <select className="form-select w-25 mx-auto mt-2 mb-5" aria-label="Default select example" onChange={handleAgeRange}>
                    <option value="0" selected>Select Age Range</option>
                    <option value="1">18-25</option>
                    <option value="2">26-30</option>
                    <option value="3">31-50</option>
                    <option value="4">51-90</option>
                </select>
            </div>

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    {
                        displayUsers.filter(allUser => allUser.role !== 'admin').map(user => <div className="card mb-5">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={user?.profileImg} className="rounded-start" height="230px" width="180px" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">Name: {user?.name}</h5>
                                        <h5 className="card-title">Email: {user?.email}</h5>
                                        <h5 className="card-title">Phone: {user?.phone}</h5>
                                        <h5 className="card-title">Age: {user?.age} years</h5>
                                        <h5 className="card-title">Vehicle: {user?.vehicle}</h5>
                                        <h5 className="card-title">User: {user?.role}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Dashboard;