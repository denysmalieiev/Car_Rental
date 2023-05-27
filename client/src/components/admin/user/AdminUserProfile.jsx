import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { carRental_Admin_Get_All_Users, carRental_Admin_User_Role_Update, clearError} from '../../../utils/actions/UserAction';
import { ADMIN_SINGLE_USER_RESET } from '../../../utils/constants/Constants'

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from '../adminCss/adminDetails.module.css';

const AdminUserProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userProfile, isProfileLoaded, error } = useSelector(state=> state.userProfile);
    const [userRole, setUserRole] = useState();

    const handleRoleSubmit = (e) => {
      e.preventDefault()
      alert('Role Updated')
      dispatch(carRental_Admin_User_Role_Update(userProfile._id, userRole))
    }

    useEffect(()=>{
      if(error){
        dispatch(clearError)
      }
      if(isProfileLoaded){
        dispatch(carRental_Admin_Get_All_Users)
        dispatch({
          type: ADMIN_SINGLE_USER_RESET,
        })
        navigate(`/admin/dashboard`)
      }
    })

  return (
    <div className={containerCSS.carRentalPageContainer}>
        <div className={adminCarDetailCSS.adminCarDetailContainer}>
            <div className={adminCarDetailCSS.adminCarDetailLeftBox}>
                <div className={adminCarDetailCSS.adminUserDetailLeftBox}>
                  {
                    userProfile
                    ? <><img src={userProfile.profilePicture.url} alt='User Profile'/><br/></>
                    : <><img src='' alt='User Profile'/><br/></>
                  }
                </div><br/>
                <div>
                    <select value={userRole} onChange={(e)=>setUserRole(e.target.value)}>
                      <option>Select Role</option>
                      <option value={'admin'}>Admin</option>
                      <option value={'customer'}>Customer</option>
                    </select>
                    <button onClick={handleRoleSubmit}>Update Role</button>
                </div>
            </div>
            <div className={adminCarDetailCSS.adminCarDetailRightBox}>
                <div className={adminCarDetailCSS.adminCarDetailRightContainer}>
                    <h1>{userProfile? <>{userProfile.firstName+', '+userProfile.lastName}</>:<></>}</h1>
                    <hr/>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Role</b>
                        <p> { userProfile ? <>{ userProfile.role }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Email</b>
                        <p> { userProfile ? <>{ userProfile.email }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Address</b>
                        <p> { userProfile ? <>{ userProfile.address }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>City</b>
                        <p> { userProfile ? <>{ userProfile.city }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>State</b>
                        <p> { userProfile ? <>{ userProfile.state }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Country</b>
                        <p> { userProfile ? <>{ userProfile.country }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Occupation</b>
                        <p> { userProfile ? <>{ userProfile.occupation }</> : <>-</>} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminUserProfile