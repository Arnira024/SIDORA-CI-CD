import logo from "./assets/logo.jpeg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ tambah

function HasilDonor({ setPage, filter }) {
   const location = useLocation();
  const navigate = useNavigate(); // ✅ tambah

  const state = location.state || {}; // ✅ ambil dari router
  const [dataDonor, setDataDonor] = useState([]);
 

  // 🔥 AMBIL DATA
  const getData = async () => {
    const res = await fetch("http://localhost:5000/donor");
    const data = await res.json();
    setDataDonor(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // 🔥 FILTER STATE (fix)
  const [selectedGolongan, setSelectedGolongan] = useState(
  state?.golongan || ""
);

const [selectedLokasi, setSelectedLokasi] = useState(
  state?.lokasi || ""
);

  const filteredData = dataDonor.filter((item) => {
  const cocokGolongan =
    !selectedGolongan ||
    item.golonganDarah === selectedGolongan;

  const cocokLokasi =
    !selectedLokasi ||
    item.lokasi === selectedLokasi;

  return cocokGolongan && cocokLokasi;
});

  return (
    <div>
      {/* NAVBAR */}
      <div style={navbarStyle}>
        <div style={navContent}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} style={{ width: "40px", marginRight: "10px" }} />
            <span style={{ fontWeight: "bold" }}>
              Sistem Informasi Pencarian Donor Darah di Kota Parepare
            </span>
          </div>
        </div>
      </div>

    
      {/* CONTENT */}
<div style={containerStyle}>

  <h1 style={titleStyle}>
    Hasil Pencarian Donor
  </h1>

  <p style={subtitleStyle}>
    Temukan pendonor yang sesuai dengan kebutuhanmu
  </p>

  {/* BADGE */}
  <div style={badgeWrapper}>

    <div style={badge}>
      🩸 {state.golongan || "Semua Golongan"}
    </div>

    <div style={badge}>
      📍 {state.lokasi || "Semua Lokasi"}
    </div>

  </div>

  {/* FILTER CARD */}
  <div style={filterCard}>

<select
  value={selectedGolongan}
  style={selectStyle}
  onChange={(e) => setSelectedGolongan(e.target.value)}
>
      <option value="">Semua Golongan</option>

      <option>A+</option>
      <option>A-</option>
      <option>B+</option>
      <option>B-</option>
      <option>AB+</option>
      <option>AB-</option>
      <option>O+</option>
      <option>O-</option>
    </select>

<select
  value={selectedLokasi}
  style={{
    ...selectStyle,
    marginTop: "15px",
  }}
  onChange={(e) => setSelectedLokasi(e.target.value)}
>
      <option value="">Semua Lokasi</option>

      <option>Galung Maloang</option>
      <option>Lemoe</option>
      <option>Lompoe</option>
      <option>Watang Bacukiki</option>
      <option>Bumi Harapan</option>
      <option>Cappa Galung</option>
      <option>Kampung Baru</option>
      <option>Lumpue</option>
      <option>Sumpang Minangae</option>
      <option>Tiro Sompe</option>
      <option>Bukit Harapan</option>
      <option>Bukit Indah</option>
      <option>Kampung Pisang</option>
      <option>Lakessi</option>
      <option>Ujung Baru</option>
      <option>Ujung Lare</option>
      <option>Watang Soreang</option>
      <option>Labukkang</option>
      <option>Lapadde</option>
      <option>Mallusetasi</option>
      <option>Ujung Bulu</option>
      <option>Ujung Sabbang</option>
    </select>

  </div>

  {/* LIST */}
  <div style={listWrapper}>

    {filteredData.length === 0 ? (

      <div style={emptyState}>

        <div style={{ fontSize: "70px" }}>
          🩸
        </div>

        <h2>Tidak Ada Pendonor</h2>

        <p>
          Belum ada pendonor yang sesuai dengan pencarianmu
        </p>

      </div>

    ) : (

      filteredData.map((item) => (

        <div style={modernCard} key={item._id}>

          <div style={bloodCircle}>
            {item.golonganDarah}
          </div>

          <div style={{ flex: 1 }}>

            <h2 style={nameStyle}>
              {item.nama}
            </h2>

            <p style={infoStyle}>
              📍 {item.lokasi}
            </p>

            <p style={infoStyle}>
              📞 {item.kontak}
            </p>

          </div>

          <button
            onClick={() =>
              navigate("/detailDonor", {
  state: {
    donor: item,
    golongan: selectedGolongan,
    lokasi: selectedLokasi,
  },
})
            }
            style={detailButton}
          >
            Detail
          </button>

        </div>

      ))

    )}

  </div>

</div>

       
        </div>
     
   
  );
}

/* ================= STYLE ================= */

// ================= NAVBAR =================

const navbarStyle = {
  width: "100%",
  background: "linear-gradient(to right, #f8caca, #d60000)",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const navContent = {
  width: "100%",
  maxWidth: "1200px",
  padding: "12px 20px",
  display: "flex",
  alignItems: "center",
  color: "#3b1f1f",
  fontWeight: "bold",
};

// ================= CONTAINER =================

const containerStyle = {
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #f8caca, #d60000)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "50px",
  paddingBottom: "50px",
};

// ================= TITLE =================

const titleStyle = {
  color: "#111",
  fontSize: "42px",
  textAlign: "center",
  marginBottom: "10px",
  fontWeight: "bold",
};

const subtitleStyle = {
  textAlign: "center",
  color: "white",
  marginBottom: "35px",
  fontSize: "17px",
};

// ================= BADGE =================

const badgeWrapper = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginBottom: "30px",
};

const badge = {
  background: "white",
  padding: "12px 22px",
  borderRadius: "14px",
  fontWeight: "bold",
  color: "#111",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

// ================= FILTER =================

const filterCard = {
  width: "420px",
  background: "white",
  padding: "25px",
  borderRadius: "22px",
  margin: "0 auto",
  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
};

const selectStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "14px",
  border: "1px solid #eee",
  fontSize: "15px",
  outline: "none",
  background: "#fafafa",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

// ================= LIST =================

const listWrapper = {
  width: "100%",
  maxWidth: "700px",
  marginTop: "35px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

// ================= CARD =================

const modernCard = {
  width: "100%",
  background: "white",
  borderRadius: "24px",
  padding: "22px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
};

// ================= BLOOD =================

const bloodCircle = {
  width: "75px",
  height: "75px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #ff4d4d, #d60000)",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "22px",
  flexShrink: 0,
};

// ================= TEXT =================

const nameStyle = {
  fontWeight: "bold",
  color: "#111",
  fontSize: "22px",
  marginBottom: "8px",
};

const infoStyle = {
  color: "#666",
  marginTop: "5px",
  fontSize: "15px",
};

// ================= BUTTON =================

const detailButton = {
  background: "linear-gradient(135deg, #ff4d4d, #d60000)",
  color: "white",
  border: "none",
  padding: "12px 22px",
  borderRadius: "14px",
  cursor: "pointer",
  fontWeight: "bold",
  boxShadow: "0 5px 15px rgba(255,0,0,0.25)",
};

// ================= EMPTY =================

const emptyState = {
  textAlign: "center",
  marginTop: "60px",
  color: "white",
};

export default HasilDonor;