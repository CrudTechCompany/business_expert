import styles from "./HeaderBlock.module.css";
import { content } from "./content";

const HeaderBlock = () => {
  return (
    <div className={styles["header-block"]}>
      <div className={styles["content"]}>
        {content.map((el) => (
          <div key={el.key} className={styles["content-card"]}>
            <img src={el.image} alt="" />
            <span>{el.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderBlock;
