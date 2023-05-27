import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { carRental_Sign_Up, clearError } from '../../../utils/actions/UserAction';
import carContainerCSS from  '../../css/container.module.css';
import userAuthCSS from './css/userAuth.module.css';

const UserSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector(state=>state.user);

  const [formData, setFromData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleOnChangeValue = (e)=>{
    e.preventDefault()
    setFromData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitAuth =  async(e, formData)=>{
    e.preventDefault()
    dispatch(carRental_Sign_Up(formData.firstName, formData.lastName, formData.email, formData.newPassword))
      .then(()=> {
        alert('User registered Successfully')
        navigate('/user/signin')
      })
  }

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }
  }, [dispatch, error])

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
              <input type='password' name='newPassword' value={formData.newPassword} onChange={handleOnChangeValue} placeholder='Password' required autoComplete='false'/><br/>
              <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleOnChangeValue} placeholder='Confirm Password' autoComplete='false' required/><br/>
              <button onClick={(e)=>handleSubmitAuth(e, formData)}>Submit</button>
            </form>
            <h5>Already have an account &nbsp;&nbsp;<Link to='/user/signin'>Sign In</Link></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSignUp