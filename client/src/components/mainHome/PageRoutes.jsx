import React from 'react';
import { Routes, Route } from 'react-router-dom';
import homePageCSS from './css/homePage.module.css';

import HomePage from './HomePage';
import HomeTopContent from './HomeTopContent';

// Admin
import AdminDashBoard from '../admin/AdminDashBoard';
import AdminCarOrders from '../admin/AdminCarOrders';
import AdminOrderAction from '../admin/AdminOrderAction';

// User
import UserAuthHome from '../user/auth/UserAuthHome';
import UserLogin from '../user/auth/UserLogin';
import UserSignUp from '../user/auth/UserSignUp';
import UserProfileShow from '../user/profile/userProfile/UserProfileShow';
import UserProfileUpdate from '../user/profile/userProfile/UserProfileUpdate';
import ForgotPassword from '../user/profile/userPassword/ForgotPassword';
import ResetPassword from '../user/profile/userPassword/ResetPassword';

const PageRoutes = () => {
  return (
    <>
        <div className={homePageCSS.homeTopPageDetail}>
            <HomeTopContent/>
        </div>
        <div className={homePageCSS.carRentalPageContainer}>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                {/* Admin */}
                <Route exact path='/admin' element={<AdminDashBoard/>} />
                <Route exact path='/admin/orders' element={<AdminCarOrders/>} />
                <Route exact path='/admin/order/action' element={<AdminOrderAction/>} />
                
                {/* User */}
                <Route exact path='/user/auth' element={<UserAuthHome/>} />
                <Route exact path='/user/signin' element={<UserLogin/>} />
                <Route exact path='/user/signup' element={<UserSignUp/>} />
                <Route exact path='/user/profile' element={<UserProfileShow/>} />
                <Route exact path='/user/profile/update' element={<UserProfileUpdate/>} />

                <Route exact path='/password/forgot' element={<ForgotPassword/>} />
                <Route exact path='/password/reset' element={<ResetPassword/>} />
            </Routes>
        </div>
    </>

  )
}

export default PageRoutes