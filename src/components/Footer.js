import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-columns"]}>
        <div className={styles["footer-column"]}>
          <div className={styles["footer-column-content"]}>
            Crafted with hope and lot&apos;s of ❤️
          </div>
        </div>
      </div>

      <div className={styles["footer-copyright-container"]}>
        <div className={styles["footer-company-copyright"]}>
          <CopyrightIcon /> Granularity
        </div>
      </div>
    </div>
  );
};

export default Footer;
