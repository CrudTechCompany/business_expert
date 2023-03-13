import styles from "./TeamPage.module.css";

const TeamPage = (props) => {
    return (
        <div className={styles["team-page"]}>
            {props.children}
        </div>
    );
}

export default TeamPage;