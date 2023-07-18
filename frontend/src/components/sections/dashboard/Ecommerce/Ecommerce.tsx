import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, GridColumnVisibilityModel } from "@mui/x-data-grid";
import { ResponsiveChoropleth } from "@nivo/geo";
import { useGetDashboardQuery } from "../../../../features/api";
import Header from "../../../common/Header/Header";
import OverviewChart from "../../salesCharts/Overview/OverviewChart/OverviewChart";
import StatBox from "../../../common/StatBox/StatBox";
import { transactionsColumns } from "../../../../shared/constants/transactionsColumns";
import { IIsMaxWidth1025, IIsMaxWidth600px } from "../../../../types/maxWidth";
import { geoData } from "../../../../shared/constants/geoData";
import { labels } from "../../../../shared/constants/labels";
import {
  StyledAccountBalanceWalletIcon,
  StyledAddShoppingCartIcon,
  StyledBoxChoropleth,
  StyledBoxDataGrid,
  StyledBoxHeader,
  StyledBoxOverviewChart,
  StyledBoxWrapper,
  StyledButton,
  StyledIcon,
  StyledPersonAddIcon,
  StyledPointOfSaleIcon,
} from "./Ecommerce.styles";
import { StyledBoxContainer } from "../../../../assets/styles/globalComponents.styles";
import { constColors } from "../../../../assets/styles/theme";

interface IEcommerce extends IIsMaxWidth600px, IIsMaxWidth1025 {}

const Ecommerce = ({ isMaxWidth600px, isMaxWidth1025 }: IEcommerce) => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery(null);
  const [columnVisibility, setColumnVisibility] =
    React.useState<GridColumnVisibilityModel>({
      userId: !isMaxWidth600px,
      createdAt: !isMaxWidth1025,
    });

  return (
    <StyledBoxContainer>
      <StyledBoxHeader isMaxWidth600px={isMaxWidth600px}>
        <Header
          title={labels.ecommerce.headerTitle}
          subtitle={labels.ecommerce.headerSubtitle}
        />
        <Box>
          <StyledButton>
            <StyledIcon />
            {labels.ecommerce.downloadReportsBtn}
          </StyledButton>
        </Box>
      </StyledBoxHeader>
      <StyledBoxWrapper isNonMediumScreens={isNonMediumScreens}>
        <StyledBoxOverviewChart>
          <OverviewChart
            view="sales"
            isDashboard={true}
            isMaxWidth600px={isMaxWidth600px}
          />
        </StyledBoxOverviewChart>
        <StatBox
          title={labels.ecommerce.totalCustomers}
          value={data && data.totalCustomers}
          increase="+8%"
          description={labels.ecommerce.sinceLastMonth}
          icon={<StyledPersonAddIcon />}
        />
        <StatBox
          title={labels.ecommerce.salesToday}
          value={data && data.todayStats.totalSales}
          increase="+21%"
          description={labels.ecommerce.sinceLastDay}
          icon={<StyledPointOfSaleIcon />}
        />
        <StatBox
          title={labels.ecommerce.monthlySales}
          value={data && data.thisMonthStats.totalSales}
          increase="+9%"
          description={labels.ecommerce.sinceLastMonth}
          icon={<StyledAddShoppingCartIcon />}
        />
        <StatBox
          title={labels.ecommerce.yearlySales}
          value={data && data.yearlySalesTotal}
          increase="+83%"
          description={labels.ecommerce.sinceLastYear}
          icon={<StyledAccountBalanceWalletIcon />}
        />

        <StyledBoxChoropleth>
          <ResponsiveChoropleth
            data={(data && data.formattedLocations) || []}
            features={geoData.features}
            domain={[0, 25]}
            projectionScale={80}
            projectionTranslation={[0.45, 0.6]}
            borderWidth={0.7}
            borderColor={theme.palette.secondary.main}
            theme={{
              tooltip: {
                container: {
                  color: constColors.brown["200"],
                },
              },
            }}
          />
        </StyledBoxChoropleth>
        <StyledBoxDataGrid>
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.transactions) || []}
            columns={transactionsColumns}
            columnVisibilityModel={columnVisibility}
            onColumnVisibilityModelChange={(newState) => {
              setColumnVisibility(newState);
            }}
          />
        </StyledBoxDataGrid>
      </StyledBoxWrapper>
    </StyledBoxContainer>
  );
};

export default Ecommerce;
