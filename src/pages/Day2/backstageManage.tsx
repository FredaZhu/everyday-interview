import React, { useState } from 'react';
import styles from './backstage.css';

export default function() {
  const [isFold, setFold] = useState(false);

  const onFold = () => {
    setFold(!isFold);
  }

  return (
    <div>
      <div className={styles.header} onClick={onFold}>#Header</div>
      <div className={styles.container}>
        <div className={styles.menu} style={{ width: isFold ? 0 : 200 }}>#Menu</div>
        <div className={styles.content}>#Content</div>
      </div>
      <div className={styles.footer}>#Footer</div>
    </div>
  )
}