import React, { useMemo } from "react";
import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../../../../features/api";

interface IOverviewChart {
  isDashboard?: boolean;
  view: any;
}

const OverviewChart = ({ isDashboard = false, view }: IOverviewChart) => {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery(null);

  console.log(data);

  return <div></div>;
};

export default OverviewChart;
