import React from 'react';
import showUsersCSS from './css/showUsers.module.css';

const ShowUsers = ({data}) => {
  return (
    <div className={showUsersCSS.usersCardConatiner}>
      <div className={showUsersCSS.usersCardLeftShow}>
        {data? <><img src={data.profilePicture.url} alt='User Profile'/></>:<><img src='' alt='User Profile'/></>}
      </div>
      <div className={showUsersCSS.usersCardRightShow}>
        <h3>{data.firstName+" "+data.lastName}</h3>
        <hr/>
        <div className={showUsersCSS.showUserDetail}><b>Email: </b><p>{data.email}</p></div>
        <div className={showUsersCSS.showUserDetail}><b>Role: </b><p>{data.role}</p></div>
        {data.address && data.city? <><div className={showUsersCSS.showUserDetail}><b>Address: </b><p>{" "+data.address+", "+data.city}</p></div></>:<></>}
        {data.state && data.pin? <><div className={showUsersCSS.showUserDetail}><b>State: </b><p>{data.state+", "+data.pin}</p></div></>:<></>}
        {data.country? <><div className={showUsersCSS.showUserDetail}><b>Country: </b><p>{data.country}</p></div></>:<></>}
        <button>Details</button>
      </div>
    </div>
  )
}

export default ShowUsers