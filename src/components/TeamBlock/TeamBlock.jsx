import styles from "./TeamBlock.module.css";
import RomanB from "../../assets/RomanB.svg";
import DariaK from "../../assets/DariaK.svg";
import DmytroB from "../../assets/DmytroB.svg";
import TatianaP from "../../assets/TatianaP.svg";
import NataliiaS from "../../assets/NataliiaS.svg";
import TeamCard from "../TeamCard/TeamCard";

const TeamBlock = () => {
  const content = [
    {
      image: RomanB,
      name: "Roman Bezzubchenko",
      role: "Dyrektor",
    },
    {
      image: DariaK,
      name: "Daria Kaliuzhna",
      role: "Kierownik działu obsługi klientów",
    },
    {
      image: DmytroB,
      name: "Dmytro Bulatov",
      role: "Specjalista do sprzedaży",
    },
    {
      image: TatianaP,
      name: "Tetiana Pashchyna",
      role: "Kurator",
    },
    {
      image: NataliiaS,
      name: "Nataliia Skorobahata",
      role: "Kurator",
    },
  ];
  return (
    <div className={styles["team-block"]} id="team-block">
      <h3>Наша команда</h3>
      <div className={styles["content"]}>
        {content.map((el) => (
          <TeamCard
            image={el.image}
            name={el.name}
            role={el.role}
            key={el.name}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamBlock;
