import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Box, useMediaQuery } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { Container } from './Layout.styles';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width: 601px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Container isNonMobile={isNonMobile}>
      <Sidebar
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
