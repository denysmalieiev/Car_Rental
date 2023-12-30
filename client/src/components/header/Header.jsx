import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { carRental_Get_All_Cars, carRental_Admin_All_Offices_Load, clearError } from '../../utils/actions/CarsAction.js';
import { carRental_Sign_Out } from '../../utils/actions/UserAction.js';
import headerCSS from './css/header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isAuthenticated, role } = useSelector(state => state.auth);
  const { cars, loading, error } = useSelector(state => state.cars);

  const handleLogout = (e) => {
    e.preventDefault();
    alert('Logout')
    dispatch(carRental_Sign_Out)
    navigate('/')
  }

  useEffect(() => {
    if (error) {
      dispatch(clearError)
    }
    // if(!cars || Object.keys(cars).length===0){
    //   dispatch(carRental_Get_All_Cars)
    // }
    if (isAuthenticated && role) {
      if (role === 'admin') {
        navigate('/admin/dashboard')
      }
    }
  }, [dispatch, isAuthenticated, error, role])

  return (
    <div>
      <div className={headerCSS.carRentalNavBar}>
        <div className={headerCSS.navBarWebName}>
          <p><Link to='/'>Car Rental</Link></p>
        </div>
        <div className={headerCSS.navBarWebNavigation}>
          <div className={headerCSS.navBarGeneralOption}>
            <p><Link to='/cars'>Cars</Link></p>
            <p><Link to='/user/signin'>Sign In</Link></p>
            <p><Link to='/user/signup'>Sign Up</Link></p>
            {isAuthenticated && !loading ?
              <>
                <p><Link>Order</Link></p>
                <p>Profile</p>
                <p><Link>Logout</Link></p>
              </>
              : <></>
            }

          </div>
        </div>
      </div>
      {isAuthenticated && !loading ?
        <>
          <div className={headerCSS.navBarAuthOption}>
            <p><Link to='/cars/booking/history'>Bookings</Link></p>
            <p><Link to='/user/profile'>Profile</Link></p>
          </div>
        </>
        : <></>
      }

      <div className={headerCSS.navBarOfferBox}>
        <p>15% Discount this spring season.</p>
      </div>
    </div>
  )
}

export default Header