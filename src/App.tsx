import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import DoctorsPage from "@/pages/DoctorsPage";
import ConsultationsPage from "@/pages/ConsultationsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/consultations" element={<ConsultationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
