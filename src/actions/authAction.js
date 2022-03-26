// import Swal from 'sweetalert2';

 import { firebase } from '../firebase/firebaseConfig.js';
import { types } from '../types/types';
//import { startLoading, finishLoading } from './ui';


 export const startLoginEmailPassword = (email, password) => {
     return (dispatch) => {
         //dispatch( startLoading() );
        
        firebase.auth().signInWithEmailAndPassword( email, password )
             .then( ({ user }) => {
                 dispatch(login( user.uid, user.displayName));
             })
             .catch( e => {
                 console.log(e);
//                 dispatch( finishLoading() );
//                 Swal.fire('Error', e.message, 'error');
            })
    }
 }

 export const startRegister = ( email, password, firstName, lastName, ) => {
     return ( dispatch ) => {
        

         firebase.auth().createUserWithEmailAndPassword( email, password )
             .then( async({ user }) => {
                 await user.updateProfile({ displayName: firstName });
                 console.log(user)

                 dispatch(
                     login( user.uid, user.displayName )
                 );
             })
             .catch( e => {
                 console.log(e);
                 //Swal.fire('Error', e.message, 'error');
          })

    }
 }



export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


 export const startLogout = () => {
     return async( dispatch ) => {
         await firebase.auth().signOut();
         
         dispatch( logout() );
     }
 }


export const logout = () => ({
    type: types.logout
})



