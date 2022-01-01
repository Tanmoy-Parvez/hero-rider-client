import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Navigationbar from '../Shared/Navigationbar/Navigationbar';

const Home = () => {
    return (
        <div>
            <Navigationbar />
            <Banner />
            <About />
            <Register />
            <Footer />
        </div>
    );
};

export default Home;