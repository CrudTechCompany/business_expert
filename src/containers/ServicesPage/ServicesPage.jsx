import styles from "./ServicesPage.module.css";

const ServicesPage = (props) =>{
    return (
        <div className={styles["services-page"]}>
            {props.children}
        </div>
    );
}

export default ServicesPage;