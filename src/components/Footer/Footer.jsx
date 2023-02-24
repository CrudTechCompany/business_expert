import styles from "./Footer.module.css";
import logo from "../../assets/biz_exp_logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import { Link } from "react-scroll";

const Footer = () => {
  const navContent = [
    {
      title: "О нас",
      link: "about-block",
    },
    {
      title: "Услуги",
      link: "service-block",
    },
    {
      title: "Команда",
      link: "team-block",
    },
    {
      title: "Контакт",
      link: "contact-block",
    },
    {
      title: "FAQ",
      link: "faq-block",
    },
  ];
  return (
    <div className={styles["footer"]}>
      <div className={styles["content"]}>
        <div className={styles["content-block"]}>
          <div className={styles["link-block"]}>
            <img className={styles["logo"]} src={logo} alt="" />
            <div className={styles["social-block"]}>
              <a
                href="https://www.facebook.com/biznesexpertpl/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="" />
              </a>
              <a
                href="https://www.instagram.com/biznesexpert.pl/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="" />
              </a>
              <a
                href="https://www.youtube.com/@biznesexpert3095"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>
          <div className={styles["nav-block"]}>
            {navContent.map((el) => (
              <Link to={el.link} key={el.title} smooth="true">
                {el.title}
              </Link>
            ))}
          </div>
          <div className={styles["address-block"]}>
            <span>Migrant Expert sp. z o.o.</span>
            <span>50-075, Wrocław</span>
            <span>ul. Krupnicza 2-4, biuro 34</span>
            <span>NIP: 7252308072</span>
            <a href="tel:+48 783 792 202">+48 783 792 202</a>
            <a href="mailto:biuro@biznesexpert.eu">biuro@biznesexpert.eu</a>
          </div>
        </div>
        <div className={styles["separator"]} />
        <div className={styles["bottom-block"]}>
          © 2023 | All rights reserved | <a href="#">Polityka prywatności</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
