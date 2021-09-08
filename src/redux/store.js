import {createStore, applyMiddleware} from "redux"
import reducers from './Reducers/index';
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(reducers, {},composeWithDevTools(applyMiddleware(logger)));

export default store;