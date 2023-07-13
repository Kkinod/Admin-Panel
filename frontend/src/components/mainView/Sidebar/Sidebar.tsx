import * as React from "react";
import { NavLink, useMatch } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { IconButton } from "@mui/material";
import logoTransparent from "../../../assets/images/logo_transparent.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ISidebar } from "../../../types/sidebar";
import { sidebarItems } from "../../../shared/constants/sidebarItems";
import {
  BoxStyled,
  Drawer,
  DrawerHeader,
  SettingsBox,
  SettingsContainer,
  SettingsIcon,
  SettingsText,
  SettingsTextWrapper,
  SidebarContainer,
  StyledChevronLeftIcon,
  StyledChevronRightOutlined,
  StyledImg,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
  StyledTypography,
} from "./Sidebar.styles";

export const Sidebar = ({
  isSidebarOpen,
  isMaxWidth600px,
  setIsSidebarOpen,
}: ISidebar) => {
  return (
    <SidebarContainer>
      <Drawer variant="permanent" open={isSidebarOpen}>
        <DrawerHeader>
          <BoxStyled>
            <StyledImg src={logoTransparent} alt="Logo" />
          </BoxStyled>

          {!isMaxWidth600px && isSidebarOpen && (
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <StyledChevronLeftIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {sidebarItems.map(({ text, icon }) => {
            if (!icon) {
              return (
                <StyledTypography key={text} isSidebarOpen={isSidebarOpen}>
                  {text}
                </StyledTypography>
              );
            }
            const lowerCaseText = text.toLowerCase();
            const isActive = useMatch(`/${lowerCaseText}`);
            const activeClassName = isActive ? "active" : "inactive";

            return (
              <ListItem key={text} disablePadding>
                <NavLink to={`/${lowerCaseText}`} className={activeClassName}>
                  <StyledListItemButton isSidebarOpen={isSidebarOpen}>
                    <StyledListItemIcon
                      active={isActive}
                      isSidebarOpen={isSidebarOpen}
                      isMaxWidth600px={isMaxWidth600px}
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
          <SettingsBox isSidebarOpen={isSidebarOpen}>
            <SettingsIcon />
            {isSidebarOpen && (
              <SettingsTextWrapper>
                <SettingsText>Settings</SettingsText>
              </SettingsTextWrapper>
            )}
          </SettingsBox>
        </SettingsContainer>
      </Drawer>
    </SidebarContainer>
  );
};
