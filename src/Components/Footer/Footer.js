import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-white bg-dark red-border-top">
            <section className="py-3">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        {/* About */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Service Certer</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p>
                                Your Trustable Car Bazar
                            </p>
                        </div>

                        {/* Service */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Service</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/events" className="text-white text-decoration-none">
                                    Car
                                </NavLink>
                            </p>


                            <p>
                                <NavLink to="/events" className="text-white text-decoration-none">
                                    New Model Car
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="text-white text-decoration-none">
                                    Fast Car
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="text-white text-decoration-none">
                                    Truck
                                </NavLink>
                            </p>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/" className="text-white text-decoration-none">Home</NavLink>
                            </p>

                            <p>
                                <NavLink to="/donation" className="text-white text-decoration-none">
                                    Order
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/events" className="text-white text-decoration-none">Super Cars</NavLink>
                            </p>

                            <p>
                                <NavLink to="/blog" className="text-white text-decoration-none">
                                    About
                                </NavLink>
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold metal-font">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                            />
                            <p><i className="fas fa-home mr-3"></i> Sydney, Australia</p>
                            <p><i className="fas fa-envelope mr-3"></i> info@carbazar.com</p>
                            <p><i className="fas fa-phone mr-3"></i> +8619868386413</p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                <span className="me-2">Bondhon Das © 2021 Copyright</span>
            </div>
        </footer>
    );
};

export default Footer;