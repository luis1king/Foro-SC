import { Route, Routes } from 'react-router-dom'
import { Discusiones } from '../pages/discusiones/Discusiones'
import { NuevaPregunta } from '../pages/nuevaPregunta/NuevaPregunta'
import { Pregunta } from '../pages/pregunta/Pregunta'
import { Temas } from '../pages/temas/Temas'




export const DashboardRoutes = () => {
  return (
    <>
    <Routes>
     <Route path="/" element={<Temas />} />
     <Route path="/discusiones" element={<Discusiones />} />
     <Route path="/nuevapregunta" element={<NuevaPregunta/>} />
     <Route path="/pregunta" element={<Pregunta />} />
    </Routes>
    </>
  )
}
