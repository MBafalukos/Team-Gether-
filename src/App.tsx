import Homepage from "./pages/Homepage";
import Engagement from "./pages/Engagment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndustriesPage from "./pages/IndustriesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/engagment" element={<Engagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
