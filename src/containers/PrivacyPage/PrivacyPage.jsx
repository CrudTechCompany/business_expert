import styles from "./PrivacyPage.module.css";
import { useEffect } from "react";

const PrivacyPage = (props)=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    return (
        <div className={styles["privacy-page"]}>
            {props.children}
        </div>
    );
}

export default PrivacyPage;