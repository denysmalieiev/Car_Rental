import React, { useEffect } from 'react';
import ShowOffices from './ShowOffices';
import { useDispatch, useSelector} from 'react-redux';
import { carRental_Admin_All_Offices_Load, clearError} from '../../../utils/actions/CarsAction';
import { ADMIN_CAR_DETAILS_UPDATE_RESET } from '../../../utils/constants/Constants';

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from '../adminCss/adminDetails.module.css';
import showUsersCSS from '../adminCss/showUsers.module.css';

const AdminOfficeDetails = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state=> state.auth);
  const { offices, error } = useSelector(state=> state.offices);
  const { isOfficeDelated } = useSelector(state=> state.adminOffice);
  

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }
    // if(!offices && isAuthenticated){
    //   dispatch(carRental_Admin_All_Offices_Load)
    // }
    if(isOfficeDelated){
      dispatch(carRental_Admin_All_Offices_Load)
      if(isOfficeDelated){
        dispatch({
          type: ADMIN_CAR_DETAILS_UPDATE_RESET,
        })
      } 
    }

  }, [dispatch, isOfficeDelated, isAuthenticated])

  return (
    <div className={containerCSS.carRentalPageContainer}>
        <div className={adminCarDetailCSS.adminCarDetailContainer}>
            <div className={adminCarDetailCSS.headingBox}>         
                <h1>All Offices</h1>
                <hr/>
            </div>

            {
              offices
              ? <>
                {
                  offices.map((data)=>{
                    return (
                      <div key={data._id} className={showUsersCSS.usersCardConatiner}>
                        <ShowOffices key={data._id} data={data}/>
                      </div>
                    )
                  })
                }
                </>
              :<></>
            }
          
      </div>
    </div>
  )
}

export default AdminOfficeDetails