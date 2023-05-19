import React from 'react';
import containerCSS from '../css/container.module.css'
import carsHomeCSS from './css/carsHome.module.css';

const CarsHome = () => {
  return (
    <div className={containerCSS.carRentalPageContainer}>
      <div className={carsHomeCSS.carsHomeBox}>
        <div className={carsHomeCSS.carsHomeBoxLeft}>
          Left
        </div>
        <div className={carsHomeCSS.carsHomeBoxMid}>
          mid
        </div>
        <div className={carsHomeCSS.carsHomeBoxRight}>
            right
        </div>
      </div>
    </div>
  )
}

export default CarsHome