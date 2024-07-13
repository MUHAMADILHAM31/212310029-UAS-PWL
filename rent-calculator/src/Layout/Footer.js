import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={10} py={3} textAlign="center" style={{ backgroundColor: '#1976d2' }}>
      <Typography variant="body1" style={{ color: '#fff' }}>
        &copy; 2024 Kalkulator Harga Kontrakan By Muhamad Ilham 
      </Typography>
    </Box>
  );
};

export default Footer;
