import styles from "./SMMDefinitionBlock.module.css";
import { content } from "./content";

const SMMDefinitionBlock = () => {
  return (
    <div className={styles["definition-block"]}>
      <div className={styles["content-block"]}>
        <h3>SMM. Adwords. SEO</h3>
        <div className={styles["content"]}>
          {content.map((el) => (
            <div key={el.key} className={styles["content-item"]}>
                <img src={el.icon} alt=""/>
                <span>{el.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SMMDefinitionBlock;
