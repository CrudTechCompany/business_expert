import styles from "./BasicPage.module.css";

const BasicPage = (props)=>{
    return (
        <div className={styles["basic-page"]}>
            {props.children}
        </div>
    );
}

export default BasicPage;