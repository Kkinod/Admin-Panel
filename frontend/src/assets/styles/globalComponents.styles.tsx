import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import { flexCenter } from "./mixins.styles";

export const StyledBoxContainer = styled(Box)({
  margin: "1.2rem",
});

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  height: "74vh",
  "& .MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.secondary[100],
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
    backgroundColor: theme.palette.secondary[100],
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
