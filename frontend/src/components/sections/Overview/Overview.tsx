import React, { useState } from "react";
import { MenuItem, InputLabel, Select } from "@mui/material";
import Header from "../../Header/Header";
import OverviewChart from "./OverviewChart/OverviewChart";
import { StyledBoxContainer } from "../../../assets/styles/globalComponents.styles";
import {
  StyledBoxWrapper,
  StyledFormControl,
} from "./OverviewChart/Overview.styles";
import { labels } from "../../../utils/labels";

const Overview = () => {
  const [view, setView] = useState("units");

  return (
    <StyledBoxContainer>
      <Header
        title={labels.overview.headerTitle}
        subtitle={labels.overview.headerSubtitle}
      />
      <StyledBoxWrapper>
        <StyledFormControl>
          <InputLabel>View</InputLabel>
          <Select
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
        <OverviewChart view={view} />
      </StyledBoxWrapper>
    </StyledBoxContainer>
  );
};

export default Overview;
