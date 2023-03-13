import styles from "./AddressBlock.module.css";
import image from "../../../assets/AddressPage/address_image.svg";
import facebook from "../../../assets/Footer/facebook.svg";
import instagram from "../../../assets/Footer/instagram.svg";
import youtube from "../../../assets/Footer/youtube.svg";

const AddressBlock = () => {
  return (
    <div className={styles["address-block"]}>
      <img src={image} alt="" />
      <div className={styles["contact-info-block"]}>
        <div className={styles["address-info-block"]}>
          <h3>Наш адрес</h3>
          <span className={styles["address-info-block-item"]}>
            Migrant Expert sp. z o.o.
          </span>
          <span className={styles["address-info-block-item"]}>
            50-529 Wrocław, Polska
          </span>
          <span className={styles["address-info-block-item"]}>
            Kuźnicza 10/3 piętro
          </span>
        </div>
        <div className={styles["contact-us-block"]}>
          <h3>Связаться с нами</h3>
          <a href="tel:+48 783 792 202">+48 783 792 202</a>
          <a href="mailto:biuro@biznesexpert.eu">biuro@biznesexpert.eu</a>
        </div>
        <div className={styles["watch-us-block"]}>
          <h3>Следить за нами</h3>
          <div className={styles["link-block"]}>
            <a href="https://www.facebook.com/biznesexpertpl/" target="_blank" rel="noreferrer">
              <div className={styles["link-item"]}>
                <img src={facebook} alt="" />
              </div>
            </a>
            <a href="https://www.instagram.com/biznesexpert.pl/" target="_blank" rel="noreferrer">
              <div className={styles["link-item"]}>
                <img src={instagram} alt="" />
              </div>
            </a>
            <a href="https://www.youtube.com/@weexpert_pl" target="_blank" rel="noreferrer">
              <div className={styles["link-item"]}>
                <img src={youtube} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressBlock;
