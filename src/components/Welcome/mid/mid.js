import React from "react";

import styles from "./mid.module.css";

const mid = (props) => {
  return (
    <div className={styles.mid}>
      <div className={styles.logo}> WAFFARLY </div>
      <div className={styles.menu}>
        <div>NEW</div>
        <div>Products</div>
        <div>Collections</div>
      </div>
    </div>
  );
};

export default mid;
