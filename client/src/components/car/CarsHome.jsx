import React, { useState, useContext }  from 'react';
import { useNavigate } from 'react-router-dom'
import DataContext from '../../DataContext';
import containerCSS from '../css/container.module.css';
import carsHomeCSS from './css/carsHome.module.css';

const CarsHome = () => {
  const carContect = useContext(DataContext);
  const navigate = useNavigate()
  const [category, setCategory] = useState('SUV') // Sedan
  const [cars, setCars] = useState(carContect.carsData)
  const [car, setCar] = useState(cars[0])

  const handleCarCategoryFilter = (e, type) => {
    e.preventDefault()
    setCategory(type)
  }

  const handleCarClick = (e, id)=>{
    e.preventDefault()
    const fetchCar = cars.filter((data)=>{
      if(id===data._id)
      return data
    })
    setCar(fetchCar[0])
  }

  const handleCarBookingClick = (e, id)=>{
    e.preventDefault()
    // alert(id)
    navigate(`/car/booking/${id}`)
  }

  return (
    <div className={containerCSS.carRentalPageContainer} id='carsN'>
      <div className={carsHomeCSS.carsHomeBox}>
        <div className={carsHomeCSS.carsHomeBoxLeft}>
          <div className={carsHomeCSS.carsHomeBoxLeftCarCategory}>
            <button onClick={(e)=> handleCarCategoryFilter(e, 'SUV')}><h3>SUV</h3></button>
            <button onClick={(e)=> handleCarCategoryFilter(e, 'Sedan')}><h3>Sedan</h3></button>
          </div>
          <div className={carsHomeCSS.carsHomeBoxLeftCarOptions}>
            <h3>Cars</h3>
            <br/>
            { cars.map((data)=>{
              return (
                <span key={data._id}>{data.carCategory===category? 
                  <><button onClick={(e)=>handleCarClick(e, data._id)}>{data.carName}</button><br/></>
                  :<></>}</span>
              )
            })}
          </div>
        </div>
        <div className={carsHomeCSS.carsHomeBoxMid}>
          <img src={car.carPicture[0]} alt='car image'/>
        </div>
        <div className={carsHomeCSS.carsHomeBoxRight}>
          <div className={carsHomeCSS.carsHomeBoxRightContent}>
            <button onClick={(e)=>handleCarBookingClick(e, car._id)}><h4>Rent now</h4></button><br/><br/>
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Company</h6><h5>{car.carCompany}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Model</h6><h5>{car.carName+' '+car.carModel}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Category & Seats</h6><h5>{car.carCategory+", "+car.carSeatCapacity}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Engine & Milage</h6><h5>{car.carEngine+', '+car.carMileage}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Fuel & Transmission</h6><h5>{car.carFuelType+', '+car.carTransmission}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Rent per km</h6><h5>{car.rentalPriceCharge}</h5></div></>:<></>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarsHome