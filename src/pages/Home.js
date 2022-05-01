import React from 'react';
import styles from './styles/Home.module.css'

export const Home = () => {
    return (
        <div className={styles.box}>
            <p className={styles.welcome}>Welcome</p>
            <p className={styles.intro}>breaking news, here</p>
        </div>
    );
};
