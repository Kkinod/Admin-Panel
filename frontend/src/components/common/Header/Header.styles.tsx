import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IGlobalStyleProps } from "../../../types/globalStyle";

export const TypographyTitleStyled = styled(Typography)<IGlobalStyleProps>(
  ({ theme }) => ({
    color: theme.palette.brown.second,
    fontWeight: "bold",
    marginBottom: "0.5rem",
  })
);

export const TypographySubtitleStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
