import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { carRental_Sign_In} from '../../../utils/actions/UserAction';
import { carRental_Admin_All_Offices_Load } from '../../../utils/actions/CarsAction';

import carContainerCSS from  '../../css/container.module.css';
import userAuthCSS from './css/userAuth.module.css';

const UserLogin = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleOnChangeValue = (e)=>{
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitAuth = async (e)=>{
    e.preventDefault()
    dispatch(carRental_Sign_In(formData.email, formData.password))
    dispatch(carRental_Admin_All_Offices_Load)
  }

  return (
    <div className={carContainerCSS.carRentalPageContainer}>
      <div className={userAuthCSS.authContainer}>
        <div className={userAuthCSS.authContainerLeft}>
        </div>
        <div className={userAuthCSS.authContainerRight}>
          <div className={userAuthCSS.userRightContent}>
            <h2>Sign In</h2><br/>
            <form className={userAuthCSS.userAuthDetailFill}>
              <input type='email' name='email' value={formData.email} onChange={handleOnChangeValue} placeholder='Email' required/><br/>
              <input type='password' name='password' value={formData.password} onChange={handleOnChangeValue} placeholder='Password' required autoComplete='false'/><br/>
              <button onClick={(e)=>handleSubmitAuth(e, formData)}>Submit</button>
            </form>
            {/* <h5><Link to='/password/forgot'>Forgot Password</Link></h5> */}
            <h5>Don't have an account &nbsp;&nbsp;<Link to='/user/signup'>Sign Up</Link></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLogin