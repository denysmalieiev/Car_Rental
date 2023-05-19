import React from 'react';
import { Link } from 'react-router-dom';
import headerCSS from './css/header.module.css';

const Header = () => {
  return (
    <>
      <div className={headerCSS.carRentalNevBar}>
        <div className={headerCSS.navBarWebName}>
          <h2><Link to='/'>Car Rental</Link></h2>
        </div>
        <div className={headerCSS.navBarWebNavigation}>
          <div className={headerCSS.navBarWebNavigationLeft}>
            <ul>
              <li><p><Link to='/'>Home</Link></p></li>
              <li><p><Link to='/cars'>Cars</Link></p></li>
              <li><p><Link to='/about'>About</Link></p></li>
              <li><p><Link to='/gallery'>Gallery</Link></p></li>
              <li><p><Link to='/cars/booking/history'>Booking</Link></p></li>
            </ul>
          </div>
          <div className={headerCSS.navBarWebNavigationRight}>
            <ul>
                <li><p><Link to='/user/profile'>^</Link></p></li>
                <li><p><Link to='/user/signin'>SignIn</Link></p></li>
                <li><p><Link to='/user/signup'>SignUp</Link></p></li>

              </ul>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header