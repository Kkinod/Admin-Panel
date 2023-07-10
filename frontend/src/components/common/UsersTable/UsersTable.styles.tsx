import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: "1px",
  padding: "2px",
  border: `1px solid ${theme.palette.primary.main}`,
}));
