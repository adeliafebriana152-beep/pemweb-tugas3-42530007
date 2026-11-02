const pool = require('../config/db');

// READ: Halaman Katalog (Query Parameter Handling req.query)
exports.getMenuCatalog = async (req, res) => {
  try {
    const { kategori } = req.query; // Menangkap Query Parameter
    let query = 'SELECT * FROM menu';
    let params = [];

    // Menggunakan Prepared Statement jika ada filter kategori
    if (kategori && kategori !== 'semua') {
      query += ' WHERE kategori = ?';
      params.push(kategori);
    }

    // Eksekusi query ke database via connection pool
    const [menus] = await pool.query(query, params);

    // Pengiriman data dinamis via res.render() 
    res.render('index', {
      title: 'Katalog Menu Kafe',
      menus: menus,
      selectedKategori: kategori || 'semua'
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Terjadi kesalahan pada server.');
  }
};

// READ: Halaman Detail (Route Parameter Handling req.params)
exports.getMenuDetail = async (req, res) => {
  try {
    const menuId = parseInt(req.params.id); // Menangkap Route Parameter
    
    // Menggunakan Prepared Statement untuk mencari berdasarkan ID
    const [rows] = await pool.query('SELECT * FROM menu WHERE id = ?', [menuId]);

    // Jika ID tidak ditemukan 
    if (rows.length === 0) {
      return res.status(404).render('404', { title: 'Menu Tidak Ditemukan' });
    }

    res.render('detail', {
      title: `Detail - ${rows[0].nama}`,
      item: rows[0]
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Terjadi kesalahan pada server.');
  }
};

// CREATE: Form Tambah Menu Baru
exports.getAddForm = (req, res) => {
  res.render('add', { title: 'Tambah Menu Baru' });
};

// CREATE: Proses Simpan Menu Baru + Alur PRG (Post-Redirect-Get)
exports.postAddMenu = async (req, res) => {
  try {
    const { nama, kategori, harga, deskripsi, gambar } = req.body;
    
    // Menggunakan Prepared Statement untuk INSERT data
    await pool.query(
      'INSERT INTO menu (nama, kategori, harga, deskripsi, gambar) VALUES (?, ?, ?, ?, ?)',
      [nama, kategori, harga, deskripsi, gambar || '/images/default.webp']
    );

    // Wajib diakhiri res.redirect() 
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Gagal menambahkan menu.');
  }
};

// UPDATE: Form Edit Menu
exports.getEditForm = async (req, res) => {
  try {
    const menuId = req.params.id;
    const [rows] = await pool.query('SELECT * FROM menu WHERE id = ?', [menuId]);

    if (rows.length === 0) {
      return res.status(404).render('404', { title: 'Menu Tidak Ditemukan' });
    }

    res.render('edit', { title: 'Edit Menu', item: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Terjadi kesalahan pada server.');
  }
};

// UPDATE: Proses Perbarui Menu + Alur PRG (Post-Redirect-Get)
exports.postUpdateMenu = async (req, res) => {
  try {
    const menuId = req.params.id;
    const { nama, kategori, harga, deskripsi, gambar } = req.body;

    // Menggunakan Prepared Statement untuk UPDATE data
    await pool.query(
      'UPDATE menu SET nama = ?, kategori = ?, harga = ?, deskripsi = ?, gambar = ? WHERE id = ?',
      [nama, kategori, harga, deskripsi, gambar, menuId]
    );

    // Wajib diakhiri res.redirect() 
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Gagal memperbarui menu.');
  }
};

// DELETE: Proses Hapus Menu + Alur PRG (Post-Redirect-Get)
exports.postDeleteMenu = async (req, res) => {
  try {
    const menuId = req.params.id;

    // Menggunakan Prepared Statement untuk DELETE data
    await pool.query('DELETE FROM menu WHERE id = ?', [menuId]);

    // Wajib diakhiri res.redirect() 
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Gagal menghapus menu.');
  }
};