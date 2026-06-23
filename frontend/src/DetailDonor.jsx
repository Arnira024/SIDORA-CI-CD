import logo from "./assets/logo.jpeg";
import { useLocation, useNavigate } from "react-router-dom";

function DetailDonor() {
  const location = useLocation();
  const navigate = useNavigate();

  const donor = location.state?.donor;
const golongan = location.state?.golongan;
const lokasi = location.state?.lokasi;

  const handleWhatsApp = () => {
  let nomor = donor?.kontak;

  // 🔥 ubah ke format internasional (WA wajib 62)
  if (nomor.startsWith("0")) {
    nomor = "62" + nomor.slice(1);
  }

  const pesan = "Halo, saya membutuhkan donor darah";

  window.open(`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`, "_blank");
};

const handleCopy = () => {
  navigator.clipboard.writeText(donor?.kontak);
  alert("Nomor berhasil disalin");
};
  

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
   onClick={() =>
  navigate("/hasilDonor", {
    state: {
      golongan,
      lokasi,
    },
  })
}
    style={backButton}
  >
    ←
  </button>
</div>

      {/* CONTENT */}
      <div style={containerStyle}>
        <h2 style={titleStyle}>Detail Donor</h2>

        <div style={cardStyle}>
         <div style={avatarStyle}>
  🩸
</div>

<div style={bloodBadge}>
  {donor?.golonganDarah}
</div>

      <div style={infoStyle}>

  <div style={infoItem}>
    <span style={labelStyle}>👤 Nama</span>
    <span>{donor?.nama}</span>
  </div>

  <div style={infoItem}>
    <span style={labelStyle}>📍 Lokasi</span>
    <span>{donor?.lokasi}</span>
  </div>

  <div style={infoItem}>
    <span style={labelStyle}>📞 Kontak</span>
    <span>{donor?.kontak}</span>
  </div>

  <div style={infoItem}>
  <span style={labelStyle}>📌 Status</span>

  <span
    style={{
      color:
        donor?.status === "Aktif"
          ? "green"
          : "red",
      fontWeight: "bold",
    }}
  >
    {donor?.status === "Aktif"
      ? "🟢 Aktif"
      : "🔴 Tidak Aktif"}
  </span>
</div>

<div style={infoItem}>
{donor?.status !== "Aktif" && (
  <div
    style={{
      marginTop: "15px",
      background: "#ffe5e5",
      color: "red",
      padding: "12px",
      borderRadius: "10px",
      textAlign: "center",
      fontWeight: "bold",
    }}
  >
    Pendonor sedang tidak tersedia
  </div>
)}

</div>

            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
 <button
  style={{
    ...buttonStyle,
    opacity:
      donor?.status !== "Aktif"
        ? 0.5
        : 1,
    cursor:
      donor?.status !== "Aktif"
        ? "not-allowed"
        : "pointer",
  }}
  onClick={handleWhatsApp}
  disabled={donor?.status !== "Aktif"}
>
  WhatsApp
</button>

  <button
  style={{
    padding: "10px 20px",
    borderRadius: "10px",
    border: "1px solid red",
    background: "white",
    color: "red",
    cursor:
      donor?.status !== "Aktif"
        ? "not-allowed"
        : "pointer",
    fontWeight: "bold",
    opacity:
      donor?.status !== "Aktif"
        ? 0.5
        : 1,
  }}
  onClick={handleCopy}
  disabled={donor?.status !== "Aktif"}
>
  Salin Nomor
</button>
</div>

          

          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDonor;
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
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "50px",
  color: "white",
};

const titleStyle = {
  fontSize: "28px",
  marginBottom: "30px",
  fontWeight: "bold",
};

const cardStyle = {
  background: "#eee",
  borderRadius: "15px",
  padding: "30px",
  width: "400px",
  textAlign: "center",
};

const imageStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  marginBottom: "15px",
};

const infoStyle = {
  color: "black",
};

const nameStyle = {
  fontWeight: "bold",
  fontSize: "18px",
  marginBottom: "5px",
};

const bloodStyle = {
  color: "red",
  fontWeight: "bold",
  marginBottom: "5px",
};

const textStyle = {
  marginBottom: "5px",
};

const statusStyle = {
  color: "green",
  marginBottom: "15px",
};

const buttonStyle = {
  background: "red",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
};
const backButton = {
  background: "white",
  border: "none",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  fontSize: "22px",
  cursor: "pointer",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
};

const avatarStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  background: "linear-gradient(to bottom, red, darkred)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "45px",
  margin: "0 auto 20px",
  color: "white",
};

const bloodBadge = {
  background: "red",
  color: "white",
  display: "inline-block",
  padding: "10px 22px",
  borderRadius: "30px",
  fontWeight: "bold",
  marginBottom: "25px",
  fontSize: "20px",
};

const infoItem = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "15px",
  fontSize: "18px",
};

const labelStyle = {
  fontWeight: "bold",
};

const backWrapper = {
  position: "absolute",
  top: "100px",
  left: "40px",
  zIndex: 10,
};

