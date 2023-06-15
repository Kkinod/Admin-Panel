import { GridCellParams } from '@mui/x-data-grid';
import { StyledBox, StyledBoxWrapper, StyledLink } from './actionColumn.styles';
//=====
import { useGetUserByIdQuery } from '../../../features/api';

export const actionColumn = [
  {
    field: 'akcja',
    headerName: 'Akcja',
    renderCell: (params: GridCellParams) => {
      //===
      // const { data } = useGetUserByIdQuery('644d2c506ed2dee150d64610');
      // console.log(data);

      //===

      const removeUser = () => console.log(`ID: ${params.row._id}`);

      return (
        <StyledBoxWrapper>
          <StyledLink to={`/user/${params.row._id}`}>View</StyledLink>
          <StyledBox onClick={removeUser}>Remove</StyledBox>
        </StyledBoxWrapper>
      );
    },
    width: 120,
  },
];
