import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { constColors } from "../../../assets/styles/theme";
import { flexBetween } from "../../../assets/styles/mixins.styles";

export const StyledBox = styled(Box)({
  ...flexBetween,
  gap: "1rem",

  "& .MuiSvgIcon-root": {
    color: constColors.brown[200],
  },
});

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: "1 1 100%",
  flexDirection: "column",
  justifyContent: "space-between",
  gridColumn: "span 2",
  gridRow: "span 1",
  padding: "1.25rem 1rem",
  borderRadius: "0.55rem",
  backgroundColor: theme.palette.secondary.dark,
}));

export const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));

export const StyledTypographyValue = styled(Typography)({
  fontWeight: "600",
  color: constColors.brown[100],
});

export const StyledTypographyIncrease = styled(Typography)({
  fontStyle: "italic",
  color: constColors.brown[200],
});

export const StyledTypographyDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));
