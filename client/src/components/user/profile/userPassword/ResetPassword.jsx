import React, { useState } from 'react';

import ContainerCSS from '../../../css/container.module.css';
import passwordContainerCSS from './css/passwordContainer.module.css';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
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
  return (
    <div className={ContainerCSS.carRentalPageContainer}> 
      <div className={passwordContainerCSS.passwordContainer}>
          <form className={passwordContainerCSS.inputFormContainer} onSubmit={handleOnSubmit}>
              <h2>Reset Password</h2><hr/><br/>
              <input type='password' onChange={handleOnChange} name='newPassword' value={formData.newPassword} placeholder='New Password'/><br/>
              <input type='password' onChange={handleOnChange} name='confirmPassword' value={formData.confirmPassword} placeholder='Confirm Password'/><br/>
              <button>Save</button>
          </form>
      </div>
    </div>
  )
}

export default ResetPassword