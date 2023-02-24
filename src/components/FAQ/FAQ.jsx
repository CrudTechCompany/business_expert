import styles from "./FAQ.module.css";
import { content } from "./content.jsx";
import { useState} from "react";
import FAQCard from "../FAQCard/FAQCard";

const FAQ = () => {
  const [contentState, setContentState] = useState(content);
  const onClickHandler = (e) => {
    const index = contentState.findIndex(
      (item) => item === contentState.find((el) => el.id === e.currentTarget.id)
    );
    setContentState((prev) => {
      const tempo = prev.map((el, i) =>
        i === index ? { ...el, state: !el.state } : { ...el, state: false }
      );
      return tempo;
    });
  };
  return (
    <div className={styles["faq-block"]} id="faq-block">
      <h3>Популярные вопросы</h3>
      <div className={styles["content"]} id="faq-content">
        {contentState.map((el) => (
          <FAQCard
            key={el.title}
            id={el.id}
            title={el.title}
            desc={el.desc}
            state={el.state}
            onClick={onClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
