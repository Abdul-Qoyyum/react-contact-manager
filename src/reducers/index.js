import { combineReducers } from "redux";
import { contactListReducer } from "./contact-list-reducer";

const reducers = combineReducers({
    contactStore : contactListReducer
});

export default reducers;