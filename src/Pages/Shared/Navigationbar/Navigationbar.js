import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Navigationbar = () => {
    const { user, logOut } = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Hero Rider</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {user?.email ?
                        <Nav className="ms-auto d-flex align-items-center">

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
                                <button className="btn btn-outline-light">Login</button>
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