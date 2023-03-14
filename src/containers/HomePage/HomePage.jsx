import styles from "./HomePage.module.css";
import { useEffect } from "react";

const HomePage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <div className={styles["home-page"]}>{props.children}</div>;
};

export default HomePage;
