import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { constColors } from "../../../assets/styles/theme";

export const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: "1px",
  padding: "2px",
  border: `1px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  backgroundColor: constColors.brownDarkLight[200],
}));

export const StyledDataGrid = styled(DataGrid)({
  "& .MuiCheckbox-colorPrimary.Mui-checked": {
    color: constColors.brownDarkLight[200],
  },
});
