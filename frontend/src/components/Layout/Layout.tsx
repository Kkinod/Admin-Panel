import React from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { Container } from './Layout.styles';

const Layout = () => {
  return (
    <Container>
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
