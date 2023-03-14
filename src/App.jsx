import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import HeadBlock from "./components/HomePage/HeadBlock/HeadBlock";
import InfoBlock from "./components/HomePage/InfoBlock/InfoBlock";
import ServiceBlock from "./components/HomePage/ServiceBlock/ServiceBlock";
import AboutUsBlock from "./components/HomePage/AboutUsBlock/AboutUsBlock";
import ReviewBlock from "./components/HomePage/ReviewBlock/ReviewBlock";
import FAQBlock from "./components/HomePage/FAQBlock/FAQBlock";
import Footer from "./components/HomePage/Footer/Footer";
import {
  home_content,
  service_content,
  team_content,
  contact_content,
  basic_content,
  privacy_content,
} from "./components/HomePage/HeadBlock/content";
import ServicesPage from "./containers/ServicesPage/ServicesPage";
import ServicePageServiceBlock from "./components/ServicesPage/ServicePageServiceBlock/ServicePageServiceBlock";
import TeamPage from "./containers/TeamPage/TeamPage";
import TeamBlock from "./components/TeamPage/TeamBlock/TeamBlock";
import ContactPage from "./containers/ContactPage/ContactPage";
import AddressBlock from "./components/ContactPage/AddressBlock/AddressBlock";
import MapBlock from "./components/ContactPage/MapBlock/MapBlock";
import PrivacyPage from "./containers/PrivacyPage/PrivacyPage";
import PrivacyContent from "./components/PrivacyContent/PrivacyContent";
import BasicPage from "./containers/BasicPage/BasicPage";
import BasicDefinitionBlock from "./components/BasicPage/DefinitionBlock/BasicDefinitionBlock";
import BasicInfoBlock from "./components/BasicPage/InfoBlock/BasicInfoBlock";
import FreelanceBlock from "./components/BasicPage/FreelanceBlock/FreelanceBlock";
import FirmBlock from "./components/BasicPage/FirmBlock/FirmBlock";

function App() {
  return (
    <div className={styles["app"]}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage>
              <HeadBlock content={home_content} />
              <InfoBlock />
              <ServiceBlock />
              <AboutUsBlock />
              <ReviewBlock />
              <FAQBlock />
              <Footer />
            </HomePage>
          }
        />
        <Route
          path="/services"
          element={
            <ServicesPage>
              <HeadBlock content={service_content} />
              <ServicePageServiceBlock />
              <Footer />
            </ServicesPage>
          }
        />
        <Route
          path="/team"
          element={
            <TeamPage>
              <HeadBlock content={team_content} />
              <TeamBlock />
              <Footer />
            </TeamPage>
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage>
              <HeadBlock content={contact_content} />
              <AddressBlock />
              <MapBlock />
              <Footer />
            </ContactPage>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PrivacyPage>
              <HeadBlock content={privacy_content} />
              <PrivacyContent />
              <Footer />
            </PrivacyPage>
          }
        />
        <Route
          path="/basic-package"
          element={
            <BasicPage>
              <HeadBlock content={basic_content} />
              <BasicDefinitionBlock />
              <BasicInfoBlock />
              <FreelanceBlock />
              <FirmBlock />
              <Footer />
            </BasicPage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
