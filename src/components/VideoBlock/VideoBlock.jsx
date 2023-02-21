import styles from "./VideoBlock.module.css";

const VideoBlock = () => {
  return (
    <div className={styles["video-block"]}>
      <div className={styles["title-block"]}>
        <div className={styles["title-block-title"]}>
          <h3>О нас</h3>
          <h2>
            biznes<strong>expert</strong> - бизнес-инкубатор для
            предпринимателей в Польше
          </h2>
        </div>
        <div className={styles["title-block-desc"]}>
          <h4>
            Команда экспертов biznesexpert имеет многолетний опыт в релокации
            иностранных бизнесов в Польшу а также специализируется на оказании
            юридической и бухгалтерской поддержке. Мы создаем комфортные условия
            для ведения бизнеса!
          </h4>
          <h4>
            biznesexpert - это удобная форма проверки бизнес-идеи. Прежде чем
            нанимать профессионального бухгалтера и сотрудников, проверьте идею
            бизнеса на жизнеспособность, потратив минимум средств.
          </h4>
          <button>Cвязаться с нами</button>
        </div>
      </div>
      <div className={styles["video-content"]}>
        <iframe
          src="https://www.youtube.com/embed/9c5pYnvE8Fw"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/AFwEPIc-yws"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBlock;
