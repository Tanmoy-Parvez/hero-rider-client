import React from 'react';
import pic1 from '../../images/Safety_Home_Img2x.jpg'
import pic2 from '../../images/Cities_Home_Img2x.jpg'

const About = () => {
    return (
        <div className="container g-5 mb-5">
            <h1 className="text-uppercase text-center">Explore beyond your limits with us</h1>
            <h4 className="text-uppercase text-center color mb-4">Focused on safety, wherever you go</h4>
            <div className="row">
                <div className="col-md-6">
                    <img src={pic2} alt="" className="img-fluid" />
                    <h3>Setting 10,000+ cities in motion</h3>
                    <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                </div>
                <div className="col-md-6">
                    <img src={pic1} alt="" className="img-fluid" />
                    <h3>Our commitment to your safety</h3>
                    <p>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                </div>

            </div>
        </div>
    );
};

export default About;