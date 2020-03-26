import  { FETCH_CONTACTS } from '../types';

const defaultState = [{ name : {} }];

export function contactListReducer(state = defaultState, action){
    console.log(action.payload);
    switch(action.type){
        case FETCH_CONTACTS :
            return [...state, action.payload];
        default :
            return [...state];
    }
}

