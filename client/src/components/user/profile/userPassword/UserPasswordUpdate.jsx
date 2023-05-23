import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { clearErrors } from '../../../../utils/actions/UserAction';

import ContainerCSS from '../../../css/container.module.css';
import passwordContainerCSS from './css/passwordContainer.module.css';

const UserPasswordUpdate = () => {
    const dispatch = useDispatch();
    const { user, loading, error } =  useSelector((state)=> state.user);
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })

    const handleOnChange = (e) => {
        e.preventDefault()
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(()=>{
        if(error){
          dispatch(clearErrors)
        }
      },[dispatch, user, error, loading])

  return (
    <div className={ContainerCSS.carRentalPageContainer}> 
        <div className={passwordContainerCSS.passwordContainer}>
            <form className={passwordContainerCSS.inputFormContainer} onSubmit={handleOnSubmit}>
                <h3>{user?<>{user.firstName+" "+user.lastName}</>:<></>} | Password Update</h3><hr/><br/>
                <input type='password' onChange={handleOnChange} name='oldPassword' value={formData.oldPassword} placeholder='Old Password'/><br/>
                <input type='password' onChange={handleOnChange} name='newPassword' value={formData.newPassword} placeholder='New Password'/><br/>
                <input type='password' onChange={handleOnChange} name='confirmPassword' value={formData.confirmPassword} placeholder='Confirm Password'/><br/>
                <button>Save</button>
            </form>
        </div>
    </div>
  )
}

export default UserPasswordUpdate