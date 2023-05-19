import React, { useState, useContext, useEffect }  from 'react';
import DataContext from '../../DataContext';
import containerCSS from '../css/container.module.css';
import carsHomeCSS from './css/carsHome.module.css';

const CarsHome = () => {
  const carContect = useContext(DataContext);
  const [category, setCategory] = useState('SUV') // Sedan
  const [cars, setCars] = useState(carContect.carsData)
  const [loading, setLoading] = useState(true)
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
    console.log(fetchCar[0])
    setCar(fetchCar[0])
  }

  return (
    <div className={containerCSS.carRentalPageContainer}>
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
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Company</h6><h5>{car.carCompany}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Model</h6><h5>{car.carName+' '+car.carModel}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Category</h6><h5>{car.carCategory}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Engine</h6><h5>{car.carEngine}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Milage</h6><h5>{car.carMileage}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Fuel & Transmission</h6><h5>{car.carFuelType+', '+car.carTransmission}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Seat Capacity</h6><h5>{car.carSeatCapacity}</h5></div></>:<></>}
            {car? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Rent per km</h6><h5>{car.rentalPriceCharge}</h5></div></>:<></>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarsHome