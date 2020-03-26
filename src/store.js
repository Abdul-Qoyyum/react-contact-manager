import React from 'react';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const middleware =  [thunk, promise()];

const store = createStore(reducers,composeWithDevTools(applyMiddleware(...middleware)));

export default store;