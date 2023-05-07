import { PathMatch } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { ChevronRightOutlined } from '@mui/icons-material';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { IIsSidebarOpen } from './Sidebar';

const drawerWidth = 240;

interface IActiveAndLcText {
  active: PathMatch<string> | null;
  isSidebarOpen: IIsSidebarOpen['isSidebarOpen'];
}

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
});

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  boxSizing: 'border-box',
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': {
      ...openedMixin(theme),
      backgroundColor: theme.palette.primary.main,
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': {
      ...closedMixin(theme),
      backgroundColor: theme.palette.primary.main,
    },
  }),
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  color: 'blue',
});

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isSidebarOpen',
})<IIsSidebarOpen>(({ theme, isSidebarOpen }) => ({
  margin: '2.25rem 0 1rem 3rem',
  opacity: isSidebarOpen ? 1 : 0,
  color: theme.palette.secondary.main,
}));

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isSidebarOpen',
})<IIsSidebarOpen>(({ isSidebarOpen }) => ({
  opacity: isSidebarOpen ? 1 : 0,
}));

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'isSidebarOpen',
})<IIsSidebarOpen>(({ theme, isSidebarOpen }) => ({
  justifyContent: isSidebarOpen ? 'initial' : 'center',
  minHeight: 48,
  paddingRight: theme.spacing(2.5),
  paddingLeft: theme.spacing(2.5),
}));

export const StyledChevronRightOutlined = styled(ChevronRightOutlined)({
  marginLeft: 'auto',
});

export const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) =>
    !['active', 'isSidebarOpen'].includes(prop.toString()),
})<IActiveAndLcText>(({ theme, active, isSidebarOpen }) => ({
  justifyContent: 'center',
  minWidth: 0,
  marginRight: isSidebarOpen ? '3rem' : 'auto',
  color: active ? theme.palette.secondary.main : theme.palette.grey[100],
}));
