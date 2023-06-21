import React, { useState } from "react";
import { DataGrid, GridPaginationModel } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "../../../features/api";
import Header from "../../Header/Header";
import DataGridCustomToolbar from "../DataGridCustomToolbar/DataGridCustomToolbar";
import { columns } from "../../../utils/columns/transactionsColumns/transactionsColumns";
import { labels } from "../../../utils/labels";
import {
   StyledBoxContainer,
   StyledBoxWrapper,
   StyledStack,
} from "../../../assets/styles/globalComponents.styles";

const Transactions = () => {
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

   return (
      <StyledBoxContainer>
         <Header
            title={labels.transactions.headerTitle}
            subtitle={labels.transactions.headerSubtitle}
         />
         <StyledBoxWrapper>
            <DataGrid
               columns={columns}
               getRowId={(row) => row._id}
               loading={isLoading}
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
                  toolbar: { searchInput, setSearchInput, setSearch },
               }}
            />
         </StyledBoxWrapper>
      </StyledBoxContainer>
   );
};

export default Transactions;
