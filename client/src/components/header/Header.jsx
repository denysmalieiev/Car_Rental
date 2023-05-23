import React, { useContext, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { carRental_Get_All_Cars, carRental_Get_Single_car, clearError } from '../../utils/actions/CarsAction.js';
import { carRental_Sign_Out, clearErrors} from '../../utils/actions/UserAction.js';
import DataContext from '../../DataContext';
import headerCSS from './css/header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isAuthenticated } = useSelector(state=> state.auth);
  const { cars, loading, error } = useSelector(state=> state.cars);
  // const carContext = useContext(DataContext);

  const handleLogout =(e) =>{
    e.preventDefault();
    alert('Logout')
    dispatch(carRental_Sign_Out).then(()=>navigate('/'))
  }

  const handleOnChange =(e) =>{
    e.preventDefault();
    navigate(`${e.target.value}`)
  }

  useEffect(()=>{
    if(!isAuthenticated){
      <Navigate to='/'/>
    }
  }, [isAuthenticated])

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }

  }, [dispatch])

  
  useEffect(()=>{
    if(!cars || Object.keys(cars).length===0){
      dispatch(carRental_Get_All_Cars)
    }

  }, [dispatch])

  useEffect(()=>{
    if(error){
      dispatch(clearErrors)
    }
  },[dispatch, error, isAuthenticated, loading])

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
              <li><p><Link to='/gallery'>Gallery</Link></p></li>
              { cars? <><li><p><Link to='/cars'>Cars</Link></p></li></>: <> </>}
              
              { isAuthenticated
                ? <><li><p><Link to='/car/rent/payment'>Cart</Link></p></li></>
                : <></>
              }
            </ul>
          </div>
          <div className={headerCSS.navBarWebNavigationRight}>
            <ul>
              { isAuthenticated
                ? 
                  <>
                    <select name='profileNav' id='propt' onClick={handleOnChange}>
                    <option value='/' default>Car Rentals</option>
                      <option value='/user/profile'><li><p><Link to='/user/profile'>Profile</Link></p></li></option>
                      <option value='/password/update'><li><p><Link to='/password/update'>Password</Link></p></li></option>
                    </select>
                    {/* <li><p><Link to='/user/profile'>^</Link></p></li> */}
                    <li><p style={{color: 'white'}} onClick={handleLogout}><Link>Logout</Link></p></li>
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