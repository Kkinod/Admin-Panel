import { Card, CardContent, Collapse, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { constColors } from "../../../../../assets/styles/theme";

export const CardContentStyled = styled(CardContent)({
  height: "14rem",
});

export const CardStyled = styled(Card)(({ theme }) => ({
  backgroundImage: "none",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "0.55rem",
}));

export const StyledTypographyCategory = styled(Typography)({
  fontSize: "1rem",
  color: constColors.brown[200],
});

export const StyledTypographyDescription = styled(Typography)({
  color: constColors.brown[200],
});

export const StyledTypographyPrice = styled(Typography)(({ theme }) => ({
  marginBottom: "1.5rem",
  color: theme.palette.primary.main,
}));

export const CollapseStyled = styled(Collapse)(({ theme }) => ({
  color: theme.palette.grey[100],
}));
