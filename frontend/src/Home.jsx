import logo from "./assets/logo.jpeg";
import { useNavigate } from "react-router-dom"; // ✅ tambah

function Home({ setPage }) {
  const navigate = useNavigate(); // ✅ tambah

  return (
    <div>
      {/* NAVBAR */}
      <div style={navbar}>
        <div style={navContent}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} style={{ width: "40px", marginRight: "10px" }} />
            <span style={{ fontWeight: "bold" }}>
              Sistem Informasi Pencarian Donor Darah di Kota Parepare
            </span>
          </div>

          <div style={{ display: "flex", gap: "15px" }}>
            <button style={navBtn} onClick={() => navigate("/login")}>
              Login
            </button>
            <button style={navBtn} onClick={() => navigate("/register")}>
              Daftar
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <div style={container}>
        <h1 style={{
  color: "white",
  fontSize: "32px",
  textAlign: "center",
  marginBottom: "35px",
  fontWeight: "bold",
  textShadow: "0 3px 10px rgba(0,0,0,0.3)"
}}>
  Selamat Datang di Layanan <br />
  Pencarian Donor Darah
</h1>

        {/* FORM CARD */}
        <div style={card}>
          <div style={formGroup}>
            <label style={label}>Golongan Darah</label>
            <select style={input}>
              <option>Pilih Golongan</option>
              <option>A+</option>
              <option>B+</option>
              <option>AB+</option>
              <option>O+</option>
            </select>
          </div>

          <div style={formGroup}>
            <label style={label}>Lokasi</label>
            <select style={input}>
              <option>Pilih Lokasi</option>
              <option>Lapadde</option>
              <option>Bumi Harapan</option>
              <option>Labukkang</option>
            </select>
          </div>

          {/* 🔥 BELUM LOGIN → AKSES DIBATASI */}
          <button
            style={btnPrimary}
            onClick={() => navigate("/akses")}
          >
            Cari Donor
          </button>
          

          <button
            style={btnOutline}
            onClick={() => navigate("/akses")}
          >
            Jadi Pendonor
          </button>
        </div>
      </div>
    </div>
  );
}


export default Home;

//style
const navbar = {
  width: "100%",
  background: "#d60000",
  display: "flex",
  justifyContent: "center",
};

const navContent = {
  width: "100%",
  maxWidth: "1200px",
  padding: "12px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
};

const navBtn = {
  background: "transparent",
  border: "1px solid white",
  color: "white",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

const container = {
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #f8caca, #d60000)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};


const title = {
  color: "white",
  fontSize: "32px",
  textAlign: "center",
  marginBottom: "40px",
  fontWeight: "bold",
};

const card = {
  background: "white",
  padding: "35px",
  borderRadius: "20px",
  width: "350px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  transition: "0.3s",
};

const formGroup = {
  display: "flex",
  flexDirection: "column",
};

const label = {
  fontSize: "14px",
  marginBottom: "5px",
};

const input = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  outline: "none",
  fontSize: "14px",
};

const btnPrimary = {
  background: "linear-gradient(135deg, #ff4d4d, #d60000)",
  color: "white",
  padding: "12px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
};

const btnOutline = {
  background: "transparent",
  border: "2px solid #d60000",
  color: "#d60000",
  padding: "12px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
};
