import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { constColors } from "../../../assets/styles/theme";

export const TypographyTitleStyled = styled(Typography)({
  color: constColors.brown[200],
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

export const TypographySubtitleStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
