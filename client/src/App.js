import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import { carRental_Load_User, clearError } from './utils/actions/UserAction';


// Header and Footer
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Home Page
import HomePage from './components/mainHome/HomePage';
import About from './components/mainHome/About';

// Admin
import AdminDashBoard from './components/admin/AdminDashBoard';
import AdminSingleUsers from './components/admin/user/AdminUserProfile';
import AdminAllUsers from './components/admin/user/AdminAllUsers';
import AdminNewOffice from './components/admin/offices/AdminNewOffice';
import AdminOfficesDetails from './components/admin/offices/AdminOfficesDetails';
import AdminOfficeUpdate from './components/admin/offices/AdminOfficeUpdate';
import AdminNewCarDetail from './components/admin/cars/NewCarDetail';
import CarDetails from './components/admin/cars/CarDetails';
import AdminUpdateCarDetails from './components/admin/cars/UpdateCarDetails';

import AdminUsersAllOrders from './components/admin/orders/AdminAllOrders';
import AdminUserOrderUpdate from './components/admin/orders/AdminOrderUpdate';


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

  const { isAuthenticated, error } = useSelector(state=> state.auth);
  
  useEffect(()=>{
    if(error){
      alert(error)
      dispatch(clearError)
    }
    if(!isAuthenticated){
      navigate('/')
    }
    if(isAuthenticated){
      dispatch(carRental_Load_User)
    }
  }, [dispatch, isAuthenticated, error])

  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<About/>} />
              
          { isAuthenticated 
            ?
              <>
                {/* Admin */}
                <Route exact path='/admin/dashboard' element={<AdminDashBoard/>} />

                <Route exact path='/admin/users/:role' element={<AdminAllUsers/>} />
                <Route exact path='/admin/user/:id' element={<AdminSingleUsers/>} />

                <Route exact path='/admin/office/new' element={<AdminNewOffice/>} />
                <Route exact path='/admin/office/details' element={<AdminOfficesDetails/>} />
                <Route exact path='/admin/office/update/:id' element={<AdminOfficeUpdate/>} />

                <Route exact path='/admin/car/new' element={<AdminNewCarDetail/>} />
                <Route exact path='/admin/car/update/:id' element={<AdminUpdateCarDetails/>} />

                <Route exact path='/admin/order/all' element={<AdminUsersAllOrders/>} />
                <Route exact path='/admin/order/update/:id' element={<AdminUserOrderUpdate/>} />
                
                {/* User */}
                <Route exact path='/user/profile' element={<UserProfileShow/>} />
                <Route exact path='/user/profile/update' element={<UserProfileUpdate/>}/>
                <Route exact path='/password/update' element={<UserPasswordUpdate/>} />

                {/* Car */}
                <Route exact path='/cars' element={<CarsHome/>} />
                <Route exact path='/car/:id' element={<CarDetails/>} />
                <Route exact path='/car/booking/:id' element={<UserCartBook/>} />
                <Route exact path='/car/payment/:office/:range' element={<BookingPayment/>} />
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
    </div>
  );
}

export default App;
