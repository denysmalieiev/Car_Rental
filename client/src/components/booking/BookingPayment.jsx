import React, { useEffect, useContext } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { clearErrors } from '../../utils/actions/UserAction';

import DataContext from '../../DataContext';
import ContainerCSS from '../css/container.module.css';
import bookingPaymentCSS from './css/bookingPayment.module.css';

const BookingPayment = () => {

  const dispatch = useDispatch();
  const { user, loading, error } =  useSelector((state)=> state.user);

  const carContext = useContext(DataContext);
  const navigate = useNavigate()
  const params = useParams()

  useEffect(()=>{
    if(error){
      dispatch(clearErrors)
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
              { carContext.carToRent
                ? 
                  <img src={carContext.carToRent.carPicture[0]} alt='Car Image'/>
                : 
                  <img src='https://cdn.dribbble.com/users/2374064/screenshots/4732016/car-jump.gif' alt='Car Image'/>
              }
            </div>
            <br/>
            {/* Left bottom Details */}
            <div>
              { carContext.carToRent
                ? 
                  <>
                    <h2>Rental Price: ₹{carContext.carToRent.tripRange * carContext.carToRent.rentalPrice}, Range: {carContext.carToRent.tripRange}</h2>
                    <p style={{width: '84%', margin: '2% 8%'}}> <b>Car Pick up Address: </b>
                      { carContext.carToRent.citySelect[0].address+' '+carContext.carToRent.citySelect[0].city+', '+carContext.carToRent.citySelect[0].state
                       +' '+carContext.carToRent.citySelect[0].country+', '+carContext.carToRent.citySelect[0].pin+", Contact: "+carContext.carToRent.citySelect[0].contact }
                    </p>
                    <p> <b>Car: </b>
                      { carContext.carToRent.carName+' '+carContext.carToRent.carCategory+', '+carContext.carToRent.carSeatCapacity }
                    </p>
                  </> 
                :
                  <> No car added in cart.</>
              }
            </div>
          </div>
        </div>
        {/* Left End */}

        {/* Right Start */}
        <div className={bookingPaymentCSS.paymentBoxRight}>
          <div className={bookingPaymentCSS.paymentBoxRightContent}>
            {/* User Name */}
            <h2>
              {user 
                ?
                  <>{ user.firstName+ ' ' + user.lastName }</>
                :
                  <>-</>
              }
            </h2><hr/>

            {/* User Details */}
            <div className={bookingPaymentCSS.userBookingCarDetails}>
              <b>Address</b>
              <p>
                { user 
                  ?
                    <>{ user.address }</>
                  :
                    <>-</>
                }
              </p>
            </div>

            <div className={bookingPaymentCSS.userBookingCarDetails}>
              <b>Address</b>
              <p>
                { user 
                  ?
                    <> { user.city } </>
                  :
                    <>-</>
                }
              </p>
            </div>

            <div className={bookingPaymentCSS.userBookingCarDetails}>
              <b>State</b>
              <p>
                { user 
                  ?
                    <> { user.state } </>
                  :
                    <>-</>
                }
              </p>
            </div>

            <div className={bookingPaymentCSS.userBookingCarDetails}>
              <b>Country</b>
              <p>
                { user 
                ?
                  <> { user.country } </>
                :
                  <>-</>
                }
              </p>
            </div>
            
            {/* Payment Car Start */}
            <div className={bookingPaymentCSS.userPaymentCardDetails}>
              <h3>
                { user 
                  ?
                    <>{user.firstName+ ' ' + user.lastName}</>
                  :
                    <>-</>
                }
              </h3>

              {/* Card and Mobile */}
              <div className={bookingPaymentCSS.userPaymentCardInput}>
                <p>Card </p>
                <input type='number' placeholder='0000 0000 0000 0000'/>
              </div>

              <div className={bookingPaymentCSS.userPaymentCardInput}>
                <p>Mobile </p>
                <input type='number' placeholder='0000000000'/>
              </div>

              {/* Expire and CVV */}
              <div className={bookingPaymentCSS.userPaymentCardSecurityInput}>
                <div className={bookingPaymentCSS.paymentCardSecurityDiv}>
                  <b>Expire&nbsp;&nbsp;&nbsp;</b>
                  <input style={{padding: '0.5% 2%'}} type='date' placeholder='00/00/0000'/>
                </div>
                <div className={bookingPaymentCSS.paymentCardSecurityDiv} style={{width: '40%'}}>
                  <b>CVV&nbsp;&nbsp;&nbsp;</b>
                  <input type='number' placeholder='000'/></div>
              </div>

              {/* OTP Button */}
              <button className={bookingPaymentCSS.sendPaymentOTPButton}>Get OTP</button>
            </div>
            {/* Payment Card End */}

            {/* Payment Button */}
            <div className={bookingPaymentCSS.paymentProceedBox}>
              <label htmlFor='payOtp'>OTP&nbsp;&nbsp;</label>
              <input type='number' id='payOtp' placeholder='0000' display="none"/>
              <button onClick={(e)=>carContext.handlePaymentCompletion()}>Pay</button>
            </div>
            
          </div>
        </div>
        {/* Right End */}

      </div>
    </div>
  )
}

export default BookingPayment