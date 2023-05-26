import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from '../adminCss/adminDetails.module.css';

import { carRental_Admin_New_Car_Detail,carRental_Get_All_Cars,clearError } from '../../../utils/actions/CarsAction';

const NewCarDetail = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userData, setuserData] = useState({
        carName: '',
        carModel: '',
        carCompany: '',
        carImage:'',
        carCategory: '',
        carEngine: '',
        carFuelType: '',
        carMileage: '',
        carTransmission: '',
        carSeatCapacity: '',
        rentalPriceCharge: ''
    })

    const [carImage, setCarImage] = useState("https://cdn.dribbble.com/users/2374064/screenshots/4732016/car-jump.gif");
    const [carImagePreview, setCarImagePreview] = useState();
    
    // const { carName, carModel, carCompany, carCategory, carEngine, carFuelType, carMileage, carTransmission, carSeatCapacity, rentalPriceCharge} = userData

    const handleOnChange = (e) =>{
        e.preventDefault()
        if (e.target.name === "carImage") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setCarImagePreview(reader.result);
                    setCarImage(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);

        } else {
            setuserData({...userData, [e.target.name]: e.target.value})
        }
    }
    
    const handleOnSubmitForm = (e) =>{
        e.preventDefault()
        // alert('DOne')
        let v1 = userData
        v1.carImage = carImage
        setuserData(v1)
        console.log(userData)
        dispatch(carRental_Admin_New_Car_Detail(userData))
        dispatch(carRental_Get_All_Cars)
        navigate('/admin/dashboard')
    }

    const { car, error, loading } = useSelector(state=> state.car);

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
                    <img src={carImage} alt='Car Image'/>
                    <input type='file' name='carImage' accept='image/*' onChange={handleOnChange}/>
                </div><br/>
            </div>
            <div className={adminCarDetailCSS.adminCarDetailRightBox}>
                <div className={adminCarDetailCSS.adminCarDetailRightContainer}>
                    <h2>New Car Details</h2>
                    <hr/>
                    <form onSubmit={handleOnSubmitForm}>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Car Name</b>
                            <input type='text' name='carName' value={userData.carName} onChange={handleOnChange} placeholder='' required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Car Model</b>
                            <input type='text' name='carModel' value={userData.carModel} onChange={handleOnChange} placeholder='' required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Company</b>
                            <input type='text' name='carCompany' value={userData.carCompany} onChange={handleOnChange} placeholder='' required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Category</b>
                            {/* <input type='text' name='carCategory' value={userData.carCategory} onChange={handleOnChange} placeholder='' required/> */}
                            <select id="rentRange" onChange={handleOnChange} name='carCategory' value={userData.carCategory} required>
                                <option value={''} default >Car</option>
                                <option name='carCategory' value={'suv'}>SUV</option>
                                <option name='carCategory' value={'sedan'}>Sedan</option>
                            </select>&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Engine</b>
                            <input type='text' name='carEngine' value={userData.carEngine} onChange={handleOnChange} placeholder='' required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Fuel</b>
                            <input type='text' name='carFuelType' value={userData.carFuelType} onChange={handleOnChange} placeholder='' required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Mileage</b>
                            <input type='text' name='carMileage' value={userData.carMileage} onChange={handleOnChange} placeholder='' required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Transmission</b>
                            <input type='text' name='carTransmission' value={userData.carTransmission} onChange={handleOnChange} placeholder='' required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Seat</b>
                            <input type='text' name='carSeatCapacity' value={userData.carSeatCapacity} onChange={handleOnChange} placeholder='' required/>
                        </div>
                        <div className={adminCarDetailCSS.adminCarDetailRightContent}>
                            <b>Charge/km</b>
                            <input type='number' name='rentalPriceCharge' value={userData.rentalPriceCharge} onChange={handleOnChange} placeholder='' required/>
                        </div>
                        <button>Save Car</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default NewCarDetail