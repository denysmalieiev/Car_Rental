import React, { useEffect } from 'react';
import ShowOffices from './ShowOffices';
import { useDispatch, useSelector} from 'react-redux';
import { carRental_Admin_New_Office_Location, carRental_Admin_All_Offices_Load, clearError} from '../../../utils/actions/CarsAction';

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from '../adminCss/adminDetails.module.css';
import showUsersCSS from '../adminCss/showUsers.module.css';

const AdminOfficeDetails = () => {
  const dispatch = useDispatch();
  const { offices, loading } = useSelector(state=> state.offices);

  useEffect(()=>{
    dispatch(carRental_Admin_All_Offices_Load)
  }, [])

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
                      <div className={showUsersCSS.usersCardConatiner}>
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