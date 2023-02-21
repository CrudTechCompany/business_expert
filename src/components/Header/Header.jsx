import styles from "./Header.module.css";
import logo from "../../assets/biz_exp_logo.svg";
import lang_icon from "../../assets/lang_icon.svg";
import { Link } from "react-scroll";

const Header = () => {
  const menuItems = [
    {
      title: "О нас",
      link: "#",
    },
    {
      title: "Услуги",
      link: "#",
    },
    {
      title: "Команда",
      link: "#",
    },
    {
      title: "Контакт",
      link: "#",
    },
    {
      title: "FAQ",
      link: "#",
    },
  ];
  return (
    <header className={styles["header"]}>
      <div className={styles["header-content"]}>
        <img src={logo} alt="" />
        <div className={styles["menu-block"]}>
          {menuItems.map((el, i) => (
            <Link className={styles["menu-block-item"]} to={el.link} key={i}>
              {el.title}
            </Link>
          ))}
        </div>
        <div className={styles["select-block"]}>
          <div className={styles["lang-block"]}>
            <img src={lang_icon} alt="" />
            <select className={styles["select-lang"]}>
              <option value="RU">RU</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <button className={styles["contact-button"]}>
            Заказать консультацию
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
