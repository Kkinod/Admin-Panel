import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  mt: '1rem',
  height: '74vh',
  '& .MuiDataGrid-root': {
    border: 'none',
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderBottom: 'none',
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
