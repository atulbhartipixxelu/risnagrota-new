import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './assets/css/style.css';
import './assets/css/mobile.css';
import { useState, useEffect, useMemo } from 'react';
import ReactModal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from "./pages/Home";
import Homepage from './pages/Homepage.jsx';
import AcademicResources from "./pages/AcademicResources.jsx";
import TeachingStaff from "./pages/TeachingStaff";
import Results from "./pages/Result.jsx";
import Gallery from "./pages/Gallery.jsx";
import SpecialFeatures from "./pages/SpecialFeatures.jsx";
import Alumni from "./pages/Alumni.jsx";
import Contact from "./pages/Contact.jsx";
import AtalTinkering from "./pages/AtalTinkering.Jsx";
import Gymnastics from "./pages/Gymnatic.jsx";
import TableTennis from "./pages/TableTennis.jsx";
import Transport from "./pages/Transport.jsx";
import Activities from "./pages/Activities.jsx";
import Calender from "./pages/Calendar.jsx";
import Sports from "./pages/Sports.jsx";
import Achievements from "./pages/Achievements.jsx";
import HouseSystem from "./pages/HouseSystem.jsx";
import PlannersSyllabus from "./pages/PlannerSyllabus.jsx";
import Curriculum from "./pages/Curriculum.jsx";
import Datesheets from "./pages/Datesheets.jsx";
import Primary from "./pages/Primary.jsx";
import PrePrimary from "./pages/PrePrimary.jsx";
import MiddleWing from "./pages/MiddleWing.jsx";
import Secondary from "./pages/Secondary.jsx";
import CbseMandatory from "./pages/CbseMandatory.jsx";
import BritishCouncil from "./pages/BritishCouncil.jsx";
import Admissions from "./pages/Admissions.jsx";
import Microsoft from "./pages/Microsoft.jsx";
import TransferCertificates from "./pages/TransferCertificates.jsx";
import EnteryForm from "./pages/EnteryForm.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GermanGateway from "./pages/GermanGateway.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Popup01 from "./assets/images/popup-slider/popup-04.jpeg";
import Popup02  from "./assets/images/popup-slider/popup-01.png";
import Popup03 from "./assets/images/popup-slider/popup-02.jpeg";
import Popup04 from "./assets/images/popup-slider/popup-03.jpg";


/** Onload popup slides — `src` can be an imported image or a path under `public/` (e.g. `/images/...`). */
const POPUP_SLIDES = [
  { src: Popup01, alt: "Rainbow International School" },
  { src: Popup02, alt: "Admissions" },
  { src: Popup03, alt: "School banner" },
  { src: Popup04, alt: "School" },
];

const POPUP_LINK =
  "https://www.facebook.com/story.php?story_fbid=1064220435492393&id=100057133403626&rdid=d9tqrXLQOdmahOHP";


AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

function App() {
  const [isBannerOpen, setIsBannerOpen] = useState(false);

  const popupSliderSettings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: POPUP_SLIDES.length > 1,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
      adaptiveHeight: true,
    }),
    []
  );

  useEffect(() => {
    const currentRoute = window.location.pathname;
    if (currentRoute === '/') {
      setIsBannerOpen(true);
    }
  }, []);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    <div className={'website'}>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/transfer-certificate" element={<TransferCertificates />} />
          <Route path="/teaching-staff" element={<TeachingStaff />} />
          <Route path="/atal-tinkering" element={<AtalTinkering />} />
          <Route path="/table-tennis" element={<TableTennis />} />
          <Route path="/gymnastics" element={<Gymnastics />} />
          <Route path="/german-gateway" element={<GermanGateway />} />
          <Route path="/academic-resources" element={<AcademicResources />} />
          <Route path="/admission" element={<Admissions />} />
          <Route path="/results" element={<Results />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/special-features" element={<SpecialFeatures />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/house-system" element={<HouseSystem />} />
          <Route path="/datesheets" element={<Datesheets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/primary" element={<Primary />} />
          <Route path="/pre-primary" element={<PrePrimary />} />
          <Route path="/middle-wing" element={<MiddleWing />} />
          <Route path="/secondary" element={<Secondary />} />
          <Route path="/planners-of-syllabus" element={<PlannersSyllabus />} />
          <Route path="/cbse-mandatory" element={<CbseMandatory />} />
          <Route path="/british-council" element={<BritishCouncil />} />
          <Route path="/microsoft" element={<Microsoft />} />
          <Route path="/entery-form" element={<EnteryForm />} />
        </Routes>
        <Footer />
        <ReactModal className="banner-web" isOpen={isBannerOpen} onRequestClose={closeBanner} ariaHideApp={false} contentLabel="Admission Form Modal">
          <button className="close" onClick={closeBanner}>Close</button>
          {isBannerOpen && (
            <div className="popup_design_op onload-popup">
              <Slider {...popupSliderSettings} className="onload-popup-slider">
                {POPUP_SLIDES.map((slide, index) => (
                  <div key={index}>
                    <a
                      href={POPUP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeBanner}
                    >
                      <img src={slide.src} alt={slide.alt} />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </ReactModal>
      </Router>
    </div>
  );
}

export default App;