import * as React from "react";
import { IIsMaxWidth600px } from "./maxWidth";
import { IGlobalStyleProps } from "./globalStyle";
import { PathMatch } from "react-router-dom";

export interface IIsSidebarOpen {
  isSidebarOpen: boolean;
}

export interface ISidebar extends IIsSidebarOpen, IIsMaxWidth600px {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IStyledNavLink extends IGlobalStyleProps {
  isActive: PathMatch<string> | null;
}

export interface IActiveAndLcText extends IIsMaxWidth600px, IIsSidebarOpen {
  active: PathMatch | null;
}
