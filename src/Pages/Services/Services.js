import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="banner">
      <div>
        <h2 className="text-center text-uppercase mt-5">Services We Provide</h2>
      </div>
      <div className="py-5 service-1">
        <div className="container">
          {/* <!-- Row  --> */}
          <div className="row d-flex text-white" >
            {/* <!-- Column --> */}
            <div className="col-md-4 wrap-service1-box" data-aos="fade-right">
              <div className="card border-0 card-shadow mb-4">
                <div className="card-body text-center">
                  <div className="my-3">
                    <i className="fas fa-headset fa-2x color"></i>
                  </div>
                  <h6 className="font-weight-medium text-light">FAST SUPPORT</h6>
                  <p className="mt-3">
                    I always try to provide fastest support to my clients as soon as possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 wrap-service1-box" data-aos="fade-right">
              <div className="card border-0 card-shadow mb-4">
                <div className="card-body text-center">
                  <div className="my-3">
                    <i className="fas fa-users-cog fa-2x color"></i>
                  </div>
                  <h6 className="font-weight-medium text-light">USER EXPERIENCE</h6>
                  <p className="mt-3">
                    You can relay on our amazing features list and also our customer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 wrap-service1-box" data-aos="fade-left">
              <div className="card border-0 card-shadow mb-4">
                <div className="card-body text-center">
                  <div className="my-3">
                    <i className="fas fa-user-shield fa-2x color"></i>
                  </div>
                  <h6 className="font-weight-medium text-light">SAFETY FIRST</h6>
                  <p className="mt-3">
                    We always try to make assure of our clients or customers safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ color: "white", width: "800px", margin: "0 auto" }} />
    </div>
  );
};

export default Services;
