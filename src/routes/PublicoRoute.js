import { Navigate} from 'react-router-dom';


//se esta pasando por props el componente <DashboardRotes mediante {children}
export const PublicoRoute = ({children,uid}) => {
  console.log(uid)
  return uid ?  <Navigate to="/"></Navigate> : children 
}
