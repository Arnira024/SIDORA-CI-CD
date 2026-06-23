import logo from "./assets/logo.jpeg";
import { useNavigate } from "react-router-dom"; // ✅ tambah

function SuccessDonor({ setPage }) {
  const navigate = useNavigate(); // ✅ tambah

  return (
    <div>
      {/* NAVBAR */}
      <div style={{
        background: "red",
        color: "white",
        padding: "15px",
        display: "flex",
        alignItems: "center"
      }}>
        <img src={logo} style={{ width: "40px", marginRight: "10px" }} />
        <span>Sistem Informasi Donor Darah</span>
      </div>

      {/* CONTENT */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh"
      }}>
        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          textAlign: "center",
          width: "300px"
        }}>
          <h2>Data berhasil disimpan 🎉</h2>
          <p>Anda siap menjadi pendonor</p>

          <button
            onClick={() => navigate("/home")} // ✅ ganti
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Kembali ke Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessDonor;