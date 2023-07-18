import { createBrowserRouter } from "react-router-dom";
import Main from '../../src/layout/Main';
import Home from "../pages/home/Home";
import Appointment from "../pages/appointment/Appointment";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./privateRoute/PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MyAppointment from "../pages/dashboard/myAppoinment/MyAppointment";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AdminRoute from "./adminRoute/AdminRoute";
import AddDoctor from "../pages/dashboard/addDoctor/AddDoctor";
import ManageDoctors from "../pages/dashboard/manageDoctors/ManageDoctors";
import Payment from "../pages/dashboard/payment/Payment";
import DisplayError from "../pages/shared/DisplayError";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/appointment',
                element: <PrivateRoute> <Appointment /></PrivateRoute>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute> <ManageDoctors /> </AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },

        ]
    }
])

export default router;