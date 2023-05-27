import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { carRental_Admin_Get_Single_User, clearError } from '../../../utils/actions/UserAction';
import { ADMIN_SINGLE_USER_RESET } from '../../../utils/constants/Constants'

import showUsersCSS from '../adminCss/showUsers.module.css';

const ShowUsers = ({data}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isProfileLoaded, error } = useSelector(state=> state.userProfile);

  const handleClick = (e) =>{
    e.preventDefault()
    dispatch(carRental_Admin_Get_Single_User(data._id))
    // navigate(`/admin/user/${data._id}`)
  }

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }
    if(isProfileLoaded){
      dispatch({
        type: ADMIN_SINGLE_USER_RESET,
      })
      navigate(`/admin/user/${data._id}`)
    }
    
  }, [dispatch, isProfileLoaded, error])

  return (
    <div className={showUsersCSS.usersCardConatiner}>
      <div className={showUsersCSS.usersCardLeftShow}>
        {data? <><img src={data.profilePicture.url} alt='User Profile'/></>:<><img src='' alt='User Profile'/></>}
      </div>
      <div className={showUsersCSS.usersCardRightShow}>
        <h3>{data.firstName+" "+data.lastName}</h3>
        <hr/>
        <div className={showUsersCSS.showUserDetail}><b>Email: </b><p>{data.email}</p></div>
        <div className={showUsersCSS.showUserDetail}><b>Role: </b><p>{data.role}</p></div>
        {data.address && data.city? <><div className={showUsersCSS.showUserDetail}><b>Address: </b><p>{" "+data.address+", "+data.city}</p></div></>:<></>}
        {data.state && data.pin? <><div className={showUsersCSS.showUserDetail}><b>State: </b><p>{data.state+", "+data.pin}</p></div></>:<></>}
        {data.country? <><div className={showUsersCSS.showUserDetail}><b>Country: </b><p>{data.country}</p></div></>:<></>}
        <button onClick={handleClick}>Details</button>
      </div>
    </div>
  )
}

export default ShowUsers