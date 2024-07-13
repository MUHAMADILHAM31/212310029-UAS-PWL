const express = require('express');
const router = express.Router();
const { hitungHarga } = require('../controllers/calculatorController');

// Endpoint untuk menghitung harga
router.post('/hitung_harga', hitungHarga);

module.exports = router;
