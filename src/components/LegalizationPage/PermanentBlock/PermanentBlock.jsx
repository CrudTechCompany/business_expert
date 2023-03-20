import styles from "./PermanentBlock.module.css";
import image from "../../../assets/LegalizationPage/permanent_image.svg";
import { content } from "./content";

const PermanentBlock = () => {
  return (
    <div className={styles["temporary-block"]}>
      <div className={styles["title-block"]}>
        <img src={image} alt="" />
        <div className={styles["title-content"]}>
          <h4>Karta Stałego Pobytu</h4>
          <h5>
            <strong>Karta Stałego Pobytu</strong> - постоянный вид на жительство
            в Польше.
          </h5>
          <h5>
            Ее может получить иностранец, который соответствует всем необходимым
            требованиям:
            <ul>
              <li>наличие польского происхождения;</li>
              <li>пребывание в законном браке с гражданином Польши;</li>
              <li>наличие действительной Карты Поляка.</li>
            </ul>
            В случае если у вас есть основания для получения данного типа Карты,
            наши юристы помогут оформить весь процесс от ее оформления до
            получения.
          </h5>
        </div>
      </div>
      <div className={styles["bottom-block"]}>
        <h4>Благодаря ее наличию, иностранец может:</h4>
        <div className={styles["botton-block-content"]}>
          {content.map((el) => (
            <div className={styles["content-item"]} key={el.key}>
              <div className={styles["icon-block"]} />
              <span>{el.title}</span>
            </div>
          ))}
        </div>
      </div>
      <button>Заказать консультацию</button>
    </div>
  );
};

export default PermanentBlock;
