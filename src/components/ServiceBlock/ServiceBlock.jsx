import styles from "./ServiceBlock.module.css";
import service_1 from "../../assets/service_1.svg";
import service_2 from "../../assets/service_2.svg";
import service_3 from "../../assets/service_3.svg";
import service_4 from "../../assets/service_4.svg";
import service_5 from "../../assets/service_5.svg";
import arrow from "../../assets/nav_arrow.svg";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceBlock = () => {
  const content = [
    {
      image: service_1,
      title: "Базовый пакет бизнес-инкубатор",
      desc: "Бизнес-инкубатор предоставляет возможность проверить свои идеи в рыночных условиях без регистрации компаний. Любой, у кого есть бизнес-идея, может реализовать ее, сотрудничая с Бизнес-инкубатором. Это самый дешевый, быстрый и наименее рискованный способ протестировать собственную бизнес-идею. Предоставляем персонального аккаунт-менеджера.",
    },
    {
      image: service_2,
      title: "Регистрация предпринимательства и фирмы",
      desc: "Осуществляем регистрацию юридических лиц, представительств иностранных компаний и предпринимательства в Польше. Консультируем по всем сопутствующим вопросам.",
    },
    {
      image: service_3,
      title: "Бухгалтерское обслуживание для фирм и предпринимателей",
      desc: "Предоставляем услуги по полному ведению бухгалтерии для предпринимателей и юридических лиц в Польше. Консультируем по финансовым, бухгалтерским и налоговым вопросам.",
    },
    {
      image: service_4,
      title: "Легализация пребывания в Польше",
      desc: "Оказываем услуги по легализации иностранцам, которые проживают в Польше. Мы находимся в курсе самых последних изменений польского законодательства и обеспечиваем получения разрешения на временное пребывание и работу (karta pobytu) в Польше.",
    },
    {
      image: service_5,
      title: "SMM. ADWORDS. SEO",
      desc: "Разработка маркетинговой стратегии и контент-плана для развития и продвижения бизнеса в Польше. SEO - оптимизация, ведение социальных сетей проекта, настройка и сопровождение рекламного кабинета ADWORDS. Адаптация продукта или к услуги к европейскому потребителю.",
    },
  ];
  const positionsItems = [
    {
      key: "first_step",
      value: true,
    },
    {
      key: "second_step",
      value: false,
    },
    {
      key: "third_step",
      value: false,
    },
    {
      key: "fourth_step",
      value: false,
    },
    {
      key: "fifth_step",
      value: false,
    },
  ];
  return (
    <div className={styles["service-block"]}>
      <div className={styles["title-block"]}>
        <h3>Услуги бизнес-инкубатора</h3>
        <h2>Мы предлагаем комплексные услуги по релокации бизнеса в Польшу</h2>
      </div>
      <div className={styles["content"]}>
        {content.map((el) => (
          <ServiceCard
            image={el.image}
            title={el.title}
            desc={el.desc}
            key={el.title}
          />
        ))}
      </div>
      <div className={styles["nav-block"]}>
        <button className={styles["nav-button"]}>
          <img src={arrow} alt="" />
          <span>Предыдущая</span>
        </button>
        <div className={styles["nav-position-block"]}>
          {positionsItems.map((el, i) => (
            <button
              key={el.key}
              className={styles["position-item"]}
              style={{
                backgroundColor: el.value
                  ? "rgba(255, 0, 0, 1)"
                  : "rgba(226, 226, 226, 1)",
              }}
            />
          ))}
        </div>
        <button className={styles["nav-button"]}>
          <span>Следующая</span>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ServiceBlock;
