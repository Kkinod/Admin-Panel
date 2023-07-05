import React, { forwardRef, useState } from "react";
import { Box } from "@mui/material";
import Header from "../../Header/Header";
import DatePicker from "react-datepicker";
import DailySalesChart from "./DailySalesChart/DailySalesChart";
import { IIsMaxWidth600px } from "../../../App";
import { labels } from "../../../utils/labels";
import { StyledBoxContainer } from "../../../assets/styles/globalComponents.styles";
import {
  StyledBox,
  StyledBoxDailyContainer,
  StyledBoxDateWrapper,
  StyledButtonDate,
} from "./DailySales.styles";
import "react-datepicker/dist/react-datepicker.css";

interface ExampleCustomInputProps {
  value?: string;
  onClick?: () => void;
}

const DailySales = ({ isMaxWidth600px }: IIsMaxWidth600px) => {
  const [initialDate, setInitialDate] = useState(new Date("2022-01-01"));
  const [endDate, setEndDate] = useState(new Date("2022-02-01"));

  const ExampleCustomInput = forwardRef<
    HTMLButtonElement,
    ExampleCustomInputProps
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
      <StyledBoxDailyContainer>
        <StyledBoxDateWrapper>
          <StyledBox>
            <DatePicker
              selected={initialDate}
              onChange={(date) => date && setInitialDate(date)}
              selectsStart
              startDate={initialDate}
              endDate={endDate}
              customInput={<ExampleCustomInput />}
            />
          </StyledBox>
          <Box>
            <DatePicker
              selected={endDate}
              onChange={(date) => date && setEndDate(date)}
              selectsEnd
              startDate={initialDate}
              endDate={endDate}
              minDate={initialDate}
              customInput={<ExampleCustomInput />}
            />
          </Box>
        </StyledBoxDateWrapper>

        <DailySalesChart
          initialDate={initialDate}
          endDate={endDate}
          isMaxWidth600px={isMaxWidth600px}
        />
      </StyledBoxDailyContainer>
    </StyledBoxContainer>
  );
};

export default DailySales;
