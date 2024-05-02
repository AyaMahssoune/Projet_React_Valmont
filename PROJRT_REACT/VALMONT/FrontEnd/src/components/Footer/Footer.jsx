import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div
      className={`${styles.footer} d-flex flex-row justify-content-center align-items-center p-20`}
    >
      © Copyright <span className="ml-10">valmont group 2024</span>
    </div>
  );
};

export default Footer;
