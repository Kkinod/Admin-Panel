import * as React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { ChevronLeft, SettingsOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { IconButton, Theme, Typography, useTheme } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import logoTransparent from '../../assets/images/logo_transparent.png';
import { navItems } from './navItems';
import {
  Drawer,
  DrawerHeader,
  StyledChevronRightOutlined,
  StyledImg,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
  StyledTypography,
  SettingsBox,
  UserInformationAvatar,
  SettingsTextWrapper,
  SettingsContainer,
  SettingsText,
  UserOccupationText,
  SettingsIcon,
  SidebarContainer,
  StyledChevronLeftIcon,
} from './Sidebar.styles';

import profileImage from '../../assets/images/profile.jpg';

export interface IIsSidebarOpen {
  isSidebarOpen: boolean;
}

interface ISidebar extends IIsSidebarOpen {
  isNonMobile: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = ({
  isSidebarOpen,
  isNonMobile,
  setIsSidebarOpen,
}: ISidebar) => {
  return (
    <SidebarContainer>
      <Drawer variant="permanent" open={isSidebarOpen}>
        <DrawerHeader>
          <StyledImg src={logoTransparent} alt="Logo" />
          {!isNonMobile && (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <StyledChevronLeftIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {navItems.map(({ text, icon }) => {
            if (!icon) {
              return (
                <StyledTypography key={text} isSidebarOpen={isSidebarOpen}>
                  {text}
                </StyledTypography>
              );
            }
            const lowerCaseText = text.toLowerCase();
            const isActive = useMatch(`/${lowerCaseText}`);
            const activeClassName = isActive ? 'active' : 'inactive';

            return (
              <ListItem key={text} disablePadding>
                <NavLink to={`/${lowerCaseText}`} className={activeClassName}>
                  <StyledListItemButton isSidebarOpen={isSidebarOpen}>
                    <StyledListItemIcon
                      active={isActive}
                      isSidebarOpen={isSidebarOpen}
                    >
                      {icon}
                    </StyledListItemIcon>
                    <StyledListItemText
                      isSidebarOpen={isSidebarOpen}
                      primary={text}
                    />
                    {isActive && <StyledChevronRightOutlined />}
                  </StyledListItemButton>
                </NavLink>
              </ListItem>
            );
          })}
        </List>
        <SettingsContainer>
          <Divider />
          <SettingsBox>
            <SettingsIcon />
            <SettingsTextWrapper>
              <SettingsText>Settings</SettingsText>
            </SettingsTextWrapper>
          </SettingsBox>
        </SettingsContainer>
      </Drawer>
    </SidebarContainer>
  );
};
