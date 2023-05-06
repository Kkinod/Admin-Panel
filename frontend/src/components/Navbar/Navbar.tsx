import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Menu as MenuIcon,
  Search,
  ArrowDropDownOutlined,
} from '@mui/icons-material';
import { AppBar, IconButton, InputBase, useTheme } from '@mui/material';
import profileImage from '../../assets/images/profile.jpg';
import { setMode } from '../../features/globalSlice';
import {
  DarkModeIcon,
  LeftContainer,
  LeftSideWrapper,
  LightModeIcon,
  RightContainer,
  SettingsIcon,
  TopAppBar,
  TopToolbar,
} from './Navbar.styles';

interface INavbar {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: INavbar) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <TopAppBar>
      <TopToolbar>
        <LeftContainer>
          <IconButton
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="open/close sidebar"
          >
            <MenuIcon />
          </IconButton>
          <LeftSideWrapper>
            <InputBase placeholder="Search..." />
            <IconButton aria-label="search">
              <Search />
            </IconButton>
          </LeftSideWrapper>
        </LeftContainer>
        <RightContainer>
          <IconButton onClick={() => dispatch(setMode())} aria-label="theme">
            {theme.palette.mode === 'dark' ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <IconButton aria-label="settings">
            <SettingsIcon />
          </IconButton>
        </RightContainer>
      </TopToolbar>
    </TopAppBar>
  );
};

export default Navbar;
