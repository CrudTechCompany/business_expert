import styles from "./LegalizationResidentBlock.module.css";
import image from "../../../assets/LegalizationPage/resident_image.svg";

const LegalizationResidentBlock = () => {
  return (
    <div className={styles["resident-block"]}>
      <div className={styles["content-block"]}>
        <div className={styles["content"]}>
          <div className={styles["content-content"]}>
            <h4>Karta rezydenta UE</h4>
            <h5>
              Данное разрешение выдаётся на постоянной основе. Срок действия
              пластика - 5 лет, после чего его необходимо заменить на следующий.
            </h5>
            <h5>
              В случае если у вас есть основания для получения данного типа
              Карты, наши юристы помогут оформить весь процесс от ее оформления
              до получения.
            </h5>
            <h4>Благодаря ее наличию, иностранец может:</h4>
            <div className={styles["content-item"]}>
              <div className={styles["icon-block"]} />
              <span>Постоянно находиться в стране</span>
            </div>
            <div className={styles["content-item"]}>
              <div className={styles["icon-block"]} />
              <span>
                Трудоустраиваться без необходимости получения дополнительных
                документов
              </span>
            </div>
            <div className={styles["content-item"]}>
              <div className={styles["icon-block"]} />
              <span>
                Посещать другие страны Шенгенской зоны, но не более 90 дней в
                течение 180 дней
              </span>
            </div>
          </div>
          <img src={image} alt="" />
        </div>
        <button>Заказать консультацию</button>
      </div>
    </div>
  );
};

export default LegalizationResidentBlock;
