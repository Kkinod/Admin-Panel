import React, { useState } from "react";
import { StyledStack } from "../../../assets/styles/globalComponents.styles";
import { labels } from "../../../shared/constants/labels";
import {
  GridColumnVisibilityModel,
  GridPaginationModel,
  GridRowSelectionModel,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { generateUsersColumns } from "../../../shared/utils/columns/generateUsersColumns/generateUsersColumns";
import { actionColumn } from "../actionColumn/actionColumn";
import { IUsersTable } from "../../../types/commonComponents";
import { StyledButton, StyledDataGrid } from "./UsersTable.styles";
import {
  StyledGridToolbarColumnsButton,
  StyledGridToolbarDensitySelector,
  StyledGridToolbarExport,
  StyledGridToolbarFilterButton,
} from "../DataGridCustomToolbar/DataGridCustomToolbar.styles";

const UsersTable = ({
  isMaxWidth600px,
  isMaxWidth1025,
  data,
  isLoading,
  includeRoleColumn = false,
  includeCheckboxSelection = false,
  includeActionColumn = false,
}: IUsersTable) => {
  const columns = generateUsersColumns({
    includeRoleColumn: includeRoleColumn,
  });
  const [pagination, setPagination] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 25,
  });
  const [selectionModelState, setSelectionModelState] =
    useState<GridRowSelectionModel>([]);

  const [columnVisibility, setColumnVisibility] =
    useState<GridColumnVisibilityModel>({
      _id: !isMaxWidth600px,
      email: !isMaxWidth600px,
      phoneNumber: !isMaxWidth1025,
      country: !isMaxWidth1025,
      role: !isMaxWidth600px,
    });

  const handleDeleteSelectedRows = () => {
    console.log(selectionModelState);
  };

  return (
    <StyledDataGrid
      checkboxSelection={includeCheckboxSelection}
      columnBuffer={7}
      columns={includeActionColumn ? columns.concat(actionColumn) : columns}
      columnVisibilityModel={columnVisibility}
      disableRowSelectionOnClick
      getRowId={(row) => row._id}
      loading={isLoading}
      onColumnVisibilityModelChange={(newState) => {
        setColumnVisibility(newState);
      }}
      onPaginationModelChange={(newPagination) => {
        setPagination(newPagination);
      }}
      onRowSelectionModelChange={(newSelectionModel) => {
        setSelectionModelState(newSelectionModel);
      }}
      paginationModel={pagination}
      rows={data || []}
      rowSelectionModel={selectionModelState}
      components={{
        NoRowsOverlay: () => (
          <StyledStack>{labels.users.noUsersInfo}</StyledStack>
        ),
        Toolbar: () => (
          <GridToolbarContainer>
            <StyledGridToolbarColumnsButton />
            <StyledGridToolbarFilterButton />
            <StyledGridToolbarDensitySelector />
            <StyledGridToolbarExport />
            {selectionModelState.length > 0 && (
              <StyledButton onClick={handleDeleteSelectedRows}>
                {labels.default.buttonRemove}
              </StyledButton>
            )}
          </GridToolbarContainer>
        ),
      }}
    />
  );
};

export default UsersTable;
