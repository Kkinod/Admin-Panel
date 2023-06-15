import { GridCellParams } from '@mui/x-data-grid';
import { StyledBox, StyledBoxWrapper, StyledLink } from './actionColumn.styles';

export const actionColumn = [
  {
    field: 'akcja',
    headerName: 'Akcja',
    renderCell: (params: GridCellParams) => {
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
