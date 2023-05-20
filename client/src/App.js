import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import carDataContext from './DataContext';
import { authenticated, carToBeRent, carRented, carBookings, paymentHistory, userData, cityOptionAvailable, carData} from './Data';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageRoutes from './components/mainHome/PageRoutes';

function App() {
  const navigate = useNavigate()
  const [isAuthenticated, serAuthenticated] = useState(authenticated); // var
  const [carToRent, setCarToRent] = useState(carToBeRent); // Object
  const [rentedCar, setRentedCar] = useState(carRented); // Object
  const [carBookingHistory, setCarBookingHistory] = useState(carBookings); // Object
  const [paymentsHistory, setPaymentsHistory] = useState(paymentHistory); 
  const [users, setUsers] = useState(userData);
  const [user, setUser] = useState();
  const [cityAvailable, setCityAvailable] =useState(cityOptionAvailable)
  const [carsData, setCarsData] = useState(carData);

  function login(formData){
    const fetchEmail = users.filter((data)=>{
      if(formData.email===data.email){
        return data
      } 
      return
    })
    const fetchUser = users.filter((data)=>{
      if(formData.email===data.email && formData.password.toString()===data.password.toString()){
        return data
      } 
      return
    })
    if(fetchEmail[0]===undefined){
      // console.log(false)
      serAuthenticated(false)
      alert("User not exist.")
      return false
    }
    if(fetchUser[0]===undefined){
      // console.log(false)
      serAuthenticated(false)
      alert("Wrong Credentials")
      return false
    } else{
      setUser(fetchUser[0])
      serAuthenticated(true)
      console.log(user)
      return true
    }
  }
  function logout(){
    serAuthenticated(false)
    setUser(undefined)
    setCarToRent(false)
    console.log(user)
    navigate('/')
    alert('You are looged out')
  }

  function setCarForBooking(data){
    setCarToRent(data)
  } 

  useEffect(()=>{
    alert('Use any email: user1@gmail.com, user2@gmail.com, user3@gmail.com: 123456 ||| Password: 123456')
  },[])

  return (
    <div className="App">
      <carDataContext.Provider value={{isAuthenticated, carToRent, rentedCar, carBookingHistory, paymentsHistory, user, users, cityAvailable, carsData, 
        login, logout, setCarForBooking }}>
        <Header/>
        <PageRoutes/>
        <Footer/>
      </carDataContext.Provider>

    </div>
  );
}

export default App;
