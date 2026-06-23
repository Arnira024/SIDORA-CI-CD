import logo from "./assets/logo.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ TAMBAH

function FormCekKelayakan({ setPage }) {
  console.log("INI FORM CEK KELOAD");

  const navigate = useNavigate(); // ✅ TAMBAH

  const [jawaban, setJawaban] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const handleChange = (key, value) => {
    setJawaban({ ...jawaban, [key]: value });
  };

  const handleSubmit = () => {
    console.log("TOMBOL DIKLIK");

    if (Object.values(jawaban).includes("")) {
      alert("Semua pertanyaan harus dijawab!");
      return;
    }

    const semuaYa = Object.values(jawaban).every((j) => j === "ya");

    if (semuaYa) {
      console.log("KE HASIL KELAYAKAN");
      navigate("/hasil-kelayakan"); // ✅ GANTI
    } else {
      console.log("KE TIDAK LAYAK");
      navigate("/tidak-layak"); // ✅ GANTI
    }
  };

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
          <h2 style={titleStyle}>Cek Kelayakan Donor</h2>

          {renderQuestion("Usia 17 - 40 tahun ?", "q1", jawaban, handleChange)}
          {renderQuestion("Berat Badan minimal 45 kg ?", "q2", jawaban, handleChange)}
          {renderQuestion("Tidak sedang sakit ?", "q3", jawaban, handleChange)}
          {renderQuestion("Tidak donor dalam 3 bulan terakhir ?", "q4", jawaban, handleChange)}
          {renderQuestion("Tidak memiliki penyakit berat ?", "q5", jawaban, handleChange)}

          <button
            style={{
              ...buttonStyle,
              opacity: Object.values(jawaban).includes("") ? 0.5 : 1,
            }}
            disabled={Object.values(jawaban).includes("")}
            onClick={handleSubmit}
          >
            Cek Kelayakan
          </button>
        </div>
      </div>
    </div>
  );
}

/* COMPONENT PERTANYAAN */
function renderQuestion(text, key, jawaban, handleChange) {
  return (
    <div style={questionRow} key={key}>
      <span>{text}</span>

      <div style={buttonGroup}>
        <button
          style={jawaban[key] === "ya" ? yesActive : yesStyle}
          onClick={() => handleChange(key, "ya")}
        >
          Ya
        </button>

        <button
          style={jawaban[key] === "tidak" ? noActive : noStyle}
          onClick={() => handleChange(key, "tidak")}
        >
          Tidak
        </button>
      </div>
    </div>
  );
}

export default FormCekKelayakan;

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
  width: "550px",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "25px",
};

const questionRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
};

const buttonGroup = {
  display: "flex",
  gap: "10px",
};

const yesStyle = {
  padding: "8px 20px",
  background: "#ddd",
  border: "none",
};

const noStyle = {
  padding: "8px 20px",
  background: "#ddd",
  border: "none",
};

const yesActive = {
  ...yesStyle,
  background: "green",
  color: "white",
};

const noActive = {
  ...noStyle,
  background: "red",
  color: "white",
};

const buttonStyle = {
  marginTop: "30px",
  width: "100%",
  padding: "12px",
  background: "red",
  color: "white",
  border: "none",
  borderRadius: "10px",
};

