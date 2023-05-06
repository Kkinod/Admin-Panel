import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const Container = styled(Box)(({ isNonMobile }: ContainerProps) => ({
  display: isNonMobile ? 'flex' : 'block',
  width: '100%',
  height: '100%',
}));
