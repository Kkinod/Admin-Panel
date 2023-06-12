import React, { useState } from 'react';
import { DataGrid, GridPaginationModel } from '@mui/x-data-grid';
import { useGetTransactionsQuery } from '../../../features/api';
import Header from '../../Header/Header';
import DataGridCustomToolbar from '../DataGridCustomToolbar/DataGridCustomToolbar';
import {
  StyledBoxContainer,
  StyledBoxWrapper,
} from '../../../assets/styles/globalComponents.styles';
import { Stack } from '@mui/material';

const Transactions = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 20,
  });
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState('');

  const [searchInput, setSearchInput] = useState('');
  const { data, isLoading } = useGetTransactionsQuery({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const [rowCountState, setRowCountState] = React.useState(
    (data && data.total) || 0
  );
  React.useEffect(() => {
    setRowCountState((prevRowCountState: number) =>
      (data && data.total) !== undefined
        ? data && data.total
        : prevRowCountState
    );
  }, [data && data.total, setRowCountState]);

  const columns = [
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
      renderCell: (params: any) => params.value.length,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params: any) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <StyledBoxContainer>
      <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
      <StyledBoxWrapper>
        <DataGrid
          loading={isLoading}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={rowCountState}
          pageSizeOptions={[20, 50, 100]}
          pagination
          paginationMode="server"
          sortingMode="server"
          onSortModelChange={(newSortModel) => setSort(newSortModel[0])}
          components={{
            NoRowsOverlay: () => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                No transaction found
              </Stack>
            ),

            Toolbar: DataGridCustomToolbar,
          }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
          paginationModel={paginationModel}
          onPaginationModelChange={(model) => setPaginationModel(model)}
        />
      </StyledBoxWrapper>
    </StyledBoxContainer>
  );
};

export default Transactions;
