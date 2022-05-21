import Swal from 'sweetalert2';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { types } from '../types/types';
//import { startLoading, finishLoading } from './ui';


 export const startLoginEmailPassword = (email, password) => {
     return async (dispatch) => {
       
        //Apuntamos al endpoint ('/auth), mandamos {} y pasamos el metodo
       const resp = await fetchSinToken('auth', {email,password},'POST')
       const body = await resp.json();
        console.log(body.uid)
       //Si el ok es true, grabamos el token en el local Storage
       if(body.ok) {
           localStorage.setItem('token', body.token);
           localStorage.setItem('uid', body.uid);
           //Grabamos el momento exacto de la creacion del token
           localStorage.setItem('token-init-date', new Date().getTime());
           dispatch(login(body.uid, body.user))
       } else {
          Swal.fire('Error',body.msg, 'error')
       }
    }
 }

 export const startRegister = ( email, password, firstName, lastName ) => {
     return async (dispatch) => {
     
        const resp = await fetchSinToken('auth/new', {email,password,firstName,lastName},'POST')
        const body = await resp.json();
 
        //Si el ok es true, grabamos el token en el local Storage
        if(body.ok) {
            localStorage.setItem('token', body.token);
            //Grabamos el momento exacto de la creacion del token
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login(body.uid, body.user))
            Swal.fire(
                '¡Usuario creado correctamente!',
                '',
                'success'
              )
         } else {
             Swal.fire('Error',body.msg, 'error')
             console.log(body)
        }
    }
 }


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startChecking = () => {
    return async (dispatch)=>{
        const resp = await fetchConToken('auth/renew')
        const body = await resp.json();
 
        //Si el ok es true, grabamos el token en el local Storage
        if(body.ok) {
            localStorage.setItem('token', body.token);
            //Grabamos el momento exacto de la creacion del token
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login(body.uid, body.user))
          // dispatch(renewToken(body.token))
         } else {
             dispatch(finishCheking())
        }
    }
}

const finishCheking = () => ({type:types.authCheckingFinish});

 export const startLogout = () => {
     return async( dispatch ) => {
         
         dispatch( logout() );
     }
 }


export const logout = () => ({
    type: types.logout
})





