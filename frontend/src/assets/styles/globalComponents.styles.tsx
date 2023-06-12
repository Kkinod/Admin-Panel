import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBoxContainer = styled(Box)({
  margin: '1.2rem 2.5rem 0 2.5rem',
});

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  height: '75vh',
  '& .MuiDataGrid-root': {
    border: 'none',
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderBottom: 'none',
  },
  '& .MuiDataGrid-menuIconButton': {
    color: theme.palette.secondary.main,
  },
  '& .MuiDataGrid-virtualScroller': {
    backgroundColor: theme.palette.secondary.light,
  },
  '& .MuiDataGrid-footerContainer': {
    backgroundColor: theme.palette.background.alt,
    color: theme.palette.secondary.main,
    borderTop: 'none',
  },
}));
