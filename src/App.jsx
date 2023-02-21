import styles from "./App.module.css";
import AboutBlock from "./components/AboutBlock/AboutBlock";
import HeadBlock from "./components/HeadBlock/HeadBlock";
import Header from "./components/Header/Header";
import ServiceBlock from "./components/ServiceBlock/ServiceBlock";
import HomePage from "./containers/HomePage/HomePage";

function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <HomePage>
        <HeadBlock />
        <AboutBlock />
        <ServiceBlock />
      </HomePage>
    </div>
  );
}

export default App;
