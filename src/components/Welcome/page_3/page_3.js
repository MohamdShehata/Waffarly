import React from "react";
import { Link } from 'react-router-dom';
import styles from "./page_3.module.css";
import "font-awesome/css/font-awesome.min.css";

const page_3 = (props) => {
  return (
    <div className={styles.page_3}>
      <div className={styles.first}>
        <div className={styles.first_image}></div>
        <div className={styles.first_heading}>
          <span>Tech</span>Everything You Need At One Place.
        </div>
      </div>
      <div className={styles.mid}>
        <div className={styles.mid_index}>
          <div>Money</div>
          
        </div>
        <div className={styles.mid_heading}>
        No Need To Worry.. You Can Save Money And Buy Everything You Want.
        </div>
      </div>
      <div className={styles.last}>
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

export default page_3;
