import  { FETCH_CONTACTS } from '../types';

const defaultState = {
    contacts : []
   };

export const contactListReducer = (state = defaultState, action={}) => {
    switch (action.type) {
        case FETCH_CONTACTS : {
            return {...state, contacts : action.payload};
        }
        default :
            return state;
    }

}

