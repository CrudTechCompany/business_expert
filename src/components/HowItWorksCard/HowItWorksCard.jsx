import styles from "./HowItWorksCard.module.css";

const HowItWorksCard = ({ image, step, title, desc_1, desc_2 }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-content"]}>
        <div className={styles["content"]}>
          <h4>{step}</h4>
          <h3>{title}</h3>
          <h5>{desc_1}</h5>
          {desc_2 !== undefined && <h5>{desc_2}</h5>}
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default HowItWorksCard;
