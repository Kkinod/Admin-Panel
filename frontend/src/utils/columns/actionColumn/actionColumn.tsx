import React from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { StyledBox, StyledBoxWrapper, StyledLink } from "./actionColumn.styles";
import { labels } from "../../labels";

export const actionColumn = [
  {
    field: `${labels.actionColumn.field}`,
    headerName: `${labels.actionColumn.header}`,
    renderCell: (params: GridCellParams) => {
      const removeUser = () => console.log(`ID: ${params.row._id}`);

      return (
        <StyledBoxWrapper>
          <StyledLink to={`/user/${params.row._id}`}>
            {labels.default.buttonView}
          </StyledLink>
          <StyledBox onClick={removeUser}>
            {labels.default.buttonRemove}
          </StyledBox>
        </StyledBoxWrapper>
      );
    },
    width: 120,
  },
];
