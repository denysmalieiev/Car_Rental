import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { clearErrors } from '../../../../utils/actions/UserAction';

import ContainerCSS from '../../../css/container.module.css';
import userProfileCSS from './css/userProfile.module.css';

const UserProfileShow = () => {

  const dispatch = useDispatch();
  const { user, loading, error } =  useSelector((state)=> state.user);

  useEffect(()=>{
    if(error){
      dispatch(clearErrors)
    }
  },[dispatch, user, error, loading])

  return (
    <div className={ContainerCSS.carRentalPageContainer}>
      <div className={userProfileCSS.userCardContainer}>
        <div className={userProfileCSS.userCardLeft}>
          <div className={userProfileCSS.userCardLeftContentTop}>
            {user? <><img src={user.profilePicture} alt='User Profile'/></>:<><img src='' alt='User Profile'/></>}
          </div>
          <div className={userProfileCSS.userCardLeftContentBottom}>
            <button><Link>Upload Image</Link></button><br/><button><Link to='/user/profile/update'>Edit Profile</Link></button>
          </div>
        </div>
        <div className={userProfileCSS.userCardRight}>
          <div className={userProfileCSS.userCardRightBox}>
            <h1>{user.firstName +" "+ user.lastName}</h1>
            <hr/>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Email</b>
              <p> { user ? <>{ user.email }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Mobile</b>
              <p> { user ? <>{ user.contact }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Address</b>
              <p> { user ? <>{ user.address }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>City</b>
              <p> { user ? <>{ user.city }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>State</b>
              <p> { user ? <>{ user.state }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Country</b>
              <p> { user ? <>{ user.country }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Pin</b>
              <p> { user ? <>{ user.pin }</> : <>-</>} </p>
            </div>

            <div className={userProfileCSS.userCardRightDetails}>
              <b>Occupation</b>
              <p> { user ? <>{ user.occupation }</> : <>-</>} </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default UserProfileShow