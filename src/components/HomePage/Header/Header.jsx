import styles from "./Header.module.css";
import logo from "../../../assets/HeadBlock/be_logo.svg";
import lang_icon from "../../../assets/HeadBlock/lang_icon.svg";
import chevron from "../../../assets/HeadBlock/chevron.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <img className={styles["logo"]} src={logo} alt="" />
      <div className={styles["menu-block"]}>
        <Link to="/">Главная</Link>
        <Link to="/services">
          <div className={styles["service-block"]}>
            <span>Услуги</span>
            <img
              className={styles["service-block-icon"]}
              src={chevron}
              alt=""
            />
          </div>
        </Link>
        <Link to="/team">Команда</Link>
        <Link to="/contact">Контакт</Link>
      </div>
      <div className={styles["select-block"]}>
        <button className={styles["lang-block"]}>
          <img src={lang_icon} alt="" />
          <span>RU</span>
        </button>
        <button className={styles["contact-button"]}>
          Заказать консультацию
        </button>
      </div>
    </header>
  );
};

export default Header;
