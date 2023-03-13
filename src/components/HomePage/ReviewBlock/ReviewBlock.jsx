import styles from "./ReviewBlock.module.css";
import { content } from "./content";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewBlock = () => {
  return (
    <div className={styles["review-block"]}>
      <h4>Отзывы</h4>
      <h3>Что говорят наши клиенты</h3>
      <div className={styles["card-block"]}>
        {content.map((el) => (
          <div key={el.key}>
            <ReviewCard desc={el.desc} author={el.author} />
          </div>
        ))}
      </div>
      <div className={styles["bottom-block"]}>
        <a
          href="https://www.google.com/maps/place/BiznesExpert/@51.1109815,17.0340509,15z/data=!4m6!3m5!1s0x470fc30e96402f6b:0xfd2c490b568df05e!8m2!3d51.1109815!4d17.0340509!16s%2Fg%2F11q9fwzfq3"
          target="_blank"
          rel="noreferrer"
        >
          <button>Все отзывы</button>
        </a>
      </div>
    </div>
  );
};

export default ReviewBlock;
