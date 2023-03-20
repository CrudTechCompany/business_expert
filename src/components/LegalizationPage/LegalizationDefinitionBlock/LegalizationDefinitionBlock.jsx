import styles from "./LegalizationDefinitionBlock.module.css";
import { content } from "./content";

const LegalizationDefinitionBlock = () => {
  return (
    <div className={styles["definition-block"]}>
      <div className={styles["content"]}>
        <h3>Услуги</h3>
        <div className={styles["content-block"]}>
          {content.map((el) => (
            <div className={styles["content-item"]} key={el.key}>
              <div className={styles["icon-block"]} />
              <span>{el.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalizationDefinitionBlock;
