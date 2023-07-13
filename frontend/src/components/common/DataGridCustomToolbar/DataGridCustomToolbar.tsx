import React from "react";
import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { GridToolbarContainer } from "@mui/x-data-grid";
import { IDataGridCustomToolbar } from "../../../types/commonComponents";
import {
  StyledBox,
  StyledBoxWrapper,
  StyledGridToolbarColumnsButton,
  StyledGridToolbarDensitySelector,
  StyledGridToolbarExport,
  StyledIconButton,
  StyledTextField,
} from "./DataGridCustomToolbar.styles";
import { labels } from "../../../shared/constants/labels";

const DataGridCustomToolbar = ({
  searchInput,
  setSearchInput,
  setSearch,
  isMaxWidth600px,
}: IDataGridCustomToolbar) => {
  return (
    <GridToolbarContainer>
      <StyledBoxWrapper isMaxWidth600px={isMaxWidth600px}>
        <StyledBox>
          <StyledGridToolbarColumnsButton />
          <StyledGridToolbarDensitySelector />
          <StyledGridToolbarExport />
        </StyledBox>
        <StyledTextField
          label={labels.default.searchId}
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <StyledIconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput("");
                  }}
                >
                  <Search />
                </StyledIconButton>
              </InputAdornment>
            ),
          }}
        />
      </StyledBoxWrapper>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
