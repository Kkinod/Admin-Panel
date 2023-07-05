import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useGetSalesQuery } from "../../../../features/api";
import {
  ITotalLine,
  IUseGetSalesQuery,
} from "../../Overview/OverviewChart/OverviewChart";
import { IIsMaxWidth600px } from "../../../../App";
import { labels } from "../../../../utils/labels";

interface IDailySalesChart extends IIsMaxWidth600px {
  initialDate: Date;
  endDate: Date;
}

const DailySalesChart = ({
  initialDate,
  endDate,
  isMaxWidth600px,
}: IDailySalesChart) => {
  const { data, isLoading } = useGetSalesQuery<IUseGetSalesQuery>(null);
  const theme = useTheme();

  const [formattedData] = useMemo(() => {
    if (!data) return [[], []];

    const { dailyData } = data;
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

    Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) => {
      const dateFormatted = new Date(date);
      if (dateFormatted >= initialDate && dateFormatted <= endDate) {
        const splitDate = date.substring(date.indexOf("-") + 1);

        totalSalesLine.data = [
          ...totalSalesLine.data,
          { x: splitDate, y: totalSales },
        ];
        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          { x: splitDate, y: totalUnits },
        ];
      }
    });

    const formattedData = [totalSalesLine, totalUnitsLine];

    return [formattedData];
  }, [data, initialDate, endDate]);

  if (isLoading) return <div>{labels.default.loading}</div>;

  return (
    <ResponsiveLine
      data={formattedData}
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
        top: 20,
        right: isMaxWidth600px ? 5 : 100,
        bottom: isMaxWidth600px ? 120 : 100,
        left: isMaxWidth600px ? 25 : 50,
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
        tickRotation: 90,
        legend: "Month",
        legendOffset: 60,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: isMaxWidth600px ? 90 : 0,
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

export default DailySalesChart;
