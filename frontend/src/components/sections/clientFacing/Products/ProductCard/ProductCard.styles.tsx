import { Card, CardContent, Collapse, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CardContentStyled = styled(CardContent)({
  height: "14rem",
});

export const CardStyled = styled(Card)(({ theme }) => ({
  backgroundImage: "none",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "0.55rem",
}));

export const TypographyCategoryStyled = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.secondary.dark,
}));

export const TypographyPriceStyled = styled(Typography)(({ theme }) => ({
  marginBottom: "1.5rem",
  color: theme.palette.primary.main,
}));

export const CollapseStyled = styled(Collapse)(({ theme }) => ({
  color: theme.palette.grey[100],
}));
