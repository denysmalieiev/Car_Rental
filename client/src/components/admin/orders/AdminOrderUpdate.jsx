import React from 'react';

import carRentalContainerCSS from '../../css/container.module.css';
import adminContainerCSS from '../adminCss/adminContainer.module.css';

const AdminOrderUpdate = () => {
  return (
    <div className={carRentalContainerCSS.carRentalPageContainer}>
    <div className={adminContainerCSS.adminContainer}>
      <p>Order Update</p>
    </div>
  </div>
  )
}

export default AdminOrderUpdate