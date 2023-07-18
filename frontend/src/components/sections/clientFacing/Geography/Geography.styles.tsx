import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { constColors } from "../../../../assets/styles/theme";

export const StyledBoxWrapper = styled(Box)({
  margin: "2.5rem auto",
  height: "65vh",
  marginTop: "2.5rem",
  borderRadius: "0.25rem",
  maxWidth: "800px",
  border: `1px solid ${constColors.brown[200]}`,
});
