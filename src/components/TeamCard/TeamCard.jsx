import styles from "./TeamCard.module.css";

const TeamCard = ({image, name, role})=>{
    return (
        <div className={styles["team-card"]}>
            <img src={image} alt=""/>
            <h4>{name}</h4>
            <h5>{role}</h5>
        </div>
    );
}
export default TeamCard;