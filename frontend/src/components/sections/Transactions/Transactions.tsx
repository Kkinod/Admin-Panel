import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridColumnVisibilityModel,
  GridPaginationModel,
} from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "../../../features/api";
import Header from "../../Header/Header";
import DataGridCustomToolbar from "../DataGridCustomToolbar/DataGridCustomToolbar";
import { transactionsColumns } from "../../../utils/columns/transactionsColumns/transactionsColumns";
import { labels } from "../../../utils/labels";
import {
  StyledBoxContainer,
  StyledBoxWrapper,
  StyledStack,
} from "../../../assets/styles/globalComponents.styles";

interface ITransactions {
  isMaxWidth600px: boolean;
  isXsDown1025: boolean;
}

const Transactions = ({ isMaxWidth600px, isXsDown1025 }: ITransactions) => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 25,
  });
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const { data, isLoading } = useGetTransactionsQuery({
    page: paginationModel.page,
    pageSize: paginationModel.pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  const [rowCountState, setRowCountState] = useState((data && data.total) || 0);

  const [columnVisibility, setColumnVisibility] =
    React.useState<GridColumnVisibilityModel>({
      userId: !isMaxWidth600px,
      createdAt: !isXsDown1025,
    });

  useEffect(() => {
    setRowCountState((prevRowCountState: number) =>
      (data && data.total) !== undefined
        ? data && data.total
        : prevRowCountState
    );
  }, [data && data.total, setRowCountState]);

  return (
    <StyledBoxContainer>
      <Header
        title={labels.transactions.headerTitle}
        subtitle={labels.transactions.headerSubtitle}
      />
      <StyledBoxWrapper>
        <DataGrid
          columns={transactionsColumns}
          columnVisibilityModel={columnVisibility}
          getRowId={(row) => row._id}
          loading={isLoading}
          onColumnVisibilityModelChange={(newState) => {
            setColumnVisibility(newState);
          }}
          onSortModelChange={(newSortModel) => setSort(newSortModel[0])}
          onPaginationModelChange={(model) => setPaginationModel(model)}
          pageSizeOptions={[25, 50, 100]}
          pagination
          paginationMode="server"
          paginationModel={paginationModel}
          rowCount={rowCountState}
          rows={(data && data.transactions) || []}
          sortingMode="server"
          components={{
            NoRowsOverlay: () => (
              <StyledStack>
                {labels.transactions.noTransactionsInfo}
              </StyledStack>
            ),
            Toolbar: DataGridCustomToolbar,
          }}
          componentsProps={{
            toolbar: {
              searchInput,
              setSearchInput,
              setSearch,
              isMaxWidth600px,
            },
          }}
        />
      </StyledBoxWrapper>
    </StyledBoxContainer>
  );
};

export default Transactions;
