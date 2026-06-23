import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ TAMBAH
import logo from "./assets/logo.jpeg";

function EditProfile({ setPage, user }) {
  const [form, setForm] = useState(null);
  const navigate = useNavigate(); // ✅ TAMBAH

  // ambil data terakhir (sementara)
  useEffect(() => {
    fetch("http://localhost:5000/donor")
      .then(res => res.json())
      .then(res => {
        const data = res[res.length - 1];
        setForm(data);
        console.log("DATA DIAMBIL:", data);
      });
  }, []);

  if (!form) return <p>Loading...</p>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (
      !form.nama ||
      !form.jenisKelamin ||
      !form.umur ||
      !form.beratBadan ||
      !form.golonganDarah ||
      !form.lokasi ||
      !form.kontak
    ) {
      alert("Semua data wajib diisi!");
      return;
    }

    if (form.umur < 17 || form.umur > 60) {
      alert("Umur harus 17 - 60 tahun");
      return;
    }

    if (form.beratBadan < 45) {
      alert("Berat minimal 45 kg");
      return;
    }

    if (!/^[0-9]{10,13}$/.test(form.kontak)) {
      alert("Nomor HP harus 10-13 digit angka");
      return;
    }

    try {
      console.log("UPDATE ID:", form._id);

      const response = await fetch(`http://localhost:5000/donor/${form._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      console.log("HASIL UPDATE:", result);

      alert("Data berhasil diupdate");

      navigate("/profile"); // ✅ GANTI INI
    } catch (err) {
      console.log(err);
      alert("Gagal update");
    }
  };

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

      {/* FORM */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px"
      }}>
        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          width: "300px"
        }}>
          <h3>Edit Profil</h3>

          <input name="nama" value={form.nama} onChange={handleChange} style={inputStyle} />

          <select name="jenisKelamin" value={form.jenisKelamin} onChange={handleChange} style={inputStyle}>
            <option value="">Pilih</option>
            <option>Laki-laki</option>
            <option>Perempuan</option>
          </select>

          <input type="number" name="umur" value={form.umur} onChange={handleChange} style={inputStyle} />
          <input type="number" name="beratBadan" value={form.beratBadan} onChange={handleChange} style={inputStyle} />

          <select name="golonganDarah" value={form.golonganDarah} onChange={handleChange} style={inputStyle}>
            <option value="">Pilih</option>
            <option>A+</option>
            <option>B+</option>
            <option>AB+</option>
            <option>O+</option>
            <option>A-</option>
            <option>B-</option>
            <option>AB-</option>
            <option>O-</option>
          </select>

          <input name="lokasi" value={form.lokasi} onChange={handleChange} style={inputStyle} />

          <input name="kontak" value={form.kontak} onChange={handleChange} style={inputStyle} />

          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <button onClick={handleUpdate} style={btnSave}>Simpan</button>

            <button
              onClick={() => navigate("/profile")} // ✅ GANTI INI
              style={btnBack}
            >
              Batal
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

/* STYLE */
const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "8px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const btnSave = {
  flex: 1,
  padding: "10px",
  background: "red",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const btnBack = {
  flex: 1,
  padding: "10px",
  background: "gray",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

