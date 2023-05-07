import { styled } from '@mui/system';
import { Box, DrawerProps, ListItemIcon, Typography } from '@mui/material';
import { ChevronRightOutlined } from '@mui/icons-material';
import MuiDrawer from '@mui/material/Drawer';
import { flexBetween } from '../../assets/styles/mixins.styles';
import { PathMatch } from 'react-router-dom';

interface IStyledDrawerProps extends DrawerProps {
  isNonMobile: boolean;
  drawerWidth: string;
}

interface IActiveAndLcText {
  active: PathMatch<string> | null;
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

export const TypographyBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: theme.palette.primary[200],
}));

export const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) =>
    !['isNonMobile', 'drawerWidth'].includes(prop.toString()),
})<IStyledDrawerProps>(({ theme, isNonMobile, drawerWidth }) => ({
  width: drawerWidth,
  '& .MuiDrawer-paper': {
    color: theme.palette.background.alt,
    boxSizing: 'border-box',
    borderWidth: isNonMobile ? 0 : '2px',
    width: drawerWidth,
    backgroundColor: theme.palette.primary[100],
  },
}));

export const StyledTypography = styled(Typography)({
  margin: '2.25rem 0 1rem 3rem',
});

export const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'lcText',
})<IActiveAndLcText>(({ theme, active }) => ({
  marginLeft: '2rem',
  color: active ? theme.palette.secondary[200] : theme.palette.grey.main,
}));

export const StyledChevronRightOutlined = styled(ChevronRightOutlined)({
  marginLeft: 'auto',
});
