import styles from "./ContactBlock.module.css";
import image from "../../assets/contact_image.svg";
import checkbox from "../../assets/checkbox.svg";
import checkbox_checked from "../../assets/checkbox_checked.svg";

const ContactBlock = () => {
  return (
    <div className={styles["observer-block"]} id="contact-block">
      <div className={styles["contact-block"]}>
        <div className={styles["content"]}>
          <div className={styles["form-block"]}>
            <h3>СВЯЗАТЬСЯ С НАМИ</h3>
            <h2>Смело пишите и звоните нам! Ответим на все ваши вопросы</h2>
            <div className={styles["input-block"]}>
              <input type="text" placeholder=" " />
              <label>Имя</label>
            </div>
            <div className={styles["input-block"]}>
              <input type="text" placeholder=" " />
              <label>Номер телефона</label>
            </div>
            <div className={styles["input-block"]}>
              <input type="text" placeholder=" " />
              <label>Комментарий</label>
            </div>
            <div className={styles["checkbox-block"]}>
              <img className={styles["checkbox-icon"]} src={checkbox} alt="" />
              <label>
                Отправляя запрос, вы соглашаетесь на обработку своих
                персональных данных, отправленных в вышеуказанной форме.
                Администратором ваших личных данных является Migrant Expert Sp.
                z о. о. Подробнее о RODO в Политике конфиденциальности.
              </label>
            </div>
            <button className={styles["submit-button"]}>Отправить</button>
          </div>
          <img className={styles["block-image"]} src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
