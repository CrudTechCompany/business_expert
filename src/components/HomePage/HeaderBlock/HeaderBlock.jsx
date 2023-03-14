import styles from "./HeaderBlock.module.css";
import { content } from "./content";
import { Link } from "react-router-dom";

const HeaderBlock = () => {
  return (
    <div className={styles["header-block"]}>
      <div className={styles["content"]}>
        {content.map((el) => (
          <Link to={el.link} key={el.key} className={styles["content-card"]}>
            <img src={el.image} alt="" />
            <span>{el.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderBlock;
