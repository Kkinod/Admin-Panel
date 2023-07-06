import React from "react";
import Header from "../../../Header/Header";
import SalesChart from "../components/SalesChart";
import { IIsMaxWidth600px } from "../../../../App";
import { labels } from "../../../../utils/labels";
import {
  StyledBoxChartWrapper,
  StyledBoxContainer,
} from "../../../../assets/styles/globalComponents.styles";

const MonthlySales = ({ isMaxWidth600px }: IIsMaxWidth600px) => {
  return (
    <StyledBoxContainer>
      <Header
        title={labels.monthlySales.headerTitle}
        subtitle={labels.monthlySales.headerSubtitle}
      />
      <StyledBoxChartWrapper>
        <SalesChart isMonthly={true} isMaxWidth600px={isMaxWidth600px} />
      </StyledBoxChartWrapper>
    </StyledBoxContainer>
  );
};

export default MonthlySales;
