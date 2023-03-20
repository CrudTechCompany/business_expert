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
  firm_content,
  smm_content,
  legalization_content,
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
import FirmPage from "./containers/FirmPage/FirmPage";
import FirmDefinitionBlock from "./components/FirmPage/FirmDefinitionBlock/FirmDefinitionBlock";
import OptionsBlock from "./components/FirmPage/OptionsBlock/OptionsBlock";
import FirmFreelanceBlock from "./components/FirmPage/FirmFreelanceBlock/FirmFreelanceBlock";
import FirmBusinessBlock from "./components/FirmPage/FirmBusinessBlock/FirmBusinessBlock";
import SMMPage from "./containers/SMMPage/SMMPage";
import SMMDefinitionBlock from "./components/SMMPage/SMMDefinitionBlock/SMMDefinitionBlock";
import SMMPromotionBlock from "./components/SMMPage/SMMPromotionBlock/SMMPromotionBlock";
import SMMBlock from "./components/SMMPage/SMMBlock/SMMBlock";
import AdwordsBlock from "./components/SMMPage/AdwordsBlock/AdwordsBlock";
import SEOBlock from "./components/SMMPage/SEOBlock/SEOBlock";
import LegalizationPage from "./containers/LegalizationPage/LegalizationPage";
import LegalizationDefinitionBlock from "./components/LegalizationPage/LegalizationDefinitionBlock/LegalizationDefinitionBlock";
import LegalizationServiceBlock from "./components/LegalizationPage/LegalizationServiceBlock/LegalizationServiceBlock";
import LegalizationResidentBlock from "./components/LegalizationPage/LegalizationResidentBlock/LegalizationResidentBlock";
import LegalizationRegistrationBlock from "./components/LegalizationPage/LegalizationRegistrationBlock/LegalizationRegistrationBlock";

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
        <Route
          path="/accounting-service"
          element={
            <FirmPage>
              <HeadBlock content={firm_content} />
              <FirmDefinitionBlock />
              <OptionsBlock />
              <FirmFreelanceBlock />
              <FirmBusinessBlock />
              <Footer />
            </FirmPage>
          }
        />
        <Route
          path="/smm"
          element={
            <SMMPage>
              <HeadBlock content={smm_content} />
              <SMMDefinitionBlock />
              <SMMPromotionBlock />
              <SMMBlock />
              <AdwordsBlock />
              <SEOBlock />
              <Footer />
            </SMMPage>
          }
        />
        <Route
          path="/legalization"
          element={
            <LegalizationPage>
              <HeadBlock content={legalization_content} />
              <LegalizationDefinitionBlock />
              <LegalizationServiceBlock />
              <LegalizationResidentBlock />
              <LegalizationRegistrationBlock />
              <Footer />
            </LegalizationPage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
