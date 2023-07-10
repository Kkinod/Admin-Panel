import { GridCellParams, GridColDef } from "@mui/x-data-grid";
import {
  StyledAdminIcon,
  StyledBox,
  StyledSuperAdminIcon,
  StyledTypography,
  StyledUserIcon,
} from "./generateUsersColumns.styles";
import React from "react";
import { StyledLink } from "./generateUsersColumns.styles";
import { IUsersData } from "../../../../types/users";

export const generateUsersColumns = ({
  includeRoleColumn,
}: {
  includeRoleColumn: boolean;
}): GridColDef[] => {
  const baseColumns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 80,
      flex: 1,
      renderCell: (params: GridCellParams<IUsersData, string>) => (
        <StyledLink to={`/user/${params.row._id}`}>{params.value}</StyledLink>
      ),
    },
    {
      field: "_id",
      headerName: "ID",
      minWidth: 190,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 180,
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone number",
      minWidth: 100,
      flex: 1,
      renderCell: (params: GridCellParams<IUsersData, string>) => {
        return params.row.phoneNumber.replace(
          /^(\d{3})(\d{3})(\d{4})/,
          "($1)$2-$3"
        );
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
  ];

  if (includeRoleColumn) {
    baseColumns.push({
      field: "role",
      headerName: "Role",
      width: 140,
      renderCell: ({ row: { role } }) => {
        return (
          <StyledBox>
            {role === "superadmin" && <StyledSuperAdminIcon />}
            {role === "admin" && <StyledAdminIcon />}
            {role === "user" && <StyledUserIcon />}
            <StyledTypography>{role}</StyledTypography>
          </StyledBox>
        );
      },
    });
  }

  return baseColumns;
};
