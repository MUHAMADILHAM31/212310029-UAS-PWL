import React from 'react';
import { Container } from '@mui/material';
// import CalculatorForm from './components/CalculatorForm';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import MainLayout from './Layout/MainLayout';
// import SidebarRight from './components/SidebarRight';
const App = () => {
  return (
    <div>
      <Header />
      <Container>
        {/* <CalculatorForm/> */}
        <MainLayout/>
         </Container>
      <Footer />
    </div>
  );
};

export default App;
