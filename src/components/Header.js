import React from "react";
import styles from "../css/Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.home}>Sciport</a>
      <a className={styles.login}>로그인</a>
    </div>
  );
};
export default Header;
