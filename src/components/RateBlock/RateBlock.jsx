import styles from "./RateBlock.module.css";
import { content } from "./content.jsx";
import RateCard from "../RateCard/RateCard";

const RateBlock = () => {
  return (
    <div className={styles["rate-block"]}>
      <h3>Тарифы</h3>
      <div className={styles["content"]}>
        {content.map((el) => (
          <RateCard data={el} key={el.key}/>
        ))}
      </div>
    </div>
  );
};

export default RateBlock;
