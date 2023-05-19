import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import About from './About';
import Gallery from './Gallery';

// Admin
import AdminDashBoard from '../admin/AdminDashBoard';
import AdminCarOrders from '../admin/AdminCarOrders';
import AdminOrderAction from '../admin/AdminOrderAction';

// User
import UserLogin from '../user/auth/UserLogin';
import UserSignUp from '../user/auth/UserSignUp';
import UserProfileShow from '../user/profile/userProfile/UserProfileShow';
import UserProfileUpdate from '../user/profile/userProfile/UserProfileUpdate';
import ForgotPassword from '../user/profile/userPassword/ForgotPassword';
import ResetPassword from '../user/profile/userPassword/ResetPassword';

// Car
import CarsHome from '../car/CarsHome';
import CarDetail from '../car/CarDetail';

// Booking
import CarBooking from '../booking/CarBooking';
import BookingPayment from '../booking/BookingPayment';
import BookingHistory from '../booking/BookingHistory';

const PageRoutes = () => {
  return (
    <>
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/gallery' element={<Gallery/>} />
                {/* Admin */}
                <Route exact path='/admin' element={<AdminDashBoard/>} />
                <Route exact path='/admin/orders' element={<AdminCarOrders/>} />
                <Route exact path='/admin/order/action' element={<AdminOrderAction/>} />
                
                {/* User */}
                <Route exact path='/user/signin' element={<UserLogin/>} />
                <Route exact path='/user/signup' element={<UserSignUp/>} />
                <Route exact path='/user/profile' element={<UserProfileShow/>} />
                <Route exact path='/user/profile/update' element={<UserProfileUpdate/>} />
                <Route exact path='/password/forgot' element={<ForgotPassword/>} />
                <Route exact path='/password/reset' element={<ResetPassword/>} />

                {/* Crs */}
                <Route exact path='/cars' element={<CarsHome/>} />
                <Route exact path='/cars/detail' element={<CarDetail/>} />

                {/* Booking */}
                <Route exact path='/car/booking' element={<CarBooking/>} />
                <Route exact path='/car/booking/payment' element={<BookingPayment/>} />
                <Route exact path='/cars/booking/history' element={<BookingHistory/>} />
            </Routes>
        </div>
    </>

  )
}

export default PageRoutes