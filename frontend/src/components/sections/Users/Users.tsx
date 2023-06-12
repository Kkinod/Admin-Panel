import React from 'react';
import {
  DataGrid,
  GridColumnVisibilityModel,
  GridRowSelectionModel,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useGetUsersQuery } from '../../../features/api';
import Header from '../../Header/Header';
import { generateColumns } from '../../../utils/columns/columns';
import {
  StyledBoxContainer,
  StyledBoxWrapper,
} from '../../../assets/styles/globalComponents.styles';

interface IUsers {
  isMaxWidth600px: boolean;
  isXsDown1025: boolean;
}

const Users = ({ isMaxWidth600px, isXsDown1025 }: IUsers) => {
  const { data, isLoading } = useGetUsersQuery(null);
  const [selectionModelState, setSelectionModelState] =
    React.useState<GridRowSelectionModel>([]);

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

  const columns = generateColumns({ includeRoleColumn: false });

  return (
    <StyledBoxContainer>
      <Header title="Users" subtitle="Subtitle" />
      <StyledBoxWrapper>
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          // columns={columns.concat(actionColumn)}
          columns={columns}
          columnVisibilityModel={columnVisibility}
          onColumnVisibilityModelChange={(newState) => {
            setColumnVisibility(newState);
          }}
          checkboxSelection
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModelState(newSelectionModel);
          }}
          rowSelectionModel={selectionModelState}
          disableRowSelectionOnClick
          components={{
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
                    Remove
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
