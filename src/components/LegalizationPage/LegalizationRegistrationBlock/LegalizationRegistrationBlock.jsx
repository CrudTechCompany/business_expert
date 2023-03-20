import styles from "./LegalizationRegistrationBlock.module.css";
import image from "../../../assets/LegalizationPage/registration_image.svg";

const LegalizationRegistrationBlock = () => {
  return (
    <div className={styles["registration-block"]}>
      <div className={styles["content-block"]}>
        <img src={image} alt="" />
        <div className={styles["content"]}>
          <h4>Замена прав и регистрация авто</h4>
          <h5>
            Заграничные водительские права действуют в Польше в течении 185-ти
            дней. После данного срока важно заменять свои права на польские,
            иначе вы не сможете ездить. Наши юристы помогут заполнить
            необходимые документы для того, чтоб вы максимально быстро получили
            новые действующие права. Если же по приезду в Польшу вы решили
            заменить или купить новый автомобиль, тогда вам также придется его
            зарегистрировать. На это вам будет дано всего 30 дней с момента его
            приобретения. Если вы еще ничего не знаете и тем более не успели
            выучить польский язык, наши юристы помогут зарегистрировать
            автомобиль и предостеречь вас от больших штрафов.
          </h5>
          <button>Заказать консультацию</button>
        </div>
      </div>
    </div>
  );
};

export default LegalizationRegistrationBlock;
