import { Navigate} from 'react-router-dom';
import React from 'react'


export const PrivateRoute = ({children, uid}) => {
  console.log(uid)
  return uid ? children : <Navigate to="/auth/login"/> 
}