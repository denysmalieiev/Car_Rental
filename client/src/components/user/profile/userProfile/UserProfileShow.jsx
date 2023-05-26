import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { clearErrors } from '../../../../utils/actions/UserAction';

import ContainerCSS from '../../../css/container.module.css';
import userProfileCSS from './css/userProfile.module.css';
import ShowUser from './ShowUser';

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
      {loading? <></>
      :<>
        <ShowUser key={user.id} data={user}/> 
      </>
      }
      </div>
    </div>
  )
}

export default UserProfileShow