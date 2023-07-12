import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { flexBetween } from "../../../assets/styles/mixins.styles";

export const StyledBox = styled(Box)({
  ...flexBetween,
});
