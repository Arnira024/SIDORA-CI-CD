import logo from "./assets/logo.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ TAMBAH

function FormDonor({ user }) {
  const [form, setForm] = useState({
    nama: "",
    jenisKelamin: "",
    umur: "",
    beratBadan: "",
    golonganDarah: "",
    lokasi: "",
    kontak: "",
  });

  const navigate = useNavigate(); // ✅ TAMBAH

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {

    console.log("USER:", user);
    console.log("FORM:", form);

    if (
      !form.nama ||
      !form.jenisKelamin ||
      !form.umur ||
      !form.beratBadan ||
      !form.golonganDarah ||
      !form.lokasi ||
      !form.kontak
    ) {
      alert("Semua data wajib diisi!");
      return;
    }

    if (Number(form.umur) < 17 || Number(form.umur) > 60) {
      alert("Umur harus 17 - 60 tahun");
      return;
    }

    if (Number(form.beratBadan) < 45) {
      alert("Berat badan minimal 45 kg");
      return;
    }

    if (!/^[0-9]{10,13}$/.test(form.kontak)) {
      alert("Nomor HP harus 10-13 digit dan hanya angka");
      return;
    }

    console.log("DATA DIKIRIM:", {
      ...form,
      userId: user?._id
    });

    try {
  const token = localStorage.getItem("token");

const res = await fetch("http://localhost:5000/donor", {
  method: "POST",

  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // 🔥 WAJIB
  },

  body: JSON.stringify({
  ...form,
  userId: user?._id,
}),
});

    const data = await res.json();

    if (res.ok) {
      navigate("/profile");
    } else {
      alert(data.message || "Gagal kirim data");
    }

  } catch (err) {
    console.log(err);
    alert("Server error");
  }
};

  return (
    <div>
      {/* NAVBAR */}
      <div style={navbarStyle}>
        <div style={navContent}>
          <img src={logo} style={{ width: "40px", marginRight: "10px" }} />
          <span style={{ fontWeight: "bold" }}>
            Sistem Informasi Pencarian Donor Darah di Kota Parepare
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Form Donor</h2>

          <input name="nama" placeholder="Nama" style={inputStyle} onChange={handleChange} />

          <select name="jenisKelamin" style={inputStyle} onChange={handleChange}>
            <option value="">Pilih Jenis Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>

          <input type="number" name="umur" placeholder="Umur (17-60)" style={inputStyle} onChange={handleChange} />

          <input type="number" name="beratBadan" placeholder="Berat Badan (min 45 kg)" style={inputStyle} onChange={handleChange} />

          <select name="golonganDarah" style={inputStyle} onChange={handleChange}>
            <option value="">Pilih Golongan</option>
            <optgroup label="Rhesus +">
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="O+">O+</option>
            </optgroup>
            <optgroup label="Rhesus -">
              <option value="A-">A-</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
              <option value="O-">O-</option>
            </optgroup>
          </select>

          <select name="lokasi" style={inputStyle} onChange={handleChange}>
            <option value="">Pilih Lokasi</option>
            <option>Galung Maloang</option>
            <option>Lemoe</option>
            <option>Lompoe</option>
            <option>Watang Bacukiki</option>
            <option>Bumi Harapan</option>
            <option>Cappa Galung</option>
            <option>Kampung Baru</option>
            <option>Lumpue</option>
            <option>Sumpang Minangae</option>
            <option>Tiro Sompe</option>
            <option>Bukit Harapan</option>
            <option>Bukit Indah</option>
            <option>Kampung Pisang</option>
            <option>Lakessi</option>
            <option>Ujung Baru</option>
            <option>Ujung Lare</option>
            <option>Watang Soreang</option>
            <option>Labukkang</option>
            <option>Lapadde</option>
            <option>Mallusetasi</option>
            <option>Ujung Bulu</option>
            <option>Ujung Sabbang</option>
          </select>

          <input
            name="kontak"
            placeholder="No. HP"
            style={inputStyle}
            onChange={(e) => {
              const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
              setForm({ ...form, kontak: onlyNumber });
            }}
          />

          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button style={buttonStyle} onClick={handleSubmit}>
              Kirim
            </button>

            

          </div>
        </div>
      </div>
    </div>
  );
}

export default FormDonor;

/* ================= STYLE ================= */

const navbarStyle = {
  width: "100%",
  background: "linear-gradient(to right, #f8caca, #d60000)",
  display: "flex",
  justifyContent: "center",
};

const navContent = {
  width: "100%",
  maxWidth: "1200px",
  padding: "12px 20px",
  display: "flex",
  alignItems: "center",
  color: "#3b1f1f",
};

const containerStyle = {
  height: "100vh",
  background: "linear-gradient(to bottom, #f8caca, #d60000)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = {
  background: "#eee",
  padding: "30px",
  borderRadius: "15px",
  width: "400px",
  textAlign: "center",
};

const titleStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "none",
};

const buttonStyle = {
  flex: 1,
  padding: "10px",
  background: "red",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const buttonBack = {
  flex: 1,
  padding: "10px",
  background: "gray",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};