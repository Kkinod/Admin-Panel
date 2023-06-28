import React from "react";
import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "../../../utils/geoData";
import Header from "../../Header/Header";
import { useGetGeographyQuery } from "../../../features/api";
import { labels } from "../../../utils/labels";
import { StyledBoxContainer, StyledBoxWrapper } from "./Geography.styles";

interface IGeography {
  isMaxWidth600px: boolean;
}

const Geography = ({ isMaxWidth600px }: IGeography) => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery(null);

  return (
    <StyledBoxContainer>
      <Header
        title={labels.geography.headerTitle}
        subtitle={labels.geography.headerSubtitle}
      />
      <StyledBoxWrapper>
        {data ? (
          <ResponsiveChoropleth
            data={data}
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
                    fill: theme.palette.primary.main,
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
                  color: theme.palette.primary.dark,
                },
              },
            }}
            features={geoData.features}
            margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
            domain={[0, 25]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={isMaxWidth600px ? 80 : 150}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor={theme.palette.secondary.main}
            legends={[
              {
                anchor: isMaxWidth600px ? "top-right" : "bottom-left",
                direction: "column",
                justify: true,
                translateX: isMaxWidth600px ? -10 : 10,
                translateY: isMaxWidth600px ? -5 : -25,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.secondary.main,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.background.alt,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>{labels.default.loading}</>
        )}
      </StyledBoxWrapper>
    </StyledBoxContainer>
  );
};

export default Geography;
