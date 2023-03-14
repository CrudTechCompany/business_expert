import styles from "./TeamPage.module.css";
import { useEffect } from "react";

const TeamPage = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    return (
        <div className={styles["team-page"]}>
            {props.children}
        </div>
    );
}

export default TeamPage;