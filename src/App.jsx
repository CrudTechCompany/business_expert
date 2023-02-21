import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./containers/HomePage/HomePage";

function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
