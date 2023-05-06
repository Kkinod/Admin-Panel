import { styled } from '@mui/system';
import {
  Box,
  DrawerProps,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { ChevronRightOutlined } from '@mui/icons-material';
import MuiDrawer from '@mui/material/Drawer';
import { flexBetween } from '../../assets/styles/mixins.styles';

interface StyledDrawerProps extends DrawerProps {
  isNonMobile: boolean;
  drawerWidth: string;
}

interface IActiveAndLcText {
  active: string;
  lcText: string;
}

export const Container = styled(Box)({
  width: '100%',
});

export const FlexBetween = styled(Box)(({ theme }) => ({
  ...flexBetween,
  color: theme.palette.secondary.main,
}));

export const LogoBox = styled(Box)({
  margin: '2rem',
});

export const TypographyBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) =>
    !['isNonMobile', 'drawerWidth'].includes(prop.toString()),
})<StyledDrawerProps>(({ theme, isNonMobile, drawerWidth }) => ({
  width: drawerWidth,
  '& .MuiDrawer-paper': {
    color: theme.palette.background.alt,
    boxSizing: 'border-box',
    borderWidth: isNonMobile ? 0 : '2px',
    width: drawerWidth,
  },
}));

export const StyledTypography = styled(Typography)({
  margin: '2.25rem 0 1rem 3rem',
});

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'lcText',
})(({ active, lcText }: IActiveAndLcText) => ({
  backgroundColor: active === lcText ? 'green' : 'transparent',
  color: active === lcText ? 'green' : 'blue',
}));

export const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'lcText',
})(({ active, lcText }: IActiveAndLcText) => ({
  marginLeft: '2rem',
  color: active === lcText ? 'green' : 'red',
}));

export const StyledChevronRightOutlined = styled(ChevronRightOutlined)({
  marginLeft: 'auto',
});
