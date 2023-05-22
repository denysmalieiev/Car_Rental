import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { carRental_Load_User, carRental_User_Profile_Update, clearErrors } from '../../../../utils/actions/UserAction';
import { UPDATE_USER_PROFILE_RESET } from "../../../../utils/constants/Constants";

import ContainerCSS from '../../../css/container.module.css';
import userProfileCSS from './css/userProfile.module.css';

const UserProfileUpdate = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user, error } =  useSelector((state)=> state.user);
  const { isProfileUpdated, loading } = useSelector((state) => state.profileUpdate);

  const [formData, setFormData] = useState({
    firstName: user. firstName,
    lastName: user.lastName,
    address: user.address,
    city: user.city,
    state: user.state,
    country: user.country,
    pin: user.pin,
    contact: user.contact,
    occupation: user.occupation,
  })


  const handleOnChange = (e)=>{
    e.preventDefault()
    setFormData({...formData, [e.target.name]: e.target.value})
    // console.log(e.target.value)
  }

  const handleOnSubmitForm = async (e)=>{
    e.preventDefault()
    console.log(formData)
    dispatch(carRental_User_Profile_Update(formData))
    dispatch(carRental_Load_User)
    // alert('Profile updated')
    navigate('/user/profile')
  }

  useEffect(()=>{
    if(error){
      dispatch(clearErrors)
    }
    if (isProfileUpdated) {
      dispatch({
        type: UPDATE_USER_PROFILE_RESET,
      });
    }
  },[dispatch, user, error, loading, isProfileUpdated])

  return (
    <div className={ContainerCSS.carRentalPageContainer}>
      {loading?<>Loading...</>
      :<>
      <div className={userProfileCSS.userCardContainer}>
        <div className={userProfileCSS.userCardLeft}>
          <div className={userProfileCSS.userCardLeftContentTop}>
            {user? <><img src={user.profilePicture} alt='User Profile'/></>:<><img src='' alt='User Profile'/></>}
          </div>
          <div className={userProfileCSS.userCardLeftContentBottom}>
            <button><Link>Upload Image</Link></button><br/><button><Link to='/user/profile'>Go To Profile</Link></button>
          </div>
        </div>
        <div className={userProfileCSS.userCardRight}>
          <div className={userProfileCSS.userCardRightBox}>
            <h2>{user.email}</h2>
            <hr/>
            <form onSubmit={handleOnSubmitForm}>
              <div className={userProfileCSS.userCardRightDetails}>
                <b>First Name</b>
                { user ? <><input type='text' name='firstName' value={formData.firstName} onChange={handleOnChange} placeholder='First Name'/></> : <><input type='text' name='firstName' placeholder='First Name'/></>}
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Last Name</b>
                { user ? <><input type='text' name='lastName' value={formData.lastName} onChange={(e)=>handleOnChange(e)} placeholder='Last Name'/></> : <><input type='text' name='lastName' placeholder='Last Name'/></>}
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Mobile</b>
                { user ? <><input type='number' name='contact' value={formData.contact} onChange={(e)=>handleOnChange(e)} placeholder='Contact'/></> : <><input type='number' name='contact' placeholder='-'/></>}
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Address</b>
                { user ? <><input type='text' name='address' value={formData.address} onChange={(e)=>handleOnChange(e)} placeholder='Address'/></> : <><input type='text' name='address' placeholder='-'/></>}
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>City</b>
                { user ? <><input type='text' name='city' value={formData.city} onChange={(e)=>handleOnChange(e)} placeholder='City'/></> : <><input type='text' name='city' placeholder='-'/></>} 
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>State</b>
                { user ? <><input type='text' name='state' value={formData.state} onChange={(e)=>handleOnChange(e)} placeholder='State'/></> : <><input type='text' name='state' placeholder='-'/></>} 
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Country</b>
                { user ? <><input type='text' name='country' value={formData.country} onChange={(e)=>handleOnChange(e)} placeholder='Country'/></> : <><input type='text' name='country' placeholder='-'/></>} 
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Pin</b>
                { user ? <><input type='number' name='pin' value={formData.pin} onChange={(e)=>handleOnChange(e)} placeholder='Pin'/></> : <><input type='number' name='pin' placeholder='-'/></>} 
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Occupation</b>
                { user ? <><input type='text' name='occupation' value={formData.occupation} onChange={(e)=>handleOnChange(e)} placeholder='Occupation'/></> : <><input type='text' name='occupation' placeholder='-'/></>} 
              </div>
              <button>Save</button>
             </form>
          </div>
        </div>

      </div>
      </>}
    </div>
  )
}

export default UserProfileUpdate