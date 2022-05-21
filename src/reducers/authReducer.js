import { types } from "../types/types";


const initialState = {
    checking:true,
}

export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...state,
                checking:false,
                uid: action.payload.uid,
                name: action.payload.displayName
            }

            case types.authCheckingFinish:
                return {
                    ...state,
                    checking:false
                }


        case types.logout:
                return { }
    
        default:
            return state;
    }

}