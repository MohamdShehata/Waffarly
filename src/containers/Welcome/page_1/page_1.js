import React from "react";

import styles from "./page_1.module.css";

import pic1 from "../../../img/Welcome/pic1.png";
import First from "../../../components/Welcome/first/first";
import Last from "../../../components/Welcome/last/last";
import Mid from "../../../components/Welcome/mid/mid";
import Page_1 from "../../../components/Welcome/page_1/page_1";

class Page1 extends React.Component {
  render() {
    return (
      <div className={styles.page_1}>
        <img src={pic1} alt="pic1" />
        <div className={styles.container}>
          <div className={styles.first}>
            <First />
          </div>
          <div className={styles.mid}>
            <Mid />
            <Page_1 />
          </div>
          <div className={styles.last}>
            <Last />
          </div>
        </div>
      </div>
    );
  }
}

export default Page1;
