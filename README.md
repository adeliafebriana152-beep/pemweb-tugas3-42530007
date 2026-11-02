# Sore di Bali Cafe - Katalog Menu Web Application

Aplikasi web katalog menu interaktif untuk **Sore di Bali Cafe** yang dibangun menggunakan **Node.js**, **Express.js**, dan template engine **EJS (Embedded JavaScript)**. Proyek ini dibuat untuk memenuhi Tugas Pemrograman Web.
---

### 1. Halaman Utama & Filter Menu (Query Parameter)
Halaman Utama Katalog <img width="955" height="1015" alt="image" src="https://github.com/user-attachments/assets/7b03a53c-d4f4-4baf-969a-7d4c0777ab0f" />
*Gambar 1: Tampilan katalog menu utama dengan implementasi filter kategori (`?kategori=kopi`) menggunakan `req.query`.*

### 2. Halaman Detail Menu (Route Parameter)
Halaman Detail Menu <img width="950" height="1013" alt="image" src="https://github.com/user-attachments/assets/4ec98d4a-a5ea-4daa-a2c5-ceab0ac59bee" />
*Gambar 2: Tampilan detail produk berbasis ID (`/menu/1`) menggunakan `req.params`.*

### 3. Struktur Modularitas EJS Partials
Struktur Partial EJS <img width="953" height="820" alt="image" src="https://github.com/user-attachments/assets/3483baf4-204b-4e47-ab74-797ba5504e4e" />
*Gambar 3: Struktur direktori partials (`navbar.ejs` dan `footer.ejs`) serta sintaks `<%- include() %>` pada view utama.*

### 4. Pembuktian Render HTML di Browser (View Page Source)
View Page Source HTML <img width="957" height="1011" alt="image" src="https://github.com/user-attachments/assets/ed6a99f7-6a85-418a-894d-1e59f84298c1" />
*Gambar 4: Tampilan `View Page Source` di browser (`Ctrl + U`) yang membuktikan bahwa sintaks EJS telah di-render menjadi tag HTML murni di sisi server.*

---

## Fitur Utama & Konsep Teknis

### 1. Penanganan Rute & Parameter (`req.query` & `req.params`)
* **Query Parameter (`req.query`):** Fitur penyaringan (*filtering*) menu berdasarkan kategori (seperti Kopi, Makanan, Non-Kopi) melalui URL query string (contoh: `/?kategori=kopi`).
* **Route Parameter (`req.params`):** Navigasi halaman detail spesifik untuk tiap produk berdasarkan identifier unik (contoh: `/menu/1`).

### 2. Modularitas EJS Partials
* Menggunakan komponen reusable seperti `navbar.ejs` dan `footer.ejs` di dalam folder `views/partials/`.
* Penggabungan partials menggunakan sintaks `<%- include('partials/navbar') %>` untuk menjaga prinsip **DRY (Don't Repeat Yourself)**.

### 3. Server-Side Rendering (`res.render()`)
* Menggabungkan data objek menu dari controller dengan berkas template EJS di sisi peladen (server).
* Mengirimkan dokumen HTML yang sudah selesai dikompilasi ke browser klien, sehingga tidak ada tag EJS yang terekspos ke klien.

---

## Struktur Direktori Proyek

```text
pemweb-tugas2-42530007/

├── controllers/
│   └── menuController.js    # Logika bisnis (req.query, req.params, res.render)
├── routes/
│   └── menuRoutes.js        # Pendefinisian rute aplikasi
├── views/
│   ├── partials/
│   │   ├── navbar.ejs       # Header/Navigasi modular
│   │   └── footer.ejs       # Catatan kaki modular
│   ├── index.ejs            # Tampilan katalog utama
│   ├── detail.ejs           # Tampilan detail menu
│   └── 404.ejs              # Tampilan penanganan error 404
├── app.js                   # Entry point aplikasi Express.js
├── package.json             # Dependensi & script proyek
└── README.md                # Dokumentasi proyek
```
## Video Presentasi Proyek
 [Video Presentasi Tugas di YouTube](https://youtu.be/_DX_chbPgaQ?si=Z8JRoZZ7cDVX2kEx)

