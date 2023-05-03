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

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <TopAppBar>
      <TopToolbar>
        <LeftContainer>
          <IconButton onClick={() => console.log('open/close sidebar')}>
            <MenuIcon />
          </IconButton>
          <LeftSideWrapper>
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </LeftSideWrapper>
        </LeftContainer>
        <RightContainer>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </RightContainer>
      </TopToolbar>
    </TopAppBar>
  );
};

export default Navbar;
