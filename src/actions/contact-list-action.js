import { client } from './client';
import { FETCH_CONTACTS } from '../types';

const url = "/contacts";

export function fetchContacts() {
    return (dispatch) => {
        dispatch({
            type: FETCH_CONTACTS,
            payload: client.get(url)
        });
    }
}


