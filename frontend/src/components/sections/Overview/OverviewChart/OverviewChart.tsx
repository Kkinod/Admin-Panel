import React, { useMemo } from "react";
import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useGetSalesQuery } from "../../../../features/api";
import { IIsMaxWidth600px } from "../../../../App";
import { labels } from "../../../../utils/labels";
import {
  ITotalLine,
  IUseGetSalesQuery,
} from "../../salesCharts/components/SalesChart";

interface IOverviewChart extends IIsMaxWidth600px {
  isDashboard?: boolean;
  view: string;
}

const OverviewChart = ({
  isMaxWidth600px,
  isDashboard = false,
  view,
}: IOverviewChart) => {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery<IUseGetSalesQuery>(null);

  const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    if (!data) return [[], []];

    const { monthlyData } = data;
    const totalSalesLine: ITotalLine = {
      id: "totalSales",
      color: theme.palette.secondary.main,
      data: [],
    };
    const totalUnitsLine: ITotalLine = {
      id: "totalUnits",
      color: theme.palette.primary.main,
      data: [],
    };

    Object.values(monthlyData).reduce(
      (acc, { month, totalSales, totalUnits }) => {
        const curSales = acc.sales + totalSales;
        const curUnits = acc.units + totalUnits;

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: month, y: curSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: month, y: curUnits },
        ];

        return { sales: curSales, units: curUnits };
      },
      { sales: 0, units: 0 }
    );

    return [[totalSalesLine], [totalUnitsLine]];
  }, [data]);

  if (isLoading) return <div>{labels.default.loading}</div>;

  return (
    <ResponsiveLine
      data={view === "sales" ? totalSalesLine : totalUnitsLine}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.primary.main,
            },
          },
          legend: {
            text: {
              fill: theme.palette.primary.main,
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.primary.main,
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.primary.main,
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.primary.main,
          },
        },
        tooltip: {
          container: {
            color: theme.palette.primary.main,
          },
        },
      }}
      margin={{
        top: isMaxWidth600px ? 30 : 20,
        right: isMaxWidth600px ? 15 : 100,
        bottom: isMaxWidth600px ? 120 : 100,
        left: isMaxWidth600px ? 25 : 70,
      }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      enableArea={isDashboard}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: (v) => {
          if (isDashboard) return v.slice(0, 3);
          return v;
        },
        tickSize: 5,
        tickPadding: 5,
        tickRotation: isMaxWidth600px ? 90 : 0,
        legend: isDashboard ? "" : "Month",
        legendOffset: 50,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: isMaxWidth600px ? 90 : 0,
        legend: isDashboard
          ? ""
          : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
        legendOffset: isMaxWidth600px ? -20 : -60,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 30,
                translateY: -40,
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
            ]
          : undefined
      }
    />
  );
};

export default OverviewChart;
