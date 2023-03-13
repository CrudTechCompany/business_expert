import styles from "./TeamCard.module.css";

const TeamCard = ({ image, title, desc }) => {
  return (
    <div className={styles["team-card"]}>
      <img src={image} alt="" />
      <h5>{title}</h5>
      <h6>{desc}</h6>
    </div>
  );
};

export default TeamCard;
