import styles from "./ReviewCard.module.css";
import google_logo from "../../../assets/ReviewBlock/google_review.svg";

const ReviewCard = ({ desc, author, key }) => {
  return (
    <div className={styles["review-card"]}>
      <div className={styles["card-content"]}>
        <img src={google_logo} alt="" />
        <span>{desc}</span>
        <span>From: {author}</span>
        <a
          href="https://www.google.com/maps/place/BiznesExpert/@51.1109815,17.0340509,15z/data=!4m6!3m5!1s0x470fc30e96402f6b:0xfd2c490b568df05e!8m2!3d51.1109815!4d17.0340509!16s%2Fg%2F11q9fwzfq3"
          target="_blank"
          rel="noreferrer"
        >
          See it on Google
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
