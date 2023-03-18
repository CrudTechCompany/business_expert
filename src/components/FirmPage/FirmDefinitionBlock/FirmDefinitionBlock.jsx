import styles from "./FirmDefinitionBlock.module.css";
import { content } from "./content";

const FirmDefinitionBlock = () => {
  return (
    <div className={styles["definition-block"]}>
      <div className={styles["content-block"]}>
        <h3>Преимущества</h3>
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

export default FirmDefinitionBlock;
