import React from 'react';
import { Grid, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import rumahSederhana from '../assets/rumah sederhana.png';
import rumahMenengah from '../assets/rumah sederhana.png';
import rumahMewah from '../assets/rumah sederhana.png';

const rumahData = [
  {
    jenis: 'Rumah Sederhana',
    image: rumahSederhana,
    deskripsi: 'Rumah dengan fasilitas dasar, cocok untuk keluarga kecil atau mahasiswa.',
    harga: 'Rp 1.000.000/bulan',
  },
  {
    jenis: 'Rumah Menengah',
    image: rumahMenengah,
    deskripsi: 'Rumah dengan fasilitas lebih lengkap, cocok untuk keluarga atau profesional muda.',
    harga: 'Rp 2.000.000/bulan',
  },
  {
    jenis: 'Rumah Mewah',
    image: rumahMewah,
    deskripsi: 'Rumah dengan fasilitas premium dan desain modern, cocok untuk eksekutif atau keluarga besar.',
    harga: 'Rp 5.000.000/bulan',
  },
];

const SidebarRight = () => (
  <Box  marginRight={4} sx={{ padding: '20px' }}>
    <Typography variant="h6" gutterBottom>Harga Serupa</Typography>
    <Grid container spacing={2}>
      {rumahData.map((rumah, index) => (
        <Grid item xs={12} key={index}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="140"
              image={rumah.image}
              alt={rumah.jenis}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {rumah.jenis}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {rumah.deskripsi}
              </Typography>
              <Typography variant="subtitle1" color="primary" mt={2}>
                Harga: {rumah.harga}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default SidebarRight;
