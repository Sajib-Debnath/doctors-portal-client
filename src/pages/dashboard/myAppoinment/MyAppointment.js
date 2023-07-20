import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/AuthProvider';
import { Link } from "react-router-dom";

const MyAppointment = () => {
    const { user } = useContext(AuthContext)

    // const [bookings, setBookings] = useState([])
    // useEffect(() => {
    //     fetch('https://doctors-portal-server-three-black.vercel.app/bookings?email=${user?.email', {
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then((data) => {
    //             setBookings(data)
    //         })
    // }, [user?.email])
    // // if (user?.email) {
    // }


    const url = `https://doctors-portal-server-three-black.vercel.app/bookings?email=${user?.email}`
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <p>Loading</p>
    }

    // if (!bookings) {
    //     return <p>bad request</p>
    // }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=''>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings.map((booking, index) =>
                                <tr key={index} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>{booking.price}</td>

                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link
                                                to={`/dashboard/payment/${booking._id}`}
                                            >
                                                <button
                                                    className='btn btn-primary btn-sm'
                                                >Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );


};

export default MyAppointment;