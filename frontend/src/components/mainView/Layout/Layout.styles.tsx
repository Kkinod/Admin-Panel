import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface ContainerProps {
  isSidebarOpen: boolean;
  isNonMobile: boolean;
}

export const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'isNonMobile' && prop !== 'isSidebarOpen',
})(({ isSidebarOpen, isNonMobile }: ContainerProps) => ({
  display: isSidebarOpen && !isNonMobile ? 'block' : 'flex',
  width: '100%',
  height: '100%',
  overflowY: 'hidden',
}));
