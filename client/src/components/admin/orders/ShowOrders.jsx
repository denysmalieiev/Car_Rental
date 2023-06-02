import React from 'react';

import showOrdersCSS from './css/showOrder.module.css';


const ShowOrders = ({data}) => {
  return (
    <>
        <div className={showOrdersCSS.orderCardLeftShow}>
            {data.car ? <><img src={data.car.carPicture[0].url} alt='CarImage'/></>:<><img src='' alt='User Profile'/></>}
        </div>
        <div className={showOrdersCSS.orderCardRightShow}>
            <h3>dfhx</h3>
            <hr/>
            {/* <div className={showOrdersCSS.showUserDetail}><b>Email: </b><p>{data.email}</p></div>
            <div className={showOrdersCSS.showUserDetail}><b>Role: </b><p>{data.role}</p></div>
            {data.address && data.city? <><div className={showOrdersCSS.showUserDetail}><b>Address: </b><p>{" "+data.address+", "+data.city}</p></div></>:<></>}
            {data.state && data.pin? <><div className={showOrdersCSS.showUserDetail}><b>State: </b><p>{data.state+", "+data.pin}</p></div></>:<></>}
            {data.country? <><div className={showOrdersCSS.showUserDetail}><b>Country: </b><p>{data.country}</p></div></>:<></>} */}
            <button>Details</button>
        </div>
    </>
  )
}

export default ShowOrders