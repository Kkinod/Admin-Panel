import React from 'react';
import { useParams } from 'react-router-dom';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../../Header/Header';
import { useGetUserByIdQuery } from '../../../../features/api';
import './SingleUser.css';

interface ISingleUser {
  columns: GridColDef[];
}

const SingleUser = ({ columns }: ISingleUser) => {
  const theme = useTheme();
  const { id } = useParams();
  const { data } = useGetUserByIdQuery(id);

  return (
    <Box
      className="singleUser__container"
      sx={{
        border: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.background.alt,
      }}
      key={id}
    >
      <Header title={data?.name as string} />
      <Box
        className="singleUser__editButton"
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography variant="h6" color={theme.palette.primary.main}>
          Edit
        </Typography>
      </Box>
      {columns.map(({ headerName, field }) => {
        return (
          <Box className="singleUser__detailItem" key={headerName}>
            <Typography
              variant="h5"
              className="singleUser__itemKey"
              color={theme.palette.primary.main}
            >
              {headerName}
            </Typography>
            <Typography
              variant="h5"
              className="singleUser__itemValue"
              color={theme.palette.primary.main}
            >
              {data && data[field as keyof typeof data]}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default SingleUser;
