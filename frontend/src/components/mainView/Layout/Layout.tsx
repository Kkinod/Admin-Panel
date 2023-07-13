import React, { useState } from "react";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import { useGetUserByIdQuery } from "../../../features/api";
import Navbar from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import { ILayout } from "../../../types/mainView";
import { BoxWrapperStyled, Container } from "./Layout.styles";
import "react-datepicker/dist/react-datepicker.css";

const Layout = ({ isMaxWidth600px }: ILayout) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMaxWidth600px);
  const userId = useSelector((state: RootState) => state.global.userId);
  const { data } = useGetUserByIdQuery(userId);

  return (
    <Container isSidebarOpen={isSidebarOpen} isNonMobile={!isMaxWidth600px}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMaxWidth600px={!isMaxWidth600px}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <BoxWrapperStyled>
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
