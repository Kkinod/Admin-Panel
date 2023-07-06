import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import { flexCenter } from "./mixins.styles";

export const StyledBoxContainer = styled(Box)({
  margin: "1.2rem",
});

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  height: "75vh",
  "& .MuiDataGrid-root": {
    border: "none",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.primary.main,
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
    backgroundColor: theme.palette.background.alt,
    color: theme.palette.secondary.main,
    borderTop: "none",
  },
  "& .MuiIconButton-root": {
    color: theme.palette.secondary.main,
  },
}));

export const StyledBoxChartWrapper = styled(Box)({
  height: "75vh",
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
