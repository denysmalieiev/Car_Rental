import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import carsHomeCSS from './css/carsHome.module.css';

const CarsHome = () => {
  const navigate = useNavigate()
  const handleCarBookingClick = (e, id) => {
    e.preventDefault()
    navigate(`/car/booking/1`)
  }

  useEffect(() => {}, [])

  return (
    <>
      <div className={carsHomeCSS.component_container}>
        <p>Cars</p>
        <div className={carsHomeCSS.container_Show_Cars}>
          <div className={carsHomeCSS.carOptionShowImage}>
            <img src='https://cdn.dribbble.com/users/2374064/screenshots/4732016/car-jump.gif' alt='car_image' />
          </div>
          <div className={carsHomeCSS.carOptionsList}>
            <div className={carsHomeCSS.availableCarsLists}>
              <p>Cars</p>
              <select className={carsHomeCSS.availableCarsListOption}>
                <option>Sedan</option>
                <option>SUV</option>
                <option>4X4</option>
              </select>
              <select className={carsHomeCSS.availableCarsListSCarSelect}>
                <option>Audi</option>
                <option>BMW</option>
                <option>Range Rover</option>
              </select>
            </div>
            <div className={carsHomeCSS.selectedCarDetails}>
              <div className={carsHomeCSS.selectedCarInformation}>  

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Company</p>
                  <span>Yeah</span>
                </div>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Car</p>
                  <span>Yeah</span>
                </div>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Seating & Boot space</p>
                  <span>Yeah</span>
                </div>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Fuel & Transmission</p>
                  <span>Yeah</span>
                </div>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Mileage</p>
                  <span>Yeah</span>
                </div>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Rental Price</p>
                  <span>Yeah</span>
                </div>

              </div>
            </div>
            <div className={carsHomeCSS.selectedCarBook}><button onClick={handleCarBookingClick}>Details</button></div>
          </div>
        </div>
      </div>
    </>

  )
}

export default CarsHome