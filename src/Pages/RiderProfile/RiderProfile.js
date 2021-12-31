import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const RiderProfile = () => {
    const { user } = useAuth()
    const [rider, setRider] = useState({});

    useEffect(() => {

    },
        [])
    return (
        <div>
            <h1>Rider Profile</h1>
        </div>
    );
};

export default RiderProfile;