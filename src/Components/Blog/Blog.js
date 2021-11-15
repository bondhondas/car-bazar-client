import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css';
import gif from './working.gif';

const Blog = () => {
    return (
        <Container className="my-5 pl-4">
            <div className="row row-cols-1 row-cols-md-2 g-0">
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <h2 className=" text-center text-success fw-bold">
                        How does the Car Bazar to Client relationship work?
                    </h2>

                    <small className="fw-bold">
                        When you’re a car dealer, one of your goals is always to get potential buyers into your showroom. But before your sales team can work their magic on the floor, you need to give shoppers a reason to head your direction. So how do car dealerships attract customers in the first place?

                        More than ever, auto dealerships need to invest in great lead generation tactics. Thanks to the internet, shoppers have access to more dealers and greater control over the car-buying process than in the past. This means fewer potential customers are visiting your dealership as a first step. Instead, they’re putting in the research to find the best car dealer and vehicle for their needs.

                        Your automotive marketing strategy must enable your brand to show up and stand out from the start of their research. You can use the tactics we outline below to drive more quality leads to you.
                    </small>

                </div>

                <div className="col">
                    <img src="https://i.ibb.co/kK8CS1q/12.webp" alt="working man" className="img-fluid" />
                </div>
            </div>
        </Container>
    );
};

export default Blog;