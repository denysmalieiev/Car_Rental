import React from 'react';

import carRentalContainerCSS from '../../css/container.module.css';
import adminContainerCSS from '../adminCss/adminContainer.module.css';

const AdminAllOrders = () => {
  return (
    <div className={carRentalContainerCSS.carRentalPageContainer}>
    <div className={adminContainerCSS.adminContainer}>
      <p>ALl Ordesrs</p>
    </div>
  </div>
  )
}

export default AdminAllOrders