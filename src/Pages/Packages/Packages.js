import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
            })
    }, [])

    return (
        <div className="container mb-4 mt-2">
            <div className="d-flex align-items-center">
                <Link to='/home'>
                    <button className="btn btn-outline-dark">
                        <i className="fas fa-arrow-circle-left"></i>
                    </button>
                </Link>
                <h2 className="text-center text-uppercase my-4 mx-auto">
                    Our Packages
                </h2>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <Row xs={1} md={2} className="g-5">
                        {
                            packages.map(services => <Col>
                                <Card className="shadow-lg rounded-3">
                                    <Card.Img variant="top" src={services?.img} className="p-3" height="300px" />
                                    <Card.Body className="text-center">
                                        <Card.Title>
                                            <h3>{services?.title}</h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <h5>
                                                Ratings:
                                                <i className="fas fa-star text-warning ms-1"></i>
                                                <i className="fas fa-star text-warning"></i>
                                                <i className="fas fa-star text-warning"></i>
                                                <i className="fas fa-star text-warning"></i>
                                                <i className="fas fa-star text-warning me-3"></i>
                                                ({services?.rating}/5)
                                            </h5>
                                            <h3>Price: $ {services?.price}</h3>
                                            <button className="btn btn-outline-dark w-100 mt-2">Book Now</button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Packages;