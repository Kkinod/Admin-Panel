import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { StyledBox } from "./StatBox.styles";

const StatBox = ({ title, value, increase, icon, description }: any) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      sx={{ backgroundColor: theme.palette.primary.main }}
      borderRadius="0.55rem"
    >
      <StyledBox>
        <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
          {title}
        </Typography>
        {icon}
      </StyledBox>

      <Typography
        variant="h3"
        fontWeight="600"
        sx={{ color: theme.palette.secondary.main }}
      >
        {value}
      </Typography>
      <StyledBox gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
        <Typography sx={{ color: theme.palette.secondary.light }}>
          {description}
        </Typography>
      </StyledBox>
    </Box>
  );
};

export default StatBox;
