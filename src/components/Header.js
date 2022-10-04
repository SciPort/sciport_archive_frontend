import React from "react";
import styles from "../css/Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.home}>롯데문화센터</a>
      <a className={styles.login}>로그인</a>
    </div>
  );
};
export default Header;
