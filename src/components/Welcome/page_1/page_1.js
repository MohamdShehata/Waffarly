import React from "react";
import { Link } from 'react-router-dom';
import styles from "./page_1.module.css";
import "font-awesome/css/font-awesome.min.css";

const page_1 = (props) => {
  return (
    <div className={styles.page_1}>
      <div className={styles.first}>
        <div className={styles.first_heading}>
        <div>Save</div>
        </div>
        <div className={styles.first_image}></div>
      </div>
      <div className={styles.mid}>
        <div className={styles.mid_heading}>
        If you want to save money this year Come Here And Buy at the lowest price.
        </div>
        <div className={styles.mid_card}>
          <div className={styles.mid_card_title}>
            
            Check out our new <br></br>
            <span>Products</span>
            
          </div>
          <div className={styles.mid_card_arrow}>
            <Link className="fa fa-long-arrow-right" to="/producthome">
           
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.last}>
        <div>Save</div>
      </div>
    </div>
  );
};

export default page_1;
