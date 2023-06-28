import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledBoxContainer = styled(Box)({
  margin: "1rem",
});

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  margin: "2.5rem auto",
  height: "70vh",
  marginTop: "2.5rem",
  borderRadius: "0.25rem",
  maxWidth: "800px",
  border: `1px solid ${theme.palette.primary.main}`,
  background: theme.palette.primary.main,
}));
