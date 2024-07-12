import React, { useState } from 'react';
import { Container, Box, Grid, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';
import axios from 'axios';
import SidebarRight from './SidebarRight'; // Import SidebarRight di sini
import CalculatorHeader from './CalculatorHeader';
import CalculatorResult from './CalculatorResult';

const CalculatorForm = () => {
  const [luasTanah, setLuasTanah] = useState(0);
  const [luasRuangan, setLuasRuangan] = useState(0);
  const [fasilitas, setFasilitas] = useState([]);
  const [harga, setHarga] = useState(0);

  const handleChangeLuasTanah = (event) => {
    setLuasTanah(parseFloat(event.target.value));
  };
  
  const handleChangeLuasRuangan = (event) => {
    setLuasRuangan(parseFloat(event.target.value));
  };

  const handleFasilitasChange = (event) => {
    setFasilitas(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/hitung_harga', {
        luas_tanah: luasTanah,
        luas_ruangan: luasRuangan,
        fasilitas: fasilitas,
      });
      setHarga(response.data.harga);
    } catch (error) {
      console.error('Error calculating price:', error);
    }
  };

  return (
    <Container maxWidth="lg"> {/* Ubah maxWidth sesuai kebutuhan Anda */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box my={4} sx={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
            <CalculatorHeader />
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Luas Tanah (m²)"
                    value={luasTanah}
                    onChange={handleChangeLuasTanah}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Luas Ruangan (m²)"
                    value={luasRuangan}
                    onChange={handleChangeLuasRuangan}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="fasilitas-label">Fasilitas</InputLabel>
                    <Select
                      labelId="fasilitas-label"
                      multiple
                      value={fasilitas}
                      onChange={handleFasilitasChange}
                      label="Fasilitas"
                    >
                      <MenuItem value="garasi">Garasi</MenuItem>
                      <MenuItem value="kolam_renang">Kolam Renang</MenuItem>
                      <MenuItem value="wifi">WiFi</MenuItem>
                      <MenuItem value="1_kamar">1 Kamar</MenuItem>
                      <MenuItem value="2_kamar">2 Kamar</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Hitung Harga
                  </Button>
                </Grid>
              </Grid>
            </form>
            {harga > 0 && (
              <CalculatorResult harga={harga} />
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CalculatorForm;
