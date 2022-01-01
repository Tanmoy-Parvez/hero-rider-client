import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigationbar = () => {
    const { user, logOut } = useAuth()

    const [operator, setOperator] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/saveUser/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOperator(data)
            })
    },
        [])
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Hero Rider</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {user?.email ?
                        <Nav className="ms-auto d-flex align-items-center nav-items">
                            {
                                operator?.role === "learner" &&
                                < Nav.Link >
                                    <Link to='/packages'>
                                        Packages
                                    </Link>
                                </Nav.Link>
                            }
                            {
                                operator?.role === "rider" &&
                                < Nav.Link >
                                    <Link to='/riderProfile'>
                                        Profile
                                    </Link>
                                </Nav.Link>
                            }
                            {
                                operator?.role === "admin" &&
                                < Nav.Link >
                                    <Link to='/dashboard'>
                                        Dashboard
                                    </Link>
                                </Nav.Link>
                            }
                            < Nav.Link >
                                {user?.displayName}
                            </Nav.Link>
                            <Nav.Link >
                                <button onClick={logOut} className="btn btn-outline-danger">Log Out</button>
                            </Nav.Link>
                        </Nav>
                        :
                        <Nav className="ms-auto">
                            <Nav.Link >
                                <Link to="/login">
                                    <button className="btn btn-outline-light">Login</button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <button className="btn btn-outline-light">Sign Up</button>
                            </Nav.Link>

                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigationbar;