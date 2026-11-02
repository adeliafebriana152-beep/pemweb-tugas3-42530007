const express = require('express');
const path = require('path');
const menuRoutes = require('./routes/menuRoutes');

const app = express();
const PORT = 3000;

// Konfigurasi View Engine & Path Absolut 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware Static Files untuk CSS 
app.use(express.static(path.join(__dirname, 'public')));

// Menggunakan Routes
app.use('/', menuRoutes);

// Handling Route Not Found (404)
app.use((req, res) => {
  res.status(404).render('404', { title: 'Halaman Tidak Ditemukan' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});