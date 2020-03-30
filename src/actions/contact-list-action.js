import { client } from './client';
import { FETCH_CONTACTS, SAVE_CONTACT } from '../types';

const url = "/contacts";

export function fetchContacts() {
    return (dispatch) => {
        dispatch({
            type: FETCH_CONTACTS,
            payload: client.get(url)
        });
    }
}

export function saveContact(contact){
    return dispatch => {
       return dispatch({
           type : SAVE_CONTACT,
           payload : client.post(url, contact)
        })
    }
}
