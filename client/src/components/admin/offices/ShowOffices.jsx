import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux';
import { carRental_Admin_Single_Office_Load, carRental_Admin_Office_Delete, clearError} from '../../../utils/actions/CarsAction';
// import { ADMIN_CAR_DETAILS_UPDATE_RESET } from '../../../utils/constants/Constants';

import showUsersCSS from '../adminCss/showUsers.module.css';

const ShowOffices = ({data}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { error } = useSelector(state=> state.adminOffice);
  const { office } = useSelector(state=> state.office)
  const handleOfficeDelete = (e) =>{
    e.preventDefault()
    dispatch(carRental_Admin_Office_Delete(data._id))
  } 

  const handleOfficeUpdate = (e) =>{
    e.preventDefault()
    dispatch(carRental_Admin_Single_Office_Load(data._id)).then(()=>navigate(`/admin/office/update/${data._id}`))
  }
  useEffect(()=>{
    if(error){
      alert('Something went wrong')
      dispatch(clearError)
    }
  }, [dispatch, error])

  return (
    <>
      <div className={showUsersCSS.usersCardLeftShow}>
        <img src='https://cdn.dribbble.com/users/1000879/screenshots/3273639/store.gif' alt='Office_Image'/>
      </div>
      <div className={showUsersCSS.usersCardRightShow}>
        <br/>
        <h3>{data.city+', '+data.state}</h3>
        <hr/>
        <div className={showUsersCSS.showUserDetail}><b>Email: </b><p>{data.email}</p></div>
        <div className={showUsersCSS.showUserDetail}><b>Contact: </b><p>{data.contact}</p></div>
        {data.address? <><div className={showUsersCSS.showUserDetail}><b>Address: </b><p>{data.address}</p></div></>:<></>}
        {data.city && data.pin? <><div className={showUsersCSS.showUserDetail}><b>City: </b><p>{data.city+", "+data.pin}</p></div></>:<></>}
        {data.state? <><div className={showUsersCSS.showUserDetail}><b>State: </b><p>{data.state}</p></div></>:<></>}
        {data.country? <><div className={showUsersCSS.showUserDetail}><b>Country: </b><p>{data.country}</p></div></>:<></>}
        <button onClick={handleOfficeUpdate}>Update</button>&nbsp;&nbsp;&nbsp;
        <button onClick={handleOfficeDelete}>Delete</button>
      </div>
    </>
  )
}

export default ShowOffices