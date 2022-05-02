import {SET_USER_EMAIL, SET_USER_PASS} from "../types";

const initialState = {
    email: "",
    pass: ""
}

const handlers = {
    [SET_USER_EMAIL]: (state, action) => ({...state, email: action.payload}),
    [SET_USER_PASS]: (state, action) => ({...state, pass: action.payload}),
    DEFAULT: state => state
}

export const userReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}