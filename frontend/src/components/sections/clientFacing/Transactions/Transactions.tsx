import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridColumnVisibilityModel,
  GridPaginationModel,
} from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "../../../../features/api";
import Header from "../../../common/Header/Header";
import DataGridCustomToolbar from "../../../common/DataGridCustomToolbar/DataGridCustomToolbar";
import { transactionsColumns } from "../../../../shared/constants/transactionsColumns";
import {
  ITransactions,
  IUseGetTransactionsQueryResult,
} from "../../../../types/clientFacing";
import { labels } from "../../../../shared/constants/labels";
import {
  StyledBoxContainer,
  StyledBoxWrapper,
  StyledStack,
} from "../../../../assets/styles/globalComponents.styles";

const Transactions = ({ isMaxWidth600px, isMaxWidth1025 }: ITransactions) => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 25,
  });
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const { data, isLoading } =
    useGetTransactionsQuery<IUseGetTransactionsQueryResult>({
      page: paginationModel.page,
      pageSize: paginationModel.pageSize,
      sort: JSON.stringify(sort),
      search,
    });

  const [rowCountState, setRowCountState] = useState((data && data.total) || 0);

  const [columnVisibility, setColumnVisibility] =
    React.useState<GridColumnVisibilityModel>({
      userId: !isMaxWidth600px,
      createdAt: !isMaxWidth1025,
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
          columnBuffer={5}
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
            Toolbar: () => (
              <DataGridCustomToolbar
                isMaxWidth600px={isMaxWidth600px}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setSearch={setSearch}
              />
            ),
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
