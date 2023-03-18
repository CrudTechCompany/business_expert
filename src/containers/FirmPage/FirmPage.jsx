import styles from "./FirmPage.module.css";

const FirmPage = (props)=>{
    return (
        <div className={styles["firm-page"]}>
            {props.children}
        </div>
    );
}
export default FirmPage;