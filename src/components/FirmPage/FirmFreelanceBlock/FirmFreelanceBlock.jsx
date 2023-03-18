import styles from "./FirmFreelanceBlock.module.css";
import image from "../../../assets/FirmPage/freelance_image.svg";

const FirmFreelanceBlock = () => {
  return (
    <div className={styles["freelance-block"]}>
      <img src={image} alt="" />
      <div className={styles["content"]}>
        <h4>для фриланса</h4>
        <h3>Комплексное бухгалтерское обслуживание фрилансеров</h3>
        <h5>
          Все процессы, связанные с расчетом деятельности фрилансеров можно с
          уверенностью доверить нашим бухгалтерам. Пока вы будете выполнять
          заказы, мы будем четко фиксировать всю вашу финансовую деятельность, а
          также готовить отчеты для налоговых и страховых инспекций Польши.
          Благодаря нашим специалистам вы сможете в срок получать свой доход и
          не заботиться математическими расчетами.
        </h5>
        <button>Заказать консультацию</button>
      </div>
    </div>
  );
};

export default FirmFreelanceBlock;
