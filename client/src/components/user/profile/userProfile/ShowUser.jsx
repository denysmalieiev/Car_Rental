import React from 'react';
import { Link } from 'react-router-dom';
import userProfileCSS from './css/userProfile.module.css';

const ShowUser = () => {
  return (
    <>
      <div className={userProfileCSS.userCardLeft}>
        <div className={userProfileCSS.userCardLeftContentTop}>
          <img src='' alt='User Profile' />
        </div>
        <div className={userProfileCSS.userCardLeftContentBottom}>
          <button><Link>Upload Image</Link></button><br /><button><Link to='/user/profile/update'>Edit Profile</Link></button>
        </div>
      </div>
      <div className={userProfileCSS.userCardRight}>
        <div className={userProfileCSS.userCardRightBox}>
          <h1>First Last Name</h1>
          <hr />

          <div className={userProfileCSS.userCardRightDetails}>
            <b>Email</b>
            <p>em</p>
          </div>

          <div className={userProfileCSS.userCardRightDetails}>
            <b>Mobile</b>
            <p>Contact</p>
          </div>

          <div className={userProfileCSS.userCardRightDetails}>
            <b>Address</b>
            <p>Address</p>
          </div>

          <div className={userProfileCSS.userCardRightDetails}>
            <b>City</b>
            <p>City</p>
          </div>

          <div className={userProfileCSS.userCardRightDetails}>
            <b>State</b>
            <p>State</p>
          </div>

          <div className={userProfileCSS.userCardRightDetails}>
            <b>Country</b>
            <p>Country</p>
          </div>

          <div className={userProfileCSS.userCardRightDetails}>
            <b>Pin</b>
            <p>PIn</p>
          </div>

          <div className={userProfileCSS.userCardRightDetails}>
            <b>Occupation</b>
            <p>Occupation</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default ShowUser