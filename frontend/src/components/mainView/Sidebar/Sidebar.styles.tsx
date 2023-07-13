import { NavLink } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { IGlobalStyleProps } from "../../../types/globalStyle";
import {
  IActiveAndLcText,
  IIsSidebarOpen,
  IStyledNavLink,
  IStyledTypography,
} from "../../../types/sidebar";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import { flexCenter } from "../../../assets/styles/mixins.styles";

const drawerWidth = 240;

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

export const closedMixin = (theme: Theme): CSSObject => ({
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
});

export const SidebarContainer = styled(Box)({
  display: "flex",
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<IGlobalStyleProps>(({ theme, open }) => ({
  boxSizing: "border-box",
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: theme.palette.secondary[100],
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: theme.palette.secondary[100],
    },
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  marginTop: "1.5rem",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  ...flexCenter,
}));

export const StyledImg = styled("img")({
  width: "70%",
  color: "blue",
});

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isSidebarOpen",
})<IStyledTypography>(({ theme, isSidebarOpen }) => ({
  display: isSidebarOpen ? "block" : "none",
  margin: "2.25rem 0 1rem 3rem",
  color: theme.palette.brown.second,
  fontWeight: "bold",
}));

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "isSidebarOpen",
})<IIsSidebarOpen>(({ isSidebarOpen }) => ({
  opacity: isSidebarOpen ? 1 : 0,
}));

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "isSidebarOpen",
})<IIsSidebarOpen>(({ theme, isSidebarOpen }) => ({
  justifyContent: isSidebarOpen ? "initial" : "center",
  minHeight: 48,
  paddingRight: theme.spacing(2.5),
  paddingLeft: theme.spacing(2.5),
}));

export const StyledChevronRightOutlined = styled(ChevronRightOutlined)({
  marginLeft: "auto",
});

export const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) =>
    !["active", "isSidebarOpen", "isMaxWidth600px"].includes(prop.toString()),
})<IActiveAndLcText>(({ theme, active, isSidebarOpen, isMaxWidth600px }) => ({
  justifyContent: "center",
  minWidth: 0,
  marginRight: isSidebarOpen ? "3rem" : "auto",
  marginLeft: !isMaxWidth600px ? "0.5rem" : undefined,
  color: active ? theme.palette.secondary.main : theme.palette.grey[100],
}));

export const SettingsContainer = styled(Box)({
  marginTop: "auto",
});

export const SettingsIcon = styled(SettingsOutlined)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "2rem",
}));

export const SettingsBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isSidebarOpen",
})<IIsSidebarOpen>(({ isSidebarOpen }) => ({
  display: "flex",
  justifyContent: isSidebarOpen ? "flex-start" : "center",
  margin: "1.5rem",
  textTransform: "none",
  gap: "1rem",
}));

export const SettingsTextWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  textAlign: "left",
});

export const SettingsText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: "0.9rem !important",
  fontWeight: "bold !important",
}));

export const StyledChevronLeftIcon = styled(ChevronLeft)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const BoxStyled = styled(Box)({
  ...flexCenter,
});

export const StyledNavLink = styled(NavLink, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<IStyledNavLink>(({ isActive, theme }) => ({
  display: "inline-block",
  width: "100%",
  color: isActive ? theme.palette.secondary.main : theme.palette.grey.main,
  background: isActive
    ? `linear-gradient(90deg, ${theme.palette.brown.main}, transparent 100%)`
    : "transparent",
  textDecoration: "none",

  "&::before": isActive
    ? {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        width: "4px",
        height: "100%",
        backgroundColor: theme.palette.brown.main,
      }
    : { content: "none" },

  "&:hover": {
    background: isActive
      ? "transparent"
      : `linear-gradient(90deg, ${theme.palette.brown.main} -150%, transparent 100%)`,
  },
}));
