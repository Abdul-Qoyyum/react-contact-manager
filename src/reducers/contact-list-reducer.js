import  { FETCH_CONTACTS, FETCH_CONTACTS_FULFILLED } from '../types';

const defaultState = {
    contacts : []
   };

export const contactListReducer = (state = defaultState, action={}) => {
    switch (action.type) {
        case FETCH_CONTACTS : {
            return {...state, contacts : action.payload}
        }
        case FETCH_CONTACTS_FULFILLED : {
            return {...state, contacts: action.payload.data.data || action.payload.data }
        }
        default :
            return state;
    }

}

