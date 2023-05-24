import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

import { clearError } from './utils/actions/CarsAction.js';
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
import AdminSingleUsers from './components/admin/user/AdminSingleUser';
import AdminAllUsers from './components/admin/user/AdminAllUsers';
import AdminUserRoleUpdate from './components/admin/user/AdminUserRoleUpdate';
import AdminUserAccountDelete from './components/admin/user/AdminUserAccountDelete';
import AdminNewOffice from './components/admin/cars/AdminNewOffice';
import AdminOfficesDetails from './components/admin/cars/AdminOfficesDetails';
import AdminNewCarDetail from './components/admin/cars/NewCarDetail';
import CarDetails from './components/admin/cars/CarDetails';
import AdminUpdateCarDetails from './components/admin/cars/UpdateCarDetails';
import AdminDeleteCarDetail from './components/admin/cars/DeleteCarDetail';
import AdminUsersAllOrders from './components/admin/orders/AdminAllOrders';
import AdminUserOrderUpdate from './components/admin/orders/AdminOrderUpdate';
import AdminUserOrderDelete from './components/admin/orders/AdminOrderDelete';


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
// import { carRental_Load_User } from './utils/actions/UserAction';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector(state=> state.auth);
  // const { user } = useSelector(state=> state.user);
  // const { isProfileUpdated } = useSelector(state=> state.profileUpdate);
  // const { isPasswordUpdated } = useSelector(state=> state.passwordUpdate);
  // const { cars, loading } = useSelector(state=> state.cars);
  // const { car } = useSelector(state=> state.car);

  const [carToRent, setCarToRent] = useState(carToBeRent); // Object
  const [cityAvailable, setCityAvailable] = useState(cityOptionAvailable)

  function setCarForBooking(data){
    setCarToRent(data)
  } 

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }
  }, [dispatch, error])

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
                <Route exact path='/admin/dashboard' element={<AdminDashBoard/>} />
                <Route exact path='/admin/user/:id' element={<AdminSingleUsers/>} />
                <Route exact path='/admin/user/all' element={<AdminAllUsers/>} />
                <Route exact path='/admin/user/role/:id' element={<AdminUserRoleUpdate/>} />
                <Route exact path='/admin/user/account/:id' element={<AdminUserAccountDelete/>} />
                <Route exact path='/admin/office/new' element={<AdminNewOffice/>} />
                <Route exact path='/admin/office/details' element={<AdminOfficesDetails/>} />
                <Route exact path='/admin/car/new' element={<AdminNewCarDetail/>} />
                <Route exact path='/admin/car/update/:id' element={<AdminUpdateCarDetails/>} />
                <Route exact path='/admin/car/delete/:id' element={<AdminDeleteCarDetail/>} />
                <Route exact path='/admin/order/all' element={<AdminUsersAllOrders/>} />
                <Route exact path='/admin/order/update/:id' element={<AdminUserOrderUpdate/>} />
                <Route exact path='/admin/order/delete/:id' element={<AdminUserOrderDelete/>} />

                {/* User */}
                <Route exact path='/user/profile' element={<UserProfileShow/>} />
                <Route exact path='/user/profile/update' element={<UserProfileUpdate/>} />
                <Route exact path='/password/update' element={<UserPasswordUpdate/>} />

                {/* Car */}
                <Route exact path='/cars' element={<CarsHome/>} />
                <Route exact path='/car/:id' element={<CarDetails/>} />
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
