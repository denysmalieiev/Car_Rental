import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { carRental_Get_All_Cars, carRental_Admin_All_Offices_Load, clearError } from '../../utils/actions/CarsAction.js';

import homePageCSS from './css/homePage.module.css';
import HomeTopContent from './HomeTopContent';
import CarsHome from '../car/CarsHome';

const HomePage = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state=> state.auth);
  const { cars, error } = useSelector(state=> state.cars);
  const { offices} = useSelector(state=> state.offices);

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }
    if(!cars){
      dispatch(carRental_Get_All_Cars)
    }
    // if(isAuthenticated==true){
    //   console.log('YEs')
    //   if(!offices){
    //     dispatch(carRental_Admin_All_Offices_Load)
    //   }
    // }

  }, [dispatch, error, isAuthenticated])

  return (
    <>
      <div className={homePageCSS.homeTopPageDetail}>
          <HomeTopContent/>
      </div>
      { cars && Object.keys(cars).length>0
        ? <><CarsHome/></>
        : <></>
      }
    </>
  )
}

export default HomePage