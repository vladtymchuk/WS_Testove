import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {hideLoader, loadNews, showLoader} from "../store/actions/news";
import Article from "../components/Articicle";
import styles from './styles/News.module.css'
import {Spinner} from "react-bootstrap";

export const  News = () => {
    const dispatch = useDispatch()

    const loadNewsCallBack = useCallback(async () => await dispatch(loadNews()), [loadNews])

    useEffect(() => {
        loadNewsCallBack()
    }, [loadNewsCallBack])

    const allNews = useSelector(state => state.news.allNews)
    const loader = useSelector(state => state.news.loading)
    console.log(loader)

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
                    title={item.title}
                    description={item.description}
                    imgUrl={item.urlToImage}
                    date={item.publishedAt}
                    content={item.content}
                    author={item.author}
                    url={item.url}
                />
            })}
        </div>
    );
};