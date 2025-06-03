import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profil from "./profil";
import Berita from "./berita";
import Navbar from "./Navbar.jsx";

function App() {
  const [InputSearch, setInputSearch] = useState("");
  return (
    <>
      <Navbar onSearch={setInputSearch} />
      <Routes>
        <Route path="/" element={<Berita InputSearch={InputSearch} />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
