import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Search from '../Search/Search';
import './Home.css';
import Event from '../Event/Event';
import Loading from '../Loading/Loading';
import { useForm } from "react-hook-form";

const Home = () => {
    const [events, setEvents] = useState([]);
    const [SearchEvents, setSearchEvents] = useState([]);
    const [notFound, setNotFound] = useState(false);

    // For Search Event
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setSearchEvents([]);
        const query = events.filter(event => event.eventTitle.includes(data.searchText));

        if (query.length > 0) {
            setNotFound(false);
            setSearchEvents(query);
        }

        else {
            setNotFound(true);
        };
        reset();
    };

    useEffect(() => {
        fetch("https://quiet-depths-33398.herokuapp.com/tours")
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setSearchEvents(data);
                setNotFound(false);
            });
    }, []);


    return (
        <Container className="my-5">
            <Search
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            >
            </Search>

            {/* For Loading Screen */}
            {events.length === 0 && !notFound ? <Loading></Loading> : null}

            {/* For Search Result Not Found */}
            {notFound ? <h4 className="display-6 text-center mt-3">No Result Found</h4> : null}

            {/* Tours */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
                {
                    SearchEvents.map(event => <Event key={event._id} event={event}></Event>)
                }
            </div>

            <div className="my-5">
                <div className="row">
                    <div className="col-6 py-4 ">
                        <h4>About Our Service</h4>
                        <p className="fw-bold text-muted">
                            We are CAR BAZAR Company a fast-growing and fully local Aussie team based in Melbourne, Sydney, Brisbane, Adelaide and Perth.

                            Our journey started in Melbourne back in December 2020. We’re here to transform the way that Australia buys and sells used cars, making it as easy and convenient as any other online purchase.

                            We own the cars that we sell and ensure that every one has been quality tested and is reliable.

                            CARS24 was founded in India in 2015 and is now valued at over $1 billion dollars, with expansion into the United Arab Emirates, Thailand, and Australia and more countries in the pipeline.
                        </p>
                    </div>
                    <div className="col-6 py-4">
                        <h4 text>Why Should you have a Car?</h4>
                        <p className="fw-bold text-muted">
                            Driving a car is important for people in general because it provides status and the opportunity for personal control and autonomy [29][108]. In sparsely populated areas, owning a car is even more important, since it provides the only opportunity for travelling long distances due to a lack of public transport. For older people, having more difficulties walking (to the bus stop) and cycling, driving is often the only option for independent mobility. Several studies have found that over 90% of older drivers indicate that giving up driving would restrict their independence and mobility [92][59]. The same drivers expressed anxiety about the poor quality of public transport services. This anxiety seemed to be based on reality because 50% of those respondents who already had given up driving felt public transport to be, at least in some measure, inadequate .

                            Before older people stop driving, they usually reduce how much they drive and limit their driving to local journeys in familiar areas and under easy driving conditions. The better the provision of alternative means of mobility, the more likely a driver is to start using them for journeys he or she would prefer not to drive, long before ceasing to drive. This makes it easier to remain mobile after ceasing to drive. The lack of attractive and feasible transport alternatives to the private automobile, coupled with land-use patterns that make walking difficult or impossible, contributes to the problems experienced by people who have to stop driving, notably in North America. However, similar problems occur in Europe for older people living in suburbs and rural locations, as they increasingly do. In Great Britain, older drivers appear to be more likely to stop driving if they live in urban areas where walking, buses and taxis offer realistic mobility alternatives [81]. The ability to go everywhere and do everything without a car is also mentioned in surveys on reasons for driving less. However, the most important factors for ceasing to drive seem to be safety, health, and finance . Men more often give up driving because of bad health. Women tend to retire from the wheel earlier and for less pressing reasons, such as driving seldom.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;