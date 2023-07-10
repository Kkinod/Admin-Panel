import React from "react";
import { useParams } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import Header from "../../../../common/Header/Header";
import { useGetUserByIdQuery } from "../../../../../features/api";
import { labels } from "../../../../../shared/constants/labels";
import {
  StyledBox,
  StyledBoxContainer,
  StyledBoxWrapper,
  StyledTypography,
  StyledTypographyKey,
  StyledTypographyValue,
} from "./SingleUser.styles";

interface ISingleUser {
  columns: GridColDef[];
}

const SingleUser = ({ columns }: ISingleUser) => {
  const { id } = useParams();
  const { data } = useGetUserByIdQuery(id);

  return (
    <StyledBoxContainer key={id}>
      <Header title={data?.name as string} />
      <StyledBox>
        <StyledTypography variant="h6">
          {labels.default.buttonEdit}
        </StyledTypography>
      </StyledBox>
      {columns.map(({ headerName, field }) => {
        return (
          <StyledBoxWrapper key={headerName}>
            <StyledTypographyKey variant="h5">{headerName}</StyledTypographyKey>
            <StyledTypographyValue variant="h5">
              {data && data[field as keyof typeof data]}
            </StyledTypographyValue>
          </StyledBoxWrapper>
        );
      })}
    </StyledBoxContainer>
  );
};

export default SingleUser;
