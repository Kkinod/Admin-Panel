import { Box, Typography } from "@mui/material";
import { IIsMaxWidth1025 } from "../../../../types/maxWidth";
import { flexCenter } from "../../../../assets/styles/mixins.styles";
import { styled } from "@mui/material/styles";

export const TypographyStyled = styled(Typography)({
  marginTop: "2rem",
  ...flexCenter,
});

export const BoxStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMaxWidth1025",
})<IIsMaxWidth1025>(({ isMaxWidth1025 }) => ({
  display: "grid",
  justifyContent: "space-between",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  marginTop: "1.25rem",
  columnGap: "1.33%",
  rowGap: "20px",

  "& > div": {
    gridColumn: !isMaxWidth1025 ? "unset" : "span 4",
  },
}));
