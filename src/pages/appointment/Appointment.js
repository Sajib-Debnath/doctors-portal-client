import React, { useState } from 'react';
import AppointmentBanner from './appointmentBanner/AppointmentBanner';
import AvailableAppointment from './availableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selected={selected}
                setSelected={setSelected}
            />
            <AvailableAppointment selected={selected} />
        </div>
    );
};

export default Appointment;