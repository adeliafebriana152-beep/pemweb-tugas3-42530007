# Sore di Bali Cafe - Web Application CRUD Relasional 

Aplikasi web manajemen menu kafe interaktif yang dibangun menggunakan **Express.js**, **EJS**, dan **MySQL**. Proyek ini diimplementasikan untuk memenuhi tugas mata kuliah Pemrograman Web dengan penekanan pada fungsionalitas **CRUD Penuh**, pengamanan basis data dengan **Prepared Statements**, isolasi kredensial lingkungan (`.env`), serta konektivitas berbasis **Connection Pool**.
Pada proyek ini saya mengembangkan web dari proyek pemweb-tugas2 dalam implementasinya.

---

## Identitas 
* **Nama:** Made Adelia Febriana
* **NIM:** 42530007
* **Mata Kuliah:** Pemrograman Web (Semester 3)
* **Dosen:** Ir. Gede Humaswara Prathama, S.T., M.T.
* **Institusi:** Program Studi Teknologi Informasi, Fakultas Teknik dan Informatika, Universitas Pendidikan Nasional 
---

## Fitur Utama Aplikasi
* Tampilan Utama Web
  <img width="1916" height="1008" alt="image" src="https://github.com/user-attachments/assets/a379cdba-1812-4560-81e0-d4d75fbf9460" />
---

1. **Operasi CRUD Lengkap:**
   - **Create:** Menambahkan data menu baru melalui formulir input berbasis EJS.
     <img width="1897" height="877" alt="image" src="https://github.com/user-attachments/assets/a5bcbc62-2ce1-4575-899f-185ddbf42851" />

   - **Read:** Menampilkan katalog menu interaktif lengkap dengan fitur **Filter Kategori** (`req.query`) dan **Halaman Detail Menu** (`req.params.id`).
     * Filter Menu
      <img width="1901" height="878" alt="image" src="https://github.com/user-attachments/assets/01374b47-159f-4db1-bfa2-4c7a5ac4cc37" />
     * Halaman Detail Menu
      <img width="1895" height="878" alt="image" src="https://github.com/user-attachments/assets/80cd243d-121c-4807-80ae-ca7347c1bacf" />

   - **Update:** Memperbarui informasi data menu terpilih berdasarkan ID unik. (Sudah menerapkan Pre-field)
     <img width="1896" height="873" alt="image" src="https://github.com/user-attachments/assets/93a99b8f-0f02-4bdd-ae17-e359aa78b4e0" />

     
   - **Delete:** Menghapus data menu dari basis data dengan konfirmasi tindakan.
     <img width="1890" height="875" alt="image" src="https://github.com/user-attachments/assets/292be512-4764-4cd9-a017-cd2a5a4dd5f7" />

1. **Arsitektur Post-Redirect-Get (PRG):** Mengeliminasi risiko duplikasi eksekusi data mutasi (POST) saat halaman di-refresh.
2. **Keamanan Prepared Statements:** Seluruh perintah SQL dinamis (`SELECT`, `INSERT`, `UPDATE`, `DELETE`) menggunakan query berparameter (`?`) untuk memblokir celah serangan **SQL Injection**.
3. **Isolasi Kredensial Lingkungan:** Menyimpan konfigurasi basis data sensitif di dalam file `.env` yang terisolasi dari repositori publik.
4. **MySQL Connection Pool:** Mengelola koneksi basis data yang efisien menggunakan driver `mysql2/promise`.

---

## Struktur Direktori Proyek

```text
pemweb-tugas3-42530007/
├── config/
│   └── db.js                 # Konfigurasi MySQL Connection Pool
├── controllers/
│   └── menuController.js     # Logika Bisnis & Query Prepared Statements (CRUD)
├── public/
│   ├── images/               # Berkas aset gambar menu
│   └── style.css             # Desain gaya tampilan (Tema Sore di Bali)
├── routes/
│   └── menuRoutes.js         # Pengalamatan Rute Aplikasi (Routing)
├── views/
│   ├── partials/
│   │   ├── navbar.ejs        # Komponen Navigasi
│   │   └── footer.ejs        # Komponen Footer
│   ├── 404.ejs               # Tampilan Halaman Tidak Ditemukan
│   ├── add.ejs               # Formulir Tambah Data (Create)
│   ├── detail.ejs            # Tampilan Detail Data (Read)
│   ├── edit.ejs              # Formulir Ubah Data (Update)
│   └── index.ejs             # Katalog Menu Utama & Filter
├── .env.example              # Templet contoh konfigurasi environment
├── .gitignore                # Berkas pengecualian Git (.env & node_modules)
├── app.js                    # File utama entri aplikasi Express.js
├── database.sql              # Skrip skema DDL & DML data sampel awal
└── package.json              # Manajer dependensi & skrip proyek
```

---

## Panduan Menjalankan Proyek
---

### Konfigurasi Basis Data (Import `database.sql`)
1. Buka MySQL Client Anda (MySQL Workbench / phpMyAdmin).
2. Buat basis data baru dan jalankan skrip dari file `database.sql` yang tersedia di direktori *root*:
```sql
CREATE DATABASE IF NOT EXISTS sore_di_bali_db;
USE sore_di_bali_db;
-- (Jalankan seluruh isi perintah pada file database.sql)
```
* **Tampilan Database di Workbench**
  <img width="1197" height="1018" alt="image" src="https://github.com/user-attachments/assets/a8ef240c-6ec6-4b81-b7d8-4142015351e9" />

---

### Konfigurasi Berkas Lingkungan (`.env`)
Salin file `.env.example` menjadi `.env` di folder *root*, lalu sesuaikan kredensial MySQL Anda:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=sore_di_bali_db
DB_PORT=3306
```

### Menjalankan Aplikasi Web
```bash
# Menjalankan aplikasi dalam mode pengembangan (dengan Nodemon)
npm run dev
```
Buka peramban (*browser*) dengan akses: `http://localhost:3000`

---

## Skema Keamanan & Parameterisasi Query

Aplikasi ini secara ketat menerapkan query berparameter pada setiap mutasi dan pencarian data. Contoh penulisan query pada `controllers/menuController.js`:

```javascript
// Contoh Query SELECT dengan Parameterisasi (Read Filter)
const [rows] = await pool.query('SELECT * FROM menu WHERE kategori = ?', [kategori]);

// Contoh Query INSERT dengan Parameterisasi (Create)
await pool.query(
  'INSERT INTO menu (nama, kategori, harga, deskripsi, gambar) VALUES (?, ?, ?, ?, ?)',
  [nama, kategori, harga, deskripsi, gambar]
);
```
Link Youtube : https://youtu.be/0OpCL16H8Ew?si=8o43ijeCScYb_Yeu
---
*pemweb-tugas3-42530007*
