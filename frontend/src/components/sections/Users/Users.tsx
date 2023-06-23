import React from "react";
import {
  DataGrid,
  GridColumnVisibilityModel,
  GridPaginationModel,
  GridRowSelectionModel,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { useGetUsersQuery } from "../../../features/api";
import Header from "../../Header/Header";
import { generateUsersColumns } from "../../../utils/columns/usersColumns/usersColumns";
import { actionColumn } from "../../../utils/columns/actionColumn/actionColumn";
import { labels } from "../../../utils/labels";
import {
  StyledBoxContainer,
  StyledBoxWrapper,
  StyledStack,
} from "../../../assets/styles/globalComponents.styles";

interface IUsers {
  isMaxWidth600px: boolean;
  isXsDown1025: boolean;
}

const Users = ({ isMaxWidth600px, isXsDown1025 }: IUsers) => {
  const [pagination, setPagination] = React.useState<GridPaginationModel>({
    page: 0,
    pageSize: 25,
  });

  const { data, isLoading } = useGetUsersQuery(null);
  const [selectionModelState, setSelectionModelState] =
    React.useState<GridRowSelectionModel>([]);

  const columns = generateUsersColumns({ includeRoleColumn: false });

  const [columnVisibility, setColumnVisibility] =
    React.useState<GridColumnVisibilityModel>({
      _id: !isMaxWidth600px,
      email: !isMaxWidth600px,
      phoneNumber: !isXsDown1025,
      country: !isXsDown1025,
    });

  const handleDeleteSelectedRows = () => {
    console.log(selectionModelState);
  };

  return (
    <StyledBoxContainer>
      <Header
        title={labels.users.headerTitle}
        subtitle={labels.users.headerSubtitle}
      />
      <StyledBoxWrapper>
        <DataGrid
          checkboxSelection
          columns={columns.concat(actionColumn)}
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
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
                {selectionModelState.length > 0 && (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleDeleteSelectedRows}
                  >
                    {labels.default.buttonRemove}
                  </Button>
                )}
              </GridToolbarContainer>
            ),
          }}
        />
      </StyledBoxWrapper>
    </StyledBoxContainer>
  );
};

export default Users;
