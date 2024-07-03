import React, {useEffect} from 'react';

import homePageCSS from './css/homePage.module.css';
import HomeTopContent from './HomeTopContent';
import CarsHome from '../car/CarsHome';

const HomePage = () => {

  useEffect(()=>{}, [])

  return (
    <>
      <div className={homePageCSS.homeTopPageDetail}>
          <HomeTopContent/>
      </div>
      <CarsHome/>
    </>
  )
}

export default HomePage