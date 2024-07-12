import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const CalculatorResult = ({ harga }) => {
  return (
    <Paper elevation={3}>
      <Box p={4} textAlign="center">
        <Typography variant="h5">Hasil Perhitungan</Typography>
        <Typography variant="h6">Harga Sewa: Rp {harga.toLocaleString()}</Typography>
      </Box>
    </Paper>
  );
};

export default CalculatorResult;
