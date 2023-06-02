import React, { useEffect } from 'react';
import ShowOrders from './ShowOrders';
import { useDispatch, useSelector } from 'react-redux';
import { clearError} from '../../../utils/actions/OrderAction.js';

import containerCSS from '../../css/container.module.css';
import adminCarDetailCSS from '../adminCss/adminDetails.module.css';
import showUsersCSS from '../adminCss/showUsers.module.css';


const AdminAllOrders = () => {

  const dispatch = useDispatch()

  const { allOrders, error } = useSelector(state=>state.adminOrders)

  useEffect(()=>{
    if(error){
      dispatch(clearError)
    }

  }, [dispatch])
  return (
    <div className={containerCSS.carRentalPageContainer}>
        <div className={adminCarDetailCSS.adminCarDetailContainer}>
            <div className={adminCarDetailCSS.headingBox}>         
                <h1>All Orders</h1>
                <hr/>
            </div>
          
            {allOrders 
              ? <>
                  { allOrders.map((data)=>{
                      return (
                        <div className={showUsersCSS.usersCardConatiner}>
                          <ShowOrders key={data._id} data={data}/>
                        </div>
                      )
                    }
                  )}
                </> 
              :<></>}
            
          
      </div>
    </div>
  )
}

export default AdminAllOrders