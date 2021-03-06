import {createStore, combineReducers, applyMiddleware} from "redux";
import {newsReducer} from "./reducers/news";
import thunk from 'redux-thunk'
import {userReducer} from "./reducers/user";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    news: newsReducer,
    user: userReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))