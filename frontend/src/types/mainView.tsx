import React from "react";
import { IIsMaxWidth600px } from "./maxWidth";

export interface ILayout extends IIsMaxWidth600px {}

export interface IUser {
  user: {
    _id: string;
    name: string;
    email: string;
    password: string;
    city: string;
    country: string;
    occupation: string;
    phoneNumber: string;
    role: string;
  };
}

export interface INavbar extends IUser {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isNonMobile: boolean;
}
