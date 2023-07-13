import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { DataGrid, GridColumnVisibilityModel } from "@mui/x-data-grid";
import { useGetDashboardQuery } from "../../../../features/api";
import CategorySalesChart from "../../salesCharts/CategorySales/CategorySalesChart/CategorySalesChart";
import Header from "../../../common/Header/Header";
import OverviewChart from "../../salesCharts/Overview/OverviewChart/OverviewChart";
import StatBox from "../../../common/StatBox/StatBox";
import { transactionsColumns } from "../../../../shared/constants/transactionsColumns";
import { IIsMaxWidth1025, IIsMaxWidth600px } from "../../../../types/maxWidth";
import { labels } from "../../../../shared/constants/labels";
import {
  StyledBoxDataGrid,
  StyledBoxHeader,
  StyledBoxOverviewChart,
  StyledBoxSalesChart,
  StyledBoxTypo,
  StyledBoxWrapper,
  StyledButton,
  StyledEmailIcon,
  StyledIcon,
  StyledPersonAddIcon,
  StyledPointOfSaleIcon,
  StyledTrafficIcon,
  StyledTypography,
} from "./Ecommerce.styles";
import { StyledBoxContainer } from "../../../../assets/styles/globalComponents.styles";

interface IEcommerce extends IIsMaxWidth600px, IIsMaxWidth1025 {}

const Ecommerce = ({ isMaxWidth600px, isMaxWidth1025 }: IEcommerce) => {
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
        <StatBox
          title={labels.ecommerce.totalCustomers}
          value={data && data.totalCustomers}
          increase="+14%"
          description={labels.ecommerce.sinceLastMonth}
          icon={<StyledEmailIcon />}
        />
        <StatBox
          title={labels.ecommerce.salesToday}
          value={data && data.todayStats.totalSales}
          increase="+21%"
          description={labels.ecommerce.sinceLastMonth}
          icon={<StyledPointOfSaleIcon />}
        />
        <StyledBoxOverviewChart>
          <OverviewChart
            view="sales"
            isDashboard={true}
            isMaxWidth600px={isMaxWidth600px}
          />
        </StyledBoxOverviewChart>
        <StatBox
          title={labels.ecommerce.monthlySales}
          value={data && data.thisMonthStats.totalSales}
          increase="+5%"
          description={labels.ecommerce.sinceLastMonth}
          icon={<StyledPersonAddIcon />}
        />
        <StatBox
          title={labels.ecommerce.yearlySales}
          value={data && data.yearlySalesTotal}
          increase="+43%"
          description={labels.ecommerce.sinceLastMonth}
          icon={<StyledTrafficIcon />}
        />

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
        <StyledBoxSalesChart>
          <StyledBoxTypo>
            <StyledTypography variant="h6">
              {labels.ecommerce.salesByCategory}
            </StyledTypography>
          </StyledBoxTypo>

          <CategorySalesChart
            isDashboard={true}
            isMaxWidth600px={isMaxWidth600px}
          />
        </StyledBoxSalesChart>
      </StyledBoxWrapper>
    </StyledBoxContainer>
  );
};

export default Ecommerce;
