import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { Box, useMediaQuery } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { Container } from './Layout.styles';
import { Sidebar } from '../Sidebar/Sidebar';
import { useGetUserByIdQuery } from '../../features/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

export interface IUser {
  user: {
    _id: string;
    name: string;
    email: string;
    password: string;
    city: string;
    country: string;
    occupation: string;
    phoneNumber: string;
    role: string;
  };
}

const Layout = () => {
  const isNonMobile = useMediaQuery('(min-width: 601px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state: RootState) => state.global.userId);
  const { data } = useGetUserByIdQuery(userId);

  return (
    <Container isNonMobile={isNonMobile}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isNonMobile={isNonMobile}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
