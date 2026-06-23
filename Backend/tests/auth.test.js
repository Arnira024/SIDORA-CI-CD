const request = require("supertest");
const app = require("../server");

describe("SIDORA API Testing", () => {

  test("GET / harus mengembalikan Backend jalan", async () => {

    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Backend jalan");

  });

});

test("POST /login dengan email tidak terdaftar", async () => {

  const response = await request(app)
    .post("/login")
    .send({
      email: "tidakada@gmail.com",
      password: "123456"
    });

  expect(response.statusCode).toBe(400);
  expect(response.body.message).toBe("Email tidak ditemukan");

});

test("GET /donor harus mengembalikan data donor", async () => {

  const response = await request(app).get("/donor");

  expect(response.statusCode).toBe(200);

});


test("POST /register tanpa data", async () => {

  const response = await request(app)
    .post("/register")
    .send({});

  expect(response.statusCode).toBe(400);

});

test("GET /donor/user dengan id tidak valid", async () => {

  const response = await request(app)
    .get("/donor/user/123456");

  expect(response.statusCode).toBe(200);

});

test("POST /login berhasil", async () => {

  const response = await request(app)
    .post("/login")
    .send({
      email: "user@example.com",
      password: "password"
    });

  console.log(response.body);

});

test("GET /donor/user dengan userId tidak ditemukan", async () => {

  const response = await request(app)
    .get("/donor/user/userTidakAda123");

  expect(response.statusCode).toBe(200);

});

test("POST /register dengan email yang sudah digunakan", async () => {

  const response = await request(app)
    .post("/register")
    .send({
      nama: "Test User",
      email: "user@example.com",
      password: "123456"
    });

  expect([200, 400]).toContain(response.statusCode);

});

test("PUT /donor dengan id tidak valid", async () => {

  const response = await request(app)
    .put("/donor/123456789")
    .send({
      status: "Tidak Aktif"
    });

  expect([404, 500]).toContain(response.statusCode);

});

test("DELETE /donor dengan id tidak valid", async () => {

  const response = await request(app)
    .delete("/donor/123456789");

  expect([404, 500]).toContain(response.statusCode);

});

test("POST /register dengan data valid", async () => {

  const response = await request(app)
    .post("/register")
    .send({
      nama: "User Testing Jest",
      email: `user${Date.now()}@gmail.com`,
      password: "123456"
    });

  expect(response.statusCode).toBe(200);

});

test("POST /donor tanpa token", async () => {

  const response = await request(app)
    .post("/donor")
    .send({
      nama: "Test Donor",
      jenisKelamin: "Perempuan",
      umur: 20,
      beratBadan: 50,
      golonganDarah: "A+",
      lokasi: "Parepare",
      kontak: "08123456789",
      userId: "123"
    });

  expect(response.statusCode).toBe(401);

});

test("POST /donor dengan token tidak valid", async () => {

  const response = await request(app)
    .post("/donor")
    .set("Authorization", "Bearer tokenpalsu")
    .send({
      nama: "Test",
      jenisKelamin: "Perempuan",
      umur: 20,
      beratBadan: 50,
      golonganDarah: "A+",
      lokasi: "Parepare",
      kontak: "08123456789",
      userId: "123"
    });

  expect(response.statusCode).toBe(401);

});

test("POST /donor dengan format token salah", async () => {

  const response = await request(app)
    .post("/donor")
    .set("Authorization", "Token abcdefg")
    .send({
      nama: "Test",
      jenisKelamin: "Perempuan",
      umur: 20,
      beratBadan: 50,
      golonganDarah: "A+",
      lokasi: "Parepare",
      kontak: "08123456789",
      userId: "123"
    });

  expect(response.statusCode).toBe(401);

});

test("POST /login password salah", async () => {

  const response = await request(app)
    .post("/login")
    .send({
      email: "user@example.com",
      password: "salah123"
    });

  expect([400, 500]).toContain(response.statusCode);

});

test("GET /donor/user dengan userId kosong", async () => {

  const response = await request(app)
    .get("/donor/user/");

  expect([404, 500]).toContain(response.statusCode);

});

test("PUT /donor tanpa body", async () => {

  const response = await request(app)
    .put("/donor/123456789")
    .send({});

  expect([404, 500]).toContain(response.statusCode);

});

test("POST /login password salah", async () => {

  const response = await request(app)
    .post("/login")
    .send({
      email: "user@example.com",
      password: "passwordSalah"
    });

  expect([400, 500]).toContain(response.statusCode);

});

test("POST /login tanpa password", async () => {

  const response = await request(app)
    .post("/login")
    .send({
      email: "user@example.com"
    });

  expect([400, 500]).toContain(response.statusCode);

});

test("POST /login tanpa email", async () => {

  const response = await request(app)
    .post("/login")
    .send({
      password: "123456"
    });

  expect(response.statusCode).toBe(200);

});

test("GET /donor/user dengan user valid", async () => {

  const semuaDonor = await request(app).get("/donor");

  const donor = semuaDonor.body[0];

  const response = await request(app)
    .get(`/donor/user/${donor.userId}`);

  expect(response.statusCode).toBe(200);

});

test("DELETE /donor dengan format id salah", async () => {

  const response = await request(app)
    .delete("/donor/abc");

  expect(response.statusCode).toBe(500);

});

test("PUT /donor dengan format id salah", async () => {

  const response = await request(app)
    .put("/donor/abc")
    .send({
      status: "Aktif"
    });

  expect(response.statusCode).toBe(500);

});

test("POST /login tanpa body", async () => {

  const response = await request(app)
    .post("/login")
    .send({});

  expect([400, 500]).toContain(response.statusCode);

});

test("POST /register email null", async () => {

  const response = await request(app)
    .post("/register")
    .send({
      nama: "Test",
      email: null,
      password: "123456"
    });

  expect([200, 400, 500]).toContain(response.statusCode);

});

const jwt = require("jsonwebtoken");

test("POST /donor berhasil dengan token valid", async () => {

  const token = jwt.sign(
    {
      id: "123",
      email: "test@gmail.com"
    },
    "donordarahparepare"
  );

  const response = await request(app)
    .post("/donor")
    .set("Authorization", `Bearer ${token}`)
    .send({
      nama: "Donor Jest",
      jenisKelamin: "Perempuan",
      umur: 20,
      beratBadan: 50,
      golonganDarah: "A+",
      lokasi: "Parepare",
      kontak: "08123456789",
      userId: "123"
    });

  expect(response.statusCode).toBe(200);

});

test("POST /donor token valid tetapi data kosong", async () => {

  const token = jwt.sign(
    {
      id: "123",
      email: "test@gmail.com"
    },
    "donordarahparepare"
  );

  const response = await request(app)
    .post("/donor")
    .set("Authorization", `Bearer ${token}`)
    .send({});

  expect([200, 500]).toContain(response.statusCode);

});