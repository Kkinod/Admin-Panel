import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import { useGetSalesQuery } from "../../../../../features/api";
import { IUseGetSalesQuery } from "../../../../common/SalesChart/SalesChart";
import { IIsMaxWidth600px } from "../../../../../types/maxWidth";
import { labels } from "../../../../../shared/constants/labels";
import {
  StyledBoxTypographyWrapper,
  StyledTypography,
} from "./CategorySalesChart.styles";
import { StyledBoxNoData } from "../../../../../assets/styles/globalComponents.styles";

export interface IIsDashboard {
  isDashboard?: boolean;
}

interface ICategorySalesChart extends IIsMaxWidth600px, IIsDashboard {}

const CategorySalesChart = ({
  isDashboard = false,
  isMaxWidth600px,
}: ICategorySalesChart) => {
  const { data, isLoading } = useGetSalesQuery<IUseGetSalesQuery>(null);
  const theme = useTheme();
  const isMaxWidth600pxOrIsDashboard = !isMaxWidth600px && !isDashboard;

  if (isLoading) return <div>{labels.default.loading}</div>;

  const formattedData = data
    ? Object.entries(data.salesByCategory).map(([category, sales]) => ({
        id: category,
        label: category,
        value: sales,
      }))
    : [];

  return data ? (
    <Box
      height={!isMaxWidth600pxOrIsDashboard ? "25rem" : "100%"}
      width={undefined}
      minHeight={!isMaxWidth600pxOrIsDashboard ? "19rem" : undefined}
      minWidth={!isMaxWidth600pxOrIsDashboard ? "17.5rem" : undefined}
      position="relative"
    >
      <ResponsivePie
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.primary.dark,
              },
            },
            legend: {
              text: {
                fill: theme.palette.primary.dark,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.primary.dark,
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.primary.dark,
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.primary.dark,
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.dark,
            },
          },
        }}
        margin={
          !isMaxWidth600pxOrIsDashboard
            ? { top: 40, right: 80, bottom: 100, left: 50 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        sortByValue={true}
        innerRadius={0.45}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={isMaxWidth600pxOrIsDashboard}
        arcLinkLabelsTextColor={theme.palette.primary.main}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: !isMaxWidth600pxOrIsDashboard ? "column" : "row",
            justify: false,
            translateX: !isMaxWidth600pxOrIsDashboard ? 20 : 0,
            translateY: !isMaxWidth600pxOrIsDashboard ? 80 : 56,
            itemsSpacing: 0,
            itemWidth: 85,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.primary.main,
                },
              },
            ],
          },
        ]}
      />
      <StyledBoxTypographyWrapper
        isMaxWidth600pxOrIsDashboard={isMaxWidth600pxOrIsDashboard}
      >
        <StyledTypography variant="h6">
          {isMaxWidth600pxOrIsDashboard && "Total:"} ${data.yearlySalesTotal}
        </StyledTypography>
      </StyledBoxTypographyWrapper>
    </Box>
  ) : (
    <StyledBoxNoData>{labels.charts.noDataInfo}</StyledBoxNoData>
  );
};

export default CategorySalesChart;
