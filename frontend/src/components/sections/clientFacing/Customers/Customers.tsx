import React from "react";
import { useGetUsersQuery } from "../../../../features/api";
import Header from "../../../common/Header/Header";
import UsersTable, {
  IUseGetTransactionsQueryResult,
} from "../../../common/UsersTable/UsersTable";
import { ICustomers } from "../../../../types/clientFacing";
import { labels } from "../../../../shared/constants/labels";
import {
  StyledBoxContainer,
  StyledBoxWrapper,
} from "../../../../assets/styles/globalComponents.styles";

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
