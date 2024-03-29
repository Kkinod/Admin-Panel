import React, { useMemo } from "react";
import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../../../features/api";
import {
  ISalesChart,
  ITotalLine,
  IUseGetSalesQuery,
} from "../../../types/commonComponents";
import { labels } from "../../../shared/constants/labels";
import { constColors } from "../../../assets/styles/theme";
import { StyledTypographyLoading } from "../../../assets/styles/globalComponents.styles";

const SalesChart = ({
  startDate = new Date("01/01/2022"),
  endDate = new Date("01/25/2022"),
  isMaxWidth600px,
  isMonthly,
}: ISalesChart) => {
  const { data, isLoading } = useGetSalesQuery<IUseGetSalesQuery>(null);
  const theme = useTheme();

  const [formattedData] = useMemo(() => {
    if (!data) return [[], []];

    const salesData = isMonthly ? data.monthlyData : data.dailyData;

    const totalSalesLine: ITotalLine = {
      id: labels.charts.totalSales,
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine: ITotalLine = {
      id: labels.charts.totalUnits,
      color: theme.palette.primary.main,
      data: [],
    };

    Object.values(salesData).forEach((item) => {
      let dateOrMonth;

      if (isMonthly) {
        dateOrMonth = item.month;

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: dateOrMonth, y: item.totalSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: dateOrMonth, y: item.totalUnits },
        ];
      } else {
        dateOrMonth = item.date;
        const dateFormatted = new Date(dateOrMonth);

        if (dateFormatted >= startDate && dateFormatted <= endDate) {
          const splitDate = dateOrMonth.substring(dateOrMonth.indexOf("-") + 1);

          totalSalesLine.data = [
            ...totalSalesLine.data,
            { x: splitDate, y: item.totalSales },
          ];
          totalUnitsLine.data = [
            ...totalUnitsLine.data,
            { x: splitDate, y: item.totalUnits },
          ];
        }
      }
    });

    const formattedData = [totalSalesLine, totalUnitsLine];

    return [formattedData];
  }, [data, startDate, endDate]);

  if (isLoading)
    return (
      <StyledTypographyLoading>
        {labels.default.loading}
      </StyledTypographyLoading>
    );

  return (
    <ResponsiveLine
      data={formattedData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.secondary.main,
            },
          },
          legend: {
            text: {
              fill: theme.palette.secondary.main,
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.secondary.main,
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.secondary.main,
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.secondary.main,
          },
        },
        tooltip: {
          container: {
            color: constColors.brown["200"],
          },
        },
      }}
      margin={{
        top: 20,
        right: isMaxWidth600px ? 5 : 100,
        bottom: isMaxWidth600px ? 80 : 100,
        left: isMaxWidth600px ? 25 : 60,
      }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 2,
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: isMaxWidth600px ? 90 : 0,
        legend: "Month",
        legendOffset: 60,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: isMaxWidth600px ? -90 : 0,
        legend: "Total",
        legendOffset: isMaxWidth600px ? -20 : -50,
        legendPosition: "middle",
      }}
      enableArea={true}
      enableGridX={false}
      enableGridY={false}
      pointSize={isMaxWidth600px ? 4 : 10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "top-right",
          direction: "column",
          justify: false,
          translateX: 0,
          translateY: -10,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default SalesChart;
