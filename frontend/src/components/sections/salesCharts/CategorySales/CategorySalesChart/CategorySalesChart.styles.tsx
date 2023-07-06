import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

interface IIsMaxWidth600pxOrIsDashboard {
  isMaxWidth600pxOrIsDashboard: boolean;
}

export const StyledBoxTypographyWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMaxWidth600pxOrIsDashboard",
})<IIsMaxWidth600pxOrIsDashboard>(
  ({ isMaxWidth600pxOrIsDashboard, theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    color: theme.palette.secondary.main,
    textAlign: "center",
    pointerEvents: "none",
    transform: !isMaxWidth600pxOrIsDashboard
      ? "translate(-75%, -170%)"
      : "translate(-50%, -100%)",
  })
);

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
