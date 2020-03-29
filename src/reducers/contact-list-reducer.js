import  {
  FETCH_CONTACTS,
  FETCH_CONTACTS_FULFILLED,
  SAVE_CONTACT,
  SAVE_CONTACT_PENDING,
  SAVE_CONTACT_FULFILLED,
  SAVE_CONTACT_REJECTED,
  } from '../types';

const defaultState = {
    contacts : [],
    contact : { name : {} },
    loading : false,
    errors : {}
   };

export const contactListReducer = (state = defaultState, action={}) => {
    switch (action.type) {
        case FETCH_CONTACTS : {
            return {...state, contacts : action.payload}
        }
        case FETCH_CONTACTS_FULFILLED : {
            return {...state, contacts: action.payload.data.data || action.payload.data }
        }
        case SAVE_CONTACT : {
            return { ...state, contact : action.payload }
        }
        case SAVE_CONTACT_PENDING : {
            return { ...state, loading : true }
        }
        case SAVE_CONTACT_FULFILLED : {
            return { ...state, contact : action.payload }
        }
        case SAVE_CONTACT_REJECTED : {
            return {...state, errors : action.payload.errors }
        }
        default :
            return state;
    }

}

