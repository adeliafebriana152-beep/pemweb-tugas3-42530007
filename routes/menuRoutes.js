const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/', menuController.getMenuCatalog);
router.get('/menu/add', menuController.getAddForm);          // Form Tambah
router.post('/menu/add', menuController.postAddMenu);        // Aksi Tambah (POST)
router.get('/menu/edit/:id', menuController.getEditForm);    // Form Edit
router.post('/menu/edit/:id', menuController.postUpdateMenu);// Aksi Update (POST)
router.post('/menu/delete/:id', menuController.postDeleteMenu);// Aksi Delete (POST)
router.get('/menu/:id', menuController.getMenuDetail);       // Detail

module.exports = router;