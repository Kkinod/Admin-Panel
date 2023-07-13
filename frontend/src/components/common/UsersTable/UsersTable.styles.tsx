import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { IGlobalStyleProps } from "../../../types/globalStyle";

export const StyledButton = styled(Button)<IGlobalStyleProps>(({ theme }) => ({
  marginBottom: "1px",
  padding: "2px",
  border: `1px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.brownDarkLight.main,
}));

export const StyledDataGrid = styled(DataGrid)<IGlobalStyleProps>(
  ({ theme }) => ({
    "& .MuiCheckbox-colorPrimary.Mui-checked": {
      color: theme.palette.brownDarkLight.main,
    },
  })
);
