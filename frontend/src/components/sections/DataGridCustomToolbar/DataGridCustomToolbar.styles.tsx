import { Box, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { flexBetween } from "../../../assets/styles/mixins.styles";

interface IIsMaxWidth600px {
  isMaxWidth600px: boolean;
}

export const StyledBox = styled(Box)({
  ...flexBetween,
});

export const StyledBoxWrapper = styled(StyledBox, {
  shouldForwardProp: (prop) => prop !== "isMaxWidth600px",
})<IIsMaxWidth600px>(({ isMaxWidth600px }) => ({
  width: "100%",
  flexDirection: isMaxWidth600px ? "column" : "row",
}));

export const StyledTextField = styled(TextField)({
  marginBottom: "0.5rem",
  width: "15rem",
});

export const StyledIconButton = styled(IconButton)({
  color: "grey !important",
});
