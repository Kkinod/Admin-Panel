import { createTheme } from "@mui/material";
import { themeSettings } from "../../assets/styles/theme";

const originalTheme = themeSettings("light");

export const mappedTheme = createTheme({
  ...originalTheme,
  palette: {
    primary: {
      main:
        "100" in originalTheme.palette.primary
          ? originalTheme.palette.primary["100"]
          : originalTheme.palette.primary.main,
    },
    secondary: {
      main:
        "200" in originalTheme.palette.secondary
          ? originalTheme.palette.secondary["200"]
          : originalTheme.palette.secondary.main,
    },
    background: originalTheme.palette.background,
    mode: originalTheme.palette.mode,
  },
});
