import AboutBlock from "../../components/AboutBlock/AboutBlock";
import FAQ from "../../components/FAQ/FAQ";
import ServiceBlock from "../../components/ServiceBlock/ServiceBlock";
import TeamBlock from "../../components/TeamBlock/TeamBlock";
import VideoBlock from "../../components/VideoBlock/VideoBlock";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <AboutBlock />
      <ServiceBlock />
      <VideoBlock />
      <TeamBlock />
      <FAQ />
    </div>
  );
};

export default HomePage;
