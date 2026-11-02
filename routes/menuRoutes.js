const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Route Katalog (Menangkap ?kategori=...)
router.get('/', menuController.getMenuCatalog);

// Route Detail (Menangkap /menu/:id)
router.get('/menu/:id', menuController.getMenuDetail);

module.exports = router;