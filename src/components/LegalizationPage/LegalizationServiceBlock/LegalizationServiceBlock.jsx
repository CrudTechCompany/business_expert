import PermanentBlock from "../PermanentBlock/PermanentBlock";
import TemporaryBlock from "../TemporaryBlock/TemporaryBlock";
import styles from "./LegalizationServiceBlock.module.css";

const LegalizationServiceBlock = () => {
  return (
    <div className={styles["service-block"]}>
      <h3>Варианты легализации в Польше</h3>
      <div className={styles["content-block"]}>
        <TemporaryBlock />
        <PermanentBlock />
      </div>
    </div>
  );
};

export default LegalizationServiceBlock;
