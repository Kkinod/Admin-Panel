import React from "react";
import Header from "../../../common/Header/Header";
import CategorySalesChart from "./CategorySalesChart/CategorySalesChart";
import { IIsMaxWidth600px } from "../../../../types/maxWidth";
import { labels } from "../../../../shared/constants/labels";
import {
  StyledBoxChartWrapper,
  StyledBoxContainer,
} from "../../../../assets/styles/globalComponents.styles";

const CategorySales = ({ isMaxWidth600px }: IIsMaxWidth600px) => {
  return (
    <StyledBoxContainer>
      <Header
        title={labels.categorySales.headerTitle}
        subtitle={labels.categorySales.headerSubtitle}
      />
      <StyledBoxChartWrapper>
        <CategorySalesChart isMaxWidth600px={isMaxWidth600px} />
      </StyledBoxChartWrapper>
    </StyledBoxContainer>
  );
};

export default CategorySales;
