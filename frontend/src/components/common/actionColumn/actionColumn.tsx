import React from "react";
import { GridCellParams } from "@mui/x-data-grid";
import { labels } from "../../../shared/constants/labels";
import { StyledBoxWrapper, StyledButton } from "./actionColumn.styles";

export const actionColumn = [
  {
    field: `${labels.actionColumn.field}`,
    headerName: `${labels.actionColumn.header}`,
    renderCell: (params: GridCellParams) => {
      const removeUser = () => console.log(`ID: ${params.row._id}`);

      return (
        <StyledBoxWrapper>
          <StyledButton onClick={removeUser}>
            {labels.default.buttonRemove}
          </StyledButton>
        </StyledBoxWrapper>
      );
    },
    width: 100,
  },
];
