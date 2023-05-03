import { AppBar, Box, Toolbar } from '@mui/material';
import {
  DarkModeOutlined,
  LightModeOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { flexBetween } from '../../assets/styles/mixins.styles';

export const TopAppBar = styled(AppBar)({
  position: 'static',
  background: 'none',
  boxShadow: 'none',
});

export const TopToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

export const LeftContainer = styled(Box)({
  ...flexBetween,
});

export const LeftSideWrapper = styled(Box)(({ theme }) => ({
  ...flexBetween,
  borderRadius: '9px',
  padding: '0.1rem 1.5rem',
  gap: '3rem',
  backgroundColor: theme.palette.background.alt,
}));

export const RightContainer = styled(Box)({
  ...flexBetween,
  gap: '1.5rem',
});

export const DarkModeIcon = styled(DarkModeOutlined)({
  fontSize: '25px',
});

export const LightModeIcon = styled(LightModeOutlined)({
  fontSize: '25px',
});

export const SettingsIcon = styled(SettingsOutlined)({
  fontSize: '25px',
});
