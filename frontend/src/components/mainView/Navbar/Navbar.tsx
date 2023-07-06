import React from "react";
import { useDispatch } from "react-redux";
import { Menu as MenuIcon, Search } from "@mui/icons-material";
import { IconButton, InputBase, Menu, MenuItem, useTheme } from "@mui/material";
import profileImage from "../../../assets/images/profile.jpg";
import { setMode } from "../../../features/globalSlice";
import useToggleMenuWithAnchor from "../../../hooks/useToggleMenuWithAnchor";
import { IUser } from "../Layout/Layout";
import {
  StyledArrowIcon,
  DarkModeIcon,
  FlexBetween,
  LeftContainer,
  LeftSideWrapper,
  LightModeIcon,
  RightContainer,
  SettingsIcon,
  StyledButton,
  StyledImg,
  StyledTypographyContainer,
  StyledTypographyName,
  StyledTypographyOccupation,
  TopAppBar,
  TopToolbar,
} from "./Navbar.styles";
import { labels } from "../../../utils/labels";

interface INavbar extends IUser {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNonMobile: boolean;
}

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  user,
  isNonMobile,
}: INavbar) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const { anchorEl, isOpen, handleClick, handleClose } =
    useToggleMenuWithAnchor();

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
            {theme.palette.mode === "dark" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <IconButton aria-label="settings">
            <SettingsIcon />
          </IconButton>
          {isNonMobile ? (
            <FlexBetween>
              <StyledButton onClick={handleClick}>
                <StyledImg alt="profile" src={profileImage} />
                <StyledTypographyContainer>
                  <StyledTypographyName>{user.name}</StyledTypographyName>
                  <StyledTypographyOccupation>
                    {user.occupation}
                  </StyledTypographyOccupation>
                </StyledTypographyContainer>
                <StyledArrowIcon />
              </StyledButton>
              <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              >
                <MenuItem onClick={handleClose}>
                  {labels.default.logOut}
                </MenuItem>
              </Menu>
            </FlexBetween>
          ) : undefined}
        </RightContainer>
      </TopToolbar>
    </TopAppBar>
  );
};

export default Navbar;
