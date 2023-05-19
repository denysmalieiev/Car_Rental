import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import bookingPaymentCSS from './css/bookingPayment.module.css'

const BookingPayment = () => {
  const navigate = useNavigate()
  const params = useParams()
  return (
    <div>
      <p>{params.id}</p>
      <p>{params.range}</p>
      <p>{params.price}</p>
      <p>{params.price* params.range}</p>
    </div>
  )
}

export default BookingPayment