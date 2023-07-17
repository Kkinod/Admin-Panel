import React from "react";
import { useGetAllUsersQuery } from "../../../../features/api";
import Header from "../../../common/Header/Header";
import UsersTable from "../../../common/UsersTable/UsersTable";
import { IIsMaxWidth1025, IIsMaxWidth600px } from "../../../../types/maxWidth";
import { labels } from "../../../../shared/constants/labels";
import {
  StyledBoxContainerCharts,
  StyledBoxWrapper,
} from "../../../../assets/styles/globalComponents.styles";

interface IUsers extends IIsMaxWidth600px, IIsMaxWidth1025 {}

const Users = ({ isMaxWidth600px, isMaxWidth1025 }: IUsers) => {
  const { data, isLoading } = useGetAllUsersQuery(null);

  return (
    <StyledBoxContainerCharts isMaxWidth600px={isMaxWidth600px}>
      <Header
        title={labels.users.headerTitle}
        subtitle={labels.users.headerSubtitle}
      />
      <StyledBoxWrapper>
        <UsersTable
          data={data}
          isLoading={isLoading}
          isMaxWidth1025={isMaxWidth1025}
          isMaxWidth600px={isMaxWidth600px}
          includeRoleColumn={true}
          includeCheckboxSelection={true}
          includeActionColumn={true}
        />
      </StyledBoxWrapper>
    </StyledBoxContainerCharts>
  );
};

export default Users;
