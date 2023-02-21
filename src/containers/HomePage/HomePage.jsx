import AboutBlock from "../../components/AboutBlock/AboutBlock";
import ContactBlock from "../../components/ContactBlock/ContactBlock";
import HeadBlock from "../../components/HeadBlock/HeadBlock";
import ServiceBlock from "../../components/ServiceBlock/ServiceBlock";
import TeamBlock from "../../components/TeamBlock/TeamBlock";
import VideoBlock from "../../components/VideoBlock/VideoBlock";
import styles from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <div className={styles["home-page"]}>
      <HeadBlock />
      <AboutBlock />
      <ServiceBlock />
      <VideoBlock />
      <TeamBlock />
      <ContactBlock />
    </div>
  );
};

export default HomePage;
