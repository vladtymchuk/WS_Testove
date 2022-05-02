import {SET_USER_EMAIL, SET_USER_PASS} from "../types";

export const setUserEmail = (email) => {
    return {type: SET_USER_EMAIL, payload: email}
}

export const setUserPass = (pass) => {
    return {type: SET_USER_PASS, payload: pass}
}