import * as React from "react";
import { IIsMaxWidth600px } from "./maxWidth";

export interface IIsSidebarOpen {
  isSidebarOpen: boolean;
}

export interface ISidebar extends IIsSidebarOpen, IIsMaxWidth600px {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
