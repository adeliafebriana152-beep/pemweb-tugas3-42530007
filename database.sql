CREATE DATABASE IF NOT EXISTS sore_di_bali_db;

USE sore_di_bali_db;

CREATE TABLE IF NOT EXISTS menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  kategori ENUM('kopi', 'non-kopi', 'makanan') NOT NULL,
  harga INT NOT NULL,
  deskripsi TEXT,
  gambar VARCHAR(255)
);

INSERT INTO menu (nama, kategori, harga, deskripsi, gambar) VALUES
('Americano', 'kopi', 20000, 'Kopi hitam 100% murni khas Arabika Kintamani.', '/images/americano.webp'),
('Cappuccino', 'kopi', 25000, 'Espresso disajikan dengan paduan susu dan busa tebal yang lembut.', '/images/cappucino.webp'),
('Cafe Latte', 'kopi', 23000, 'Espresso disajikan dengan paduan susu dan busa tipis.', '/images/cafelatte.webp'),
('Matcha Latte', 'non-kopi', 25000, 'Minuman matcha asli khas Jepang dengan rasa yang autentik.', '/images/matcha latte.webp'),
('Ube Latte', 'non-kopi', 28000, 'Minuman ube khas Korea dengan rasa yang unik.', '/images/ubelatte.webp'),
('Chocolatte', 'non-kopi', 22000, 'Minuman cokelat panas dengan rasa yang kaya.', '/images/chocolatte.webp'),
('Ice Tea', 'non-kopi', 18000, 'Minuman dingin dengan rasa teh asli yang menyegarkan.', '/images/icetea.webp'),
('Choco Toast', 'makanan', 25000, 'Roti panggang mentega dengan isian cokelat lumer.', '/images/roti bakar.webp'),
('Croissant', 'makanan', 20000, 'Croissant lembut dengan rasa yang enak.', '/images/croissant.webp'),
('Bagel Sandwich', 'makanan', 30000, 'Makanan yang terbuat dari bagel dengan isian daging lezat.', '/images/bagel sandwich.webp'),
('French Fries', 'makanan', 18000, 'Kentang goreng renyah dengan rasa yang lezat.', '/images/french fries.webp');