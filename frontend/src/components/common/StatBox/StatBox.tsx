import React from "react";
import {
  StyledBox,
  StyledBoxContainer,
  StyledTypographyDescription,
  StyledTypographyIcon,
  StyledTypographyIncrease,
  StyledTypographyValue,
} from "./StatBox.styles";

const StatBox = ({ title, value, increase, icon, description }: any) => {
  return (
    <StyledBoxContainer>
      <StyledBox>
        <StyledTypographyIcon variant="h6">{title}</StyledTypographyIcon>
        {icon}
      </StyledBox>
      <StyledTypographyValue variant="h3">{value}</StyledTypographyValue>
      <StyledBox>
        <StyledTypographyIncrease variant="h5">
          {increase}
        </StyledTypographyIncrease>
        <StyledTypographyDescription>{description}</StyledTypographyDescription>
      </StyledBox>
    </StyledBoxContainer>
  );
};

export default StatBox;
