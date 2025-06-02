import { Routes, Route, Navigate } from "react-router-dom";
import Profil from "./profil";
import Berita from "./berita";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Berita />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
