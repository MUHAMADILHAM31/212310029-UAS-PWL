const solver = require('simplex-solver');

exports.hitungHarga = (req, res) => {
  const { luas_tanah, luas_ruangan, fasilitas, jumlah_kamar } = req.body;

  // Definisikan objective function (fungsi tujuan)
  const objective = `maximize: ${luas_tanah} + ${luas_ruangan} + ${jumlah_kamar}`;

  // Definisikan constraints (kendala)
  const constraints = [];

  if (fasilitas.includes('garasi')) {
    constraints.push('garasi <= 1');
  }
  if (fasilitas.includes('kolam_renang')) {
    constraints.push('kolam_renang <= 1');
  }
  if (fasilitas.includes('wifi')) {
    constraints.push('wifi <= 1');
  }
  if (fasilitas.includes('1_kamar')) {
    constraints.push('1_kamar <= 1');
  }
  if (fasilitas.includes('2_kamar')) {
    constraints.push('2_kamar <= 1');
  }

  // Memasukkan kendala ke dalam solver
  constraints.forEach((constraint) => {
    solver.Constraint(constraint);
  });

  // Menyelesaikan masalah linier programming
  const result = solver.solve(objective);
  
  res.json({ harga: result });
};
