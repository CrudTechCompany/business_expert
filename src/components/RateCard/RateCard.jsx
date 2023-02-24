import styles from "./RateCard.module.css";

const RateCard = ({ data }) => {
  // key:"basic_package",
  // card_name: "Базовый",
  // card_desc: "Регистрация предпринимательской деятельности - 800 zł",
  // card_price: "2500 zł",
  // service_title: "Основные услуги:",
  // service_1: "Определение видов деятельности PKD",
  // service_2: "Консультация по выбору ставки налогообложения",
  // service_3: "Подготовка учредительных документов",
  // service_4: "Регистрация компании в судебном реестре KRS",
  // service_5: "Получение налогового номера NIP",
  return (
    <div className={styles["rate-card"]}>
      <div className={styles["card-content"]}>
        <h3>{data.card_name}</h3>
        <h4>{data.card_desc}</h4>
        <h2>{data.card_price}</h2>
        <h3>{data.service_title}</h3>
        {data.service.map((el, i) => (
          <div className={styles["item"]} key={el.key}>
            <div className={styles["item-icon"]}></div>
            <h5>{el.title}</h5>
          </div>
        ))}
      </div>
      <button>Подать заявку</button>
    </div>
  );
};

export default RateCard;
