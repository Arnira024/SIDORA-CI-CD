import logo from "./assets/logo.jpeg";
import { useNavigate } from "react-router-dom"; // ✅ tambah

function HasilKelayakan({ setPage }) {
  const navigate = useNavigate(); // ✅ tambah

  return (
    <div>
    <div style={navbarStyle}>
  <div style={navContent}>
    <img
      src={logo}
      alt="logo"
      style={{
        width: "40px",
        marginRight: "12px",
      }}
    />

    Sistem Informasi Pencarian Donor Darah di Kota Parepare
  </div>
</div>

      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2>Anda Layak Menjadi Pendonor ✅</h2>
          <p>Silakan lanjut ke pengisian data donor</p>

          <button
            onClick={() => navigate("/form-donor")} // ✅ ganti
            style={buttonStyle}
          >
            Lanjut
          </button>

         
        </div>
      </div>
    </div>
  );
}

/* STYLE */
const navbarStyle = {
  width: "100%",
  background: "linear-gradient(to right, #f8caca, #d60000)",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
};

const navContent = {
  padding: "12px 25px",
  display: "flex",
  alignItems: "center",
  color: "#3b1f1f",
  fontWeight: "bold",
  fontSize: "20px",
};

const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to bottom, #f8caca, #d60000)",
};

const cardStyle = {
  background: "#eee",
  padding: "30px",
  borderRadius: "15px",
  textAlign: "center",
};

const buttonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  background: "red",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const buttonBack = {
  marginTop: "10px",
  padding: "10px 20px",
  background: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default HasilKelayakan;