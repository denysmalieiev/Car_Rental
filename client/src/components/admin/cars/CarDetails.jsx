import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from './css/adminCarDetail.module.css';

import { clearError } from '../../../utils/actions/CarsAction';

const CarDetails = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    // const { isAuthenticated } = useSelector(state=> state.auth);
    const { car, error, loading } = useSelector(state=> state.car);
    // const { user } = useSelector(state=> state.user);

    useEffect(()=>{
        if(error){
          dispatch(clearError)
        }
    
      }, [dispatch, error])

  return (
    <div className={containerCSS.carRentalPageContainer}>
        <div className={adminCarDetailCSS.adminCarDetailContainer}>
            <div className={adminCarDetailCSS.adminCarDetailLeftBox}>
                <div>
                    <img src={car.carPicture[0].url} alt='car_image'/><br/>
                </div><br/>
                <div>
                    <button>Update Car</button>
                    <button>Delete Car</button>
                </div>
            </div>
            <div className={adminCarDetailCSS.adminCarDetailRightBox}>
                <div className={adminCarDetailCSS.adminCarDetailRightContainer}>
                    <h1>{car.carName+', '+car.carModel}</h1>
                    <hr/>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Company</b>
                        <p> { car ? <>{ car.carCompany }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Category</b>
                        <p> { car ? <>{ car.carCategory }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Engine</b>
                        <p> { car ? <>{ car.carEngine }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Fuel</b>
                        <p> { car ? <>{ car.carFuelType }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Mileage</b>
                        <p> { car ? <>{ car.carMileage }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Transmission</b>
                        <p> { car ? <>{ car.carTransmission }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Seat</b>
                        <p> { car ? <>{ car.carSeatCapacity }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Charge/km</b>
                        <p> { car ? <>{ car.rentalPriceCharge+'₹/km' }</> : <>-</>} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CarDetails