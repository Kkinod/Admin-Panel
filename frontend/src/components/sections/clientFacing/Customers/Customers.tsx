import React from "react";
import { useGetUsersQuery } from "../../../../features/api";
import Header from "../../../common/Header/Header";
import { IIsMaxWidth1025, IIsMaxWidth600px } from "../../../../types/maxWidth";
import UsersTable, {
  IUseGetTransactionsQueryResult,
} from "../../../common/UsersTable/UsersTable";
import { labels } from "../../../../shared/constants/labels";
import {
  StyledBoxContainer,
  StyledBoxWrapper,
} from "../../../../assets/styles/globalComponents.styles";

interface ICustomers extends IIsMaxWidth600px, IIsMaxWidth1025 {}

const Customers = ({ isMaxWidth600px, isMaxWidth1025 }: ICustomers) => {
  const { data, isLoading } =
    useGetUsersQuery<IUseGetTransactionsQueryResult>(null);

  return (
    <StyledBoxContainer>
      <Header
        title={labels.customers.headerTitle}
        subtitle={labels.customers.headerSubtitle}
      />
      <StyledBoxWrapper>
        <UsersTable
          data={data}
          isLoading={isLoading}
          isMaxWidth1025={isMaxWidth1025}
          isMaxWidth600px={isMaxWidth600px}
        />
      </StyledBoxWrapper>
    </StyledBoxContainer>
  );
};

export default Customers;
