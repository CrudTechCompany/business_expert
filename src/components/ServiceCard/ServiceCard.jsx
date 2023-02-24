import { Link } from "react-router-dom";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ id, image, title, desc, link }) => {
  return (
    <div className={styles["service-card"]} id={id}>
      <div className={styles["content"]}>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h4>{desc}</h4>
        <Link to={link}>
          <button>Подробнее</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
