import Header from "../Header/Header";
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import styles from "./HeadBlock.module.css";

const HeadBlock = ({ content }) => {
  return (
    <div
      className={styles["head-block"]}
      style={{ backgroundImage: `url(${content.bg})` }}
    >
      <div className={styles["mask-block"]} />
      <div
        className={styles["content-block"]}
        style={{
          top: content.h1_top,
        }}
      >
        <h1>
          {content.h1}
          <br />
          {content.h1_span && <span>{content.h1_span}</span>}
        </h1>
        {content.h3 && <h3>{content.h3}</h3>}
        <button>Заказать консультацию</button>
      </div>
      {/* <HeaderBlock /> */}
      <Header />
    </div>
  );
};

export default HeadBlock;
