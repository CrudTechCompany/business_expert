import { useEffect } from "react";
import HowItWorksBlock from "../../components/HowItWorksBlock/HowItWorksBlock";
import RateBlock from "../../components/RateBlock/RateBlock";
import styles from "./BusinessAndCompanyPage.module.css";

const EntrepreneurshipAndFirmPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles["page-block"]}>
      <RateBlock />
      <HowItWorksBlock />
    </div>
  );
};

export default EntrepreneurshipAndFirmPage;
