import { Typography } from '@mui/material';
import { GridCellParams, GridColDef } from '@mui/x-data-grid';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { StyledBox } from './columns.styles';

export const generateColumns = ({
  includeRoleColumn,
}: {
  includeRoleColumn: boolean;
}): GridColDef[] => {
  const baseColumns: GridColDef[] = [
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
  ];

  if (includeRoleColumn) {
    baseColumns.push({
      field: 'role',
      headerName: 'Role',
      width: 120,
      renderCell: ({ row: { role } }) => {
        return (
          <StyledBox>
            <LockOpenOutlinedIcon />
            <Typography>{role}</Typography>
          </StyledBox>
        );
      },
    });
  }

  return baseColumns;
};
