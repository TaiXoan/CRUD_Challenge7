import React, { Component } from 'react';
import styles from './styles.module.css';
import Header from '../Header/Header';
const TrashModal = () => {

    return (
        <>
            <Header />
            <div className={styles.trash}>
                <div className={styles.trashtitle}>
                    <div className={styles.trashsubtitle}>
                        Your about to delete a item
                    </div>
                    <div className={styles.trash}><img src="Images/Trash.svg" alt="" /></div>
                    <div className={styles.discription}>This will delete your item form list
                        <div className={styles.question}>Are you sure?</div></div>
                    <div className={styles.btn}>
                        <button className={styles.deletebtn}>Delete</button>
                        <button className={styles.cancelbtn}>Cancel</button>
                    </div>


                </div>
            </div>
        </>
    );
}

export default TrashModal;