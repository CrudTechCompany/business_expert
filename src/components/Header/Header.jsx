import styles from "./Header.module.css";
import logo from "../../assets/biz_exp_logo.svg";
import lang_icon from "../../assets/lang_icon.svg";
import { Link } from "react-scroll";
import { Link as Nav } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { menuItems, langContent } from "./content.jsx";

const Header = () => {
  const [dropdownState, setDropdownState] = useState(false);
  const setDropdownStateHandler = () => {
    setDropdownState((prev) => !prev);
  };
  const [selectedLang, setSelectedLang] = useState(
    langContent.find((item) => item.state === true).lang
  );
  const setSelectedLangHandler = (event) => {
    setSelectedLang(event.target.innerHTML);
    setDropdownState(false);
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    if (!dropdownState) return;
    const handler = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) {
        setDropdownStateHandler();
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [dropdownState]);
  return (
    <header className={styles["header"]}>
      <div className={styles["header-content"]}>
        <Nav to={"/"}>
          <img src={logo} alt="" />
        </Nav>
        <div className={styles["menu-block"]}>
          {menuItems.map((el, i) => (
            <Link
              className={styles["menu-block-item"]}
              to={el.link}
              key={i}
              smooth="true"
            >
              {el.title}
            </Link>
          ))}
        </div>
        <div className={styles["select-block"]}>
          <div className={styles["lang-block"]} ref={dropdownRef}>
            <img src={lang_icon} alt="" />
            <button
              onClick={setDropdownStateHandler}
              className={styles["select-button"]}
            >
              {selectedLang}
            </button>
            <div
              className={styles["dropdown-list"]}
              style={{ display: dropdownState ? "flex" : "none" }}
            >
              {langContent.map((el) => (
                <button
                  onClick={(event) => setSelectedLangHandler(event)}
                  style={{
                    color:
                      selectedLang === el.lang
                        ? "rgba(255, 0, 0, 1)"
                        : "rgba(5, 5, 5, 1)",
                  }}
                  key={el.lang}
                >
                  {el.lang}
                </button>
              ))}
            </div>
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
