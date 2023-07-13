import { styled } from "@mui/material/styles";
import { FormControl } from "@mui/material";

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginTop: "1rem",
  // color: "red",

  "& .MuiFormLabel-root": {
    color: theme.palette.secondary.main,
  },

  "& .MuiInputBase-root": {
    color: theme.palette.secondary.main,
  },

  "& .MuiSvgIcon-root": {
    color: theme.palette.secondary.main,
  },
}));
