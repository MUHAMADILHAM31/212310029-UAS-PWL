import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import CalculatorForm from './components/CalculatorForm';

const App = () => {
  const [calculatorResult, setCalculatorResult] = useState(null);

  const handleCalculatorResult = (result) => {
    setCalculatorResult(result);
  };

  return (
    <div>
      <Header />
      <Grid container spacing={3} style={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={6}>
          <CalculatorForm onResult={handleCalculatorResult} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default App;
