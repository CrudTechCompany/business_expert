import styles from "./ServiceCard.module.css";

const ServiceCard = ({ image, title, desc }) => {
  return (
    <div className={styles["service-card"]}>
      <div className={styles["card-content"]}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h4>{desc}</h4>
      </div>
      <div className={styles["link-block"]}>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default ServiceCard;
