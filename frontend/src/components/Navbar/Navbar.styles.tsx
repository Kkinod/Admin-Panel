import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import {
  ArrowDropDownOutlined,
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
  borderRadius: '20px',
  padding: '0.1rem 1.5rem',
  gap: '3rem',
  backgroundColor: theme.palette.secondary[200],
}));

export const RightContainer = styled(Box)({
  ...flexBetween,
  gap: '1.5rem',
});

export const DarkModeIcon = styled(DarkModeOutlined)(({ theme }) => ({
  fontSize: '25px',
  color: theme.palette.primary[100],
}));

export const LightModeIcon = styled(LightModeOutlined)(({ theme }) => ({
  fontSize: '25px',
  color: theme.palette.primary[100],
}));

export const SettingsIcon = styled(SettingsOutlined)(({ theme }) => ({
  fontSize: '25px',
  color: theme.palette.primary[100],
}));

export const FlexBetween = styled(Box)({
  ...flexBetween,
});

export const StyledButton = styled(Button)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textTransform: 'none',
  gap: '1rem',
});

export const StyledImg = styled('img')({
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  objectFit: 'cover',
});

export const StyledTypographyContainer = styled(Box)({
  textAlign: 'left',
});

export const StyledTypographyName = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '0.85rem',
  fontWeight: 'bold',
}));

export const StyledTypographyOccupation = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '0.75rem',
}));

export const StyledArrowIcon = styled(ArrowDropDownOutlined)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2rem',
}));
