import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import {
  flexBetween,
  flexCenter,
} from "../../../../assets/styles/mixins.styles";
import { IIsMaxWidth600px } from "../../../../types/maxWidth";
import { DownloadOutlined } from "@mui/icons-material";

interface IIsNonMediumScreens {
  isNonMediumScreens: boolean;
}

export const StyledBoxHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMaxWidth600px",
})<IIsMaxWidth600px>(({ isMaxWidth600px }) => ({
  ...flexBetween,
  flexDirection: isMaxWidth600px ? "column" : undefined,
}));

export const StyledBoxOverviewChart = styled(Box)({
  ...flexCenter,
});

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: "10px 20px",
  color: theme.palette.background.alt,
  backgroundColor: theme.palette.primary.light,
  fontSize: "14px",
  fontWeight: "bold",
}));

export const StyledIcon = styled(DownloadOutlined)({
  marginRight: "10px",
});

export const StyledBoxWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isNonMediumScreens",
})<IIsNonMediumScreens>(({ isNonMediumScreens }) => ({
  marginTop: "1.25rem",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gridAutoRows: "10rem",
  gap: "1.25rem",
  "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
}));
