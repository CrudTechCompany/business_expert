import { useEffect } from "react";
import AdvantagesBlock from "../../components/AdvantagesBlock/AdvantagesBlock";
import BasicPackageBlock from "../../components/BasicPackageBlock/BasicPackageBlock";
import FreelanceBlock from "../../components/FreelanceBlock/FreelanceBlock";
import WithoutRegistrationBlock from "../../components/WithoutRegistrationBlock/WithoutRegistrationBlock";
import styles from "./BasicPackagePage.module.css";

const BasicPackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles["basic-block"]}>
      <AdvantagesBlock />
      <BasicPackageBlock />
      <FreelanceBlock />
      <WithoutRegistrationBlock />
    </div>
  );
};

export default BasicPackage;
