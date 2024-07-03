import React, { useEffect } from 'react';
import ContainerCSS from '../../../css/container.module.css';
import userProfileCSS from './css/userProfile.module.css';
import ShowUser from './ShowUser';

const UserProfileShow = () => {

  useEffect(()=>{}, [])

  return (
    <div className={ContainerCSS.carRentalPageContainer}>
      <div className={userProfileCSS.userCardContainer}>
      <ShowUser/> 
      </div>
    </div>
  )
}

export default UserProfileShow