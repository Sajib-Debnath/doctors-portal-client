import React from 'react';
import Banner from './banner/Banner';
import InfoCards from './infoCards/InfoCards';
import ServiceParent from './services/ServiceParent';
import MakeAppointments from './makeAppointments/MakeAppointments';
import Testimonial from './testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <ServiceParent />
            <MakeAppointments />
            <Testimonial />
        </div>
    );
};

export default Home;