import React from 'react';

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from './css/adminCarDetail.module.css';

const AdminNewOffice = () => {
  return (
    <div className={containerCSS.carRentalPageContainer}>
        <div className={adminCarDetailCSS.adminCarDetailContainer}>
        New Office
      </div>
    </div>
  )
}

export default AdminNewOffice