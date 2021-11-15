import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 sideBar">
            <div className="card border-0 bg-white h-100 py-3 rounded-0">
                <div className="text-center">
                    <Navbar.Brand>
                        <NavLink to="/" className="text-decoration-none display-6">
                            Travel Here
                        </NavLink>
                    </Navbar.Brand>
                </div>

                <div className="mt-5 px-4">
                    <div className="mb-3">
                        <NavLink className="text-decoration-none text-dark" to="/VolunteerList" activeClassName="selected">
                            <div>
                                <FontAwesomeIcon icon={faUserFriends} />
                                <span className="ms-2">Order List</span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="mb-3">
                        <NavLink className="text-decoration-none text-dark" to="/addEvent" activeClassName="selected">
                            <div>
                                <FontAwesomeIcon icon={faPlus} />
                                <span className="ms-3">Add Tour</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;