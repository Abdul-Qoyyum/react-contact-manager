import { client } from './client';
import {
    FETCH_CONTACTS,
    SAVE_CONTACT,
    NEW_CONTACT,
    FETCH_CONTACT,
    UPDATE_CONTACT
} from '../types';

const url = "/contacts";

export function fetchContacts() {
    return (dispatch) => {
        dispatch({
            type: FETCH_CONTACTS,
            payload: client.get(url)
        });
    }
}

export function fetchContact(_id){
    return dispatch => {
        return dispatch({
           type : FETCH_CONTACT,
           payload : client.get(`${url}/${_id}`)
        });
    }
}

export function updateContact(contact){
    return dispatch => {
        return dispatch({
           type : UPDATE_CONTACT,
           payload : client.put(`${url}/${contact._id}`, contact)
        });
    }
}

export function newContact(){
    return dispatch => {
        dispatch({
            type: NEW_CONTACT
        });
    }
}

export function saveContact(contact) {
    return dispatch => {
            return dispatch({
                type: SAVE_CONTACT,
                payload: client.post(url, contact)
            })
    }
}
