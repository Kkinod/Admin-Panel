import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { IIsMaxWidth600px } from "../../../types/maxWidth";

interface ContainerProps {
  isSidebarOpen: boolean;
  isNonMobile: boolean;
}

export const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "isNonMobile" && prop !== "isSidebarOpen",
})(({ isSidebarOpen, isNonMobile }: ContainerProps) => ({
  display: isSidebarOpen && !isNonMobile ? "block" : "flex",
  width: "100%",
  height: "100%",
  overflowY: "hidden",
}));

export const BoxWrapperStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMaxWidth600px",
})<IIsMaxWidth600px>(({ isMaxWidth600px, theme }) => ({
  flexGrow: "1",
  minHeight: "100vh",
  // maxWidth: isMaxWidth600px ? "84%" : "100%",
  maxWidth: "100%",

  backgroundColor: theme.palette.primary.main,
}));
