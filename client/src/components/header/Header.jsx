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
              <li><p><Link to='/'>Cars</Link></p></li>
              <li><p><Link to='/'>About</Link></p></li>
              <li><p><Link to='/'>Gallery</Link></p></li>
              <li><p><Link to='/'>Cart</Link></p></li>
            </ul>
          </div>
          <div className={headerCSS.navBarWebNavigationRight}>
            <ul>
                <li><p><Link to='/'>^</Link></p></li>
                <li><p><Link to='/'>SignIn</Link></p></li>
                <li><p><Link to='/'>SignUp</Link></p></li>

              </ul>
          </div>

        </div>
      </div>
      Header
    </>
  )
}

export default Header