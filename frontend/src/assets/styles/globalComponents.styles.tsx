import { styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import { IIsMaxWidth600px } from "../../types/maxWidth";
import { flexCenter } from "./mixins.styles";
import { constColors } from "./theme";

export const StyledBoxContainer = styled(Box)({
  margin: "1.2rem",
});

export const StyledBoxContainerCharts = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMaxWidth600px",
})<IIsMaxWidth600px>(({ isMaxWidth600px }) => ({
  maxWidth: isMaxWidth600px ? "87%" : "95%",
  margin: "1.2rem",
}));

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  height: "74vh",

  maxWidth: "1250px",
  margin: "0 auto",

  "& .MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.main,
    borderBottom: "none",
  },
  "& .MuiDataGrid-menuIconButton": {
    color: theme.palette.secondary.main,
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: theme.palette.secondary.light,
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.main,
    borderTop: "none",
  },
  "& .MuiIconButton-root": {
    color: theme.palette.secondary.main,
  },
  "& .MuiTablePagination-displayedRows": {
    color: theme.palette.secondary.main,
  },

  "& .MuiTablePagination-select": {
    color: theme.palette.secondary.main,
  },

  "& .MuiTablePagination-selectLabel": {
    color: theme.palette.secondary.main,
  },
}));

export const StyledBoxChartWrapper = styled(Box)({
  width: "95%",
  height: "70vh",
});

export const StyledStack = styled(Stack)({
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledBoxNoData = styled(Box)({
  ...flexCenter,
  height: "30%",
  fontWeight: "bold",
});

export const StyledTypographyLoading = styled(Typography)({
  marginTop: "2rem",
  color: constColors.brown[100],
});
