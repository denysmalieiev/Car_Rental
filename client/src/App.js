import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import { carRental_Get_All_Cars, clearError } from './utils/actions/CarsAction.js';
import carDataContext from './DataContext';
import { carToBeRent, cityOptionAvailable } from './Data';

// Header and Footer
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Home Page
import HomePage from './components/mainHome/HomePage';
import About from './components/mainHome/About';
import Gallery from './components/mainHome/Gallery';

// Admin
import AdminDashBoard from './components/admin/AdminDashBoard';
import AdminCarOrders from './components/admin/AdminCarOrders';
import AdminOrderAction from './components/admin/AdminOrderAction';

// User
import UserLogin from './components/user/auth/UserLogin';
import UserSignUp from './components/user/auth/UserSignUp';
import UserProfileShow from './components/user/profile/userProfile/UserProfileShow';
import UserProfileUpdate from './components/user/profile/userProfile/UserProfileUpdate';
import UserPasswordUpdate from './components/user/profile/userPassword/UserPasswordUpdate';
import ForgotPassword from './components/user/profile/userPassword/ForgotPassword';
import ResetPassword from './components/user/profile/userPassword/ResetPassword';

// Car
import CarsHome from './components/car/CarsHome';
import UserCartBook from './components/car/UserCartBook';

// Booking
import CarBooking from './components/booking/CarBooking';
import BookingPayment from './components/booking/BookingPayment';
import BookingHistory from './components/booking/BookingHistory';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector(state=> state.auth);
  const { user } = useSelector(state=> state.user);
  const { isProfileUpdated } = useSelector(state=> state.profileUpdate);
  const { isPasswordUpdated } = useSelector(state=> state.passwordUpdate);
  const { cars, loading, error } = useSelector(state=> state.cars);
  const { car } = useSelector(state=> state.car);

  const [carToRent, setCarToRent] = useState(carToBeRent); // Object
  const [cityAvailable, setCityAvailable] =useState(cityOptionAvailable)

  function setCarForBooking(data){
    setCarToRent(data)
  } 

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }
  }, [dispatch])

  useEffect(()=>{
    if(!isAuthenticated){
      navigate('/')
    }
  }, [isAuthenticated])

  return (
    <div className="App">
      <carDataContext.Provider value={{ carToRent, cityAvailable,  setCarForBooking }}>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/gallery' element={<Gallery/>} />
              
          { isAuthenticated 
            ?
              <>
                {/* Admin */}
                <Route exact path='/admin' element={<AdminDashBoard/>} />
                <Route exact path='/admin/orders' element={<AdminCarOrders/>} />
                <Route exact path='/admin/order/action' element={<AdminOrderAction/>} />

                {/* User */}
                <Route exact path='/user/profile' element={<UserProfileShow/>} />
                <Route exact path='/user/profile/update' element={<UserProfileUpdate/>} />
                <Route exact path='/password/update' element={<UserPasswordUpdate/>} />

                {/* Car */}
                <Route exact path='/cars' element={<CarsHome/>} />
                <Route exact path='/car/booking/:id' element={<UserCartBook/>} />
                <Route exact path='/car/rent/payment' element={<BookingPayment/>} />
                <Route exact path='/cars/booking/history' element={<BookingHistory/>} />
                <Route exact path='/car/bo' element={<CarBooking/>} />
              </>
            :
              <>
                {/* User */}
                <Route exact path='/user/signin' element={<UserLogin/>} />
                <Route exact path='/user/signup' element={<UserSignUp/>} />
                <Route exact path='/password/forgot' element={<ForgotPassword/>} />
                <Route exact path='/password/reset' element={<ResetPassword/>} />

                {/* Car */}
                <Route exact path='/cars' element={<CarsHome/>} />
              </>
          }
        </Routes>
        <Footer/>
      </carDataContext.Provider>
    </div>
  );
}

export default App;
