import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import headerCSS from './css/header.module.css';
import { BiSolidOffer } from "react-icons/bi";

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {setIsAuthenticated(false) }, [])

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
            {isAuthenticated ?
              <>
                <p><Link>Order</Link></p>
                <p>Profile</p>
              </>
              : <></>
            }

          </div>
        </div>
      </div>
      {isAuthenticated ?
        <>
          <div className={headerCSS.navBarAuthOption}>
            <p><Link to='/cars/booking/history'>Bookings</Link></p>
            <p><Link to='/user/profile'>Profile</Link></p>
            <p><Link>Logout</Link></p>
          </div>
        </>
        : <></>
      }

      <div className={headerCSS.navBarOfferBox}>
        <p><BiSolidOffer />&nbsp;15% Discount this spring season.</p>
      </div>
    </div>
  )
}

export default Header