import { Box, Typography } from '@mui/material';
import { flexCenter } from '../../../assets/styles/mixins.styles';
import { styled } from '@mui/material/styles';
import { IIsNonMobileBig } from './Products';

export const TypographyStyled = styled(Typography)({
  marginTop: '2rem',
  ...flexCenter,
});

export const BoxStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isNonMobileBig',
})<IIsNonMobileBig>(({ isNonMobileBig }) => ({
  display: 'grid',
  justifyContent: 'space-between',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  marginTop: '1.25rem',
  columnGap: '1.33%',
  rowGap: '20px',

  '& > div': {
    gridColumn: isNonMobileBig ? 'unset' : 'span 4',
  },
}));
