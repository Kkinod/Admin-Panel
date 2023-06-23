import React from "react";
import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import {
  StyledBox,
  StyledBoxWrapper,
  StyledIconButton,
  StyledTextField,
} from "./DataGridCustomToolbar.styles";
import { labels } from "../../../utils/labels";

const DataGridCustomToolbar = ({
  searchInput,
  setSearchInput,
  setSearch,
  isMaxWidth600px,
}: any) => {
  return (
    <GridToolbarContainer>
      <StyledBoxWrapper isMaxWidth600px={isMaxWidth600px}>
        <StyledBox>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
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
