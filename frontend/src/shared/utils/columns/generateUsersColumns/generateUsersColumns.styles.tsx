import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  padding: "5px",
  margin: "0 auto",
  borderRadius: "4px",
  backgroundColor: theme.palette.primary.main,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  marginLeft: "5px",
  color: theme.palette.secondary.main,
}));

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "darkblue",
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
