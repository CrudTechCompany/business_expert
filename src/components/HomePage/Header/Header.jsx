import styles from "./Header.module.css";
import logo from "../../../assets/HeadBlock/be_logo.svg";
import lang_icon from "../../../assets/HeadBlock/lang_icon.svg";
import chevron from "../../../assets/HeadBlock/chevron.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { content } from "./content";

const Header = () => {
  const [selectListState, setSelectListState] = useState(false);
  const handlerSelectList = () => {
    setSelectListState((prev) => !prev);
  };

  const [selectedLang, setSelectedLang] = useState("RU");
  const handlerLang = (e) => {
    setSelectedLang(e.currentTarget.innerHTML);
    setSelectListState((prev) => !prev);
  };

  const selectListRef = useRef(null);

  useEffect(() => {
    if (!selectListState) {
      return;
    }
    const clickHandler = (event) => {
      if (!selectListRef.current) {
        return;
      }
      if (!selectListRef.current.contains(event.target)) {
        handlerSelectList();
      }
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [selectListState]);
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
        <div className={styles["select-lang-block"]} ref={selectListRef}>
          <button className={styles["lang-block"]} onClick={handlerSelectList}>
            <img src={lang_icon} alt="" />
            <span>{selectedLang}</span>
          </button>
          <div
            className={styles["lang-block-select-list"]}
            style={{ display: selectListState ? "flex" : "none" }}
          >
            {content.map((el) => (
              <button
                key={el.key}
                className={styles["select-list-item"]}
                onClick={(e) => handlerLang(e)}
                style={{
                  color:
                    selectedLang === el.value
                      ? "rgba(255, 0, 0, 1)"
                      : "rgba(255, 255, 255, 1)",
                }}
              >
                {el.value}
              </button>
            ))}
          </div>
        </div>

        <button className={styles["contact-button"]}>
          Заказать консультацию
        </button>
      </div>
    </header>
  );
};

export default Header;
