import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContainerCSS from '../css/container.module.css';
import userCartBookCSS from './css/UserCartBook.module.css';


const CarDetail = () => {

  const navigate = useNavigate()
  const params = useParams()
  const [selectRangeVal, setSelectRangeVal] = useState([]);
  const [selectCityVal, setSelectCityVal] = useState([]);
  const [rangeVal, setRangeVal] = useState([]);
  const [cityId, setCityId] = useState();

  function handleSelectChangeRange(e) {
    e.preventDefault()
    setSelectRangeVal(e.target.value.split(' ')[0]);
    setRangeVal(e.target.value.split(' ')[0])
  }

  function handleSelectChangeCity(e) {
    e.preventDefault()
    setCityId(e.target.value.split(',')[0])
    setSelectCityVal(e.target.value.split(',')[1])
  }


  function handleProceedForBooking(e, rangeVal, cityId) {
    e.preventDefault()
  }

  useEffect(() => {
  }, [])

  return (
    <div className={ContainerCSS.carRentalPageContainer}>
      <div className={userCartBookCSS.userCarBookBook}>
        <div className={userCartBookCSS.userCarBookCartLeft}>
          <img src='https://cdn.dribbble.com/users/2374064/screenshots/4732016/car-jump.gif' alt='Car Image' />
        </div>
        <div className={userCartBookCSS.userCarBookCartRight}>
          <h2>car Name</h2>
          <hr />
          <div className={userCartBookCSS.cartBookingDetailRight}><p>Company</p><h3>Car Company</h3></div>
          <div className={userCartBookCSS.cartBookingDetailRight}><p>Category & Seats</p><h3>car Category, Seat Capacity</h3></div>
          <div className={userCartBookCSS.cartBookingDetailRight}><p>Engine & Model</p><h3>ngine Mileage</h3></div>
          <div className={userCartBookCSS.cartBookingDetailRight}><p>Fuel & Transmission</p><h3>Fuel Transmission</h3></div>
          <div className={userCartBookCSS.cartBookingDetailRight}><p>Rental Price per km</p><h3>Rental Price Charge</h3></div>
          <div className={userCartBookCSS.cartBookingRightOption}>
            <label htmlFor="rentRange">Choose Range:</label>
            <select id="rentRange" onChange={handleSelectChangeRange} required>
              <option value={'0 Km'} default>0 km</option>
              <option value={'100 km'}>100 km</option>
              <option value={'200 km'}>200 km</option>
              <option value={'300 km'}>300 km</option>
              <option value={'400 km'}>400 km</option>
              <option value={'500 km'}>500 km</option>
              <option value={'600 km'}>600 km</option>
              <option value={'700 km'}>700 km</option>
              <option value={'800 km'}>800 km</option>
              <option value={'900 km'}>900 km</option>
              <option value={'1000 km'}>1000 km</option>
            </select>&nbsp;&nbsp;&nbsp;

            <label htmlFor="RentalCity">Choose City:</label>
            <select id="RentalCity" onChange={handleSelectChangeCity} required>
              <option value={''} default>Cities...</option>
            </select>
          </div>
          <div className={userCartBookCSS.cartBookingDetailRightPrice}>
            <div className={userCartBookCSS.cartBookingDetailRightTextArea}>
              <p>-</p>
            </div>
            <div className={userCartBookCSS.cartBookingDetailRightButton}>
              <button onClick={(e) => handleProceedForBooking(e, rangeVal, cityId)}>Book Now</button>
            </div>
          </div>
          <h5>Note: Car's per/km charge is applicable for number of km's (price/km) drove above selected range.</h5>
        </div>
      </div>
    </div>
  )
}

export default CarDetail