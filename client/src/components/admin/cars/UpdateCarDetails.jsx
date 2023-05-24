import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from './css/adminCarDetail.module.css';

import { clearError } from '../../../utils/actions/CarsAction';

const UpdateCarDetais = () => {

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
                    <button><Link to={`/car/${car._id}`}>Car Details</Link></button>
                    <button>Delete Car</button>
                </div>
            </div>
            <div className={adminCarDetailCSS.adminCarDetailRightBox}>
                <div className={adminCarDetailCSS.adminCarDetailRightContainer}>
                    <h2>Car Update</h2>
                    <hr/>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Car Name</b>
                        <p> { car ? <>{ car.carName }</> : <>-</>} </p>
                    </div>
                    <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                        <b>Car Model</b>
                        <p> { car ? <>{ car.carModel }</> : <>-</>} </p>
                    </div>
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
                    <button>Save Details</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateCarDetais