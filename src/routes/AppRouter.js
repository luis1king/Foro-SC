import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PrivateRoute } from '../routes/PrivateRoute'
import { AuthRouter } from '../routes/AuthRouter'
import { DashboardRoutes } from '../routes/DashboardRoutes'
import { PublicoRoute } from '../routes/PublicoRoute'


export const AppRouter = () => {
// Comprobacion si el user esta logueado
const dispatch = useDispatch()
// Comprobamos el estado del cheking y el uid
//const {uid} = useSelector(state => state.auth);
const uid = localStorage.getItem('uid')
console.log(uid)
  return (
    <BrowserRouter>
    <Routes>
      {/* La !! sirve para convertir un string a un valor booleano */}
      <Route exact path="/auth/*" element={
      <PublicoRoute uid={!!uid}>
       <AuthRouter />
      </PublicoRoute>}>
      </Route>
      
      {/* Private routes */}
       <Route path="/*" element={
       <PrivateRoute uid={!!uid}>
        <DashboardRoutes/>
       </PrivateRoute>}>
       </Route>
    </Routes>
    </BrowserRouter>
  )
}
