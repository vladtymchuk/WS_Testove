import React from 'react';
import styles from './Article.module.css'
import {Figure} from "react-bootstrap"
import img from "../assets/someImg.jpg"

const Article = ({imgUrl, title, author, url, date, content}) => {
    return (
        <a
            // key={keyId}
            href={url}
            className={styles.box}
            target="_blank" rel="noreferrer">
            <div className={styles.artImg}>
                {
                    imgUrl ? <img src={imgUrl} alt="articleImage"/>
                    : <Figure.Image
                        width={"100%"}
                        height={"100%"}
                        alt="ARTICLE"
                        src={img}
                    />
                }
            </div>
            <div className={styles.artMain}>
                <div className={styles.header}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.blockToD}>
                        <p className={styles.description}>{author ? author.substring(0, 40) : ""}</p>
                        <p className={styles.date}>{date.substring(0,10)}</p>
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.contentText}>{content ? content.substring(0,content.indexOf("[")) : ""}</p>
                </div>
            </div>
        </a>
    );
};

export default Article;