import React from 'react';
import { Link } from 'react-router-dom';

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
            <button><Link to='/admin/order/all'>Users Bookings</Link></button>
          </div>
          <div className={adminContainerCSS.adminConatinerBottomDetails}>
            <h3>Users</h3>
            <p>Total Registered Admins: </p>
            <button><Link to='/admin/users/admin'>All Admin</Link></button><br/>
            <p>Total Registered Customers: </p>
            <button><Link to='/admin/users/customers'>All Users</Link></button>
          </div>
        </div>
        <div className={adminContainerCSS.adminContainerRightPart}>
          <div className={adminContainerCSS.adminConatinerTopDetails}>
            <h3>Cars</h3>
            <p>Total Cars:</p>
            <p>Car Categories: Sedan, SUV's</p>
            <button><Link to='/cars'>All Cars</Link></button><br/>
            <button><Link to='/admin/car/new'>New Cars</Link></button>
          </div>
          <div className={adminContainerCSS.adminConatinerBottomDetails}>
            <h3>Offices</h3>
            <p>Total Registered Offices:</p>
            <button><Link to='/admin/office/new'>New Office</Link></button><br/>
            <button><Link to='/admin/office/details'>All Offices</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashBoard