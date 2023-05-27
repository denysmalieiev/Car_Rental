import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { clearError } from '../../utils/actions/CarsAction.js';

import homePageCSS from './css/homePage.module.css';
import HomeTopContent from './HomeTopContent';
import CarsHome from '../car/CarsHome';

const HomePage = () => {
  const dispatch = useDispatch()
  const { cars, loading, error } = useSelector(state=> state.cars);

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }

  }, [dispatch, loading, error])

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