import React from "react";
import { IIsMaxWidth600px } from "./maxWidth";

export interface IDataGridCustomToolbar extends IIsMaxWidth600px {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
