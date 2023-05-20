import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DataContext from '../../DataContext';
import ContainerCSS from '../css/container.module.css';
import userCartBookCSS from './css/UserCartBook.module.css';


const CarDetail = () => {
  const carContext = useContext(DataContext);
  const navigate = useNavigate()
  const params = useParams()
  const [car, setCar] = useState()
  const [selectVal, setSelectVal] = useState([]);

  useEffect(()=>{
    const fetchCar = carContext.carsData.filter((data)=>{
      if(params.id===data._id)
      return data
    })
    setCar(fetchCar[0])
  }, [])

  function handleSelectChange(e) {
    e.preventDefault()
    setSelectVal(e.target.value.split(' ')[0]);
    // onChange={handleSelectChange}
  }

  function handleProceedForBooking(e, id, range, price){
    e.preventDefault()
    var tempCar = car;
    tempCar.tripPrice = price;
    tempCar.tripRange = parseInt(range);
    setCar(tempCar)
    carContext.setCarForBooking(car)
    navigate(`/car/rent/payment`)
  }


  return (
    <div className={ContainerCSS.carRentalPageContainer}>
      <div className={userCartBookCSS.userCarBookBook}>
        <div className={userCartBookCSS.userCarBookCartLeft}>
          {car? <><img src={car.carPicture[0]} alt='Car Image'/></>:<><img src='' alt='Car Image'/></>}
        </div>
        <div className={userCartBookCSS.userCarBookCartRight}>
          {car? <h2>{car.carName}</h2>:<>-</>}
          <hr/>
          {car? <div className={userCartBookCSS.cartBookingDetailRight}><p>Company</p><h3>{car.carCompany}</h3></div>:<>-</>}
          {car? <div className={userCartBookCSS.cartBookingDetailRight}><p>Category & Seats</p><h3>{car.carCategory+", "+car.carSeatCapacity}</h3></div>:<>-</>}
          {car? <div className={userCartBookCSS.cartBookingDetailRight}><p>Engine & Model</p><h3>{car.carEngine+', '+car.carMileage}</h3></div>:<>-</>}
          {car? <div className={userCartBookCSS.cartBookingDetailRight}><p>Fuel & Transmission</p><h3>{car.carFuelType+', '+car.carTransmission}</h3></div>:<>-</>}
          {car? <div className={userCartBookCSS.cartBookingDetailRight}><p>Rental Price per km</p><h3>{car.rentalPriceCharge}</h3></div>:<>-</>}
          <div className={userCartBookCSS.cartBookingRightOption}>
            <label htmlFor="rentRange">Choose Range:</label>
            <select id="rentRange" onChange={handleSelectChange}>
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
            <select id="RentalCity">
              <option value={'Lucknow'}>Lucknow</option>
              <option value={'Kanpur'}>Kanpur</option>
              <option value={'Delhi'}>Delhi</option>
              <option value={'Pune'}>Pune</option>
              <option value={'Bangalore'}>Bangalore</option>
            </select>
          </div>
          <div className={userCartBookCSS.cartBookingDetailRightPrice}>
            <div className={userCartBookCSS.cartBookingDetailRightTextArea}>
              <p>{car? <>{selectVal * car.rentalPrice +'₹'}</>:<>-</>}</p>
            </div>
            <div className={userCartBookCSS.cartBookingDetailRightButton}>
              <button onClick={(e)=>handleProceedForBooking(e, car._id, selectVal, car.rentalPrice)}>Book Now</button>
            </div>
          </div>
          <h5>Note: 18₹/km charge is applicable for number of km (km*18₹/km) drove above 1000 km are applicable.</h5>
        </div>
      </div>
    </div>
  )
}

export default CarDetail