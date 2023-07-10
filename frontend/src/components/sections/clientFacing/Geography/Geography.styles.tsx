import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  margin: "2.5rem auto",
  height: "65vh",
  marginTop: "2.5rem",
  borderRadius: "0.25rem",
  maxWidth: "800px",
  border: `1px solid ${theme.palette.primary.main}`,
}));
