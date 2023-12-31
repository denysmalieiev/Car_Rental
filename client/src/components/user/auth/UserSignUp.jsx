import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import carContainerCSS from  '../../css/container.module.css';
import userAuthCSS from './css/userAuth.module.css';

const UserSignUp = () => {
  const navigate = useNavigate();

  const [formData, setFromData] = useState()

  const handleOnChangeValue = (e)=>{
    e.preventDefault()
    setFromData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitAuth =  async(e, formData)=>{
    e.preventDefault()
    navigate('/user/signin')
  }

  useEffect(()=>{}, [])

  return (
    <div className={carContainerCSS.carRentalPageContainer}>
      <div className={userAuthCSS.authContainer}>
        <div className={userAuthCSS.authContainerLeft}>
        </div>
        <div className={userAuthCSS.authContainerRight}>
          <div className={userAuthCSS.userRightContent}>
            <h2>Sign In</h2><br/>
            <form className={userAuthCSS.userAuthDetailFill} onSubmit={(e)=>handleSubmitAuth}>
              <input type='text' name='firstName' value={formData?.firstName || ''} onChange={handleOnChangeValue} placeholder='First Name' required/><br/>
              <input type='text' name='lastName' value={formData?.lastName || ''} onChange={handleOnChangeValue} placeholder='Last Name' required/><br/>
              <input type='email' name='email' value={formData?.email || ''} onChange={handleOnChangeValue} placeholder='Email' required/><br/>
              <input type='password' name='newPassword' value={formData?.newPassword || ''} onChange={handleOnChangeValue} placeholder='Password' required autoComplete='false'/><br/>
              <input type='password' name='confirmPassword' value={formData?.confirmPassword || ''} onChange={handleOnChangeValue} placeholder='Confirm Password' autoComplete='false' required/><br/>
              <button>Submit</button>
            </form>
            <h5>Already have an account &nbsp;&nbsp;<Link to='/user/signin'>Sign In</Link></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSignUp