import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { USERS_ALL_STORE_RESET } from '../../utils/constants/Constants';
import { carRental_User_New_Order, carRental_User_All_Orders, clearError } from '../../utils/actions/OrderAction';

import ContainerCSS from '../css/container.module.css';
import bookingPaymentCSS from './css/bookingPayment.module.css';

const BookingPayment = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const params = useParams();
  const { user, loading } =  useSelector((state)=> state.user);
  const { office } =  useSelector((state)=> state.office);
  const { cartCar } =  useSelector((state)=> state.cartCar);
  const { orderStatus, error } = useSelector((state)=> state.userSingleOrder)

  const [formData, setFormData] = useState({
    carId: '',
    officeLocationId: '',
    carRange: '',
    totalPrice: '',
    paymentInfo: {
      id: '',
      status: '',
    },
  })

  const [paymentForm, setPForm] = useState({
    cardNumber: '',
    userMobileNumber: '',
    cardExpire: '',
    cardCVV: '',
    cardOTP: ''
  })

  const handlePayemtnChange = (e) => {
    e.preventDefault()
    setPForm({
      ...paymentForm,
      [e.target.name]: e.target.value
    })
  }

  const handlePayment = (e) =>{
    e.preventDefault()
    if( !user.contact && !user.address && !user.city && !user.state && !user.country && !user.pin ){
      return alert('Please update profile before booking.')
    }
    else if(paymentForm.cardNumber!=="" && paymentForm.userMobileNumber!=="" && paymentForm.cardExpire!=="" && paymentForm.cardCVV!=="" && paymentForm.cardOTP!==""){
      let orderShadow = formData
      orderShadow.carId = cartCar._id
      orderShadow.officeLocationId = office._id
      orderShadow.carRange = parseInt(params.range)
      orderShadow.totalPrice = parseInt(params.range)* parseInt(cartCar.rentalPriceCharge)
      orderShadow.paymentInfo = {
        id: "cr"+cartCar._id+"od"+office._id+"oe"+params.range,
        status: 'Success'
      }
      setFormData(orderShadow)
      console.log(formData)
      dispatch(carRental_User_New_Order(formData))
    }
    else{
      alert('Please enter all details to proceed for payment')
    }
  }

  useEffect(()=>{
    if(error){
      alert(error)
      dispatch(clearError)
    }
    if(orderStatus){
      dispatch(carRental_User_All_Orders)
      dispatch({
        type: USERS_ALL_STORE_RESET,
      });
      alert('Order Successful')
      navigate('/')
    }
  },[dispatch, user, error, loading])

  return (
    <div className={ContainerCSS.carRentalPageContainer}>
      <div className={bookingPaymentCSS.paymentBoxContainer}>
        {/* Left Start */}
        <div className={bookingPaymentCSS.paymentBoxLeft}>
          <div className={bookingPaymentCSS.paymentBoxLeftContent}>
            {/* Left Top Image */}
            <div>
              { cartCar
                ? <img src={cartCar.carPicture[0].url} alt='Car_Image'/>
                : <img src='https://cdn.dribbble.com/users/2374064/screenshots/4732016/car-jump.gif' alt='Car_Image'/>
              }
            </div>
            <br/>
            {/* Left bottom Details */}
            <div>
              { cartCar
                ? <>
                    <h2>Rental Price: ₹{ params.range * cartCar.rentalPriceCharge}, Range: {params.range}</h2>
                    <p style={{width: '84%', margin: '2% 8%'}}> <b>Car Pick up Address: </b>{office ?<>{office.address+", "+office.city+", "+office.state+" "+office.country+", Pin: "+office.pin}</>: <></>}</p>
                    <p> <b>Car: </b>
                      { cartCar.carName+' '+ cartCar.carCategory+', '+ cartCar.carSeatCapacity }
                    </p>
                  </> 
                : <> No car added in cart.</>
              }
            </div>
          </div>
        </div>
        {/* Left End */}

        {/* Right Start */}
        <div className={bookingPaymentCSS.paymentBoxRight}>
          <div className={bookingPaymentCSS.paymentBoxRightContent}>
            {/* User Name */}
            <h2> { user ? <>{ user.firstName+ ' ' + user.lastName }</> : <>-</> } </h2><hr/>

            {/* User Details */}
            <div className={bookingPaymentCSS.userBookingCarDetails}>
              <b>Address</b>
              <p> { user ? <>{ user.address }</> : <>-</> } </p>
            </div>

            <div className={bookingPaymentCSS.userBookingCarDetails}>
              <b>City</b>
              <p> { user ? <> { user.city } </> : <>-</> }</p>
            </div>

            <div className={bookingPaymentCSS.userBookingCarDetails}>
              <b>State</b>
              <p> { user ? <> { user.state } </> : <>-</> } </p>
            </div>

            <div className={bookingPaymentCSS.userBookingCarDetails}>
              <b>Country</b>
              <p> { user ? <> { user.country } </> : <>-</> } </p>
            </div>
            
            <form>
              {/* Payment Car Start */}
              <div className={bookingPaymentCSS.userPaymentCardDetails}>
                <h3>
                  { user ? <>{user.firstName+ ' ' + user.lastName}</> : <>-</> }
                </h3>
                {/* Card and Mobile */}
                <div className={bookingPaymentCSS.userPaymentCardInput}>
                  <p>Card </p>
                  <input type='number' name='cardNumber' value={paymentForm.cardNumber} onChange={handlePayemtnChange} placeholder='0000 0000 0000 0000'/>
                </div>

                <div className={bookingPaymentCSS.userPaymentCardInput}>
                  <p>Mobile </p>
                  <input type='number' name='userMobileNumber' value={paymentForm.userMobileNumber} onChange={handlePayemtnChange} placeholder='0000000000'/>
                </div>

                {/* Expire and CVV */}
                <div className={bookingPaymentCSS.userPaymentCardSecurityInput}>
                  <div className={bookingPaymentCSS.paymentCardSecurityDiv}>
                    <b>Expire&nbsp;&nbsp;&nbsp;</b>
                    <input style={{padding: '0.5% 2%'}} type='date' name='cardExpire' value={paymentForm.cardExpire} onChange={handlePayemtnChange} placeholder='00/00/0000'/>
                  </div>
                  <div className={bookingPaymentCSS.paymentCardSecurityDiv} style={{width: '40%'}}>
                    <b>CVV&nbsp;&nbsp;&nbsp;</b>
                    <input type='number' name="cardCVV" value={paymentForm.cardCVV} onChange={handlePayemtnChange} placeholder='000'/></div>
                </div>

                {/* OTP Button */}
                <button className={bookingPaymentCSS.sendPaymentOTPButton} onClick={(e)=>{e.preventDefault(); alert('OTP sent')}}>Get OTP</button>
              </div>
              {/* Payment Card End */}

              {/* Payment Button */}
              <div className={bookingPaymentCSS.paymentProceedBox}>
                <label htmlFor='payOtp'>OTP&nbsp;&nbsp;</label>
                <input type='number' id='payOtp' name="cardOTP" value={paymentForm.cardOTP} onChange={handlePayemtnChange} placeholder='0000' display="none"/>
                <button onClick={handlePayment}>Pay</button>
              </div>
            </form>
            
          </div>
        </div>
        {/* Right End */}

      </div>
    </div>
  )
}

export default BookingPayment