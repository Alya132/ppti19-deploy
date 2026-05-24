const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

// TAMBAHKAN INI: Rute Utama
app.get('/', (req, res) => {
  res.send('<h1>Aplikasi Node.js Kelompok A Berhasil!</h1><p>Status: OK</p>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});