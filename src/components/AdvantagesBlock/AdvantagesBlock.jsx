import styles from "./AdvantagesBlock.module.css";
import { content } from "./content.jsx";

const AdvantagesBlock = () => {
  return (
    <div className={styles["advantages-block"]}>
      <div className={styles["content-block"]}>
        <h3>Преимущества</h3>
        <div className={styles["content"]}>
          {content.map((el) => (
            <div className={styles["item"]} key={el.key}>
              <img src={el.image} alt="" />
              <h4>{el.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesBlock;
