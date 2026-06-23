import logo from "./assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

function CekKelayakan() {
  const navigate = useNavigate(); // ✅ WAJIB

  return (
    <div>
      {/* NAVBAR */}
      <div style={navbarStyle}>
        <div style={navContent}>
          <div style={{ display: "flex", alignItems: "center" }}>
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
      </div>

      <div style={backWrapper}>
  <button
    onClick={() => navigate(-1)}
    style={backButton}
  >
    ←
  </button>
</div>

      {/* CONTENT */}
     <div style={containerStyle}>

  <div style={cardStyle}>

    <div style={iconStyle}>
      ❤️
    </div>

    <h1 style={titleStyle}>
      Sebelum Melanjutkan
    </h1>

    <p style={descStyle}>
      Pastikan kondisi tubuhmu memenuhi syarat
      sebelum melakukan donor darah.
    </p>

    <div style={checkWrapper}>

      <div style={checkItem}>
        ✔ Pastikan kondisi tubuh sehat
      </div>

      <div style={checkItem}>
        ✔ Tidak sedang sakit / kelelahan
      </div>

      <div style={checkItem}>
        ✔ Berat badan minimal 45kg
      </div>

      <div style={checkItem}>
        ✔ Tidur cukup sebelum donor
      </div>

    </div>
<button
  style={buttonStyle}
  onClick={() => navigate("/form-cek")}
>
  Cek Kelayakan
</button>

  </div>

</div>
        {/* BACK */}
        <div style={{ textAlign: "center", marginTop: "15px" }}>
        
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
  boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
};

const navContent = {
  width: "100%",
  maxWidth: "1200px",
  padding: "14px 25px",
  display: "flex",
  alignItems: "center",
  color: "#3b1f1f",
  fontWeight: "bold",
};

const containerStyle = {
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #f8caca, #d60000)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 20px",
};

const backWrapper = {
  position: "absolute",
  top: "100px",
  left: "40px",
  zIndex: 10,
};

const backButton = {
  background: "white",
  border: "none",
  width: "55px",
  height: "55px",
  borderRadius: "50%",
  fontSize: "24px",
  cursor: "pointer",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  transition: "0.3s",
};

const cardStyle = {
  background: "white",
  padding: "45px",
  borderRadius: "28px",
  width: "520px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
};

const iconStyle = {
  fontSize: "65px",
  marginBottom: "10px",
};

const titleStyle = {
  fontSize: "42px",
  marginBottom: "15px",
  color: "#111",
  fontWeight: "bold",
};

const descStyle = {
  fontSize: "17px",
  marginBottom: "30px",
  color: "#555",
  lineHeight: "30px",
};

const checkWrapper = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginBottom: "35px",
};

const checkItem = {
  background: "#ffeaea",
  padding: "16px",
  borderRadius: "14px",
  textAlign: "left",
  fontWeight: "500",
  color: "#333",
  fontSize: "15px",
};

const buttonStyle = {
  background: "linear-gradient(to right, red, #c40000)",
  color: "white",
  border: "none",
  padding: "15px 35px",
  borderRadius: "14px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  boxShadow: "0 5px 15px rgba(255,0,0,0.3)",
};

export default CekKelayakan;