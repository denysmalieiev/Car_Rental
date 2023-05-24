import React from 'react';

import carRentalContainerCSS from '../css/container.module.css';
import adminContainerCSS from './adminCss/adminContainer.module.css';

const AdminDashBoard = () => {
  return (
    <div className={carRentalContainerCSS.carRentalPageContainer}>
      <div className={adminContainerCSS.adminContainer}>
        <div className={adminContainerCSS.headingBox}>
          <h2>Admin DashBoard</h2>
          <hr/>
        </div>
        <div className={adminContainerCSS.adminContainerLeftPart}>
          <div className={adminContainerCSS.adminConatinerTopDetails}>
            <h3>Bookings</h3>
            <p>Total Earnings:</p>
            <p>Total Bookings:</p>
            <p>Bookings Pending:</p>
            <p>Active Bookings: </p>
            <p>Closed Bookings: </p>
            <button>All Bookings</button>
          </div>
          <div className={adminContainerCSS.adminConatinerBottomDetails}>
            <h3>Users</h3>
            <p>Total Registered Admins: </p><button>All Admin</button><br/>
            <p>Total Registered Customers: </p>
            <button>All Users</button>
          </div>
        </div>
        <div className={adminContainerCSS.adminContainerRightPart}>
          <div className={adminContainerCSS.adminConatinerTopDetails}>
            <h3>Cars</h3>
            <p>Total Cars:</p>
            <p>New Cars:</p>
            <p>All Cars:</p>
            <p>Car Categories:</p>
            <button>Sedan</button><br/>
            <button>SUV's</button>
          </div>
          <div className={adminContainerCSS.adminConatinerBottomDetails}>
            <h3>Offices</h3>
            <p>Total Registered Offices:</p>
            <button>New Office</button><br/>
            <button>All Offices</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashBoard