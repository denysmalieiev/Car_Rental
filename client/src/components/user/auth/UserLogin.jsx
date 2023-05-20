import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DataContext from '../../../DataContext';
import carContainerCSS from  '../../css/container.module.css';
import userAuthCSS from './css/userAuth.module.css';

const UserLogin = () => {
  const carContext = useContext(DataContext);
  const navigate = useNavigate()
  const [formData, setFromData] = useState({
    email: '',
    password: '',
  })

  const handleOnChangeValue = (e)=>{
    e.preventDefault()
    setFromData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmitAuth = (e, formData)=>{
    e.preventDefault()
    const authStatus = carContext.login(formData)
    if(authStatus){
      navigate('/')
    } else{
      navigate('/user/signin')
    }
    // console.log(authStatus)
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