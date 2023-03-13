import styles from "./TeamBlock.module.css";
import { content } from "./content";
import TeamCard from "../TeamCard/TeamCard";

const TeamBlock = () => {
  return (
    <div className={styles["team-block"]}>
      <h3>Наша команда</h3>
      <div className={styles["content-block"]}>
        {content.map((el) => (
          <div key={el.key}>
            <TeamCard image={el.image} title={el.title} desc={el.desc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamBlock;
