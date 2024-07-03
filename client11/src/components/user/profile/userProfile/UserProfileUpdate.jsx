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

            <form onSubmit={handleOnSubmitForm}>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Username</b>
                <input type='text' name='username' placeholder='User name' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Email</b>
                <input type='email' name='email' placeholder='Email address' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>First name</b>
                <input type='text' name='firstname' placeholder='First name' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Middle name</b>
                <input type='text' name='middlename' placeholder='Middle name' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Last name</b>
                <input type='email' name='lastname' placeholder='Last name' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Birth Date</b>
                <input type='date' name='birthdate' placeholder='Birth Date' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <h4 style={{ padding: '0 2%' }}>Contact</h4>
                <div style={{width: '102%', display:'flex', alignItems: 'center', justifyContent: 'start'}}>
                  <input type='number' style={{ width: '15%' }} name='countrycode' placeholder='Code' />
                  <input type='number' style={{ width: '85%', float: 'right', margin:'0 0 0 2%' }} name='phonenumber' placeholder='Phone number' />
                </div>

              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Address</b>
                <input type='text' name='address' placeholder='Address' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>City</b>
                <input type='text' name='city' placeholder='City' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>State</b>
                <input type='text' name='state' placeholder='state' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Country</b>
                <input type='text' name='country' placeholder='Country' />
              </div>

              <div className={userProfileCSS.userCardRightDetails}>
                <b>Zip Code</b>
                <input type='number' name='zipcode' placeholder='Zip Code' />
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