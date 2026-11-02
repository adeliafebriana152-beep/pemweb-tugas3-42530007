// Data Array Lokal 
const menuData = [
  { id: 1, nama: 'Americano', kategori: 'kopi', harga: 20000, deskripsi: 'Kopi hitam 100% murni khas Arabika Kintamani.', gambar: '/images/americano.webp' },
  { id: 2, nama: 'Cappuccino', kategori: 'kopi', harga: 25000, deskripsi: 'Espresso disajikan dengan paduan susu dan busa tebal yang lembut.', gambar: '/images/cappucino.webp' },
  { id: 3, nama: 'Cafe Latte', kategori: 'kopi', harga: 23000, deskripsi: 'Espresso disajikan dengan paduan susu dan busa tipis.', gambar: '/images/cafelatte.webp' },
  { id: 4, nama: 'Matcha Latte', kategori: 'non-kopi', harga: 25000, deskripsi: 'Minuman matcha asli khas Jepang dengan rasa yang autentik.', gambar: '/images/matcha latte.webp' },
  { id: 5, nama: 'Ube Latte', kategori: 'non-kopi', harga: 28000, deskripsi: 'Minuman ube khas Korea dengan rasa yang unik.', gambar: '/images/ubelatte.webp' },
  { id: 6, nama: 'Chocolatte', kategori: 'non-kopi', harga: 22000, deskripsi: 'Minuman cokelat panas dengan rasa yang kaya.', gambar: '/images/chocolatte.webp' },
  { id: 7, nama: 'Ice Tea', kategori: 'non-kopi', harga: 18000, deskripsi: 'Minuman dingin dengan rasa teh asli yang menyegarkan.', gambar: '/images/icetea.webp' },
  { id: 8, nama: 'Choco Toast', kategori: 'makanan', harga: 25000, deskripsi: 'Roti panggang mentega dengan isian cokelat lumer.', gambar: '/images/roti bakar.webp' },
  { id: 9, nama: 'Croissant', kategori: 'makanan', harga: 20000, deskripsi: 'Croissant lembut dengan rasa yang enak.', gambar: '/images/croissant.webp' },
  { id: 10, nama: 'Bagel Sandwich', kategori: 'makanan', harga: 30000, deskripsi: 'Makanan yang terbuat dari bagel dengan isian daging lezat.', gambar: '/images/bagel sandwich.webp' },
  { id: 11, nama: 'French Fries', kategori: 'makanan', harga: 18000, deskripsi: 'Kentang goreng renyah dengan rasa yang lezat.', gambar: '/images/french fries.webp' }
]; 


// Halaman Katalog (Query Parameter Handling req.query)
exports.getMenuCatalog = (req, res) => {
  const { kategori } = req.query; // Menangkap Query Parameter
  let filteredMenu = menuData;

  if (kategori) {
    filteredMenu = menuData.filter(item => item.kategori.toLowerCase() === kategori.toLowerCase());
  }

  // Pengiriman data dinamis via res.render() 
  res.render('index', {
    title: 'Katalog Menu Kafe',
    menus: filteredMenu,
    selectedKategori: kategori || 'semua'
  });
};

// Halaman Detail (Route Parameter Handling req.params)
exports.getMenuDetail = (req, res) => {
  const menuId = parseInt(req.params.id); // Menangkap Route Parameter
  const menuItem = menuData.find(item => item.id === menuId);

  // Jika ID tidak ditemukan 
  if (!menuItem) {
    return res.status(404).render('404', { title: 'Menu Tidak Ditemukan' });
  }

  res.render('detail', {
    title: `Detail - ${menuItem.nama}`,
    item: menuItem
  });
};