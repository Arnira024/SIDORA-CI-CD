import logo from "./assets/logo.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ tambah
import Swal from "sweetalert2";

function Login({ setPage, setUser }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ tambah

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        navigate("/home"); // ✅ ganti
      } else {
        Swal.fire({
  icon: "error",
  title: "Login Gagal",
  text: data.message || "Email atau password salah",
  confirmButtonColor: "red",
});
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
      <div style={loginCard}>

        <div style={iconStyle}>🩸</div>

        <h1 style={titleStyle}>Selamat Datang</h1>

        <p style={subtitleStyle}>
          Login untuk melanjutkan pencarian donor
        </p>

        <input
          type="email"
          placeholder="Masukkan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleLogin}
          style={loginButton}
        >
          Login
        </button>

        <p style={registerText}>
          Belum punya akun?
          <span
            onClick={() => navigate("/register")}
            style={registerLink}
          >
            {" "}Daftar
          </span>
        </p>

      </div>
    </div>
  </div>
);
}

export default Login;




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

const loginCard = {
  width: "420px",
  background: "white",
  padding: "40px",
  borderRadius: "25px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  textAlign: "center",
};

const iconStyle = {
  fontSize: "60px",
  marginBottom: "10px",
};

const titleStyle = {
  fontSize: "38px",
  marginBottom: "10px",
  color: "#111",
  fontWeight: "bold",
};

const subtitleStyle = {
  color: "#666",
  marginBottom: "30px",
  fontSize: "15px",
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

const loginButton = {
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

const registerText = {
  marginTop: "25px",
  color: "#555",
  fontSize: "15px",
};

const registerLink = {
  color: "red",
  fontWeight: "bold",
  cursor: "pointer",
};