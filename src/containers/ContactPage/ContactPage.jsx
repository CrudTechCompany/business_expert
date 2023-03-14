import styles from "./ContactPage.module.css";
import { useEffect } from "react";

const ContactPage = (props)=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    return (
        <div className={styles["contact-page"]}>
            {props.children}
        </div>
    );
}

export default ContactPage;