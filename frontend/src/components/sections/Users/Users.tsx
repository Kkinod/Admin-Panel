import React from 'react';
import { Box, useTheme } from '@mui/material';
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
import './Users.css';
import { StyledBoxContainer } from './Users.styles';

interface IUsers {
  isMaxWidth600px: boolean;
  isXsDown1025: boolean;
}

const Users = ({ isMaxWidth600px, isXsDown1025 }: IUsers) => {
  const theme = useTheme();
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
      <Box
        mt="1rem"
        height="74vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.secondary.light,
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary.main,
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${theme.palette.secondary.main} !important`,
          },
        }}
      >
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
          sx={{
            '& .MuiCheckbox-colorPrimary.Mui-checked': {
              color: theme.palette.secondary.main,
            },
          }}
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
      </Box>
    </StyledBoxContainer>
  );
};

export default Users;
