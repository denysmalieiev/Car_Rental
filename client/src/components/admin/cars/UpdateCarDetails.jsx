import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { carRental_Admin_Car_Details_Delete } from '../../../utils/actions/CarsAction';

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from '../adminCss/adminDetails.module.css';

import { clearError } from '../../../utils/actions/CarsAction';

const UpdateCarDetais = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { car, error, loading } = useSelector(state=> state.car);

    const [formData, setFormData] = useState({
        carCompany: car.carCompany,
        carName: car.carName,
        carModel: car.carModel,
        carImage: car.carPicture,
        carCategory: car.carCategory,
        carEngine: car.carEngine,
        carFuelType: car.carFuelType,
        carMileage: car.carMileage,
        carTransmission: car.carTransmission,
        carSeatCapacity: car.carSeatCapacity,
        rentalPriceCharge: car.rentalPriceCharge
    })

    const handleOnChange = (e) =>{
        e.preventDefault()
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleOnSubmitForm = (e) =>{
        e.preventDefault()
        alert('Done')
        console.log(formData)
    }

    const handleDeleteCar = (e, id) =>{
        e.preventDefault()
        alert(id)
        // alert('Car Deleted')
        // carRental_Admin_Car_Details_Delete(id)
        // navigate('/cars')
    }

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
                    <input type='file'/>
                </div><br/>
                <div>
                    <button><Link to={`/car/${car._id}`}>Car Details</Link></button>
                </div>
            </div>
            <div className={adminCarDetailCSS.adminCarDetailRightBox}>
                <div className={adminCarDetailCSS.adminCarDetailRightContainer}>
                    <h2>New Car Details</h2>
                    <hr/>
                    <form onSubmit={handleOnSubmitForm}>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Car Name</b>
                            <input type='text' name='carName' value={formData.carName} onChange={handleOnChange} required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Car Model</b>
                            <input type='text' name='carModel' value={formData.carModel} onChange={handleOnChange} required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Company</b>
                            <input type='text' name='carCompany' value={formData.carCompany} onChange={handleOnChange} required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Category</b>
                            <input type='text' name='carCategory' value={formData.carCategory} onChange={handleOnChange} required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Engine</b>
                            <input type='text' name='carEngine' value={formData.carEngine} onChange={handleOnChange} required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Fuel</b>
                            <input type='text' name='carFuelType' value={formData.carFuelType} onChange={handleOnChange} required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Mileage</b>
                            <input type='text' name='carMileage' value={formData.carMileage} onChange={handleOnChange} required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Transmission</b>
                            <input type='text' name='carTransmission' value={formData.carTransmission} onChange={handleOnChange} required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Seat</b>
                            <input type='text' name='carSeatCapacity' value={formData.carSeatCapacity} onChange={handleOnChange} required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Charge/km</b>
                            <input type='number' name='rentalPriceCharge' value={formData.rentalPriceCharge} onChange={handleOnChange} required/>
                        </div>
                        <button>Save Car</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default UpdateCarDetais