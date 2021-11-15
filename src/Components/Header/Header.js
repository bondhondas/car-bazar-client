import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logout, setUser, setErrorMessage, setIsLoading } = useAuth();
    const history = useHistory();
    const redirect_uri = '/register';

    const handleLogout = () => {
        logout()
            .then(() => {
                setUser({});
                history.push(redirect_uri);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Navbar bg="warning" expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/" className="text-decoration-none text-muted">
                        Car Bazar
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/">
                            <button className="btn w-100">Home</button>
                        </NavLink>

                        <NavLink className="nav-link" to="/profile">
                            <button className="btn w-100">Order</button>
                        </NavLink>

                        <NavLink className="nav-link" to="/events">
                            <button className="btn w-100">New Model Cars</button>
                        </NavLink>

                        <NavLink className="nav-link" to="/blog">
                            <button className="btn w-100">About</button>
                        </NavLink>

                        {
                            user.email
                                ?
                                <>
                                    <NavLink className="nav-link" to="/profile">
                                        <button className="btn w-100 fw-bold">
                                            {user.displayName}
                                        </button>
                                    </NavLink>

                                    <NavLink className="nav-link" to="">
                                        <button onClick={handleLogout} className="btn btn-danger px-5 w-100 fw-normal">Logout</button>
                                    </NavLink>
                                </>

                                :

                                <NavLink className="nav-link" to="/register">
                                    <button className="btn btn-secondary px-5 w-100 fw-normal">Sign Up</button>
                                </NavLink>
                        }

                        <NavLink className="nav-link" to="/admin">
                            <button className="btn btn-success px-5 w-100 fw-normal">My Profile</button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;