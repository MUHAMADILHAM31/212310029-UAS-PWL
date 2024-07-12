const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const solver = require('javascript-lp-solver');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/hitung_harga', (req, res) => {
  const { luas_tanah, luas_ruangan, fasilitas } = req.body;

  
  const model = {
    optimize: 'cost',
    opType: 'max',
    constraints: {
      luas_tanah: { equal: luas_tanah },
      luas_ruangan: { equal: luas_ruangan },
      garasi: { max: fasilitas.includes('garasi') ? 1 : 0 },
      kolam_renang: { max: fasilitas.includes('kolam_renang') ? 1 : 0 },
      wifi: { max: fasilitas.includes('wifi') ? 1 : 0 },
      '1_kamar': { max: fasilitas.includes('1_kamar') ? 1 : 0 },
      '2_kamar': { max: fasilitas.includes('2_kamar') ? 1 : 0 },
    },
    variables: {
      luas_tanah: { cost: 10000, luas_tanah: 1 },
      luas_ruangan: { cost: 10000, luas_ruangan: 1 },
      garasi: { cost: 200, garasi: 1 },
      kolam_renang: { cost: 1500, kolam_renang: 1 },
      wifi: { cost: 1500, wifi: 1 },
      '1_kamar': { cost: 400, '1_kamar': 1 },
      '2_kamar': { cost: 600, '2_kamar': 1 },
    }
  };

  
  const result = solver.Solve(model);

  if (result.feasible) {
    res.json({ harga: result.result });
  } else {
    res.status(400).json({ error: 'Tidak dapat menghitung harga' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
