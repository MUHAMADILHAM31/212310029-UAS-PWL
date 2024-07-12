
import React from 'react';
import { Grid, Box } from '@mui/material';
import SidebarRight from '../components/SidebarRight';
import CalculatorForm from '../components/CalculatorForm';

const MainLayout = () => (
  <Grid container spacing={2} sx={{ padding: 2 }}>
    <Grid item xs={12} ml={-4}>
      <CalculatorForm />
    </Grid>
    <Grid item xs={12} md={4}>
      <SidebarRight />
    </Grid>
  </Grid>
);

export default MainLayout;
