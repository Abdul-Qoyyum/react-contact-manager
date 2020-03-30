import  {
  FETCH_CONTACTS_FULFILLED,
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
        case FETCH_CONTACTS_FULFILLED : {
            return { ...state, contacts : action.payload.data.data || action.payload.data }
        }
        case SAVE_CONTACT_PENDING : {
            return { ...state, loading : true }
        }
        case SAVE_CONTACT_FULFILLED : {
            return [ ...state.contacts, action.payload ]
        }
        case SAVE_CONTACT_REJECTED : {
            const data =  action.payload.response.data;

            const {"name.first" : first, "name.last" : last, email, phone } = data.errors;

            const errors = { global : data.message, name : { first, last}, email, phone }

            return {...state, errors }
        }
        default :
            return state;
    }

}

