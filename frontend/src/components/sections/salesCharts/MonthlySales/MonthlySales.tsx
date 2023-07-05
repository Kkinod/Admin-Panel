import React from "react";
import Header from "../../../Header/Header";
import SalesChart from "../SalesChart";
import { IIsMaxWidth600px } from "../../../../App";
import { labels } from "../../../../utils/labels";
import { StyledBoxContainer } from "../../../../assets/styles/globalComponents.styles";
import { StyledBoxMonthlyContainer } from "./MonthlySales.styles";

const MonthlySales = ({ isMaxWidth600px }: IIsMaxWidth600px) => {
  return (
    <StyledBoxContainer>
      <Header
        title={labels.monthlySales.headerTitle}
        subtitle={labels.monthlySales.headerSubtitle}
      />
      <StyledBoxMonthlyContainer>
        <SalesChart isMonthly={true} isMaxWidth600px={isMaxWidth600px} />
      </StyledBoxMonthlyContainer>
    </StyledBoxContainer>
  );
};

export default MonthlySales;
