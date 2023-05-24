import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

interface IHeader {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: IHeader) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.primary.main}
        fontWeight="bold"
        sx={{ mb: '5px' }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.primary.main}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
