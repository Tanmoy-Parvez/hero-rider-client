import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Rider = () => {
    const { signUpUser } = useAuth()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.role = 'rider';
        signUpUser(data.email, data.password, data.name, data, navigate)

        reset()
    };
    return (
        <div className="container my-5">
            <Link to='/home'>
                <button className="btn btn-outline-dark">
                    Back to Home
                </button>
            </Link>
            <h1 className="text-center mb-3">Register as a Rider</h1>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Full Name:</label>
                        <input type="text" {...register("name")} className="form-control mb-3" />

                        <label>Email:</label>
                        <input type="email" {...register("email")} className="form-control mb-3" />

                        <label>Age:</label>
                        <input type="number" {...register("age")} className="form-control mb-3" />

                        <label>Address:</label>
                        <input type="text" {...register("address")} className="form-control mb-3" />

                        <label>Phone:</label>
                        <input type="tel" {...register("phone")} className="form-control mb-3" />

                        <label>Driving licence Image:</label>
                        <input type="file" {...register("licence")} className="form-control mb-3" />

                        <label>Area:</label>
                        <input type="text" {...register("area")} className="form-control mb-3" />

                        <label>NID Picture  (both side):</label>
                        <input type="file" {...register("nid")} className="form-control mb-3" />

                        <label>Profile Picture Link:</label>
                        <input type="url" {...register("profileImg")} className="form-control mb-3" />

                        <label>Car Information:</label>
                        <input type="text" {...register("carInfo")} className="form-control mb-3" placeholder='name, model, name palate' />

                        <label>Password:</label>
                        <input type="password" {...register("password")} className="form-control mb-3" />

                        <label>Confirm password:</label>
                        <input type="password" {...register("password2")} className="form-control mb-3" />

                        <label>Vehicle type:</label>
                        <select {...register("vehicle")} className="form-control mb-5">
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                        </select>

                        <input type="submit" value="Register" className="form-control" />
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default Rider;