import styles from "./LegalizationPage.module.css";

const LegalizationPage = (props) => {
    return (
        <div className={styles["legalization-page"]}>
            {props.children}
        </div>
    );
}

export default LegalizationPage;