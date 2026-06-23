import logo from "./assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

function AksesDibatasi({ setPage }) {
  const navigate = useNavigate(); // ✅ HARUS DI DALAM COMPONENT

  return (
    <div>
      {/* NAVBAR */}
      <div style={navbarStyle}>
        <div style={navContent}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "40px", marginRight: "10px" }}
          />
          <span style={{ fontWeight: "bold" }}>
            Sistem Informasi Pencarian Donor Darah di Kota Parepare
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div style={containerStyle}>
        <div style={cardStyle}>
 
          <h2 style={{ marginBottom: "10px" }}>Akses Dibatasi</h2>
          <p style={{ marginBottom: "30px" }}>
            Silahkan Login atau Daftar
          </p>

          <div style={buttonGroup}>
            
            <button
              onClick={() => navigate("/login")}
              style={buttonStyle}
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              style={buttonStyle}
            >
              Daftar
            </button>

          

          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLE ================= */

const navbarStyle = {
  width: "100%",
  background: "linear-gradient(to right, #f8caca, #d60000)",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
};
const buttonStyle = {
  padding: "12px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  background: "red",
  color: "white"
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

const buttonGroup = {
  display: "flex",
  justifyContent: "space-between",
};

const loginButton = {
  padding: "12px 30px",
  background: "transparent",
  border: "2px solid red",
  color: "red",
  borderRadius: "5px",
  cursor: "pointer",
};

const registerButton = {
  padding: "12px 30px",
  background: "red",
  border: "none",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AksesDibatasi;