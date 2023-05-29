import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { carRental_User_Cart_Car_To_Book } from '../../utils/actions/UserAction';
import { carRental_Admin_Single_Office_Load } from '../../utils/actions/CarsAction';
import UserShowCity from './UserShowCity';

import ContainerCSS from '../css/container.module.css';
import userCartBookCSS from './css/UserCartBook.module.css';


const CarDetail = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { offices } =  useSelector((state)=> state.offices);
  const { cars } = useSelector(state=> state.cars);
  const { cartCar } =  useSelector((state)=> state.cartCar);
  const params = useParams()
  const [car, setCar] = useState()
  const [selectRangeVal, setSelectRangeVal] = useState([]);
  const [selectCityVal, setSelectCityVal] = useState([]);
  const [rangeVal, setRangeVal] = useState([]);
  const [cityId, setCityId] = useState();


  // dsbhjkabjvsdkj
  function handleSelectChangeRange(e) {
    e.preventDefault()
    // setSelectRangeVal(e.target.value.split(' ')[0]);
    setRangeVal(e.target.value.split(' ')[0])
  }

  function handleSelectChangeCity(e) {
    e.preventDefault()
    const vl1 = e.target.value.split(',')
    setCityId(e.target.value.split(',')[0])
    // setSelectCityVal(e.target.value.split(',')[1])
  }


  function handleProceedForBooking(e, rangeVal, cityId){
    e.preventDefault()
    // console.log(rangeVal)
    // console.log(cityId)
    if(cityId && rangeVal){
      dispatch(carRental_Admin_Single_Office_Load(cityId))
      navigate(`/car/payment/${cityId}/${rangeVal}`)
    }
    else if(!cityId){
      alert(`Please select range.`)
    }
    else{
      alert(`Please select city`)
    }
  }

  useEffect(()=>{
    const fetchCar = cars.filter((data)=>{
      if(params.id===data._id)
      return data
    })
    setCar(fetchCar[0])
    dispatch(carRental_User_Cart_Car_To_Book(params.id))
  }, [])

  return (
    <div className={ContainerCSS.carRentalPageContainer}>
      <div className={userCartBookCSS.userCarBookBook}>
        <div className={userCartBookCSS.userCarBookCartLeft}>
          {car? <><img src={car.carPicture[0].url} alt='Car Image'/></>:<><img src='' alt='Car Image'/></>}
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
              { offices
                ? 
                  <>
                  <option value={''} default>Cities...</option>
                  { offices.map((data)=>{
                    return (
                      <option key={data._id} value={data._id+","+data.city}>{data.city}</option>
                    )
                  }) }
                  </>
                : <></>
              }
            </select>
          </div>
          <div className={userCartBookCSS.cartBookingDetailRightPrice}>
            <div className={userCartBookCSS.cartBookingDetailRightTextArea}>
              <p>{car? <>{ rangeVal * car.rentalPriceCharge +'₹'}</>:<>-</>}</p>
            </div>
            <div className={userCartBookCSS.cartBookingDetailRightButton}>
              <button onClick={(e)=>handleProceedForBooking(e, rangeVal, cityId)}>Book Now</button>
            </div>
          </div>
          <h5>Note: Car's per/km charge is applicable for number of km's (price/km) drove above selected range.</h5>
        </div>
      </div>
    </div>
  )
}

export default CarDetail