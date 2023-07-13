import React from "react";
import { Box } from "@mui/material";
import { IHeader } from "../../../types/commonComponents";
import {
  TypographyTitleStyled,
  TypographySubtitleStyled,
} from "./Header.styles";

const Header = ({ title, subtitle }: IHeader) => {
  return (
    <Box>
      <TypographyTitleStyled variant="h2">{title}</TypographyTitleStyled>
      <TypographySubtitleStyled variant="h5">
        {subtitle}
      </TypographySubtitleStyled>
    </Box>
  );
};

export default Header;
