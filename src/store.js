import ReduxThunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

const middleware =  composeWithDevTools(applyMiddleware(promise, ReduxThunk));

const store = createStore(rootReducer, {}, middleware);

export default store;
