import styles from "./BasicInfoBlock.module.css";
import image from "../../../assets/BasicPage/basic_image.svg";

const BasicInfoBlock = () => {
  return (
    <div className={styles["info-block"]}>
      <div className={styles["content-block"]}>
        <h3>Базовый пакет услуг</h3>
        <div className={styles["content"]}>
          <div className={styles["content-desc"]}>
            <h4>Консультация</h4>
            <h5>
              Прежде, чем вы решите открывать свое дело или предоставлять свои
              услуги в Польше, важно проверить насколько ваши идеи соответствуют
              рыночным условиям. Наши специалисты с радостью проконсультируют
              вас в онлайн режиме или при личной встрече в офисе.
            </h5>
            <h5>
              Каждая бизнес-идея имеет право на существование, но насколько ее
              можно реализовать и в каком конкретно городе Польши? Об этом вы
              сможете узнать непосредственно предоставить информацию нашим
              консультантам, которые тщательно проанализируют вашу идею и опишут
              какие у вас есть шансы для достижения ожидаемых результатов на
              выходе.
            </h5>
            <button>Заказать консультацию</button>
          </div>
          <img src={image} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoBlock;
