import styles from "./ContactPage.module.css";

const ContactPage = (props)=>{
    return (
        <div className={styles["contact-page"]}>
            {props.children}
        </div>
    );
}

export default ContactPage;