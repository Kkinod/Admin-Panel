import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { flexCenter } from '../../../assets/styles/mixins.styles';

export const TypographyStyled = styled(Typography)({
  marginTop: '2rem',
  ...flexCenter,
});
