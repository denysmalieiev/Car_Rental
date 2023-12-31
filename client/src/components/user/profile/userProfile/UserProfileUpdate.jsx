import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ContainerCSS from '../../../css/container.module.css';
import userProfileCSS from './css/userProfile.module.css';

const UserProfileUpdate = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState()

  const handleOnChange = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleOnSubmitForm = async (e) => {
    e.preventDefault()
    navigate('/user/profile')
  }

  useEffect(() => { }, [])

  return (
    <div className={ContainerCSS.carRentalPageContainer}>
      <div className={userProfileCSS.userCardContainer}>
        <div className={userProfileCSS.userCardLeft}>
          <div className={userProfileCSS.userCardLeftContentTop}>
          <img src='' alt='User Profile' />
          </div>
          <div className={userProfileCSS.userCardLeftContentBottom}>
            <button><Link>Upload Image</Link></button><br /><button><Link to='/user/profile'>Go To Profile</Link></button>
          </div>
        </div>
        <div className={userProfileCSS.userCardRight}>
          <div className={userProfileCSS.userCardRightBox}>
            <h2>Email</h2>
            <hr />
            <form onSubmit={handleOnSubmitForm}>
              <div className={userProfileCSS.userCardRightDetails}>
                <b>First Name</b>
                <input type='text' name='firstName' placeholder='First Name' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Last Name</b>
                <input type='text' name='lastName' placeholder='Last Name' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Mobile</b>
                <input type='number' name='contact' placeholder='-' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Address</b>
                <input type='text' name='address' placeholder='-' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>City</b>
                <input type='text' name='city' placeholder='-' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>State</b>
                <input type='text' name='state' placeholder='-' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Country</b>
                <input type='text' name='country' placeholder='-' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Pin</b>
                <input type='number' name='pin' placeholder='-' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Occupation</b>
                <input type='text' name='occupation' placeholder='-' />
              </div>
              <button>Save</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserProfileUpdate