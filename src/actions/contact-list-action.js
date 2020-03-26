import { contacts } from '../contact-data';
import { FETCH_CONTACTS } from '../types';

export function contactListAction(contacts){
    return (dispatch) => {
        dispatch({
            type: FETCH_CONTACTS,
            payload: contacts
        });
    }
}


