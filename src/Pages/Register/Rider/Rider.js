import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Rider = () => {
    const { signUpUser, authError } = useAuth();
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();

    const [license, setLicense] = useState("");
    const [nid, setNid] = useState("");
    const [profile, setProfile] = useState("");

    const onSubmit = data => {
        if (data.password.length < 6) {
            setError(<h6 className="text-danger mt-3 text-center">Password must be at least 6 characters</h6>)
            return
        }
        else if (data.password !== data.password2) {
            setError(<h6 className="text-danger mt-3 text-center">Password does not match</h6>)
            return
        }
        else if (authError) {
            setError(<h6 className="text-danger mt-3 text-center">Email already in use</h6>)
            return
        }
        else {
            setError('')
        }
        data.role = 'rider';
        data.licence = license;
        data.nid = nid;
        data.profileImg = profile;
        signUpUser(data.email, data.password, data.name, data, navigate)
        reset()
    };

    const handleLicenseUpload = (event) => {
        const imgData = new FormData()
        imgData.set("key", "fe1fc1f2ca4647c6d6e78e6cca75b757")
        imgData.append("image", event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(res => setLicense(res.data.data.display_url))
    }
    const handleNidUpload = (event) => {
        const imgData = new FormData()
        imgData.set("key", "fe1fc1f2ca4647c6d6e78e6cca75b757")
        imgData.append("image", event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(res => setNid(res.data.data.display_url))
    }
    const handleProfileUpload = (event) => {
        const imgData = new FormData()
        imgData.set("key", "fe1fc1f2ca4647c6d6e78e6cca75b757")
        imgData.append("image", event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(res => setProfile(res.data.data.display_url))
    }


    return (
        <div className="container my-5">
            <div className="d-flex align-items-center">
                <Link to='/home'>
                    <button className="btn btn-outline-dark">
                        <i className="fas fa-arrow-circle-left"></i>
                    </button>
                </Link>
                <h1 className="text-center text-uppercase my-3 mx-auto">
                    Register as a Rider
                </h1>
            </div>
            <p className="text-center">[ Note: '*' indicates the required field ]</p>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 shadow-lg py-5 px-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Full Name*:</label>
                        <input type="text" {...register("name", { required: true })} className="form-control mb-3" />

                        <label>Email*:</label>
                        <input type="email" {...register("email", { required: true })} className="form-control mb-3" />

                        <label>Age*:</label>
                        <input type="number" {...register("age", { required: true })} className="form-control mb-3" />

                        <label>Address:</label>
                        <input type="text" {...register("address")} className="form-control mb-3" />

                        <label>Phone*:</label>
                        <input type="tel" {...register("phone", { required: true })} className="form-control mb-3" />

                        <label>Driving license Image*:</label>
                        <input type="file" {...register("licence", { required: true })} className="form-control mb-3"
                            onChange={handleLicenseUpload}
                        />

                        <label>Area:</label>
                        <input type="text" {...register("area")} className="form-control mb-3" />

                        <label>NID (Front side)*:</label>
                        <input type="file" {...register("nid", { required: true })} className="form-control mb-3" onChange={handleNidUpload} />

                        <label>Profile Picture*:</label>
                        <input type="file" {...register("profileImg", { required: true })} className="form-control mb-3" onChange={handleProfileUpload} />

                        <label>Car Information*:</label>
                        <input type="text" {...register("carInfo", { required: true })} className="form-control mb-3" placeholder='name, model, name palate' />

                        <label>Password*:</label>
                        <input type="password" {...register("password", { required: true })} className="form-control mb-3" />

                        <label>Confirm password*:</label>
                        <input type="password" {...register("password2", { required: true })} className="form-control mb-3" />

                        <label>Vehicle type*:</label>
                        <select {...register("vehicle", { required: true })} className="form-control mb-4">
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                        </select>
                        {error}
                        <input type="submit" value="Register" className="form-control btn btn-dark" />
                    </form>

                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Rider;