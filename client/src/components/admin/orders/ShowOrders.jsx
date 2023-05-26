import React from 'react';

import showUsersCSS from '../adminCss/showUsers.module.css';


const ShowOrders = () => {
  return (
    <>
        <div className={showUsersCSS.usersCardLeftShow}>
            <h1>Tempo</h1>
            {/* {data? <><img src={data.profilePicture.url} alt='User Profile'/></>:<><img src='' alt='User Profile'/></>} */}
        </div>
        <div className={showUsersCSS.usersCardRightShow}>
            <h3>dfhx</h3>
            <hr/>
            {/* <div className={showUsersCSS.showUserDetail}><b>Email: </b><p>{data.email}</p></div>
            <div className={showUsersCSS.showUserDetail}><b>Role: </b><p>{data.role}</p></div>
            {data.address && data.city? <><div className={showUsersCSS.showUserDetail}><b>Address: </b><p>{" "+data.address+", "+data.city}</p></div></>:<></>}
            {data.state && data.pin? <><div className={showUsersCSS.showUserDetail}><b>State: </b><p>{data.state+", "+data.pin}</p></div></>:<></>}
            {data.country? <><div className={showUsersCSS.showUserDetail}><b>Country: </b><p>{data.country}</p></div></>:<></>} */}
            <button>Details</button>
        </div>
    </>
  )
}

export default ShowOrders