import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/auth/Login'
import { Register } from '../pages/auth/Register'
import { Discusiones } from '../pages/discusiones/Discusiones'
import { NuevaPregunta } from '../pages/nuevaPregunta/NuevaPregunta'
import { Pregunta } from '../pages/pregunta/Pregunta'
import { Temas } from '../pages/temas/Temas'

export const AppRouter = () => {
  return (
    <BrowserRouter> 
    <Routes>
     
     <Route path="/login" element={<Login />}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/*" element={<Temas />} />
     <Route path="/discusiones" element={<Discusiones />} />
     <Route path="/nuevapregunta" element={<NuevaPregunta/>} />
     <Route path="/pregunta" element={<Pregunta />} />

    </Routes>
    </BrowserRouter>
  )
}
