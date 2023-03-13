import styles from "./AboutUsBlock.module.css";

const AboutUs = () => {

  return (
    <div className={styles["about-block"]}>
      <div className={styles["title-block"]}>
        <div className={styles["title"]}>
          <h4>О нас</h4>
          <h3>
            biznes<strong>expert</strong> - бизнес-инкубатор для
            предпринимателей в Польше
          </h3>
        </div>
        <div className={styles["description"]}>
          <h5>
            Команда экспертов biznesexpert имеет многолетний опыт в релокации
            иностранных бизнесов в Польшу а также специализируется на оказании
            юридической и бухгалтерской поддержке. Мы создаем комфортные условия
            для ведения бизнеса!
          </h5>
          <h5>
            biznesexpert - это удобная форма проверки бизнес-идеи. Прежде чем
            нанимать профессионального бухгалтера и сотрудников, проверьте идею
            бизнеса на жизнеспособность, потратив минимум средств.
          </h5>
          <button>Cвязаться с нами</button>
        </div>
      </div>
      <div className={styles["video-block"]}>
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

export default AboutUs;
