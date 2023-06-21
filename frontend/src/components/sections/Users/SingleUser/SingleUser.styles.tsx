import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

// export const StyledBoxContainer = styled(Box)({
//
//
// });

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "25rem",
  margin: "1rem",
  padding: "1rem",
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "10px",
  backgroundColor: theme.palette.background.alt,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "0",
  right: "0",
  padding: "5px",
  borderRadius: "0 0 0 10px",
  backgroundColor: theme.palette.background.default,
  cursor: "pointer",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const StyledBoxWrapper = styled(Box)({
  display: "flex",
  marginBottom: "10px",
});

export const StyledTypographyKey = styled(Typography)(({ theme }) => ({
  marginRight: "10px !important",
  color: `${theme.palette.grey[100]} !important`,
  fontWeight: "bold !important",
}));

export const StyledTypographyValue = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.main} !important`,
}));
