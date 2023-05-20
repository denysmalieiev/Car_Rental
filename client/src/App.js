import React, { useState } from 'react';
import './App.css';
import carDataContext from './DataContext';
import { authenticated, carToBeRent, carRented, carBookings, paymentHistory, userData, carData} from './Data';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageRoutes from './components/mainHome/PageRoutes';

function App() {
  const [isAuthenticated, serAuthenticated] = useState(authenticated); // var
  const [carToRent, setCarToRent] = useState(carToBeRent); // Object
  const [rentedCar, setRentedCar] = useState(carRented); // Object
  const [carBookingHistory, setCarBookingHistory] = useState(carBookings); // Object
  const [paymentsHistory, setPaymentsHistory] = useState(paymentHistory); 
  const [users, setUsers] = useState(userData);
  const [user, setUser] = useState(userData[0]);
  const [carsData, setCarsData] = useState(carData);

  function login(email, password){
    serAuthenticated(true)
    setUser(user)
    alert('You are logged in')
  }
  function logout(){
    serAuthenticated(false)
    alert('You are looged out')
  }

  function setCarForBooking(data){
    setCarToRent(data)
  } 

  return (
    <div className="App">
      <carDataContext.Provider value={{isAuthenticated, carToRent, rentedCar, carBookingHistory, paymentsHistory, user, users, carsData, 
        login, logout, setCarForBooking }}>
        <Header/>
        <PageRoutes/>
        <Footer/>
      </carDataContext.Provider>

    </div>
  );
}

export default App;
