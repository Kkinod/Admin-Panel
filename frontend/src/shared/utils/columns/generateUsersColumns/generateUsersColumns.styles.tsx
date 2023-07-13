import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { IGenerateUsersColumnsBox } from "../../../../types/utils";
import { IGlobalStyleProps } from "../../../../types/globalStyle";

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "role",
})<IGenerateUsersColumnsBox>(({ role, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "5px",
  margin: "0 auto",
  borderRadius: "4px",
  backgroundColor:
    role === "superadmin"
      ? theme.palette.brownDarkLight.main
      : theme.palette.brownDarkLight.second,
}));

export const StyledTypography = styled(Typography)<IGlobalStyleProps>(
  ({ theme }) => ({
    marginLeft: "5px",
    color: theme.palette.brown.main,
  })
);

export const StyledLink = styled(Link)<IGlobalStyleProps>(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.brownDarkLight.main,
  fontWeight: "bold",
  cursor: "pointer",
}));

export const StyledAdminIcon = styled(AdminPanelSettingsOutlinedIcon)(
  ({ theme }) => ({
    color: theme.palette.secondary.main,
  })
);

export const StyledSuperAdminIcon = styled(SecurityOutlinedIcon)(
  ({ theme }) => ({
    color: theme.palette.secondary.main,
  })
);

export const StyledUserIcon = styled(LockOpenOutlinedIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
