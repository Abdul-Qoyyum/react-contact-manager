import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { contactListReducer } from "./contact-list-reducer";


const rootReducer = combineReducers({
    contactStore : contactListReducer,
    form : formReducer
});

export default rootReducer;
