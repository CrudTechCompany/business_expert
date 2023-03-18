import styles from "./SMMPage.module.css";

const SMMPage = (props) => {
    return (
        <div className={styles["smm-page"]}>
            {props.children}
        </div>
    );
}

export default SMMPage;