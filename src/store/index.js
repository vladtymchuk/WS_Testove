import {createStore, combineReducers, applyMiddleware} from "redux";
import {newsReducer} from "./reducers/news";
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    news: newsReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))