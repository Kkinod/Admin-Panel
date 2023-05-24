import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface ContainerProps {
  isNonMobile: boolean;
}

export const Container = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isNonMobile',
})(({ isNonMobile }: ContainerProps) => ({
  display: isNonMobile ? 'flex' : 'block',
  width: '100%',
  height: '100%',
}));
