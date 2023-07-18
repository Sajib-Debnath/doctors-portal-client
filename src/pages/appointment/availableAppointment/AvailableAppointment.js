import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../bookingModal/BookingModal';
import { useQuery } from 'react-query';

const AvailableAppointment = ({ selected }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null)

    const date = format(selected, "PP")

    const { data: appointmentOptions = [], refetch } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOption?date=${date}`)
            const data = res.json()
            return data;
        }
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOption')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selected, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selected}
                    refetch={refetch}
                />}
        </section>
    );
};

export default AvailableAppointment;