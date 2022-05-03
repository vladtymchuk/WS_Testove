import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loadNews } from "../store/actions/news";
import Article from "../components/Articicle";
import styles from './styles/News.module.css'
import {Spinner} from "react-bootstrap";
import arrowUp from '../assets/up-arrow.png'

export const  News = () => {
    const dispatch = useDispatch()

    const loadNewsCallBack = useCallback(async () => await dispatch(loadNews()), [loadNews])

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        // console.log(userMail)
        loadNewsCallBack()
    }, [loadNewsCallBack])

    const allNews = useSelector(state => state.news.allNews)
    const loader = useSelector(state => state.news.loading)
    // console.log(loader)

    return (
        <div className={styles.box}>
            { loader ? <Spinner
                    className={styles.spinner}
                    animation="grow"
                    variant="light"
                    color="#FFF"
                />
                : allNews.map(item => {
                return <Article
                    key={Date.now().toString()+item.publishedAt}
                    title={item.title}
                    description={item.description}
                    imgUrl={item.urlToImage}
                    date={item.publishedAt}
                    content={item.content}
                    author={item.author}
                    url={item.url}
                />
            })}
            <div
                onClick={scrollToTop}
                className={styles.arrow}>
                <img src={arrowUp} alt="arrow"/>
            </div>
        </div>
    );
};