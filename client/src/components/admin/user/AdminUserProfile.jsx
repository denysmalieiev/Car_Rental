import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AdminUserProfile = () => {
    const { userProfile } = useSelector(state=> state.userProfile);
  return (
    <div>AdminUserProfile</div>
  )
}

export default AdminUserProfile