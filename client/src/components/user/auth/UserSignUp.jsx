import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../../DataContext';
import carContainerCSS from  '../../css/container.module.css';
import userAuthCSS from './css/userAuth.module.css';

const UserSignUp = () => {
  const carContext = useContext(DataContext)
  const [formData, setFromData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleOnChangeValue = (e)=>{
    e.preventDefault()
    setFromData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitAuth = (e)=>{
    e.preventDefault()
    setFromData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
              <input type='text' name='firstName' value={formData.firstName} onChange={handleOnChangeValue} placeholder='First Name' required/><br/>
              <input type='text' name='lastName' value={formData.lastName} onChange={handleOnChangeValue} placeholder='Last Name' required/><br/>
              <input type='email' name='email' value={formData.email} onChange={handleOnChangeValue} placeholder='Email' required/><br/>
              <input type='password' name='password' value={formData.password} onChange={handleOnChangeValue} placeholder='Password' required/><br/>
              <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleOnChangeValue} placeholder='Confirm Password' required/><br/>
              <button onSubmit={handleSubmitAuth}>Submit</button>
            </form>
            <h5>Already have an account &nbsp;&nbsp;<Link to='/user/signin'>Sign In</Link></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSignUp