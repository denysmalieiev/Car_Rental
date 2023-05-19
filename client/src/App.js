import React, { useState } from 'react';
import './App.css';
import carDataContext from './DataContext';
import { status, userData, carData} from './Data';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageRoutes from './components/mainHome/PageRoutes';

function App() {
  const [auth, setAuth] = useState(status);
  const [users, setUsers] = useState(userData);
  const [user, setUser] = useState();
  const [carsData, setCarsData] = useState(carData)

  const login = function(email, password){
    setAuth(true)
    setUser(user)
    alert('You are logged in')
  }
  const logout = function(){
    setAuth(false)
    alert('You are looged out')
  }

  return (
    <div className="App">
      <carDataContext.Provider value={{auth, user, users, carsData, login, logout}}>
        <Header/>
        <PageRoutes/>
        <Footer/>
      </carDataContext.Provider>

    </div>
  );
}

export default App;
