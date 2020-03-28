import { contacts } from '../contact-data';
import { FETCH_CONTACTS } from '../types';

export function fetchContacts(){
    return (dispatch) => {
        dispatch({
            type: FETCH_CONTACTS,
            payload: contacts
        });
    }
}


