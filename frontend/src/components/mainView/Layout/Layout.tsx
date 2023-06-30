import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import { BoxWrapperStyled, Container } from "./Layout.styles";
import { Sidebar } from "../Sidebar/Sidebar";
import { useGetUserByIdQuery } from "../../../features/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { IIsMaxWidth600px } from "../../../App";

interface ILayout extends IIsMaxWidth600px {}

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

const Layout = ({ isMaxWidth600px }: ILayout) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMaxWidth600px);
  const userId = useSelector((state: RootState) => state.global.userId);
  const { data } = useGetUserByIdQuery(userId);

  return (
    <Container isSidebarOpen={isSidebarOpen} isNonMobile={!isMaxWidth600px}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isNonMobile={!isMaxWidth600px}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <BoxWrapperStyled isMaxWidth600px={isMaxWidth600px}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isNonMobile={!isMaxWidth600px}
        />
        <Outlet />
      </BoxWrapperStyled>
    </Container>
  );
};

export default Layout;
