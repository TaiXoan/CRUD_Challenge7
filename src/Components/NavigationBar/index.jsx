import React, { Component } from 'react';
import styles from './styles.module.css';

const Naba  = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.btn}>
        <button>Add New</button>
      </div>
      <div className={styles['search-bar']}>
        <input type="text" name="" className={styles.research} placeholder="Search name" />
        <div className={styles['icon-search']}>
          <img src="Images/SearchIcon.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Naba;