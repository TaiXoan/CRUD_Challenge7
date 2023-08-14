import React, { Component } from 'react';
import styles from './styles.module.css';

const CardList = () => {
    return (
        <div className={styles.formcard}>
            <div className={styles['card-container']}>
                <div className={styles['card-header']}>
                    <div className={styles['profile-image']}>
                        <img src="Images/Phu.svg" alt="" />
                    </div>
                    <div className={styles['header-content']}>
                        <div className={styles['name-date-container']}>
                            <div className={styles.name}>Phu Nguyen</div>
                            <div className={styles.date}>14/08/2023</div>
                        </div>
                        <div className={styles['icon-wrapper']}>
                            <div>
                                <img className={styles['edit-icon']} src="Images/EditIcon.svg" alt="" />
                            </div>
                            <div>
                                <img className={styles['delete-icon']} src="Images/DeleteIcon.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout.
                </div>
                <img className={styles.cat} src="Images/Cat.svg" alt="" />
            </div>
            <div className={styles['card-container']}>
                <div className={styles['card-header']}>
                    <div className={styles['profile-image']}>
                        <img src="Images/Music.svg" alt="" />
                    </div>
                    <div className={styles['header-content']}>
                        <div className={styles['name-date-container']}>
                            <div className={styles.name}>Vanre</div>
                            <div className={styles.date}>14/08/2023</div>
                        </div>
                        <div className={styles['icon-wrapper']}>
                            <div>
                                <img className={styles['edit-icon']} src="Images/EditIcon.svg" alt="" />
                            </div>
                            <div>
                                <img className={styles['delete-icon']} src="Images/DeleteIcon.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các thông tin:
                    Avatar, Name, Description, Image
                </div>
                <img className={styles.baby} src="Images/Baby.svg" alt="" />
            </div>
            <div className={styles['card-container']}>
                <div className={styles['card-header']}>
                    <div className={styles['profile-image']}>
                        <img src="Images/Micro.svg" alt="" />
                    </div>
                    <div className={styles['header-content']}>
                        <div className={styles['name-date-container']}>
                            <div className={styles.name}>Mio</div>
                            <div className={styles.date}>14/08/2023</div>
                        </div>
                        <div className={styles['icon-wrapper']}>
                            <div>
                                <img className={styles['edit-icon']} src="Images/EditIcon.svg" alt="" />
                            </div>
                            <div>
                                <img className={styles['delete-icon']} src="Images/DeleteIcon.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    Next, you select one property. It doesn’t matter which one you choose, yet
                    it’s best to pick one that seems totally unrelated to your challenge.
                </div>
                <img className={styles.elephant} src="Images/Elephant.svg" alt="" />
            </div>
        </div>
    );
}


export default CardList;