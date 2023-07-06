import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const StyledBoxDateWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

export const StyledButtonDate = styled(Button)(({ theme }) => ({
  padding: "5px 10px",
  border: "1px solid black",
  marginLeft: "5px",
  backgroundColor: "#216BA5",
  color: theme.palette.secondary.main,
}));

export const StyledBox = styled(Box)({});
