import logo from "./assets/logo.jpeg";
import { useState } from "react";

function FormDataPendonor() {
  const [form, setForm] = useState({
    nama: "",
    kontak: "",
    golonganDarah: "",
    lokasi: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/donor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert("✅ Data berhasil disimpan");
      console.log(data);
      navigate("/success");
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <div style={navbarStyle}>
        <div style={navContent}>
          <img src={logo} alt="logo" style={{ width: "40px", marginRight: "10px" }} />
          <span style={{ fontWeight: "bold" }}>
            Sistem Informasi Pencarian Donor Darah di Kota Parepare
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Form Jadi Pendonor</h2>

          <label>Nama</label>
          <input name="nama" onChange={handleChange} style={inputStyle} />

          <label>No. HP</label>
          <input name="kontak" onChange={handleChange} style={inputStyle} />

          <label>Golongan Darah</label>
          <select name="golonganDarah" onChange={handleChange} style={inputStyle}>
            <option value="">Pilih</option>
            <option>A+</option>
            <option>B+</option>
            <option>AB+</option>
            <option>O+</option>
          </select>

          <label>Lokasi</label>
          <input name="lokasi" onChange={handleChange} style={inputStyle} />

          <button onClick={handleSubmit} style={buttonStyle}>
            Daftar Jadi Pendonor
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormDataPendonor;