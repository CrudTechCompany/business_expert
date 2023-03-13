import styles from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <div className={styles["home-page"]}>
      {props.children}
    </div>
  );
};

export default HomePage;
