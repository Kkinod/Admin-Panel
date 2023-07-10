import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBoxWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
});

export const StyledButton = styled(Button)({
  padding: "2px 5px",
  border: "1px solid rgba(220, 20, 60, 0.6)",
  borderRadius: "5px",
  color: "crimson",
  fontWeight: "bold",
  cursor: "pointer",
});
