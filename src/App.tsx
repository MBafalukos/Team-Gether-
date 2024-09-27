import Homepage from "./pages/Homepage";
import Engagement from "./pages/Engagment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndustriesPage from "./pages/IndustriesPage";
import AboutPage from "./pages/AboutPage";
import Managers from "./pages/Managers";
import Digital from "./pages/Digital";
import Reporting from "./pages/Reporting";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/engagment" element={<Engagement />} />
          <Route path="/managers" element={<Managers />} />
          <Route path="/digital-space" element={<Digital />} />
          <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
