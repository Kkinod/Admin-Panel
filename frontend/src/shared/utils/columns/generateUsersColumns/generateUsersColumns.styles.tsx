import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { IGenerateUsersColumnsBox } from "../../../../types/utils";
import { constColors } from "../../../../assets/styles/theme";

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "role",
})<IGenerateUsersColumnsBox>(({ role }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "5px",
  margin: "0 auto",
  borderRadius: "4px",
  backgroundColor:
    role === "superadmin" ? constColors.brown[200] : constColors.brown[100],
}));

export const StyledTypography = styled(Typography)({
  marginLeft: "5px",
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: constColors.brown[100],
  fontWeight: "bold",
  cursor: "pointer",
});

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
