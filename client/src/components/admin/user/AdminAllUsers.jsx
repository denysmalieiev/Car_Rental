import React, {useEffect, useState} from 'react';
import { useSelector} from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import ShowUsers from './ShowUsers';
import carRentalContainerCSS from '../../css/container.module.css';
import adminContainerCSS from '../adminCss/adminContainer.module.css';

const AdminAllUsers = () => {
  const params = useParams()
  const { users } = useSelector(state=> state.users);
  const [showUsers, setShowUsers] = useState();

  useEffect(()=>{
    if( users ){
      let userIter = []
      users.forEach((data)=>{
        if(data.role.toLowerCase()===params.role.toString().toLowerCase()){  
          userIter.push(data)
        }
      })
      setShowUsers(userIter)
    } 
  }, [params.role])

  
  return (
    <div className={carRentalContainerCSS.carRentalPageContainer}>
      <div className={adminContainerCSS.adminContainer}>
        <div className={adminContainerCSS.headingBox}>
          {showUsers && params.role==='admin'
            ?<>          
              <h1>Admins</h1>
              <hr/>
            <button><Link to='/admin/users/customer'>All Users</Link></button><br/><br/></>
            :<>
              <h1>Customers</h1>
              <hr/>
              <button><Link to='/admin/users/admin'>All Admins</Link></button><br/><br/>
            </>
          }
        </div>
        <div>
          { showUsers&& showUsers.map((data)=>{
                return <ShowUsers key={data.id} data={data}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default AdminAllUsers;