import { Box, IconButton, TextField } from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { flexBetween } from "../../../assets/styles/mixins.styles";
import { ComponentType } from "react";
import { IGlobalStyleProps } from "../../../types/globalStyle";

interface IIsMaxWidth600px {
  isMaxWidth600px: boolean;
}

export const StyledBox = styled(Box)({
  ...flexBetween,
});

export const StyledBoxWrapper = styled(StyledBox, {
  shouldForwardProp: (prop) => prop !== "isMaxWidth600px",
})<IIsMaxWidth600px>(({ isMaxWidth600px }) => ({
  width: "100%",
  flexDirection: isMaxWidth600px ? "column" : "row",
}));

export const StyledTextField = styled(TextField)<IGlobalStyleProps>(
  ({ theme }) => ({
    marginBottom: "0.5rem",
    width: "15rem",

    "& label": {
      color: theme.palette.brown.main,
    },

    "& .css-t2okzi-MuiInputBase-root-MuiInput-root:before": {
      borderBottom: `1px solid ${theme.palette.brown.main}`,
    },

    "& .MuiInputBase-input": {
      color: theme.palette.brown.main,
    },
  })
);

export const StyledIconButton = styled(IconButton)<IGlobalStyleProps>(
  ({ theme }) => ({
    color: theme.palette.secondary.main,
  })
);

const createStyledGridToolbar = (GridToolbar: ComponentType) =>
  styled(GridToolbar)<IGlobalStyleProps>(({ theme }) => ({
    color: theme.palette.brown.main,
  }));

export const StyledGridToolbarColumnsButton = createStyledGridToolbar(
  GridToolbarColumnsButton
);

export const StyledGridToolbarDensitySelector = createStyledGridToolbar(
  GridToolbarDensitySelector
);
export const StyledGridToolbarExport =
  createStyledGridToolbar(GridToolbarExport);

export const StyledGridToolbarFilterButton = createStyledGridToolbar(
  GridToolbarFilterButton
);
