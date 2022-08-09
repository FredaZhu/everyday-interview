import React from 'react';
import styles from './doubleFly.css';

export default function() {
  return (
    <div className={styles.doubleFly}>
      <div className={styles.header}>#header</div>
      <div className={styles.container}>
        <div className={styles.center}>#center</div>
      </div>
      <div className={styles.left}>#left</div>
      <div className={styles.right}>#right</div>
      <div className={styles.footer}>#footer</div>
      <div>test</div>
    </div>
  )
}