import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { carRental_Get_All_Cars } from '../../utils/actions/CarsAction.js';
import { carRental_Load_User, carRental_Sign_Out } from '../../utils/actions/UserAction.js';
import headerCSS from './css/header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isAuthenticated } = useSelector(state=> state.auth);
  const { cars, loading, error } = useSelector(state=> state.cars);
  const { user } = useSelector(state=>state.user)

  const handleLogout =(e) =>{
    e.preventDefault();
    alert('Logout')
    dispatch(carRental_Sign_Out)
    navigate('/')
  }
  useEffect(()=>{
    if(!cars || Object.keys(cars).length===0){
      dispatch(carRental_Get_All_Cars)
    }
  }, [dispatch, isAuthenticated])

  return (
    <>
      <div className={headerCSS.carRentalNevBar}>
        <div className={headerCSS.navBarWebName}>
          <p><Link to='/'>Car Rental</Link></p>
        </div>
        <div className={headerCSS.navBarWebNavigation}>
          <div className={headerCSS.navBarWebNavigationLeft}>
            <ul>
              <li><h3><Link to='/gallery'>Gallery</Link></h3></li>
              { cars && !loading ? <><li><h3><Link to='/cars'>Cars</Link></h3></li></>: <> </>}
              
              { isAuthenticated && !loading 
                ? <>
                    { user && user.role==='admin'
                      ? <>
                          <li><h3><Link to='/admin/dashboard'>Admin</Link></h3></li>
                          <li><h3><Link to='/admin/office/details'>Offices</Link></h3></li>
                        </>
                      : <>
                          <li><h3><Link to='/car/rent/payment'>Cart</Link></h3></li>
                        </>
                    }
                  </>
                : <></>
              }
            </ul>
          </div>
          <div className={headerCSS.navBarWebNavigationRight}>
            <ul>
              { isAuthenticated
                ? 
                  <>
                    <li><h3><Link to='/user/profile'>Profile</Link></h3></li>
                    <li><h3 style={{color: 'white'}} onClick={handleLogout}><Link>Logout</Link></h3></li>
                  </>
                : 
                  <>
                    <li><h3><Link to='/user/signin'>SignIn</Link></h3></li>
                    <li><h3><Link to='/user/signup'>SignUp</Link></h3></li>
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