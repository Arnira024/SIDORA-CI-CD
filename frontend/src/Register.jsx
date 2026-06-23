import logo from "./assets/logo.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ tambah
import Swal from "sweetalert2";

function Register({ setPage }) {

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ tambah

  const handleRegister = async () => {
    if (!nama || !email || !password) {
      Swal.fire({
  icon: "warning",
  title: "Peringatan",
  text: "Semua field wajib diisi!",
  confirmButtonColor: "red",
});
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      Swal.fire({
  icon: "error",
  title: "Email Tidak Valid",
  text: "Format email tidak valid!",
  confirmButtonColor: "red",
});
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama, email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        Swal.fire({
  icon: "success",
  title: "Berhasil",
  text: "Register berhasil!",
  confirmButtonColor: "red",
});
        navigate("/login"); // ✅ ganti
      } else {
        alert(data.message);
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
  <div style={registerCard}>

    <div style={iconStyle}>❤️</div>

    <h1 style={titleStyle}>Buat Akun</h1>

    <p style={subtitleStyle}>
      Daftar untuk mulai mencari donor darah
    </p>

    <input
      type="text"
      placeholder="Nama Lengkap"
      value={nama}
      onChange={(e) => setNama(e.target.value)}
      style={inputStyle}
    />

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={inputStyle}
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={inputStyle}
    />

    <button
      onClick={handleRegister}
      style={registerButton}
    >
      Daftar Sekarang
    </button>

    <p style={loginText}>
      Sudah punya akun?
      <span
        onClick={() => navigate("/login")}
        style={loginLink}
      >
        {" "}Login
      </span>
    </p>

  </div>
</div>
    </div>
  );
}

export default Register;
/* ================= STYLE ================= */

const navbarStyle = {
  width: "100%",
  background: "linear-gradient(to right, #f8caca, #d60000)",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
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
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #f8caca, #d60000)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px 20px",
};



const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const registerCard = {
  width: "420px",
  background: "white",
  padding: "40px",
  borderRadius: "25px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  textAlign: "center",
};

const iconStyle = {
  fontSize: "55px",
  marginBottom: "10px",
};

const titleStyle = {
  fontSize: "38px",
  marginBottom: "10px",
  color: "#111",
};

const subtitleStyle = {
  color: "#666",
  marginBottom: "30px",
  fontSize: "15px",
};

const registerButton = {
  width: "100%",
  padding: "15px",
  borderRadius: "14px",
  border: "none",
  background: "red",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
  boxShadow: "0 5px 15px rgba(255,0,0,0.3)",
};

const loginText = {
  marginTop: "25px",
  color: "#555",
};

const loginLink = {
  color: "red",
  fontWeight: "bold",
  cursor: "pointer",
};

