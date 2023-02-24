import { Routes, Route, Outlet } from "react-router-dom";
import styles from "./App.module.css";
import ContactBlock from "./components/ContactBlock/ContactBlock";
import Footer from "./components/Footer/Footer";
import HeadBlock from "./components/HeadBlock/HeadBlock";
import Header from "./components/Header/Header";
import BasicPackage from "./containers/BasicPackagePage/BasicPackagePage";
import BusinessAndCompanyPage from "./containers/BusinessAndCompanyPage/BusinessAndCompanyPage";
import HomePage from "./containers/HomePage/HomePage";

const InitialPage = () => {
  return (
    <>
      <Header />
      <HeadBlock />
      <Outlet />
      <ContactBlock />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className={styles["app"]}>
      <Routes>
        <Route path="/" element={<InitialPage />}>
          <Route index element={<HomePage />} />
          <Route path="/basic-package" element={<BasicPackage />} />
          <Route
            path="/business-and-company"
            element={<BusinessAndCompanyPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
