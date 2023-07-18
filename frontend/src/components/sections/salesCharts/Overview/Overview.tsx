import React, { useState } from "react";
import { InputLabel, MenuItem, Select } from "@mui/material";
import Header from "../../../common/Header/Header";
import OverviewChart from "./OverviewChart/OverviewChart";
import { IOverview } from "../../../../types/salesCharts";
import { labels } from "../../../../shared/constants/labels";
import {
  StyledBoxChartWrapper,
  StyledBoxContainer,
} from "../../../../assets/styles/globalComponents.styles";
import { StyledFormControl } from "./Overview.styles";

const Overview = ({ isMaxWidth600px, isMaxWidth1025 }: IOverview) => {
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
        <OverviewChart
          isMaxWidth600px={isMaxWidth600px}
          isMaxWidth1025={isMaxWidth1025}
          view={view as "units" | "sales"}
        />
      </StyledBoxChartWrapper>
    </StyledBoxContainer>
  );
};

export default Overview;
