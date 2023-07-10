import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TypographyTitleStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  marginBottom: '0.5rem',
}));

export const TypographySubtitleStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
