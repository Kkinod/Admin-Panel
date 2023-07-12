import React, { useState } from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Header from "../../../common/Header/Header";
import OverviewChart from "./OverviewChart/OverviewChart";
import { IIsMaxWidth600px } from "../../../../types/maxWidth";
import {
  StyledBoxChartWrapper,
  StyledBoxContainer,
} from "../../../../assets/styles/globalComponents.styles";
import { StyledFormControl } from "./Overview.styles";
import { labels } from "../../../../shared/constants/labels";

const Overview = ({ isMaxWidth600px }: IIsMaxWidth600px) => {
  const [view, setView] = useState("units");

  return (
    <StyledBoxContainer>
      <Header
        title={labels.overview.headerTitle}
        subtitle={labels.overview.headerSubtitle}
      />
      <StyledBoxChartWrapper>
        <StyledFormControl>
          <InputLabel id="view-select-label">
            {labels.default.buttonView}
          </InputLabel>
          <Select
            labelId="view-select-label"
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value={labels.overview.valueSales.toLowerCase()}>
              {labels.overview.valueSales}
            </MenuItem>
            <MenuItem value={labels.overview.valueUnits.toLowerCase()}>
              {labels.overview.valueUnits}
            </MenuItem>
          </Select>
        </StyledFormControl>
        <OverviewChart isMaxWidth600px={isMaxWidth600px} view={view} />
      </StyledBoxChartWrapper>
    </StyledBoxContainer>
  );
};

export default Overview;
