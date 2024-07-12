import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../assets/images.png'

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <Typography variant="h6" component="div">
          Rentalizer
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
