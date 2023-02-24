import styles from "./HowItWorksBlock.module.css";
import { content } from "./content.jsx";
import HowItWorksCard from "../HowItWorksCard/HowItWorksCard";

const HowItWorksBlock = () => {
  return (
    <div className={styles["work-block"]}>
      <h3>Как это происходит</h3>
      <div className={styles["content"]}>
        {content.map((el) => (
          <HowItWorksCard
            key={el.key}
            image={el.image}
            step={el.step}
            title={el.title}
            desc_1={el.desc_1}
            desc_2={el.desc_2}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorksBlock;
