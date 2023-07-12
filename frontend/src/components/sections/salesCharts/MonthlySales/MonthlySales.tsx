import React from "react";
import Header from "../../../common/Header/Header";
import SalesChart from "../../../common/SalesChart/SalesChart";
import { IIsMaxWidth600px } from "../../../../types/maxWidth";
import { labels } from "../../../../shared/constants/labels";
import { MonthlySalesChartWrapper } from "./MonthlySales.styles";
import { StyledBoxContainer } from "../../../../assets/styles/globalComponents.styles";

const MonthlySales = ({ isMaxWidth600px }: IIsMaxWidth600px) => {
  return (
    <StyledBoxContainer>
      <Header
        title={labels.monthlySales.headerTitle}
        subtitle={labels.monthlySales.headerSubtitle}
      />
      <MonthlySalesChartWrapper>
        <SalesChart isMonthly={true} isMaxWidth600px={isMaxWidth600px} />
      </MonthlySalesChartWrapper>
    </StyledBoxContainer>
  );
};

export default MonthlySales;
