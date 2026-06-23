import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ tambah
import logo from "./assets/logo.jpeg";

function ProfileDonor({ setPage, user }) {
  const [donor, setDonor] = useState([]);
  const navigate = useNavigate(); // ✅ tambah

  useEffect(() => {
    fetch("http://localhost:5000/donor")
      .then(res => res.json())
      .then(res => {
        console.log("USER:", user);
        console.log("DATA:", res);

        const userDonor = res.filter(
          d => String(d.userId) === String(user?._id)
        );

        setDonor(userDonor);
      });
  }, []);

  const handleDelete = async (id) => {
    const toggleStatus = async (id, currentStatus) => {

  const newStatus =
    currentStatus === "Aktif"
      ? "Tidak Aktif"
      : "Aktif";

  try {

    await fetch(
      `http://localhost:5000/donor/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      }
    );

    setDonor(
      donor.map((item) =>
        item._id === id
          ? { ...item, status: newStatus }
          : item
      )
    );

  } catch (err) {
    console.log(err);
    alert("Gagal update status");
  }
};
  const confirmDelete = window.confirm(
    "Yakin ingin menghapus data donor?"
  );

  if (!confirmDelete) return;

  try {
    await fetch(`http://localhost:5000/donor/${id}`, {
      method: "DELETE",
    });

    setDonor(donor.filter((item) => item._id !== id));

  } catch (err) {
    console.log(err);
    alert("Gagal hapus data");
  }
};
 const toggleStatus = async (
    id,
    currentStatus
  ) => {

    const newStatus =
      currentStatus === "Aktif"
        ? "Tidak Aktif"
        : "Aktif";

    try {

      await fetch(
        `http://localhost:5000/donor/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      setDonor(
        donor.map((item) =>
          item._id === id
            ? {
                ...item,
                status: newStatus,
              }
            : item
        )
      );

    } catch (err) {

      console.log(err);

    }
  };

  return (
  <div>

    {/* NAVBAR */}
   {/* NAVBAR */}
<div style={navbarStyle}>
  <div style={navContent}>

    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="logo"
        style={{
          width: "42px",
          marginRight: "12px",
        }}
      />

      <span
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "white",
        }}
      >
        Sistem Informasi Pencarian Donor Darah di Kota Parepare
      </span>
    </div>

    <div style={userBadge}>
      👤 {user?.nama}
    </div>

  </div>
</div>

    {/* MAIN */}
    <div style={mainLayout}>

      <div style={contentGrid}>

        {/* LEFT */}
        <div style={leftSection}>

          {/* PROFILE */}
          <div style={profileCard}>

            <div style={profileHeader}>
             

              <div>
                <h2 style={profileName}>
                  {user?.nama}
                </h2>

                <p style={profileEmail}>
                  {user?.email}
                </p>
              </div>
            </div>

          </div>

          {/* TITLE */}
          <h2 style={sectionTitle2}>
            Data Donor Saya
          </h2>

          {/* DONOR */}
          {donor.length === 0 ? (

            <div style={emptyCard}>
              <h3 style={{ color: "#444" }}>
                Belum Ada Data Donor
              </h3>

              <p style={{ color: "#777" }}>
                Kamu belum mendaftarkan diri sebagai pendonor.
              </p>

              <button
                onClick={() => navigate("/cek")}
                style={actionButton}
              >
                Jadi Pendonor
              </button>
            </div>

          ) : (

            donor.map((item) => (

              <div key={item._id} style={donorCardModern}>

                <div style={bloodCircle}>
                  {item.golonganDarah}
                </div>

                <div style={{ flex: 1 }}>

                  <div style={dataRow}>
                    <span>👤 Umur</span>
                    <b>{item.umur} Tahun</b>
                  </div>

                  <div style={dataRow}>
                    <span>⚖️ Berat</span>
                    <b>{item.beratBadan} kg</b>
                  </div>

                  <div style={dataRow}>
                    <span>📍 Lokasi</span>
                    <b>{item.lokasi}</b>
                  </div>

                  <div style={dataRow}>
                    <span>📞 Kontak</span>
                    <b>{item.kontak}</b>
                  </div>

                  <div style={dataRow}>
  <span>📌 Status</span>

  <b
    style={{
      color:
        item.status === "Aktif"
          ? "green"
          : "red",
    }}
  >
    {item.status === "Aktif"
      ? "🟢 Aktif"
      : "🔴 Tidak Aktif"}
  </b>
</div>

                  <div style={buttonGroup}>

                    <button
                      onClick={() => navigate("/edit-profile")}
                      style={editButton}
                    >
                      Edit
                    </button>

                   <button
  type="button"
  onClick={() => {
    console.log("CLICK STATUS");
    toggleStatus(item._id, item.status);
  }}
  style={{
    flex: 1,
    background:
      item.status === "Aktif"
        ? "#444"
        : "green",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  {item.status === "Aktif"
    ? "Nonaktifkan"
    : "Aktifkan"}
</button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      style={deleteButton}
                    >
                      Hapus
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

        {/* RIGHT */}
        <div style={rightSection}>

          <div style={infoPanel}>

            <h3 style={tipsTitle}>
              ❤️ Tips Sebelum Donor
            </h3>

            <div style={tipBox}>✔ Tidur cukup</div>
            <div style={tipBox}>✔ Minum air putih</div>
            <div style={tipBox}>✔ Berat minimal 45kg</div>
            <div style={tipBox}>✔ Kondisi tubuh sehat</div>
            <div style={tipBox}>✔ Jangan donor saat sakit</div>

          </div>

        </div>

      </div>

    </div>

  </div>
);
}

const mainLayout = {
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #f8d0d0, #ff4d4d)",
  padding: "40px",
};

const contentGrid = {
  display: "flex",
  gap: "30px",
  alignItems: "flex-start",
  justifyContent: "center",
};

const leftSection = {
  flex: 1,
  maxWidth: "700px",
};

const rightSection = {
  width: "300px",
};

const profileCard = {
  background: "white",
  padding: "28px",
  borderRadius: "25px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
  marginBottom: "25px",
};

const profileTitle = {
  color: "red",
  fontSize: "28px",
  marginBottom: "25px",
  textAlign: "center",
};

const infoItem = {
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 0",
  borderBottom: "1px solid #eee",
  fontSize: "16px",
};

const label = {
  fontWeight: "bold",
  color: "#555",
};

const sectionTitle2 = {
  color: "white",
  fontSize: "30px",
  marginBottom: "20px",
  fontWeight: "bold",
};

const donorCardModern = {
  background: "white",
  borderRadius: "25px",
  padding: "25px",
  display: "flex",
  gap: "25px",
  alignItems: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  marginBottom: "20px",
};

const bloodCircle = {
  width: "85px",
  height: "85px",
  borderRadius: "50%",
  background: "linear-gradient(to bottom, #ff4d4d, #d60000)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: "28px",
  flexShrink: 0,
};

const dataRow = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "12px",
  color: "#444",
  fontSize: "15px",
};

const infoPanel = {
  background: "white",
  borderRadius: "25px",
  padding: "25px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
};

const tipBox = {
  background: "#fff0f0",
  padding: "12px 15px",
  borderRadius: "12px",
  marginBottom: "12px",
  color: "#444",
  fontSize: "14px",
};

const actionButton = {
  marginTop: "20px",
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "14px",
  background: "red",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "15px",
};

const editButton = {
  flex: 1,
  background: "red",
  color: "white",
  border: "none",
  padding: "12px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
};

const deleteButton = {
  flex: 1,
  background: "#444",
  color: "white",
  border: "none",
  padding: "12px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
};

const donorCard = {
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
};

const navbarStyle = {
  width: "100%",
  background: "linear-gradient(to right, #ff4d4d, #d60000)",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
};

const navContent = {
  width: "100%",
  maxWidth: "1200px",
  padding: "14px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const userBadge = {
  background: "rgba(255,255,255,0.15)",
  padding: "10px 18px",
  borderRadius: "30px",
  color: "white",
  fontWeight: "bold",
  fontSize: "14px",
};

const profileHeader = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const avatarCircle = {
  width: "75px",
  height: "75px",
  borderRadius: "50%",
  background: "linear-gradient(to bottom, #ff4d4d, #d60000)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "30px",
  fontWeight: "bold",
};

const profileName = {
  margin: 0,
  color: "#222",
};

const profileEmail = {
  marginTop: "5px",
  color: "#777",
};

const emptyCard = {
  background: "white",
  padding: "40px",
  borderRadius: "25px",
  textAlign: "center",
};

const buttonGroup = {
  display: "flex",
  gap: "10px",
  marginTop: "20px",
};

const tipsTitle = {
  color: "red",
  marginBottom: "20px",
  textAlign: "center",
};
export default ProfileDonor;