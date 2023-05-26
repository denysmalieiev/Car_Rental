import React from 'react';
import ShowOrders from './ShowOrders';

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from '../adminCss/adminDetails.module.css';
import showUsersCSS from '../adminCss/showUsers.module.css';


const AdminAllOrders = () => {
  return (
    <div className={containerCSS.carRentalPageContainer}>
        <div className={adminCarDetailCSS.adminCarDetailContainer}>
            <div className={adminCarDetailCSS.headingBox}>         
                <h1>All Offices</h1>
                <hr/>
            </div>
          <div className={showUsersCSS.usersCardConatiner}>
            <ShowOrders/>
          </div>
      </div>
    </div>
  )
}

export default AdminAllOrders