import React from 'react';
import { Link } from 'react-router-dom';
import homeTopDetailCSS from './css/homeTopDetail.module.css';
import homeCarImage from './img/homeCarImage.png';
import { AiOutlineArrowDown } from 'react-icons/ai';

const HomeTopContent = () => {
  return (
    <div className={homeTopDetailCSS.homeTopContainer}>
      <div className={homeTopDetailCSS.homeTopBoxLeft}>
        <div className={homeTopDetailCSS.homeTopBoxLeftContent}>
          <div>
            <h1>Self Drive</h1><br/>
            <h2>Your next advanture is just a click away. <br/>To start, simply browse the car and pick the one that's right for you.</h2>
            <br/>
            <h1 className={homeTopDetailCSS.headingH1Style}><AiOutlineArrowDown/></h1>
          </div>
        </div>
      </div>
      <div className={homeTopDetailCSS.homeTopBoxRight}>
        <img src={homeCarImage} alt='Home page Image' />
      </div>
    </div>
  )
}

export default HomeTopContent