import React, { useState, useEffect }  from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { carRental_Get_Single_car, clearError } from '../../utils/actions/CarsAction.js';
// CSS
import containerCSS from '../css/container.module.css';
import carsHomeCSS from './css/carsHome.module.css';

const CarsHome = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector(state=> state.auth);
  const { cars, error, loading } = useSelector(state=> state.cars);
  const { user } = useSelector(state=> state.user);
  const [category, setCategory] = useState('suv') 
  const [carTa, setCarTa] = useState()

  const handleCarCategoryFilter = (e, type) => {
    e.preventDefault()
    setCategory(type)
    const fiterCar = cars.filter((data)=>{
      if(data.carCategory.toLowerCase()!==category.toLowerCase()){
        return 
      }
      return data
    })
  }

  const handleCarClick = (e, id)=>{
    e.preventDefault()
    const fetchCar = cars.filter((data)=>{
      if(id!==data._id) {
        return
      } return data
    })
    console.log(fetchCar)
    setCarTa(fetchCar[0])
  }

  const handleCarBookingClick = (e, id)=>{
    e.preventDefault()
    if(!isAuthenticated){
      alert('Please login to proceed')
      navigate('/user/signin')
    } else {
      if(user && user.role==='admin'){
        dispatch(carRental_Get_Single_car(id)).then(()=>navigate(`/car/${id}`))
      }else {
        dispatch(carRental_Get_Single_car(id)).then(()=>navigate(`/car/booking/${id}`))
      }
    }
  }

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }
    if(!cars){
      console.log('No')
    } else if( cars && Object.keys(cars).length>0){
      setCarTa(cars[0])
    } else {
      navigate('/')
    }

  }, [dispatch, error, category, loading])

  return (
    <div className={containerCSS.carRentalPageContainer} id='carsN'>
      <div className={carsHomeCSS.carsHomeBox}>
        <div className={carsHomeCSS.carsHomeBoxLeft}>
          <div className={carsHomeCSS.carsHomeBoxLeftCarCategory}>
            <button onClick={(e)=> handleCarCategoryFilter(e, 'suv')}><h3>SUV</h3></button>
            <button onClick={(e)=> handleCarCategoryFilter(e, 'sedan')}><h3>Sedan</h3></button>
          </div>
          <div className={carsHomeCSS.carsHomeBoxLeftCarOptions}>
            <h3>Cars</h3>
            <br/>
            {
              !cars
              ? <> </>
              : 
                <>
                  {
                    Object.keys(cars).length>0
                    ? 
                      <>
                        { 
                          cars && cars.map((data)=>{
                            return (
                              <span key={data._id}>{data.carCategory===category
                                ? 
                                  <>
                                    <button onClick={(e)=>handleCarClick(e, data._id)}>{data.carName}</button>
                                    <br/>
                                  </>
                                :<></>}
                              </span>
                            )
                          })
                        }
                      </>
                    : 
                      <></>
                  }
                </>
            }
          </div>
        </div>

        <div className={carsHomeCSS.carsHomeBoxMid}>
          {  carTa ? <><img src={carTa.carPicture[0].url} alt='car_image'/></>: <><img src='https://cdn.dribbble.com/users/2374064/screenshots/4732016/car-jump.gif' alt='car_image'/></> }
        </div>
        <div className={carsHomeCSS.carsHomeBoxRight}>
          <div className={carsHomeCSS.carsHomeBoxRightContent}>
            { user && user.role==='admin'
              ? <><button onClick={(e)=>handleCarBookingClick(e, carTa._id)}><h4>Details</h4></button><br/><br/></>
              :<><button onClick={(e)=>handleCarBookingClick(e, carTa._id)}><h4>Rent now</h4></button><br/><br/></>
            }
            
            {carTa? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Company</h6><h5>{carTa.carCompany}</h5></div></>:<></>}
            {carTa? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Model</h6><h5>{carTa.carName+' '+carTa.carModel}</h5></div></>:<></>}
            {carTa? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Category & Seats</h6><h5>{carTa.carCategory+", "+carTa.carSeatCapacity}</h5></div></>:<></>}
            {carTa? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Engine & Milage</h6><h5>{carTa.carEngine+', '+carTa.carMileage}</h5></div></>:<></>}
            {carTa? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Fuel & Transmission</h6><h5>{carTa.carFuelType+', '+carTa.carTransmission}</h5></div></>:<></>}
            {carTa? <><div className={carsHomeCSS.carsHomeBoxRightDivContent}><h6>Car Rent per km</h6><h5>{carTa.rentalPriceCharge+'₹/km'}</h5></div></>:<></>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarsHome