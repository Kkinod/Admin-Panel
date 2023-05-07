import * as React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
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
} from './Sidebar.styles';

export interface IIsSidebarOpen {
  isSidebarOpen: boolean;
}

export const Sidebar = ({ isSidebarOpen }: IIsSidebarOpen) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={isSidebarOpen}>
        <DrawerHeader>
          <StyledImg src={logoTransparent} alt="Logo" />
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
      </Drawer>
    </Box>
  );
};
