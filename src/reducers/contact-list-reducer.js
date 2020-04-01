import  {
  FETCH_CONTACTS_FULFILLED,
  NEW_CONTACT,
  SAVE_CONTACT_PENDING,
  SAVE_CONTACT_FULFILLED,
  SAVE_CONTACT_REJECTED,
    FETCH_CONTACT_PENDING,
    FETCH_CONTACT_FULFILLED,
    UPDATE_CONTACT_PENDING,
    UPDATE_CONTACT_FULFILLED,
    UPDATE_CONTACT_REJECTED
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
        case NEW_CONTACT : {
            return { ...state, contact : { name : {}} }
        }
        case FETCH_CONTACT_PENDING : {
            return { ...state, loading : true }
        }
        case FETCH_CONTACT_FULFILLED : {
           return { ...state, contact : action.payload.data, loading : false }
        }
        case SAVE_CONTACT_PENDING : {
            return { ...state, loading : true }
        }
        case SAVE_CONTACT_FULFILLED : {
            return {...state, contacts : [ ...state.contacts, action.payload.data ], loading : false }
        }
        case SAVE_CONTACT_REJECTED : {
            const data =  action.payload.response.data;

            const {"name.first" : first, email, phone } = data.errors;

            const errors = { global : data.message, name : { first }, email, phone }

            return {...state, errors, loading: false }
        }
        case UPDATE_CONTACT_PENDING : {
            return { ...state, loading: true }
        }
        case UPDATE_CONTACT_FULFILLED : {
            const data  = action.payload.data;
            return { ...state, contacts :  state.contacts.map(contact =>  contact._id === data._id ? data : contact ), loading : false}
        }
        case UPDATE_CONTACT_REJECTED : {
            const data =  action.payload.response.data;

            const { email, phone, "name.first" : first } = data.errors;

            const errors = { global : data.message, first, email, phone }

            return { ...state, errors, loading: false }
        }
        default :
            return state;
    }

}

