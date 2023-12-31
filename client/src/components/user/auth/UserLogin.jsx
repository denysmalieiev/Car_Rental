import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import carContainerCSS from  '../../css/container.module.css';
import userAuthCSS from './css/userAuth.module.css';

const UserLogin = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState()

  const handleOnChangeValue = (e)=>{
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitAuth = async (e)=>{
    e.preventDefault()
    navigate('/user/profile')
  }

  return (
    <div className={carContainerCSS.carRentalPageContainer}>
      <div className={userAuthCSS.authContainer}>
        <div className={userAuthCSS.authContainerLeft}>
        </div>
        <div className={userAuthCSS.authContainerRight}>
          <div className={userAuthCSS.userRightContent}>
            <h2>Sign In</h2><br/>
            <form className={userAuthCSS.userAuthDetailFill} onSubmit={handleSubmitAuth}>
              <input type='email' name='email' value={formData?.email || ''} onChange={handleOnChangeValue} placeholder='Email' required/><br/>
              <input type='password' name='password' value={formData?.password || ''} onChange={handleOnChangeValue} placeholder='Password' required autoComplete='false'/><br/>
              <button>Submit</button>
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