import React from 'react';
import footerCss from './css/footer.module.css';

const Footer = () => {
  return (
    <div className={footerCss.footerContainer}>
      <div className={footerCss.footerContainerTop}>
        <div className={footerCss.footerContainerLeft}>
          <div className={footerCss.footerContainerLeftContent}>
            <h2>Car Rental</h2>
            <hr/>
            <p>We provide best cars</p>
          </div>
        </div>
        <div className={footerCss.footerContainerMid}>
          <div className={footerCss.footerContainerMidContent}>
            <h3>SUV</h3>
            <hr/>
            <p>Tata Harrier</p>
            <p>Mahindra Scorpio N</p>
            <p>Range Rover Velar</p>
            <p>Mahindra Thar</p>
          </div>
        </div>
        <div className={footerCss.footerContainerRight}>
          <div className={footerCss.footerContainerRightContent}>
            <h3>Sedan</h3>
            <hr/>
            <p>Tata Tigor</p>
            <p>Hyundai Verna</p>
            <p>Audi A4</p>
          </div>
        </div>
      </div>

      <div className={footerCss.footerContainerBottom}>
        <h5>All right reserved @CarRental 2023</h5>
      </div>
    </div>
  )
}

export default Footer