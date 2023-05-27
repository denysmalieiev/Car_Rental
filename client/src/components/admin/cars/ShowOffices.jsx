import React from 'react';

import showUsersCSS from '../adminCss/showUsers.module.css';

const ShowOffices = ({data}) => {

  const handleOfficeDelete = (e) =>{
    e.preventDefault()
    alert(data._id)
  }
  return (
    <>
      <div className={showUsersCSS.usersCardLeftShow}>
        <img src='https://cdn.dribbble.com/users/1000879/screenshots/3273639/store.gif' alt='Office_Image'/>
        {/* {data? <><img src={data.profilePicture.url} alt='User Profile'/></>:<><img src='' alt='User Profile'/></>} */}
      </div>
      <div className={showUsersCSS.usersCardRightShow}>
        <br/>
        <h3>{data.city+', '+data.state}</h3>
        <hr/>
        <div className={showUsersCSS.showUserDetail}><b>Email: </b><p>{data.email}</p></div>
        <div className={showUsersCSS.showUserDetail}><b>Contact: </b><p>{data.contact}</p></div>
        {data.address? <><div className={showUsersCSS.showUserDetail}><b>Address: </b><p>{data.address}</p></div></>:<></>}
        {data.city && data.pin? <><div className={showUsersCSS.showUserDetail}><b>City: </b><p>{data.city+", "+data.pin}</p></div></>:<></>}
        {data.state? <><div className={showUsersCSS.showUserDetail}><b>State: </b><p>{data.state}</p></div></>:<></>}
        {data.country? <><div className={showUsersCSS.showUserDetail}><b>Country: </b><p>{data.country}</p></div></>:<></>}
        <button onClick={handleOfficeDelete}>Delete</button>
      </div>
    </>
  )
}

export default ShowOffices