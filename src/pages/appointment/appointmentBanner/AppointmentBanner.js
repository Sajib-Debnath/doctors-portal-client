import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selected, setSelected }) => {


    return (
        <header className='my-6' style={{
            background: `url(${bg})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-72">
                    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl w-4/5" />
                    <div className='mr-6 sm:w-full'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                        <p>You picked {format(selected, 'PP')}.</p>;
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;