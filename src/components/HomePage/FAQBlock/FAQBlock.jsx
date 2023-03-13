import styles from "./FAQBlock.module.css";
import { content } from "./content";
import FAQCard from "../FAQCard/FAQCard";
import { useState } from "react";

const FAQBlock = () => {
  const [contentState, setContentState] = useState(content);
  const handlerClick = (index) => {
    const tempo = contentState.map((el, i) =>
      i === index ? { ...el, state: !el.state } : { ...el, state: false }
    );
    setContentState(tempo);
  };
  return (
    <div className={styles["faq-block"]}>
      <h3>Популярные вопросы</h3>
      <div className={styles["content-block"]}>
        {contentState.map((el, i) => (
          <button
            key={el.key}
            className={styles["content-card"]}
            onClick={() => handlerClick(i)}
          >
            <FAQCard title={el.title} desc={el.desc} state={el.state} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FAQBlock;
