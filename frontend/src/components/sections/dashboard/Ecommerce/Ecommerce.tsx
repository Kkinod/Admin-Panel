import React from "react";
import { Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { DataGrid, GridColumnVisibilityModel } from "@mui/x-data-grid";
import Header from "../../../common/Header/Header";
import OverviewChart from "../../salesCharts/Overview/OverviewChart/OverviewChart";
import StatBox from "../../../common/StatBox/StatBox";

import { useGetDashboardQuery } from "../../../../features/api";
import { labels } from "../../../../shared/constants/labels";
import { StyledBoxContainer } from "../../../../assets/styles/globalComponents.styles";
import {
  StyledBoxHeader,
  StyledBoxOverviewChart,
  StyledBoxWrapper,
  StyledButton,
  StyledIcon,
} from "./Ecommerce.styles";
import { IIsMaxWidth1025, IIsMaxWidth600px } from "../../../../types/maxWidth";
import CategorySalesChart from "../../salesCharts/CategorySales/CategorySalesChart/CategorySalesChart";
import { transactionsColumns } from "../../../../shared/constants/transactionsColumns";

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
        <StatBox
          title="Total Customers"
          value={data && data.totalCustomers}
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary.main, fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Sales Today"
          value={data && data.todayStats.totalSales}
          increase="+21%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary.main, fontSize: "26px" }}
            />
          }
        />
        <StyledBoxOverviewChart
          gridColumn="span 8"
          gridRow="span 2"
          sx={{ backgroundColor: theme.palette.secondary.main }}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverviewChart
            view="sales"
            isDashboard={true}
            isMaxWidth600px={isMaxWidth600px}
          />
        </StyledBoxOverviewChart>
        <StatBox
          title="Monthly Sales"
          value={data && data.thisMonthStats.totalSales}
          increase="+5%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary.main, fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Yearly Sales"
          value={data && data.yearlySalesTotal}
          increase="+43%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary.main, fontSize: "26px" }}
            />
          }
        />

        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "0.55rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.main,
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary.main} !important`,
            },
          }}
        >
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
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          sx={{ backgroundColor: theme.palette.primary.main }}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
            Sales By Category
          </Typography>
          <CategorySalesChart
            isDashboard={true}
            isMaxWidth600px={isMaxWidth600px}
          />
        </Box>
      </StyledBoxWrapper>
    </StyledBoxContainer>
  );
};

export default Ecommerce;
