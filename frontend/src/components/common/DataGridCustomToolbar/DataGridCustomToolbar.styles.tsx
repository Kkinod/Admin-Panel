import { ComponentType } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { constColors } from "../../../assets/styles/theme";
import { IGlobalStyleProps } from "../../../types/globalStyle";
import { styled } from "@mui/material/styles";
import { flexBetween } from "../../../assets/styles/mixins.styles";

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

export const StyledTextField = styled(TextField)({
  marginBottom: "0.5rem",
  width: "15rem",

  "& label": {
    color: constColors.brown[200],
  },

  "& .css-t2okzi-MuiInputBase-root-MuiInput-root:before": {
    borderBottom: `1px solid ${constColors.brown[200]}`,
  },

  "& .MuiInputBase-input": {
    color: constColors.brown[200],
  },
});

export const StyledIconButton = styled(IconButton)<IGlobalStyleProps>(
  ({ theme }) => ({
    color: theme.palette.secondary.main,
  })
);

const createStyledGridToolbar = (GridToolbar: ComponentType) =>
  styled(GridToolbar)({
    color: constColors.brown[200],
  });

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
