import React from 'react';

import showBookingCSS from './css/showBooking.module.css'


const ShowBookings = ({data}) => {
  return (
    <div className={showBookingCSS.showBookingContiner}>
        <div className={showBookingCSS.showLeft}>
            {data.car 
                ? <>
                    <img src={data.car.carPicture[0].url} alt="Ordered card"/>
                  </>
                :<></>}
        </div>
        <div className={showBookingCSS.showRight}>
          <div>{data? <h3>{data.car.carName}</h3>: <></>}</div>
          <div className={showBookingCSS.showRighthrCSS}></div>
          <div className={showBookingCSS.showOrderDetailsCSS}><b>Booking Status:</b> {data? <p>{data.orderStatus}</p>: <></>}</div>
          <div className={showBookingCSS.showOrderDetailsCSS}><b>Category:</b> {data.user? <p>{data.car.carCategory.toUpperCase()}</p>: <></>}</div>
          <div className={showBookingCSS.showOrderDetailsCSS}><b>Pick up Address:</b> {data? <p>{data.officeLocation.address+" "+data.officeLocation.city+", "+data.officeLocation.state+" "+data.officeLocation.country+", Pin: "+data.officeLocation.pin}</p>: <></>}</div>
          <div className={showBookingCSS.showOrderDetailsCSS}><b>Contact:</b> {data? <p>{data.officeLocation.contact}</p>: <></>}</div>
          <div className={showBookingCSS.showOrderDetailsCSS}><b>Booking Range:</b> {data? <p>{data.carRange}<i>&nbsp;km</i></p>: <></>}</div>
          <div className={showBookingCSS.showOrderDetailsCSS}><b>Booking Price:</b> {data? <p><i>₹&nbsp;</i>{data.totalPrice}</p>: <></>}</div>
          <button>Details</button><button>Cancel</button>
        </div>
    </div>
  )
}

export default ShowBookings