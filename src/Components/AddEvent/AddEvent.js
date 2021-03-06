import React, { useState } from 'react';
import './AddEvent.css';
import { set, useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import { useHistory } from 'react-router-dom';

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = data => {
        setIsLoading(true);
        fetch("https://volunteer-network-server-1.herokuapp.com/events", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setIsLoading(false);
                    reset();
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false)
                    }, 3000);

                };
            });
    };

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-9">
            <div className="card py-3 border-0 rounded-0 px-4">
                <h4 className="fs-5">Add Your Favourite Car</h4>

                {isLoading ? <Loading></Loading> : null}

                {showAlert ? <div class="alert alert-success" role="alert">
                    Added Successfully
                </div> : null}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-4">
                        <div className="col-12 col-md-6">
                            <div>
                                <label class="form-label small-text fw-bold">Title</label>
                                <input className="form-control" type="text" placeholder="Title" {...register("name")} />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div>
                                <label class="form-label small-text fw-bold">Title</label>
                                <input className="form-control" type="text" placeholder="Price" {...register("price")} />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div>
                                <label class="form-label small-text fw-bold">Description</label>
                                <textarea className="form-control" placeholder="Description" {...register("description")} rows="1"></textarea>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div>
                                <label class="form-label small-text fw-bold">Image</label>
                                <input className="form-control" placeholder="Banner" {...register("image")} />
                            </div>
                        </div>

                        <div className="col-12 col-md-6"></div>

                        <div className="col-12 col-md-6">
                            <div className="text-end">
                                <input className="btn btn-primary px-4" type="submit" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;