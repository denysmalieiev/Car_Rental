import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import carsHomeCSS from './css/carsHome.module.css';
import jsonData from '../../context/carRentalData.json';

const CarsHome = () => {

  const [cars, setCars] = useState();
  const [carOption, setCarOption] = useState(jsonData.cars[0].category.toLowerCase());
  const [car_Id, setCar_Id] = useState();
  const [selectedCar, setSelectedCar] = useState(jsonData.cars[0]);
  const navigate = useNavigate()
  const handleCarBookingClick = (e, id) => {
    e.preventDefault()
    navigate(`/car/booking/1`)
  }

  const randerSelectedCar = (e) => {
    e.preventDefault();
    setCar_Id(e.target.value)
    const temp = cars.filter((data) => {
      if (data._id.toString() === e.target.value.toString()) {
        return data
      }
      return
    })
    setSelectedCar(temp[0]);
  }

  useEffect(() => {
    const tempOption = []
    const temp = jsonData.cars.filter((data) => {
      if (data.category.toLocaleLowerCase() === carOption.toLowerCase()) {
        return data
      }
      if (!tempOption.includes(data.category.toLocaleLowerCase())) tempOption.push(data.category.toLocaleLowerCase())
      return
    })
    setCars(temp);

  }, [carOption, selectedCar]);

  return (
    <>
      <div className={carsHomeCSS.component_container}>
        <p>Cars</p>
        <div className={carsHomeCSS.container_Show_Cars}>
          <div className={carsHomeCSS.carOptionShowImage}>
            {selectedCar?.car_Images
              ? <><img src={selectedCar?.car_Images[0].url} alt='car_image' /></>
              : <><img src='https://cdn.dribbble.com/users/2374064/screenshots/4732016/car-jump.gif' alt='car_image' /></>
            }

          </div>
          <div className={carsHomeCSS.carOptionsList}>
            <div className={carsHomeCSS.availableCarsLists}>
              <p>Cars</p>
              <select className={carsHomeCSS.availableCarsListOption} value={carOption} onChange={(e) => setCarOption(e.target.value)}>
                <option key={jsonData.carOptions[0]} value={jsonData.carOptions[0]}>{jsonData.carOptions[0].charAt(0).toUpperCase() + jsonData.carOptions[0].slice(1)}</option>
                <option key={jsonData.carOptions[1]} value={jsonData.carOptions[1]}>{jsonData.carOptions[1].toUpperCase()}</option>
                <option key={jsonData.carOptions[2]} value={jsonData.carOptions[2]}>{jsonData.carOptions[2]}</option>
              </select>
              <select className={carsHomeCSS.availableCarsListSCarSelect} value={car_Id} onChange={randerSelectedCar}>
                <option default>Select an option</option>
                {cars?.map((data) => {
                  return <option key={data._id} value={data._id}>{data.car_name}</option>
                })}
              </select>
            </div>
            <div className={carsHomeCSS.selectedCarDetails}>
              <div className={carsHomeCSS.selectedCarInformation}>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Company</p>
                  <span>{selectedCar?.company ? selectedCar.company : 'Company'}</span>
                </div>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Car</p>
                  <span>{selectedCar?.car_name ? selectedCar?.car_name : 'Car'}</span>
                </div>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Seating & Boot space</p>
                  <span>{selectedCar?.seats && selectedCar?.boot_space ? selectedCar?.seats + ', ' + selectedCar?.boot_space : 'Seats, and Space'}</span>
                </div>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Fuel & Transmission</p>
                  <span>{selectedCar?.fuel && selectedCar?.transmission ? selectedCar?.fuel + ', ' + selectedCar?.transmission : 'Seats, and Space'}</span>
                </div>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Mileage</p>
                  <span>{selectedCar?.mileage ? selectedCar?.mileage : 'Mileage'}</span>
                </div>

                <div className={carsHomeCSS.selectedCarInfoBox}>
                  <p>Rental Price</p>
                  <span>{selectedCar?.rent_price ? selectedCar?.rent_price : 'Rental Price'}</span>
                </div>

              </div>
            </div>
            <div className={carsHomeCSS.selectedCarBook}><button onClick={handleCarBookingClick}>Details</button></div>
          </div>
        </div>
      </div>
    </>

  )
}

export default CarsHome