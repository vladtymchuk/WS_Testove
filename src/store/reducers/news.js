import {HIDE_LOADER, LOAD_NEWS, SHOW_LOADER} from "../types";

const initialState = {
    allNews: [],
    loading: true
}

const handlers = {
    [LOAD_NEWS]: (state, action) => ({...state, allNews: [...action.payload]}),
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [HIDE_LOADER]: state => ({...state, loading: false}),
    DEFAULT: state => ({...state})
}

export const newsReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

export const allNewsActionCreator = payload => ({type: LOAD_NEWS, payload})