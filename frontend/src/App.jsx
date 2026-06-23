import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import HomeLogin from "./HomeLogin";
import Login from "./Login";
import Register from "./Register";
import AksesDibatasi from "./AksesDibatasi";

import CekKelayakan from "./CekKelayakan";
import FormCekKelayakan from "./FormCekKelayakan";
import HasilKelayakan from "./HasilKelayakan";
import TidakLayakPage from "./TidakLayakPage";

import FormDonor from "./FormDonor";
import HasilDonor from "./HasilDonor";
import DetailDonor from "./DetailDonor";
import SuccessDonor from "./SuccessDonor";
import ProfileDonor from "./ProfileDonor";
import EditProfile from "./EditProfile";



function App() {
  const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("user")) || null
);

  useEffect(() => {

  const token = localStorage.getItem("token");

  if (token) {
    console.log("User masih login");
  }

}, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<HomeLogin user={user} setUser={setUser} />} />

      <Route path="/akses" element={<AksesDibatasi />} />

      <Route path="/cek" element={<CekKelayakan />} />
      <Route path="/form-cek" element={<FormCekKelayakan />} />
      <Route path="/hasil-kelayakan" element={<HasilKelayakan />} />
      <Route path="/tidak-layak" element={<TidakLayakPage />} />

      <Route path="/form-donor" element={<FormDonor user={user} />} />
      <Route path="/success" element={<SuccessDonor />} />

      <Route path="/profile" element={<ProfileDonor user={user} />}
/>
      <Route path="/edit-profile" element={<EditProfile user={user} />} />

      <Route path="/hasilDonor" element={<HasilDonor />} />
      <Route path="/detailDonor" element={<DetailDonor />} />
    </Routes>
  );
}

export default App;