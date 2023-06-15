import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '85%',
  padding: '5px',
  margin: '0 auto',
  borderRadius: '4px',
  backgroundColor: theme.palette.primary.main,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  marginLeft: '5px',
  color: theme.palette.secondary.main,
}));
