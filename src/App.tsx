import Homepage from "./pages/Homepage";
import Engagement from "./pages/Engagment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndustriesPage from "./pages/IndustriesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/engagment" element={<Engagement />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
