import React from 'react';
import { Link } from 'react-router-dom';
import userProfileCSS from './css/userProfile.module.css';

const ShowUser = ({data}) => {
  return (
    <>
        <div className={userProfileCSS.userCardLeft}>
          <div className={userProfileCSS.userCardLeftContentTop}>
            {data? <><img src={data.profilePicture.url} alt='User Profile'/></>:<><img src='' alt='User Profile'/></>}
          </div>
          <div className={userProfileCSS.userCardLeftContentBottom}>
            <button><Link>Upload Image</Link></button><br/><button><Link to='/user/profile/update'>Edit Profile</Link></button>
          </div>
        </div>
        <div className={userProfileCSS.userCardRight}>
          <div className={userProfileCSS.userCardRightBox}>
            <h1>{data? <>{data.firstName +" "+ data.lastName}</>: <></>}</h1>
            <hr/>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Email</b>
              <p> { data ? <>{ data.email }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Mobile</b>
              <p> { data ? <>{ data.contact }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Address</b>
              <p> { data ? <>{ data.address }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>City</b>
              <p> { data ? <>{ data.city }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>State</b>
              <p> { data ? <>{ data.state }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Country</b>
              <p> { data ? <>{ data.country }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Pin</b>
              <p> { data ? <>{ data.pin }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Occupation</b>
              <p> { data ? <>{ data.occupation }</> : <>-</>} </p>
            </div>

          </div>
        </div>
    </>
  )
}

export default ShowUser