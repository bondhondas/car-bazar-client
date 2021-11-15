import React from 'react';
import { Carousel, Container, FormControl, InputGroup } from 'react-bootstrap';
import './Search.css';

const Search = props => {
    const { register, handleSubmit, onSubmit } = props;

    return (
        <Container>
            <div>
                <Carousel className="mb-5">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=" https://i.ibb.co/g6fVW6g/13.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/jyJPSWK/14.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/gZsRrh9/15.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <h2 className="display-5 text-center ">
                Search Your Dream Car Here
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup className="mt-4 search">
                    <FormControl
                        placeholder="Search"
                        className="p-2"
                        {...register("searchText")}
                    />
                    <button type="submit" className="btn btn-warning fw-normal py-2 px-4 ml-4">Search</button>
                </InputGroup>
            </form>
        </Container>
    );
};

export default Search;