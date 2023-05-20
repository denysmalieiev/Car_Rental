import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../DataContext';
import headerCSS from './css/header.module.css';

const Header = () => {
  const carContext = useContext(DataContext);

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
              <li><p><Link to='/about'>About</Link></p></li>
              <li><p><Link to='/gallery'>Gallery</Link></p></li>
              <li><p><Link to='/cars'>Cars</Link></p></li>
              { carContext.isAuthenticated ===true
                ? <><li><p><Link to='/car/rent/payment'>Cart</Link></p></li></>
                : <></>
              }
            </ul>
          </div>
          <div className={headerCSS.navBarWebNavigationRight}>
            <ul>
              { carContext.isAuthenticated ===true
                ? 
                  <>
                    <li><p><Link to='/user/profile'>^</Link></p></li>
                    <li><p style={{color: 'white'}} onClick={carContext.logout}><Link>Logout</Link></p></li>
                  </>
                : 
                  <>
                    <li><p><Link to='/user/signin'>SignIn</Link></p></li>
                    <li><p><Link to='/user/signup'>SignUp</Link></p></li>
                  </>
              }
              </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header