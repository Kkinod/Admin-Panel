import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridColumnVisibilityModel,
  GridRowSelectionModel,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  plPL,
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { useGetUsersQuery } from '../../../features/api';
import Header from '../../Header/Header';
import './Users.css';

interface IUsers {
  isMaxWidth600px: boolean;
  isXsDown1025: boolean;
}

const Users = ({ isMaxWidth600px, isXsDown1025 }: IUsers) => {
  const theme = useTheme();
  const { data, isLoading } = useGetUsersQuery(null);
  const [selectionModelState, setSelectionModelState] =
    React.useState<GridRowSelectionModel>([]);

  console.log(data);

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

  const columns: GridColDef[] = [
    {
      field: '_id',
      headerName: 'ID',
      minWidth: 190,
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 80,
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 180,
      flex: 1,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone number',
      minWidth: 100,
      flex: 1,
      renderCell: (params: GridCellParams<any, any, string>) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
      },
    },
    {
      field: 'country',
      headerName: 'Country',
      flex: 0.4,
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 120,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="85%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor: theme.palette.primary.main,
            }}
            borderRadius="4px"
          >
            <LockOpenOutlinedIcon />
            <Typography
              color={theme.palette.secondary.main}
              sx={{
                ml: '5px',
              }}
            >
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box className="adminUsers__container">
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
                <GridToolbarColumnsButton
                  nonce={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                />
                <GridToolbarFilterButton
                  nonce={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                />
                <GridToolbarDensitySelector
                  nonce={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                />
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
    </Box>
  );
};

export default Users;
