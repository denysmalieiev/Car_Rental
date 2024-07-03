import React, { useState } from 'react';

import ContainerCSS from '../../../css/container.module.css';
import passwordContainerCSS from './css/passwordContainer.module.css';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: ''
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
                <h2>Forgot Password</h2><hr/><br/>
                <input type='email' onChange={handleOnChange} name='email' value={formData.email} placeholder='Email'/><br/>
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword