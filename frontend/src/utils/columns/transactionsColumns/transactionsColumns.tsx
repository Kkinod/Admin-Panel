import { GridCellParams } from '@mui/x-data-grid';

export const columns = [
  {
    field: '_id',
    headerName: 'ID',
    flex: 1,
  },
  {
    field: 'userId',
    headerName: 'User ID',
    flex: 1,
  },
  {
    field: 'createdAt',
    headerName: 'CreatedAt',
    flex: 1,
  },
  {
    field: 'products',
    headerName: '# of Products',
    flex: 0.5,
    sortable: false,
    renderCell: (params: GridCellParams) =>
      Array.isArray(params.value) ? params.value.length : 0,
  },
  {
    field: 'cost',
    headerName: 'Cost',
    flex: 1,
    renderCell: (params: GridCellParams) =>
      `$${Number(params.value).toFixed(2)}`,
  },
];