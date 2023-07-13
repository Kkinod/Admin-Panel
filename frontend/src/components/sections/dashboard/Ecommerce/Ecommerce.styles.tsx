import { ComponentType } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import {
  flexBetween,
  flexCenter,
} from "../../../../assets/styles/mixins.styles";
import { IGlobalStyleProps } from "../../../../types/globalStyle";
import { IIsMaxWidth600px } from "../../../../types/maxWidth";

interface IIsNonMediumScreens {
  isNonMediumScreens: boolean;
}

export const StyledBoxHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMaxWidth600px",
})<IIsMaxWidth600px>(({ isMaxWidth600px }) => ({
  ...flexBetween,
  flexDirection: isMaxWidth600px ? "column" : undefined,
}));

export const StyledBoxOverviewChart = styled(Box)(({ theme }) => ({
  gridColumn: "span 8",
  gridRow: "span 2",
  padding: "1rem",
  borderRadius: "0.55rem",
  backgroundColor: theme.palette.secondary.main,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: "10px 20px",
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
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

const createStyledIcon = (Icon: ComponentType) =>
  styled(Icon)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: "1.6rem",
  }));

export const StyledEmailIcon = createStyledIcon(Email);

export const StyledPointOfSaleIcon = createStyledIcon(PointOfSale);

export const StyledPersonAddIcon = createStyledIcon(PersonAdd);

export const StyledTrafficIcon = createStyledIcon(Traffic);

export const StyledBoxDataGrid = styled(Box)(({ theme }) => ({
  gridColumn: "span 8",
  gridRow: "span 3",
  "& .MuiDataGrid-root": {
    border: "none",
    borderRadius: "0.55rem",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "none",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderBottom: "none",
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: theme.palette.background.alt,
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    borderTop: "none",
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    color: `${theme.palette.secondary.main} !important`,
  },
}));

export const StyledBoxSalesChart = styled(Box)<IGlobalStyleProps>(
  ({ theme }) => ({
    gridColumn: "span 4",
    gridRow: "span 3",
    backgroundColor: theme.palette.secondary[100],
    padding: "1.5rem 1.5rem 1.5rem 0",
    borderRadius: "0.55rem",
  })
);

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const StyledBoxTypo = styled(Box)({
  ...flexCenter,
});
