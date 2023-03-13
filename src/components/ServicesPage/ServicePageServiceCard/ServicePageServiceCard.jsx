import styles from "./ServicePageServiceCard.module.css";

const ServicePageServiceCard = ({ image, title, desc }) => {
  return (
    <div className={styles["service-card"]}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <h4>{desc}</h4>
      <button>Подробнее</button>
    </div>
  );
};

export default ServicePageServiceCard;
