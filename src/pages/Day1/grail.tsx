import React from 'react';
import styles from './grail.css';

export default function() {
  return (
    <div className={styles.grail}>
      <div className={styles.header}>#Header</div>
      <div className={styles.container}>
        <div className={styles.center}>#center-content</div>
        <div className={styles.left}>#left</div>
        <div className={styles.right}>#right</div>
      </div>
      <div className={styles.footer}>#Footer</div>
    </div>
  )
}