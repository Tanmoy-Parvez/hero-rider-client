import React from 'react';
import useAuth from '../../hooks/useAuth';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Services from '../Services/Services';
import Navigationbar from '../Shared/Navigationbar/Navigationbar';

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <Navigationbar />
            <Banner />
            {
                !user?.email && <Register />
            }
            <Services />
            <About />
            <Footer />
        </div>
    );
};

export default Home;