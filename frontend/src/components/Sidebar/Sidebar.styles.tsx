import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { flexBetween } from '../../assets/styles/mixins.styles';

// export const Container = styled(Box)(({ isNonMobile }: ContainerProps) => ({
//   display: isNonMobile ? 'flex' : 'block',
//   width: '100%',
//   height: '100%',
// }));

export const FlexBetween = styled(Box)({
  ...flexBetween,
});
