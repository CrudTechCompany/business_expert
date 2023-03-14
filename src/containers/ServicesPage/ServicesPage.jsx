import styles from "./ServicesPage.module.css";
import { useEffect } from "react";

const ServicesPage = (props) =>{
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    return (
        <div className={styles["services-page"]}>
            {props.children}
        </div>
    );
}

export default ServicesPage;