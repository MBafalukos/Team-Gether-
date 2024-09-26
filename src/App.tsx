import  Homepage  from './pages/Homepage'
import Engagement from './pages/Engagment'
import {  BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
     
     <BrowserRouter>

        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/engagment" element={<Engagement />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
