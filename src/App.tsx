import Homepage from "./pages/Homepage";
import Engagement from "./pages/Engagment";
import { HashRouter, Routes, Route } from "react-router-dom";
import IndustriesPage from "./pages/IndustriesPage";
import AboutPage from "./pages/AboutPage";
import Managers from "./pages/Managers";
import Digital from "./pages/Digital";
import Reporting from "./pages/Reporting";
import PricingPage from "./pages/PricingPage";
// import ContactUs from "./ContactUs";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/engagment" element={<Engagement />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/digital-space" element={<Digital />} />
          <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
