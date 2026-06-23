import logo from "./assets/logo.jpeg";
import { useNavigate } from "react-router-dom"; // ✅ tambah

function TidakLayakPage({ setPage }) {
  const navigate = useNavigate(); // ✅ tambah

  return (
    <div>
      <div style={navbarStyle}>
        <div style={navContent}>
          <img src={logo} alt="logo" style={{ width: "40px", marginRight: "10px" }} />
          <span style={{ fontWeight: "bold" }}>
            Sistem Informasi Pencarian Donor Darah di Kota Parepare
          </span>
        </div>
      </div>

      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={titleStyle}>Belum Memenuhi Syarat</h2>

          <p style={descStyle}>
            Silahkan periksa kembali kondisi kesehatan Anda
          </p>

          <button
            style={buttonStyle}
            onClick={() => navigate("/form-cek")} // ✅ ganti
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

export default TidakLayakPage;

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
  padding: "40px",
  borderRadius: "15px",
  textAlign: "center",
  width: "400px",
};

const titleStyle = {
  marginBottom: "15px",
};

const descStyle = {
  marginBottom: "25px",
  color: "#555",
};

const buttonStyle = {
  padding: "12px 30px",
  background: "red",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};
