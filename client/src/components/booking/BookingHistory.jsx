import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { carRental_User_All_Orders, clearError } from '../../utils/actions/OrderAction';
import ShowBookings from './ShowBookings';

import containerCSS from '../css/container.module.css';
import bookingHistoryCSS from './css/bookingHistory.module.css'

const BookingHistory = () => {

  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state=> state.auth);
  const { userOrders, loading, error } = useSelector(state=> state.userOrders);

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }
    if(isAuthenticated && !userOrders){
      dispatch(carRental_User_All_Orders)
    }
  }, [dispatch, isAuthenticated])

  return (
    <div className={containerCSS.carRentalPageContainer}>
      {loading 
        ? <>Loading...</>
        :<div className={bookingHistoryCSS.bookingContainer}>
          <h2>User Bookings</h2>
          <hr/>
          { userOrders 
            ? <>
                {userOrders.map((data)=>{
                  return (
                    <ShowBookings key={data._id} data={data}/>
                  )
                })}
              </>
            : <></>}
        </div>}
    </div>
  )
}

export default BookingHistory