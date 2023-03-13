import styles from "./ServicePageServiceBlock.module.css";
import { content } from "./content";
import ServicePageServiceCard from "../ServicePageServiceCard/ServicePageServiceCard";

const ServicePageServiceBlock = () => {
  return (
    <div className={styles["service-block"]}>
      {content.map((el) => (
        <div key={el.key}>
          <ServicePageServiceCard
            image={el.image}
            title={el.title}
            desc={el.desc}
          />
        </div>
      ))}
    </div>
  );
};

export default ServicePageServiceBlock;
