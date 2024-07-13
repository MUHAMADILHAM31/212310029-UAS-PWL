import React from 'react';
import { Typography, Box } from '@mui/material';
import logo from '../assets/images.png';

const CalculatorHeader = () => {
  return (
    <Box mb={2} textAlign="center" style={{ backgroundColor: '#1976d2', padding: '40px' }}>
      <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
      <Typography variant="h4" component="h1" gutterBottom  style={{ color: '#fff' }}>
       RentValue
      </Typography>
      <Typography variant="subtitle1"  style={{ color: '#fff' }}>
        Selamat datang di aplikasi kalkulator harga kontrakan
      </Typography>
    </Box>
  );
};

export default CalculatorHeader;
