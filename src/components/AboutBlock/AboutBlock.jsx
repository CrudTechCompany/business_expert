import styles from "./AboutBlock.module.css";
import block_image from "../../assets/about_block_image.svg";

const AboutBlock = () => {
  return (
    <div className={styles["about-block"]} id="about-block">
      <img src={block_image} alt="" />
      <div className={styles["content-block"]}>
        <h3>Подробнее о бизнес-инкубаторе</h3>
        <h2>Что такое бизнес-инкубатор</h2>
        <h4>
          Бизнес-инкубатор – это организация, осуществляющая посреднические
          услуги между предпринимателем и его клиентами, с целью урегулирования
          всех вопросов финансового, налогового и юридического характеров. В
          результате отдельной регистрации такой бизнес не требует, а сам
          предприниматель получает на руки «чистый» доход, не заботясь обо всех
          необходимых выплатах.
        </h4>
        <h4>
          <strong>ВАЖНО!</strong> Участие в бизнес-инкубаторе не противоречит
          одновременной работе по найму и/или деятельности через собственную
          фирму
        </h4>
        <button>Заказать консультацию</button>
      </div>
    </div>
  );
};

export default AboutBlock;
