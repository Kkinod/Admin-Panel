import React, { forwardRef, useState } from "react";
import { Box } from "@mui/material";
import Header from "../../../common/Header/Header";
import DatePicker from "react-datepicker";
import SalesChart from "../../../common/SalesChart/SalesChart";
import { IIsMaxWidth600px } from "../../../../types/maxWidth";
import { labels } from "../../../../shared/constants/labels";
import { IExampleCustomInputProps } from "../../../../types/salesCharts";
import {
  StyledBoxChartWrapper,
  StyledBoxContainer,
} from "../../../../assets/styles/globalComponents.styles";
import {
  StyledBox,
  StyledBoxDateWrapper,
  StyledButtonDate,
} from "./DailySales.styles";

const DailySales = ({ isMaxWidth600px }: IIsMaxWidth600px) => {
  const [startDate, setStartDate] = useState(
    new Date(labels.dailySales.initialStartDate)
  );
  const [endDate, setEndDate] = useState(
    new Date(labels.dailySales.initialEndDate)
  );

  const ExampleCustomInput = forwardRef<
    HTMLButtonElement,
    IExampleCustomInputProps
  >(({ value, onClick }, ref) => (
    <StyledButtonDate
      className="example-custom-input"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </StyledButtonDate>
  ));

  return (
    <StyledBoxContainer>
      <Header
        title={labels.dailySales.headerTitle}
        subtitle={labels.dailySales.headerSubtitle}
      />
      <StyledBoxChartWrapper>
        <StyledBoxDateWrapper>
          <StyledBox>
            <DatePicker
              selected={startDate}
              onChange={(date) => date && setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              customInput={<ExampleCustomInput />}
            />
          </StyledBox>
          <Box>
            <DatePicker
              selected={endDate}
              onChange={(date) => date && setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              customInput={<ExampleCustomInput />}
            />
          </Box>
        </StyledBoxDateWrapper>
        <SalesChart
          isMonthly={false}
          isMaxWidth600px={isMaxWidth600px}
          startDate={startDate}
          endDate={endDate}
        />
      </StyledBoxChartWrapper>
    </StyledBoxContainer>
  );
};

export default DailySales;
