import React, { Component } from 'react';
import styles from './styles.module.css';

const NoResult = () => {
  return (
    <div className={styles['no-results']}>
      <img src="Images/Empty-results.svg" alt="" />
      <div className={styles['search-failure']}>No Results Found</div>
      <div className={styles['empty-results']}>No content matched your criteria. Try searching for something else.</div>
    </div>
  );
}

export default NoResult;