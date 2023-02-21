import styles from "./HeadBlock.module.css";

const HeadBlock = () => {
  return (
    <div className={styles["head-block"]}>
      <div className={styles["content"]}>
        <h1>Бизнес-инкубатор это</h1>
        <h2>юридическая и бухгалтерская поддержка</h2>
        <h4>
          У тебя есть идея для бизнеса? Занимайся ее реализацией - юридические и
          бухгалтерские вопросы мы берем на себя!
        </h4>
        <button>Заказать консультацию</button>
      </div>
    </div>
  );
};

export default HeadBlock;
