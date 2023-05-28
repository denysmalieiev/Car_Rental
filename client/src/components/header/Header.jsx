import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { carRental_Get_All_Cars, carRental_Admin_All_Offices_Load, clearError } from '../../utils/actions/CarsAction.js';
import { carRental_Sign_Out } from '../../utils/actions/UserAction.js';
import headerCSS from './css/header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isAuthenticated, role } = useSelector(state=> state.auth);
  const { cars, loading, error } = useSelector(state=> state.cars);
  const { offices } = useSelector(state=>state.offices)

  const handleLogout =(e) =>{
    e.preventDefault();
    alert('Logout')
    dispatch(carRental_Sign_Out)
    navigate('/')
  }

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }
    if(!cars || Object.keys(cars).length===0){
      dispatch(carRental_Get_All_Cars)
    }
    if(!offices){
      dispatch(carRental_Admin_All_Offices_Load)
    }
    if(isAuthenticated && role){
      if(role==='admin'){
        navigate('/admin/dashboard')
      }
    }
  }, [dispatch, isAuthenticated, error, role])

  return (
    <>
      <div className={headerCSS.carRentalNevBar}>
        <div className={headerCSS.navBarWebName}>
          <p><Link to='/'>Car Rental</Link></p>
        </div>
        <div className={headerCSS.navBarWebNavigation}>
          <div className={headerCSS.navBarWebNavigationLeft}>
            <ul>
              { isAuthenticated && !loading
                ? <> 
                  { role==='admin'
                    ? <>
                        <li><h3><Link to='/cars'>Cars</Link></h3></li>
                        <li><h3><Link to='/admin/dashboard'>Admin</Link></h3></li>
                        <li><h3><Link to='/admin/office/details'>Offices</Link></h3></li>
                      </>
                    : <></>
                  }
                  </>
                : <></>
              }
            </ul>
          </div>
          <div className={headerCSS.navBarWebNavigationRight}>
            <ul>
              { isAuthenticated
                ? <>
                    <li><h3><Link to='/car/rent/payment'>Cart</Link></h3></li>
                    <li><h3><Link to='/user/profile'>Profile</Link></h3></li>
                    <li><h3 style={{color: 'white'}} onClick={handleLogout}><Link>Logout</Link></h3></li>
                  </>
                : <>
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