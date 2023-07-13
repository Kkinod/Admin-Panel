import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { IGlobalStyleProps } from "../../../types/globalStyle";
import { flexBetween } from "../../../assets/styles/mixins.styles";

export const StyledBox = styled(Box)({
  ...flexBetween,
  gap: "1rem",
});

export const StyledBoxContainer = styled(Box)<IGlobalStyleProps>(
  ({ theme }) => ({
    display: "flex",
    flex: "1 1 100%",
    flexDirection: "column",
    justifyContent: "space-between",
    gridColumn: "span 2",
    gridRow: "span 1",
    padding: "1.25rem 1rem",
    borderRadius: "0.55rem",
    backgroundColor: theme.palette.secondary[100],
  })
);

export const StyledTypographyIcon = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const StyledTypographyValue = styled(Typography)(({ theme }) => ({
  fontWeight: "600",
  color: theme.palette.secondary.main,
}));

export const StyledTypographyIncrease = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  color: theme.palette.secondary.light,
}));

export const StyledTypographyDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.light,
}));
