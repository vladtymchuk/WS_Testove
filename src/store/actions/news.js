import {allNewsActionCreator, hideLoaderAC, showLoaderAC} from "../reducers/news";
import {HIDE_LOADER, SHOW_LOADER} from "../types";

const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=721b426f1adc4ebf85acadcd5f374017"

export const loadNews = () => dispatch => {
    dispatch({type: SHOW_LOADER})
    try {
       fetch(url)
           .then(response => response.json())
           .then(json => dispatch(allNewsActionCreator(json.articles)))
           .then(() => dispatch({type: HIDE_LOADER}))
    } catch (e) {
        console.log(e)
    }
}