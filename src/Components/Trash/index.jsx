import React, { Component } from 'react';
import styles from './styles.module.css';
import Header from '../Header/Header';
const Trash = () => {

    return (
        <>
            <Header />
            <div className={styles.trash}>
                <div className={styles.trashtitle}>
                    <div className={styles.trashsubtitle}>
                    Your about to delete a item
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trash;