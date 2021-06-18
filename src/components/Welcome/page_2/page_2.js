import React from "react";
import { Link } from 'react-router-dom';
import styles from "./page_2.module.css";

const page_2 = (props) => {
  return (
    <div className={styles.page_2}>
      <div className={styles.first}>
        <div className={styles.first_index}>
          <div>Your</div>
          
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.mid_image}></div>
      </div>
      <div className={styles.last}>
        <div className={styles.last_heading}>
          <span>Technologies</span>
          You can have the latest technology at the lowest price.
        </div>
        <div className={styles.last_card}>
          <div className={styles.last_card_title}>
            Check out our new <br></br>
            <span>Products</span>
          </div>
          <div className={styles.last_card_arrow}>
          <Link className="fa fa-long-arrow-right" to="/producthome">
           
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page_2;
