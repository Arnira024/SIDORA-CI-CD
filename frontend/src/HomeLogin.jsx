import logo from "./assets/logo.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function HomeLogin({ setPage, user, setUser }) {


  const [golongan, setGolongan] = useState("");
  const menuRef = useRef();
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  const [lokasi, setLokasi] = useState("");
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

return (
  <div>

    {/* NAVBAR */}
    <div style={navbarStyle}>
      <div style={navContent}>

        {/* KIRI */}
        <div style={{
  display: "flex",
  alignItems: "center",
  gap: "10px",
}}>
          <img
            src={logo}
            style={{ width: "40px", marginRight: "10px" }}
          />

          <span style={{ fontWeight: "bold" }}>
            Sistem Informasi Pencarian Donor Darah di Kota Parepare
          </span>
        </div>

        {/* KANAN */}
        <div
          style={{
            position: "relative",
          }}
        >
          <button
            onClick={() => setShowMenu(!showMenu)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            👤 {user?.nama}
          </button>

          {showMenu && (
            <div
             ref={menuRef}
              style={{
                position: "absolute",
                right: "0",
                top: "50px",
                minWidth: "170px",
                background: "white",
                borderRadius: "12px",
                padding: "10px",
                width: "160px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                zIndex: 999,
              }}
            >
              <button
                onClick={() => navigate("/profile")}
                style={menuButton}
              >
                Profil Saya
              </button>

              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  setUser(null);
                  navigate("/");
                }}
                style={menuButton}
              >
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </div>

    {/* CONTENT */}
    <div style={containerStyle}>

      <h1 style={heroTitle}>
    Halo, {user?.nama} ❤️
  </h1>

  <p style={heroSubtitle}>
    Temukan donor darah dengan cepat dan bantu selamatkan kehidupan
  </p>

      <div style={searchCard}>

        {/* GOLONGAN */}
        <div style={formGroup}>
          <label style={labelStyle}>Golongan Darah</label>

          <select
            style={inputStyle}
            onChange={(e) => setGolongan(e.target.value)}
          >
            <option value="">Pilih Golongan</option>

            <optgroup label="Rhesus +">
              <option>A+</option>
              <option>B+</option>
              <option>AB+</option>
              <option>O+</option>
            </optgroup>

            <optgroup label="Rhesus -">
              <option>A-</option>
              <option>B-</option>
              <option>AB-</option>
              <option>O-</option>
            </optgroup>
          </select>
        </div>

        {/* LOKASI */}
        <div style={formGroup}>
          <label style={labelStyle}>Lokasi</label>

          <select
            style={inputStyle}
            onChange={(e) => setLokasi(e.target.value)}
          >
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
        </div>

        <br />
        <br />

       {/* BUTTON GROUP */}
<div style={buttonGroup}>

  {/* CARI DONOR */}
  <button
    disabled={!golongan || !lokasi}
    style={{
      ...searchButton,
      opacity: !golongan || !lokasi ? 0.5 : 1,
      cursor: !golongan || !lokasi
        ? "not-allowed"
        : "pointer",
    }}
    onClick={() =>
      navigate("/hasilDonor", {
        state: { golongan, lokasi },
      })
    }
  >
    🔍 Cari Donor
  </button>

  {/* JADI PENDONOR */}
  <button
    onClick={() => navigate("/cek")}
    style={donorButton}
  >
    🩸 Jadi Pendonor
  </button>

</div>
      </div>
    </div>

  </div>
);
}
export default HomeLogin;

/* ================= STYLE ================= */

const navbarStyle = {
  width: "100%",
  background: "linear-gradient(to right, #f8bcbc, red)",
  padding: "15px 30px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
};

const navContent = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
};

const containerStyle = {
  width: "100%",
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #f8caca, red)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "120px",
};

const formWrapper = {
  width: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const formGroup = {
  width: "100%",
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "14px",
  textAlign: "left",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
};

const buttonStyle = {
  width: "60%",
  padding: "12px",
  background: "white",
  color: "red",
  border: "none",
  borderRadius: "10px",
  marginBottom: "15px",
  cursor: "pointer",
  fontWeight: "bold",
};

const buttonOutline = {
  width: "60%",
  padding: "12px",
  background: "transparent",
  border: "1px solid white",
  color: "white",
  borderRadius: "10px",
  cursor: "pointer",
};

const menuButton = {
  width: "100%",
  padding: "10px",
  border: "none",
  borderRadius: "8px",
  background: "#f1f1f1",
  marginBottom: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

const heroTitle = {
  fontSize: "42px",
  color: "white",
  marginBottom: "10px",
  textAlign: "center",
  fontWeight: "bold",
  textShadow: "0 4px 12px rgba(0,0,0,0.25)",
};

const heroSubtitle = {
  color: "white",
  fontSize: "20px",
  textAlign: "center",
  marginBottom: "40px",
  opacity: "0.95",
};

const searchCard = {
  width: "450px",
  background: "white",
  padding: "35px",
  borderRadius: "25px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  marginTop: "20px",
};
const buttonGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginTop: "30px",
};

const searchButton = {
  width: "100%",
  padding: "15px",
  borderRadius: "14px",
  border: "none",
  background: "linear-gradient(135deg, #ff4d4d, #d60000)",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "0 5px 15px rgba(255,0,0,0.3)",
};

const donorButton = {
  width: "100%",
  padding: "15px",
  borderRadius: "14px",
  border: "2px solid red",
  background: "white",
  color: "red",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};