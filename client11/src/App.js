import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


// Header and Footer
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Home Page
import HomePage from './components/mainHome/HomePage';
import About from './components/mainHome/About';

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


function App() {

  useEffect(() => {}, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route exact path='/user/signin' element={<UserLogin />} />
        <Route exact path='/user/signup' element={<UserSignUp />} />
        <Route exact path='/password/forgot' element={<ForgotPassword />} />
        <Route exact path='/password/reset' element={<ResetPassword />} />
        <Route exact path='/user/profile' element={<UserProfileShow />} />
        <Route exact path='/user/profile/update' element={<UserProfileUpdate />} />
        <Route exact path='/password/update' element={<UserPasswordUpdate />} />
        <Route exact path='/cars' element={<CarsHome />} />
        <Route exact path='/car/booking/:id' element={<UserCartBook />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
