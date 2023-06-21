import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const StyledBoxWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
});

export const StyledLink = styled(Link)({
  padding: '2px 5px',
  border: '1px solid rgba(0, 0, 139, 0.596)',
  borderRadius: '5px',
  color: 'darkblue',
  fontWeight: 'bold',
  cursor: 'pointer',
});

export const StyledBox = styled(Box)({
  padding: '2px 5px',
  border: '1px dotted rgba(220, 20, 60, 0.6)',
  borderRadius: '5px',
  color: 'crimson',
  fontWeight: 'bold',
  cursor: 'pointer',
});
