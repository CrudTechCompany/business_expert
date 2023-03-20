import styles from "./TemporaryBlock.module.css";
import image from "../../../assets/LegalizationPage/temporary_image.svg";
import { content } from "./content";

const TemporaryBlock = () => {
  return (
    <div className={styles["temporary-block"]}>
      <div className={styles["title-block"]}>
        <div className={styles["title-content"]}>
          <h4>Karta Czasowego Pobytu</h4>
          <h5>
            <strong>Karta Czasowego Pobytu</strong> - временный вид на
            жительство в Польше.
          </h5>
          <h5>
            Ее может получить каждый иностранец. Для этого необходимо собрать
            обязательный пакет документов и подать их в Уженд. Из-за активной
            миграции в Польшу, зачастую ожидание позитивного решения по выдаче
            данного документа затягивается.
          </h5>
          <h5>
            В нашей фирмы работают юристы, которые знают все пути для достижения
            максимально быстрого результата. Мы берем на себя весь процесс от
            оформления до получения Карты Побыта.
          </h5>
        </div>
        <img src={image} alt="" />
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

export default TemporaryBlock;
