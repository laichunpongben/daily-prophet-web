// StyledTableRow.js

import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/system';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:first-of-type th,': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0,
  },
}));

export default StyledTableRow;