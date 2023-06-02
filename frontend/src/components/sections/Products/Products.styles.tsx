import { Box, Typography } from '@mui/material';
import { IIsNonMobile } from '../../mainView/Sidebar/Sidebar';
import { flexCenter } from '../../../assets/styles/mixins.styles';
import { styled } from '@mui/material/styles';

export const ProductContainer = styled(Box)({
  margin: '1.5rem 2.5rem',
});

export const TypographyStyled = styled(Typography)({
  marginTop: '2rem',
  ...flexCenter,
});

export const BoxStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isSidebarOpen',
})<IIsNonMobile>(({ isNonMobile }) => ({
  display: 'grid',
  justifyContent: 'space-between',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  marginTop: '1.25rem',
  columnGap: '1.33%',
  rowGap: '20px',

  '& > div': {
    gridColumn: isNonMobile ? 'unset' : 'span 4',
  },
}));
