import styles from "./ServiceCard.module.css";

const ServiceCard = ({ image, title, desc }) => {
  return (
    <div className={styles["service-card"]}>
      <div className={styles["content"]}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h4>{desc}</h4>
        <button>Подробнее</button>
      </div>
    </div>
  );
};

export default ServiceCard;
