import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { carRental_Admin_Office_Update, carRental_Admin_All_Offices_Load, clearError} from '../../../utils/actions/CarsAction';
import { ADMIN_UPDATE_OFFICE_LOCATION_RESET } from '../../../utils/constants/Constants';

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from '../adminCss/adminDetails.module.css';

const AdminOfficeUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminOffice, isOfficeStatus, error } = useSelector(state=> state.adminOffice);
  const { office } = useSelector(state=> state.office);
  
  const [formData, setFormData] = useState({
    city: office.city,
    state: office.state,
    address: office.address,
    country: office.country,
    email: office.email,
    contact: office.contact,
    pin: office.pin
  })

  const [fState, setFState] = useState(office.state)

  const [fCity, setCity] = useState(office.city)

  const handleOnChange = (e) =>{
    e.preventDefault()
    setFormData({...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleState = (e) =>{
    e.preventDefault()
    setFState(e.target.value)
    let v1 = formData;
    v1.state = fState
    setFormData(v1)
  }

  const handleCity = (e) =>{
    e.preventDefault()
    setCity(e.target.value)
    let v1 = formData;
    v1.city = fCity
    setFormData(v1)
  }

  const handleFormSubmit =(e) =>{
    e.preventDefault()
    let v1 = formData;
    v1.city = fCity;
    v1.state = fState;
    setFormData(v1)
    console.log(formData)
    dispatch(carRental_Admin_Office_Update(office._id, formData))
  }

  useEffect(()=>{
    if(error){
      alert(error)
      dispatch(clearError)
    }
    
    if(isOfficeStatus){
      alert('Office Details Updated')
      dispatch(carRental_Admin_All_Offices_Load)
      dispatch({
        type: ADMIN_UPDATE_OFFICE_LOCATION_RESET,
      });
      navigate('/admin/office/details')
    }
  }, [dispatch, error, adminOffice, isOfficeStatus])


  return (
    <div className={containerCSS.carRentalPageContainer}>
      <div className={adminCarDetailCSS.adminCarDetailContainer}>
        <div className={adminCarDetailCSS.headingBox}>         
          <h1>Update Office Details</h1>
          <hr/>
        </div>
        <div className={adminCarDetailCSS.adminCarDetailLeftBox}>
          <img src='https://cdn.dribbble.com/users/1000879/screenshots/3273639/store.gif' alt='Car_Office'/>
        </div>
        <div className={adminCarDetailCSS.adminCarDetailRightBox}>
            <div className={adminCarDetailCSS.adminCarDetailRightContainer}>
              <form onSubmit={handleFormSubmit}>
                <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                  <b>Email</b>
                  <input type='email' name='email' value={formData.email} onChange={handleOnChange} placeholder='Email' required/>
                </div>
                <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                  <b>Contact</b>
                  <input type='number' name='contact' value={formData.contact} onChange={handleOnChange} placeholder='Contact' required/>
                </div>

                <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                  <b>Address</b>
                  <input type='text' name='address' value={formData.address} onChange={handleOnChange} placeholder='Address' required/>
                </div>
                        
                <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                  <b>State</b>
                  <select onChange={handleState} value={fState} required>
                    <option value={'Delhi'}>Delhi</option>
                    <option value={'Uttar Pradesh'}>Uttar Pradesh</option>
                    <option value={'Karnataka'}>Karnataka</option>
                    <option value={'Maharastra'}>Maharastra</option>
                    <option value={'Gujrat'}>Gujrat</option>
                  </select>
                </div>

                <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                  <b>City</b>
                  <select onChange={handleCity} value={fCity} required>
                  <option>Select...</option>
                    {fState==='Delhi'?
                    <>
                      <option value={'New Delhi'}>New Delhi</option>
                    </>:<></>}
                    {fState==='Uttar Pradesh'?
                    <>
                      <option value={'Noida'} >Noida</option>
                      <option value={'Lucknow'} >Lucknow</option>
                      <option value={'Kanpur'}>Kanpur</option>
                    </>:<></>}

                    {fState==='Karnataka'?
                    <>
                      <option value={'Bangalore'}>Bangalore</option>
                    </>:<></>}

                    {fState==='Maharastra'?
                    <>
                      <option value={'Pune'}>Pune</option>
                      <option value={'Mumbai'}>Mumbai</option>
                    </>:<></>}

                    {fState==='Gujrat'?
                    <>
                      <option value={'Ahemdabad'}>Ahemdabad</option>
                    </>:<></>}
                    
                  </select>
                </div>
                  
                <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                  <b>Country</b>
                  <input type='text' name='country' value={formData.country} onChange={handleOnChange} placeholder='Country' required/>
                </div>
                        
                <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                  <b>Pin</b>
                  <input type='number' name='pin' value={formData.pin} onChange={handleOnChange} placeholder='Pin' required/>
                </div>

                <button>Update Details</button>

              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminOfficeUpdate