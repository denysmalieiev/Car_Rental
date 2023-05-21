import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import DataContext from '../../DataContext';

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
import UserCartBook from '../car/UserCartBook';

// Booking
import CarBooking from '../booking/CarBooking';
import BookingPayment from '../booking/BookingPayment';
import BookingHistory from '../booking/BookingHistory';

const PageRoutes = () => {
  const { isAuthenticated } = useSelector(state=> state.auth);
  const { cars } = useSelector(state=> state.cars);
  const navigate = useNavigate()
  const carContext = useContext(DataContext);

  useEffect(()=>{
    if(!isAuthenticated){
      navigate('/')
    }
  }, [isAuthenticated])
  
  return (
    <>
      <div>
        
      </div>
    </>

  )
}

export default PageRoutes