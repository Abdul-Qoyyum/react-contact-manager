import  { FETCH_CONTACTS } from '../types';

const defaultState = {
    contacts : []
   };

export function contactListReducer(state = defaultState, action={}){
    switch(action.type){
        case FETCH_CONTACTS :
            return {...state, action.payload };
        default :
            return state;
    }
}

