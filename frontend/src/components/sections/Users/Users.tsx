import React, { useState } from "react";
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
import { IIsMaxWidth1025, IIsMaxWidth600px } from "../../../App";
import { labels } from "../../../utils/labels";
import {
  StyledBoxContainer,
  StyledBoxWrapper,
  StyledStack,
} from "../../../assets/styles/globalComponents.styles";

export interface IUsersData {
  city: string;
  country: string;
  createdAt: string;
  email: string;
  name: string;
  occupation: string;
  phoneNumber: string;
  role: string;
  state: null | string;
  transactions: string[];
  updatedAt: string;
  _id: string;
}

interface IUseGetTransactionsQueryResult {
  data: IUsersData[];
  isLoading: boolean;
}

interface IUsers extends IIsMaxWidth600px, IIsMaxWidth1025 {}

const Users = ({ isMaxWidth600px, isMaxWidth1025 }: IUsers) => {
  const [pagination, setPagination] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 25,
  });
  const [selectionModelState, setSelectionModelState] =
    useState<GridRowSelectionModel>([]);

  const { data, isLoading } =
    useGetUsersQuery<IUseGetTransactionsQueryResult>(null);

  const columns = generateUsersColumns({ includeRoleColumn: false });

  const [columnVisibility, setColumnVisibility] =
    useState<GridColumnVisibilityModel>({
      _id: !isMaxWidth600px,
      email: !isMaxWidth600px,
      phoneNumber: !isMaxWidth1025,
      country: !isMaxWidth1025,
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
          columnBuffer={7}
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
