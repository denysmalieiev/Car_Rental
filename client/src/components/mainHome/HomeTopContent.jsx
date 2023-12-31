import React from 'react';

import homeTopDetailCSS from './css/homeTopDetail.module.css';
import homeCarImage from './img/homeCarImage.png';

const HomeTopContent = () => {
  return (
    <div className={homeTopDetailCSS.homeTopContainer}>
      <div className={homeTopDetailCSS.homeTopBoxLeft}>
        <div className={homeTopDetailCSS.homeTopBoxLeftContent}>
          <div>
            <h1>Self Drive</h1><br/>
            <h2>Your next advanture is just a click away. <br/>To start, simply browse the car and pick the one that's right for you.</h2>
            <br/>
          </div>
        </div>
      </div>
      <div className={homeTopDetailCSS.homeTopBoxRight}>
        <img src={homeCarImage} alt='Home_Page_Image' />
      </div>
    </div>
  )
}

export default HomeTopContent